// Main React Application
const { useState, useEffect, useRef } = React;

// Reusable SVG Icon Component
const Icon = ({ name, className = "w-5 h-5", size = 20 }) => {
  const icons = {
    Home: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    Briefcase: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    FolderGit2: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><circle cx="12" cy="13" r="2"/><path d="M14 13h3"/><path d="M7 13h3"/>
      </svg>
    ),
    Layers: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    GitCommit: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/>
      </svg>
    ),
    Cpu: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
      </svg>
    ),
    MessageSquareQuote: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 12a2 2 0 0 0 2-2V8H8"/><path d="M14 12a2 2 0 0 0 2-2V8h-2"/>
      </svg>
    ),
    Tag: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><circle cx="7" cy="7" r=".5" fill="currentColor"/>
      </svg>
    ),
    HelpCircle: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>
      </svg>
    ),
    Mail: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    Layout: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
    Code2: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
      </svg>
    ),
    Database: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>
      </svg>
    ),
    Sparkles: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>
      </svg>
    ),
    atom: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/><ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(-45 12 12)"/>
      </svg>
    ),
    palette: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
    "file-code": (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/>
      </svg>
    ),
    figma: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
      </svg>
    ),
    server: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
    ),
    "git-branch": (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
      </svg>
    ),
    terminal: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>
      </svg>
    ),
    box: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/>
      </svg>
    ),
    github: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
    linkedin: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    twitter: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
      </svg>
    ),
    dribbble: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
      </svg>
    ),
    ArrowUpRight: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
      </svg>
    ),
    Check: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    ChevronDown: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    ),
    Star: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    Globe: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
      </svg>
    ),
    Clock: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    MapPin: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    Menu: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
      </svg>
    ),
    X: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
      </svg>
    )
  };

  return icons[name] || icons.Home;
};

// Main Portfolio Component
function PortfolioApp() {
  const [lang, setLang] = useState('ar'); // default to Arabic as requested or user toggle
  const [activeNav, setActiveNav] = useState('home');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openService, setOpenService] = useState('01');
  const [openFaq, setOpenFaq] = useState(0);
  const [pricingPlan, setPricingPlan] = useState('Standard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const [timeString, setTimeString] = useState('');
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '< $1,000',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const t = window.portfolioData[lang];
  const isRtl = lang === 'ar';

  // Toggle Language Handler
  const toggleLanguage = () => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
  };

  // Live Clock updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: t.profile.timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeString(now.toLocaleTimeString(lang === 'ar' ? 'ar-EG' : 'en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang, t]);

  // Set HTML dir and lang on mount
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  // ScrollSpy to update activeNav
  useEffect(() => {
    const handleScroll = () => {
      const sections = t.nav.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveNav(t.nav[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  // Filter works by category
  const filteredWorks = activeCategory === 'All' || activeCategory === 'الكل'
    ? t.works.items
    : t.works.items.filter(item => {
        if (activeCategory === 'Web App' || activeCategory === 'تطبيقات ويب') return item.category.includes('Web') || item.category.includes('ويب');
        if (activeCategory === 'UI/UX' || activeCategory === 'تصميم UI/UX') return item.category.includes('UI');
        if (activeCategory === 'Mobile' || activeCategory === 'تطبيقات جوال') return item.category.includes('Mobile') || item.category.includes('جوال');
        return true;
      });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', service: '', budget: '< $1,000', message: '' });
    }, 4500);
  };

  return (
    <div className={`min-h-screen relative text-slate-200 selection:bg-[#f3500f] selection:text-white ${isRtl ? 'rtl' : ''}`}>
      
      {/* Top Floating Bar (Mobile & Quick Actions) */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0b12]/80 border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f3500f] to-[#ff7a45] flex items-center justify-center font-bold text-white shadow-lg shadow-[#f3500f]/30">
            A
          </div>
          <div>
            <span className="font-bold text-lg tracking-wide text-white block leading-none">
              {t.profile.name}
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              {t.profile.role.split('&')[0]}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#f3500f]/60 hover:bg-[#f3500f]/10 text-xs font-semibold tracking-wider transition-all duration-300 text-white"
            title="تبديل اللغة / Switch Language"
          >
            <Icon name="Globe" className="w-3.5 h-3.5 text-[#f3500f]" />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[61px] z-40 bg-[#0a0b12]/95 backdrop-blur-2xl p-6 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {t.nav.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  activeNav === item.id
                    ? 'bg-[#f3500f] text-white shadow-lg shadow-[#f3500f]/25'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon name={item.icon} className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="pt-6 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#f3500f] to-[#ff7a45] text-white font-bold shadow-lg shadow-[#f3500f]/30"
            >
              <span>{t.profile.cta}</span>
              <Icon name="ArrowUpRight" className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Main Page Layout */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* LEFT COLUMN: Fixed Profile Card (Jayden Style Sticky Sidebar) */}
          <aside className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-24">
            <div className="glass-card-static p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden border border-white/10 shadow-2xl">
              
              {/* Subtle orange accent glow behind avatar */}
              <div className="absolute top-12 w-48 h-48 rounded-full bg-[#f3500f]/15 blur-3xl pointer-events-none" />

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide mb-6">
                <span className="pulse-dot" />
                <span>{t.profile.badge}</span>
              </div>

              {/* Avatar Frame */}
              <div className="relative mb-5 group">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-2 border-white/15 p-1 bg-gradient-to-b from-white/10 to-transparent shadow-xl transition-all duration-500 group-hover:border-[#f3500f]/60">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    alt={t.profile.name}
                    className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#f3500f] text-white p-2 rounded-xl shadow-lg shadow-[#f3500f]/40">
                  <Icon name="Briefcase" className="w-4 h-4" />
                </div>
              </div>

              {/* Name & Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1.5 tracking-tight font-rajdhani">
                {t.profile.name}
              </h1>
              <p className="text-sm font-medium text-[#f3500f] mb-4">
                {t.profile.role}
              </p>

              {/* Bio snippet */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
                {t.profile.bio}
              </p>

              {/* Location & Local Clock Card */}
              <div className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-3.5 mb-6 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-300">
                  <Icon name="MapPin" className="w-4 h-4 text-[#f3500f]" />
                  <span>{t.profile.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
                  <Icon name="Clock" className="w-3.5 h-3.5" />
                  <span>{timeString || "10:24 AM"}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {t.profile.socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#f3500f] hover:border-[#f3500f] transition-all duration-300"
                    title={s.name}
                  >
                    <Icon name={s.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="w-full flex flex-col gap-2.5">
                <a
                  href="#contact"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#f3500f] hover:bg-[#ff682e] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#f3500f]/30 hover:shadow-[#f3500f]/50"
                >
                  <span>{t.profile.cta}</span>
                  <Icon name="ArrowUpRight" className="w-4 h-4" />
                </a>
                <a
                  href="#works"
                  className="w-full py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-semibold text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Icon name="FolderGit2" className="w-4 h-4 text-[#f3500f]" />
                  <span>{t.profile.downloadCv}</span>
                </a>
              </div>

            </div>
          </aside>

          {/* CENTER & RIGHT CONTENT COLUMN */}
          <main className="lg:col-span-7 xl:col-span-7 flex flex-col gap-16 sm:gap-24">
            
            {/* HERO SECTION */}
            <section id="home" className="pt-4 scroll-mt-28">
              <div className="glass-card p-6 sm:p-10 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3500f]/10 border border-[#f3500f]/20 text-[#f3500f] text-xs font-semibold uppercase tracking-wider mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f3500f]" />
                  {t.hero.subtitle}
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                  {t.hero.headline}{' '}
                  <span className="text-gradient-orange block sm:inline">
                    {t.hero.highlight}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
                  {t.hero.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10">
                  {t.hero.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/10 text-slate-300 hover:border-[#f3500f]/50 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Odometer Stats Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/10">
                  {t.hero.stats.map((s, idx) => (
                    <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-center">
                      <div className="text-2xl sm:text-4xl font-extrabold text-[#f3500f] font-rajdhani mb-1">
                        {s.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" className="scroll-mt-28">
              <div className="mb-6">
                <span className="text-[#f3500f] font-semibold text-xs uppercase tracking-wider block mb-1">
                  {t.experience.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t.experience.headline}
                </h3>
              </div>

              <div className="space-y-4">
                {t.experience.items.map((exp, i) => (
                  <div key={i} className="glass-card p-6 flex flex-col sm:flex-row items-start justify-between gap-4 group">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#f3500f]" />
                        <h4 className="text-lg font-bold text-white group-hover:text-[#f3500f] transition-colors">
                          {exp.role}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-400 font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    <div className="self-start sm:self-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SELECTED WORKS SECTION */}
            <section id="works" className="scroll-mt-28">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-[#f3500f] font-semibold text-xs uppercase tracking-wider block mb-1">
                    {t.works.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {t.works.headline}
                  </h3>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 p-1 rounded-xl self-start sm:self-auto overflow-x-auto max-w-full">
                  {t.works.categories.map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                        activeCategory === cat
                          ? 'bg-[#f3500f] text-white shadow-md shadow-[#f3500f]/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Works Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredWorks.map((work) => (
                  <div
                    key={work.id}
                    onClick={() => setSelectedModalProject(work)}
                    className="glass-card overflow-hidden cursor-pointer group flex flex-col"
                  >
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-black/40">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono font-medium text-slate-300 border border-white/10">
                        {work.date}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b12] via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[#f3500f] text-xs font-semibold uppercase tracking-wider block mb-1">
                          {work.category}
                        </span>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#f3500f] transition-colors flex items-center justify-between">
                          <span>{work.title}</span>
                          <Icon name="ArrowUpRight" className="w-4 h-4 text-slate-400 group-hover:text-[#f3500f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                          {work.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {work.tags.map((t, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 font-mono">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SERVICES ACCORDION SECTION */}
            <section id="services" className="scroll-mt-28">
              <div className="mb-6">
                <span className="text-[#f3500f] font-semibold text-xs uppercase tracking-wider block mb-1">
                  {t.services.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t.services.headline}
                </h3>
              </div>

              <div className="space-y-3.5">
                {t.services.items.map((svc) => {
                  const isOpen = openService === svc.id;
                  return (
                    <div
                      key={svc.id}
                      className={`glass-card overflow-hidden transition-all duration-300 border ${
                        isOpen ? 'border-[#f3500f]/40 bg-[#161a29]/90' : 'border-white/10'
                      }`}
                    >
                      <button
                        onClick={() => setOpenService(isOpen ? null : svc.id)}
                        className="w-full p-5 sm:p-6 flex items-center justify-between text-start gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-xl sm:text-2xl font-bold font-rajdhani text-[#f3500f]">
                            ({svc.id})
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-white">
                            {svc.title}
                          </span>
                        </div>
                        <div className={`p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#f3500f]' : ''}`}>
                          <Icon name="ChevronDown" className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 border-t border-white/5 animate-fadeIn">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                            {svc.features.map((feat, idx) => (
                              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                                <div className="w-4 h-4 rounded-full bg-[#f3500f]/15 flex items-center justify-center flex-shrink-0 text-[#f3500f]">
                                  <Icon name="Check" className="w-3 h-3" />
                                </div>
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* PROCESS SECTION */}
            <section id="process" className="scroll-mt-28">
              <div className="mb-6">
                <span className="text-[#f3500f] font-semibold text-xs uppercase tracking-wider block mb-1">
                  {t.process.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t.process.headline}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.process.steps.map((st, i) => (
                  <div key={i} className="glass-card p-6 relative group overflow-hidden">
                    <div className="text-4xl font-extrabold font-rajdhani text-white/10 group-hover:text-[#f3500f]/25 transition-colors absolute top-4 right-4">
                      {st.step}
                    </div>
                    <div className="relative z-10">
                      <div className="w-8 h-8 rounded-lg bg-[#f3500f]/10 border border-[#f3500f]/30 flex items-center justify-center text-[#f3500f] font-bold text-sm mb-4">
                        {st.step}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {st.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TECH STACK SECTION */}
            <section id="tech" className="scroll-mt-28">
              <div className="mb-6">
                <span className="text-[#f3500f] font-semibold text-xs uppercase tracking-wider block mb-1">
                  {t.tech.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t.tech.headline}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.tech.items.map((tk, idx) => (
                  <div key={idx} className="glass-card p-4 text-center group flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:border-[#f3500f] group-hover:text-[#f3500f] group-hover:bg-[#f3500f]/10 transition-all mb-2.5">
                      <Icon name={tk.icon} className="w-5 h-5" />
                    </div>
                    <h5 className="text-sm font-bold text-white mb-0.5">
                      {tk.name}
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      {tk.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section id="testimonials" className="scroll-mt-28">
              <div className="mb-6">
                <span className="text-[#f3500f] font-semibold text-xs uppercase tracking-wider block mb-1">
                  {t.testimonials.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t.testimonials.headline}
                </h3>
              </div>

              <div className="space-y-4">
                {t.testimonials.items.map((rev, i) => (
                  <div key={i} className="glass-card p-6 sm:p-7 relative">
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(rev.rating)].map((_, starIdx) => (
                        <Icon key={starIdx} name="Star" className="w-4 h-4" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-5">
                      “{rev.quote}”
                    </p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div>
                        <h6 className="text-sm font-bold text-white">
                          {rev.author}
                        </h6>
                        <span className="text-xs text-slate-400">
                          {rev.title}
                        </span>
                      </div>
                      <Icon name="MessageSquareQuote" className="w-6 h-6 text-[#f3500f]/40" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PRICING SECTION */}
            <section id="pricing" className="scroll-mt-28">
              <div className="mb-6">
                <span className="text-[#f3500f] font-semibold text-xs uppercase tracking-wider block mb-1">
                  {t.pricing.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t.pricing.headline}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {t.pricing.plans.map((pl, i) => (
                  <div
                    key={i}
                    className={`glass-card p-6 sm:p-8 flex flex-col justify-between relative border ${
                      pl.popular ? 'border-[#f3500f] shadow-xl shadow-[#f3500f]/15' : 'border-white/10'
                    }`}
                  >
                    {pl.popular && (
                      <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#f3500f] text-white text-[10px] font-bold tracking-wider uppercase">
                        Popular
                      </div>
                    )}

                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {pl.name}
                      </h4>
                      <p className="text-xs text-slate-400 mb-6">
                        {pl.desc}
                      </p>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-extrabold text-[#f3500f] font-rajdhani">
                          {pl.price}
                        </span>
                        <span className="text-xs text-slate-400">
                          {pl.period}
                        </span>
                      </div>

                      <div className="space-y-3 mb-8">
                        {pl.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <Icon name="Check" className="w-4 h-4 text-[#f3500f] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                        pl.popular
                          ? 'bg-[#f3500f] hover:bg-[#ff682e] text-white shadow-lg shadow-[#f3500f]/30'
                          : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                      }`}
                    >
                      <span>{pl.buttonText}</span>
                      <Icon name="ArrowUpRight" className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs SECTION */}
            <section id="faq" className="scroll-mt-28">
              <div className="mb-6">
                <span className="text-[#f3500f] font-semibold text-xs uppercase tracking-wider block mb-1">
                  {t.faq.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t.faq.headline}
                </h3>
              </div>

              <div className="space-y-3">
                {t.faq.items.map((fq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="glass-card overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full p-5 text-start flex items-center justify-between gap-4"
                      >
                        <span className="text-sm sm:text-base font-bold text-white">
                          {fq.q}
                        </span>
                        <div className={`p-1.5 rounded-lg bg-white/5 text-slate-300 transition-transform ${isOpen ? 'rotate-180 text-[#f3500f]' : ''}`}>
                          <Icon name="ChevronDown" className="w-4 h-4" />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5">
                          {fq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="scroll-mt-28">
              <div className="glass-card p-6 sm:p-10 relative overflow-hidden">
                <div className="mb-8">
                  <span className="text-[#f3500f] font-semibold text-xs uppercase tracking-wider block mb-1">
                    {t.contact.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                    {t.contact.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {t.contact.description}
                  </p>
                </div>

                {formSent ? (
                  <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                      <Icon name="Check" className="w-6 h-6" />
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">
                      {lang === 'ar' ? 'تم استلام رسالتك!' : 'Message Received!'}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                      {t.contact.fields.successMsg}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t.contact.fields.name} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t.contact.fields.namePlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#f3500f] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t.contact.fields.email} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.contact.fields.emailPlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#f3500f] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Budget Selection Pills */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        {t.contact.fields.budget}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {t.contact.fields.budgets.map((b, i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`py-2 px-3 rounded-xl text-xs font-mono font-medium border transition-all text-center ${
                              formData.budget === b
                                ? 'bg-[#f3500f] text-white border-[#f3500f] shadow-md shadow-[#f3500f]/30'
                                : 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/20'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.contact.fields.message} *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.contact.fields.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#f3500f] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#f3500f] hover:bg-[#ff682e] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-[#f3500f]/30 hover:shadow-[#f3500f]/50"
                    >
                      <span>{t.contact.fields.submit}</span>
                      <Icon name="ArrowUpRight" className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </section>

          </main>

          {/* RIGHT FLOATING QUICK-NAV (Desktop only) */}
          <nav className="hidden xl:flex lg:col-span-1 fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2.5 bg-[#0a0b12]/90 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
            {t.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                title={item.label}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative group ${
                  activeNav === item.id
                    ? 'bg-[#f3500f] text-white shadow-lg shadow-[#f3500f]/40 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon name={item.icon} className="w-4 h-4" />
                {/* Floating tooltip */}
                <span className="absolute right-12 px-2.5 py-1 rounded-md bg-[#161a29] text-xs font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 border border-white/10 shadow-xl">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

        </div>
      </div>

      {/* FOOTER: Infinite Ticker Marquee & Copyright */}
      <footer className="mt-20 border-t border-white/10 bg-[#08090f]/90 backdrop-blur-md relative overflow-hidden">
        {/* Infinite Marquee Banner */}
        <div className="py-6 border-b border-white/5 overflow-hidden whitespace-nowrap flex">
          <div className="marquee-track flex items-center gap-8 text-xl sm:text-2xl font-bold font-rajdhani text-white/20 uppercase tracking-widest">
            <span>{t.footer.ticker}</span>
            <span>{t.footer.ticker}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-start">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white transition-colors">{t.nav[0].label}</a>
            <span>•</span>
            <a href="#works" className="hover:text-white transition-colors">{t.nav[2].label}</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav[9].label}</a>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card-static w-full max-w-2xl bg-[#10121d] border border-white/15 p-6 sm:p-8 rounded-3xl relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <Icon name="X" className="w-5 h-5" />
            </button>

            <img
              src={selectedModalProject.image}
              alt={selectedModalProject.title}
              className="w-full h-64 object-cover rounded-2xl mb-6 border border-white/10"
            />

            <span className="text-[#f3500f] text-xs font-semibold uppercase tracking-wider block mb-1">
              {selectedModalProject.category} • {selectedModalProject.date}
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              {selectedModalProject.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedModalProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedModalProject.tags.map((tg, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  #{tg}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={selectedModalProject.link}
                className="flex-1 py-3 rounded-xl bg-[#f3500f] hover:bg-[#ff682e] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#f3500f]/30"
              >
                <span>{lang === 'ar' ? 'معاينة المشروع المباشر' : 'Live Preview Demo'}</span>
                <Icon name="ArrowUpRight" className="w-4 h-4" />
              </a>
              <button
                onClick={() => setSelectedModalProject(null)}
                className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Render into DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<PortfolioApp />);
