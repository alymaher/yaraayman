const BRAND_GRADIENTS = {
    "Mazaq":   "linear-gradient(135deg,#B5324C,#E8734A)",
    "Okhtein": "linear-gradient(135deg,#16233F,#C9A227)",
    "Noon":    "linear-gradient(135deg,#1B7A6B,#FF4D94)"
  };
  const DEFAULT_GRADIENT = "linear-gradient(135deg,#8B7BFF,#FF4D94)";

  const grid = document.getElementById('reel-grid');
  const overlay = document.getElementById('modal-overlay');
  const panel = document.getElementById('modal-panel');
  const modalTitle = document.getElementById('modal-title');
  const modalTags = document.getElementById('modal-tags');
  const modalStoryboard = document.getElementById('modal-storyboard');
  const modalWhy = document.getElementById('modal-why');
  const modalVideoWrap = document.getElementById('modal-video-wrap');

  // ---------- theme ----------
  const themeToggleBtn = document.getElementById('theme-toggle');
  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    themeToggleBtn.textContent = theme === 'light' ? '☀' : '☾';
    localStorage.setItem('yaraTheme', theme);
  }
  let currentTheme = localStorage.getItem('yaraTheme') || 'dark';
  applyTheme(currentTheme);
  themeToggleBtn.addEventListener('click', ()=>{
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
  });

  // ---------- i18n helpers ----------
  function getPath(obj, path){ return path.split('.').reduce((o,k)=> (o && o[k] !== undefined) ? o[k] : null, obj); }
  function L(field, lang){
    if(field == null) return '';
    if(typeof field === 'object') return field[lang] || field.en || '';
    return field;
  }

  let i18nData = null;
  let reelsData = [];
  let currentLang = localStorage.getItem('yaraLang') || 'en';
  let currentReel = null; // tracks the open reel so the modal can re-render in the new language

  const langToggleBtn = document.getElementById('lang-toggle');

  function applyStaticTranslations(dict){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const val = getPath(dict, el.dataset.i18n);
      if(val != null) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const val = getPath(dict, el.dataset.i18nHtml);
      if(val != null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
      const val = getPath(dict, el.dataset.i18nAria);
      if(val != null) el.setAttribute('aria-label', val);
    });
  }

  function buildPageHeading(dict){
    const h1 = document.getElementById('page-heading');
    if(!h1 || !dict.reels) return;
    h1.innerHTML = `${dict.reels.headingPlain}<span class="grad-text">${dict.reels.headingGrad}</span>`;
  }

  function isPlayableVideoUrl(url){
    return /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(url);
  }

  function openModal(reel){
    currentReel = reel;
    const dict = (i18nData && i18nData[currentLang]) || {};
    const r = dict.reels || {};
    modalTitle.textContent = L(reel.title, currentLang) || '';
    modalTags.innerHTML = `
      ${reel.brand ? `<span class="modal-tag">${reel.brand}</span>` : ''}
      ${reel.format ? `<span class="modal-tag">${reel.format}</span>` : ''}
    `;
    if (reel.videoUrl && isPlayableVideoUrl(reel.videoUrl)){
      modalVideoWrap.innerHTML = `<video class="modal-video" src="${reel.videoUrl}" controls playsinline></video>`;
    } else if (reel.videoUrl){
      modalVideoWrap.innerHTML = `<a class="modal-video-link" href="${reel.videoUrl}" target="_blank" rel="noopener">▶ Watch video ↗</a>`;
    } else {
      modalVideoWrap.innerHTML = '';
    }
    modalStoryboard.innerHTML = (reel.storyboard || []).map((step, i) => `
      <li><span class="sb-num">${i+1}</span><span>${L(step, currentLang)}</span></li>
    `).join('') || `<li><span>${r.empty || 'No storyboard steps added yet.'}</span></li>`;
    modalWhy.textContent = L(reel.whyItWorks, currentLang) || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    currentReel = null;
  }
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

  function renderCard(reel, lang){
    const dict = (i18nData && i18nData[lang]) || {};
    const btnLabel = (dict.reels && dict.reels.storyboardBtn) || 'View Storyboard →';
    const gradient = BRAND_GRADIENTS[reel.brand] || DEFAULT_GRADIENT;
    const card = document.createElement('div');
    card.className = 'reel-card';
    card.style.background = gradient;
    const videoHtml = (reel.videoUrl && isPlayableVideoUrl(reel.videoUrl))
      ? `<video class="reel-video" src="${reel.videoUrl}" muted loop autoplay playsinline preload="metadata"></video>` : '';
    card.innerHTML = `
      ${videoHtml}
      <div class="reel-top">
        <span class="reel-tag">${reel.brand || 'Concept'}</span>
        <span class="reel-tag">${reel.format || 'Reel'}</span>
      </div>
      <div class="reel-bottom">
        <div class="reel-title">${L(reel.title, lang) || 'Untitled idea'}</div>
        <button class="storyboard-btn">${btnLabel}</button>
      </div>
    `;
    card.querySelector('.storyboard-btn').addEventListener('click', ()=> openModal(reel));
    return card;
  }

  function renderPlaceholder(lang){
    const dict = (i18nData && i18nData[lang]) || {};
    const text = (dict.reels && dict.reels.empty) || 'No Reels & Stories ideas added yet — check back soon.';
    const div = document.createElement('div');
    div.className = 'reel-card placeholder';
    div.innerHTML = `
      <div class="ph-icon"><svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>
      <p>${text}</p>
    `;
    return div;
  }

  function renderReels(lang){
    grid.innerHTML = '';
    if (reelsData.length === 0){
      grid.appendChild(renderPlaceholder(lang));
    } else {
      reelsData.forEach(reel => grid.appendChild(renderCard(reel, lang)));
    }
  }

  // ---------- apply language across the page ----------
  function applyLang(lang){
    currentLang = lang;
    localStorage.setItem('yaraLang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', lang === 'ar');
    langToggleBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    if(!i18nData) return;
    const dict = i18nData[lang] || i18nData.en;
    applyStaticTranslations(dict);
    buildPageHeading(dict);
    renderReels(lang);
    if(currentReel) openModal(currentReel);
  }
  langToggleBtn.addEventListener('click', ()=> applyLang(currentLang === 'ar' ? 'en' : 'ar'));

  // ---------- render immediately, then hydrate from JSON ----------
  // The first render is intentionally local so the reel is visible even if
  // GitHub Pages/CDN temporarily fails to fetch the JSON files.
  const FALLBACK_REELS = [{
    id: 'mazaq-day-2',
    title: { en: 'Mazaq Day 2 — Study Mood On', ar: 'مذاق — اليوم التاني: مود المذاكرة اشتغل' },
    brand: 'Mazaq', format: 'Reel',
    storyboard: [
      { en: 'Late-night study/work scene with the person focused on the laptop and Mazaq beside them.', ar: 'مشهد مذاكرة أو شغل بالليل، والشخص مركز في اللابتوب ومذاق جنبه.' },
      { en: 'The person keeps studying while the voice-over says: “وراكم مذاكرة كتير؟”', ar: 'الشخص مكمل مذاكرة، والـVoice-over بيقول: «وراكم مذاكرة كتير؟»' },
      { en: 'A subtle camera movement reveals the Mazaq coffee, connecting it naturally to the study moment.', ar: 'حركة كاميرا بسيطة تكشف قهوة مذاق وتربطها بالمود بشكل طبيعي.' },
      { en: 'The voice-over continues: “مذاق بيظبط يومك.”', ar: 'الـVoice-over بيكمل: «مذاق بيظبط يومك.»' }
    ],
    whyItWorks: {
      en: 'The reel uses a relatable study moment and a simple voice-over to position Mazaq as a small boost that makes long study days feel better. The product is integrated naturally into the scene rather than feeling like a hard sell.',
      ar: 'الفكرة بتستخدم لحظة مذاكرة قريبة من الناس مع Voice-over بسيط، وبتخلي مذاق جزء طبيعي من المود بدل ما الإعلان يبقى بيع مباشر. المنتج موجود جوه المشهد كجزء من اللحظة نفسها.'
    },
    videoUrl: 'media/reels/1790286195086-Mazaq_Day_2.mp4'
  }];

  // Always show the current reel first. JSON is an enhancement, not a requirement.
  reelsData = FALLBACK_REELS.slice();
  i18nData = {
    en: { nav:{about:'About',skills:'Skills',work:'Work',creds:'Creds',cases:'Cases',reels:'Reels',contact:'Contact'}, common:{close:'Close'}, reels:{eyebrow:'Content Ideas',headingPlain:'Reels & Stories, ',headingGrad:'ready to film.',lede:'Short vertical video ideas (9:16) — tap a card to see the full storyboard and what makes the idea work.',back:'← Back to portfolio',storyboardBtn:'View Storyboard →',storyboardLabel:'Storyboard',whyLabel:'Why This Works',empty:'No Reels & Stories ideas added yet — check back soon.',fine:'© 2026 Yara Ayman Hussein'}},
    ar: { nav:{about:'نبذة',skills:'مهاراتي',work:'شغلي',creds:'شهاداتي',cases:'شغل حقيقي',reels:'ريلز',contact:'تواصل'}, common:{close:'إغلاق'}, reels:{eyebrow:'أفكار محتوى',headingPlain:'ريلز وستوريز، ',headingGrad:'جاهزين للتصوير.',lede:'أفكار فيديوهات عمودية قصيرة (9:16) — دوسي على أي كارت علشان تشوفي الستوري بورد كامل وإيه اللي بيخلي الفكرة تشتغل.',back:'← رجوع للبورتفوليو',storyboardBtn:'شوف الستوري بورد ←',storyboardLabel:'الستوري بورد',whyLabel:'ليه ده شغال؟',empty:'لسه مفيش أفكار ريلز وستوريز متضافة — تابعينا قريب.',fine:'© 2026 يارا أيمن حسين'}}
  };
  applyLang(currentLang);

  // Hydrate from the editable JSON used by the Admin page. If it fails,
  // the already-visible fallback reel remains on screen.
  Promise.all([
    fetch('data/i18n.json', {cache:'no-store'}).then(r=>{if(!r.ok) throw new Error('i18n'); return r.json();}),
    fetch('data/reels.json', {cache:'no-store'}).then(r=>{if(!r.ok) throw new Error('reels'); return r.json();})
  ]).then(([i18n,data])=>{
    i18nData = i18n;
    if(data && Array.isArray(data.reels) && data.reels.length) reelsData = data.reels;
    applyLang(currentLang);
  }).catch(err=>{
    console.warn('Using built-in reel fallback:', err);
  });
