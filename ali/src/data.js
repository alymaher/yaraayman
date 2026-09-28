// Bilingual Content Data (English & Arabic)
window.portfolioData = {
  en: {
    meta: {
      title: "Jayden Style - Personal Portfolio",
      dir: "ltr",
      lang: "en"
    },
    profile: {
      name: "Ali Al-Sayed",
      role: "Senior Product Designer & Web Developer",
      badge: "Available for 3 projects",
      email: "ali.design@example.com",
      phone: "+1 (555) 234-5678",
      location: "Cairo, EG & Remote",
      timeZone: "Africa/Cairo",
      bio: "Crafting modern digital products, immersive user experiences, and scalable web solutions.",
      signature: "Ali Al-Sayed",
      socials: [
        { name: "GitHub", icon: "github", url: "https://github.com" },
        { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
        { name: "Twitter / X", icon: "twitter", url: "https://twitter.com" },
        { name: "Dribbble", icon: "dribbble", url: "https://dribbble.com" }
      ],
      cta: "Get In Touch",
      downloadCv: "Download CV"
    },
    nav: [
      { id: "home", label: "Home", icon: "Home" },
      { id: "experience", label: "Experience", icon: "Briefcase" },
      { id: "works", label: "Works", icon: "FolderGit2" },
      { id: "services", label: "Services", icon: "Layers" },
      { id: "process", label: "Process", icon: "GitCommit" },
      { id: "tech", label: "Tech Stack", icon: "Cpu" },
      { id: "testimonials", label: "Reviews", icon: "MessageSquareQuote" },
      { id: "pricing", label: "Pricing", icon: "Tag" },
      { id: "faq", label: "FAQs", icon: "HelpCircle" },
      { id: "contact", label: "Contact", icon: "Mail" }
    ],
    hero: {
      subtitle: "Introduction",
      headline: "Making Your Digital Vision a Reality",
      highlight: "Pain-Free Experience",
      description: "Specialized in building high-performance web applications and intuitive design systems that turn complex ideas into seamless user experiences.",
      tags: ["UI/UX Design", "Full-Stack Development", "Brand Identity", "Motion & 3D"],
      stats: [
        { value: "45+", label: "Completed Projects" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "6+", label: "Years Experience" }
      ]
    },
    experience: {
      subtitle: "Career Path",
      headline: "Work Experience & History",
      description: "A continuous journey of crafting scalable web architectures and leading product design.",
      items: [
        {
          period: "2023 - Present",
          role: "Lead Product Designer & Tech Lead",
          company: "Nexus Labs International",
          description: "Leading design systems, micro-frontends, and mentoring junior engineers across high-impact SaaS products."
        },
        {
          period: "2021 - 2023",
          role: "Senior Full-Stack Developer",
          company: "Vanguard Digital Studio",
          description: "Architected responsive web applications with React, Next.js, and Node.js for global enterprise clients."
        },
        {
          period: "2019 - 2021",
          role: "UI/UX Designer & Web Specialist",
          company: "Creative Pulse Agency",
          description: "Designed cross-platform interfaces, interactive prototypes, and high-converting marketing landing pages."
        }
      ]
    },
    works: {
      subtitle: "Selected Works",
      headline: "Featured Projects & Case Studies",
      categories: ["All", "Web App", "UI/UX", "Mobile"],
      items: [
        {
          id: 1,
          title: "Helve Tica - FinTech SaaS Platform",
          category: "Web App",
          date: "May 2024",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
          link: "#",
          tags: ["React", "Tailwind", "Financial Analytics", "Dark Mode"],
          description: "An intuitive financial analytics dashboard enabling users to track portfolios, forecast investments, and manage transactions seamlessly."
        },
        {
          id: 2,
          title: "X-Direct - Neobank Mobile App",
          category: "Mobile",
          date: "Apr 2024",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
          link: "#",
          tags: ["React Native", "UI Design", "Banking", "Biometrics"],
          description: "Next-generation mobile banking experience with instant peer-to-peer transfers, virtual debit cards, and automated savings jars."
        },
        {
          id: 3,
          title: "Aura Studio - Creative Agency Experience",
          category: "UI/UX",
          date: "Feb 2024",
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
          link: "#",
          tags: ["WebGL", "Three.js", "Brand Identity", "Interactive"],
          description: "An award-winning agency portfolio built with smooth interactive WebGL shaders, kinetic typography, and fluid page transitions."
        },
        {
          id: 4,
          title: "OmniFlow - AI Workflow Automation",
          category: "Web App",
          date: "Dec 2023",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
          link: "#",
          tags: ["AI Tools", "TypeScript", "Node.js", "Dashboard"],
          description: "Automated business workflow engine connecting LLMs with external APIs to streamline operational pipelines."
        }
      ]
    },
    services: {
      subtitle: "What I Offer",
      headline: "Tailored Services to Scale Your Business",
      items: [
        {
          id: "01",
          title: "UI/UX & Product Design",
          icon: "Layout",
          features: [
            "User Research & Wireframing",
            "Comprehensive Design Systems in Figma",
            "Interactive Clickable Prototypes",
            "Design Tokens & Developer Handoff"
          ]
        },
        {
          id: "02",
          title: "Modern Web Development",
          icon: "Code2",
          features: [
            "React, Next.js & Modern JavaScript",
            "Tailwind CSS & Responsive Layouts",
            "High Lighthouse Performance Scores (95+)",
            "SEO & Accessibility Standards"
          ]
        },
        {
          id: "03",
          title: "Full-Stack Web Applications",
          icon: "Database",
          features: [
            "RESTful & GraphQL API Integration",
            "Authentication, Security & Databases",
            "Stripe & Payment Gateway Workflows",
            "Cloud Deployment & Maintenance"
          ]
        },
        {
          id: "04",
          title: "Brand Identity & Motion",
          icon: "Sparkles",
          features: [
            "Logo Design & Brand Guidelines",
            "Interactive Micro-Interactions",
            "3D Web Elements & Canvas Graphics",
            "Custom Iconography & Typography"
          ]
        }
      ]
    },
    process: {
      subtitle: "Work Process",
      headline: "How Ideas Turn Into Reality",
      steps: [
        {
          step: "01",
          title: "Discover & Brief",
          description: "We dive deep into your project vision, user needs, and strategic business goals to form a solid roadmap."
        },
        {
          step: "02",
          title: "Wireframe & Prototype",
          description: "Rapid iteration on low and high fidelity wireframes in Figma to validate user experience and architecture."
        },
        {
          step: "03",
          title: "Design & Development",
          description: "Writing clean, modular code with modern technologies and polishing every interaction with fluid animations."
        },
        {
          step: "04",
          title: "Test & Launch",
          description: "Cross-browser testing, performance optimization, and seamless deployment with long-term maintenance support."
        }
      ]
    },
    tech: {
      subtitle: "Tools & Technologies",
      headline: "My Everyday Tech Stack",
      items: [
        { name: "React / Next.js", desc: "Interactive Web Apps", icon: "atom" },
        { name: "Tailwind CSS", desc: "Utility-first Styling", icon: "palette" },
        { name: "TypeScript", desc: "Robust Architecture", icon: "file-code" },
        { name: "Figma", desc: "UI/UX & Prototyping", icon: "figma" },
        { name: "Node.js", desc: "Backend & APIs", icon: "server" },
        { name: "Git & GitHub", desc: "Version Control", icon: "git-branch" },
        { name: "Python", desc: "Automation & Data", icon: "terminal" },
        { name: "Docker", desc: "Containerized Systems", icon: "box" }
      ]
    },
    testimonials: {
      subtitle: "Testimonials",
      headline: "What Clients Say",
      items: [
        {
          quote: "Ali transformed our conceptual idea into an exceptional, high-converting product. The attention to detail, sleek animations, and code quality were extraordinary.",
          author: "Marcus Vance",
          title: "Founder & CEO, Apex Dynamics (UK)",
          rating: 5
        },
        {
          quote: "Working with Ali was one of the smoothest experiences. He delivered ahead of schedule and the responsiveness across all devices is flawless.",
          author: "Elena Rostova",
          title: "Product Manager, NovaTech (Berlin)",
          rating: 5
        },
        {
          quote: "A rare blend of high-end design sensibility and rock-solid development capability. Our conversion rate jumped 42% after the redesign.",
          author: "Tariq Al-Mansoor",
          title: "Director of Technology, GulfVentures (Dubai)",
          rating: 5
        }
      ]
    },
    pricing: {
      subtitle: "Pricing Plans",
      headline: "Simple & Transparent Pricing",
      plans: [
        {
          name: "Standard Plan",
          price: "$45",
          period: "/ hour",
          desc: "Ideal for small to medium projects, UI enhancements, and targeted sprints.",
          features: [
            "Wireframe & UI Design in Figma",
            "Frontend with React / Tailwind",
            "Responsive across all devices",
            "Direct Slack/Discord communication",
            "3 Months Free Bug Support"
          ],
          popular: false,
          buttonText: "Choose Standard"
        },
        {
          name: "Premium Dedicated",
          price: "$85",
          period: "/ hour",
          desc: "Full-cycle product design, end-to-end development, and high-priority turnaround.",
          features: [
            "Complete Architecture & UI/UX System",
            "Full-Stack Development (React, API, DB)",
            "Interactive 3D / WebGL animations",
            "Daily Syncs & Agile Sprints",
            "12 Months Priority Maintenance",
            "Performance Guarantee (95+ score)"
          ],
          popular: true,
          buttonText: "Choose Premium"
        }
      ]
    },
    faq: {
      subtitle: "Common Questions",
      headline: "Frequently Asked Questions",
      items: [
        {
          q: "What is your typical project turnaround time?",
          a: "Most design & landing page projects take 1 to 2 weeks. Comprehensive full-stack applications usually take 3 to 6 weeks depending on the scope and integrations."
        },
        {
          q: "Can you collaborate with our existing engineering team?",
          a: "Yes, absolutely! I regularly collaborate with agile development teams, providing Figma tokens, design systems, and clean pull requests in GitHub."
        },
        {
          q: "Do you offer post-launch support and maintenance?",
          a: "Yes, all projects include 3 to 12 months of post-launch technical support to ensure your application stays secure, up-to-date, and optimized."
        },
        {
          q: "What are your payment terms?",
          a: "Standard milestone-based payments (e.g. 50% upfront to kick off and 50% upon successful delivery and signoff) or weekly sprint billing for ongoing engagements."
        }
      ]
    },
    contact: {
      subtitle: "Let's Talk",
      headline: "Start A Project Together",
      description: "Have an idea or need a revamp? Fill out the form or email me directly. Let's make something remarkable.",
      fields: {
        name: "Your Name",
        namePlaceholder: "e.g. John Doe",
        email: "Your Email",
        emailPlaceholder: "john@example.com",
        service: "Interested In",
        servicesList: ["Web Development", "UI/UX Design", "Full-Stack App", "Consultation"],
        budget: "Estimated Budget",
        budgets: ["< $1,000", "$1,000 - $3,000", "$3,000 - $6,000", "> $6,000"],
        message: "Project Details",
        messagePlaceholder: "Tell me a bit about your timeline, goals, and vision...",
        submit: "Send Message",
        successMsg: "Thank you! Your message has been sent. I will get back to you within 24 hours."
      }
    },
    footer: {
      ticker: "BOOK A CALL • AVAILABLE FOR NEW PROJECTS • LET'S TALK • CRAFTING HIGH-END EXPERIENCES •",
      copyright: "© 2026 Ali Al-Sayed. Inspired by modern portfolio design trends."
    }
  },

  // ----------------------- ARABIC CONTENT -----------------------
  ar: {
    meta: {
      title: "علي السيد - معرض أعمال ومطور واجهات وتطبيقات",
      dir: "rtl",
      lang: "ar"
    },
    profile: {
      name: "علي السيد",
      role: "كبير مصممي المنتجات ومطور واجهات الويب",
      badge: "متاح لـ 3 مشاريع جديدة",
      email: "ali.design@example.com",
      phone: "+20 100 123 4567",
      location: "القاهرة، مصر وعن بُعد",
      timeZone: "Africa/Cairo",
      bio: "أصمم وأبني منتجات وتجارب رقمية استثنائية تجمع بين جمال التصميم وسرعة الأداء وقابلية التوسع.",
      signature: "علي السيد",
      socials: [
        { name: "GitHub", icon: "github", url: "https://github.com" },
        { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
        { name: "Twitter / X", icon: "twitter", url: "https://twitter.com" },
        { name: "Dribbble", icon: "dribbble", url: "https://dribbble.com" }
      ],
      cta: "تواصل معي الآن",
      downloadCv: "تحميل السيرة الذاتية"
    },
    nav: [
      { id: "home", label: "الرئيسية", icon: "Home" },
      { id: "experience", label: "الخبرات", icon: "Briefcase" },
      { id: "works", label: "أعمالي", icon: "FolderGit2" },
      { id: "services", label: "الخدمات", icon: "Layers" },
      { id: "process", label: "منهجية العمل", icon: "GitCommit" },
      { id: "tech", label: "التقنيات", icon: "Cpu" },
      { id: "testimonials", label: "آراء العملاء", icon: "MessageSquareQuote" },
      { id: "pricing", label: "الأسعار", icon: "Tag" },
      { id: "faq", label: "الأسئلة الشائعة", icon: "HelpCircle" },
      { id: "contact", label: "اتصل بي", icon: "Mail" }
    ],
    hero: {
      subtitle: "مقدمة",
      headline: "تحويل فكرتك الرقمية إلى واقع مبهر",
      highlight: "بتجربة مستخدم خالية من العناء",
      description: "متخصص في بناء وتطوير تطبيقات الويب فائقة السرعة وأنظمة التصميم الحديثة التي تحول الأفكار المعقدة إلى منتجات سهلة الاستخدام ومربحة.",
      tags: ["تصميم UI/UX", "تطوير Full-Stack", "هوية العلامة التجارية", "مؤثرات بصرية و 3D"],
      stats: [
        { value: "+45", label: "مشروع منجز بنجاح" },
        { value: "99%", label: "نسبة رضا العملاء" },
        { value: "+6", label: "سنوات خبرة متخصصة" }
      ]
    },
    experience: {
      subtitle: "المسار المهني",
      headline: "الخبرات السابقة ومسيرتي المهنية",
      description: "رحلة مستمرة في بناء المنتجات الرقمية وهندسة البرمجيات القابلة للتوسع.",
      items: [
        {
          period: "2023 - حتى الآن",
          role: "كبير مصممي المنتجات ورئيس الفريق التقني",
          company: "Nexus Labs الدولية",
          description: "قيادة أنظمة التصميم وتطوير تطبيقات SaaS عالية الحمل وإدارة وتوجيه مطوري الواجهات."
        },
        {
          period: "2021 - 2023",
          role: "مطور Full-Stack أول",
          company: "استوديو Vanguard للحلول الرقمية",
          description: "بناء تطبيقات ومواقع ويب متجاوبة بالكامل باستخدام React و Next.js و Node.js لكبرى الشركات."
        },
        {
          period: "2019 - 2021",
          role: "مصمم واجهات وتجربة مستخدم ومطور ويب",
          company: "وكالة Creative Pulse",
          description: "تصميم واجهات تطبيقات تفاعلية ونماذج عمل أولية وصفحات هبوط تحقق أعلى معدلات التحويل."
        }
      ]
    },
    works: {
      subtitle: "أعمال مختارة",
      headline: "مشاريع مميزة ودراسات حالة",
      categories: ["الكل", "تطبيقات ويب", "تصميم UI/UX", "تطبيقات جوال"],
      items: [
        {
          id: 1,
          title: "منصة Helve Tica للتحليلات المالية",
          category: "تطبيقات ويب",
          date: "مايو 2024",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
          link: "#",
          tags: ["React", "Tailwind", "تحليلات مالية", "الوضع الليلي"],
          description: "لوحة تحكم تفاعلية ذكية للبيانات المالية تمكّن المستثمرين من تتبع المحافظ والتنبؤ بالعوائد وإدارة الصفقات بكل سلاسة."
        },
        {
          id: 2,
          title: "تطبيق بنك X-Direct الرقمي",
          category: "تطبيقات جوال",
          date: "أبريل 2024",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
          link: "#",
          tags: ["React Native", "UI Design", "بنوك رقمية", "أمان حيوي"],
          description: "تجربة مصرفية عصرية تقدم تحويلات مالية فورية، بطاقات افتراضية مخصصة، ومحافظ ادخار ذكية."
        },
        {
          id: 3,
          title: "استوديو Aura الإبداعي للوسائط التفاعلية",
          category: "تصميم UI/UX",
          date: "فبراير 2024",
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
          link: "#",
          tags: ["WebGL", "Three.js", "هوية بصرية", "موقع تفاعلي"],
          description: "موقع حائز على جوائز تصميم يعتمد على مؤثرات بصرية ثلاثية الأبعاد وانتقالات سلسة فائقة الجاذبية."
        },
        {
          id: 4,
          title: "منصة OmniFlow لأتمتة المهام بالذكاء الاصطناعي",
          category: "تطبيقات ويب",
          date: "ديسمبر 2023",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
          link: "#",
          tags: ["ذكاء اصطناعي", "TypeScript", "Node.js", "Dashboard"],
          description: "نظام أتمتة لعمليات الشركات يربط نماذج الذكاء الاصطناعي بالأنظمة الإدارية لتسريع دورات العمل اليومية."
        }
      ]
    },
    services: {
      subtitle: "ما أقدمه",
      headline: "خدمات مصممة لمساعدة أعمالك على النمو والتميز",
      items: [
        {
          id: "01",
          title: "تصميم واجهات وتجربة المستخدم (UI/UX)",
          icon: "Layout",
          features: [
            "دراسة سلوك المستخدم وبناء الهيكل السلكي (Wireframing)",
            "أنظمة تصميم متكاملة وقابلة للتطوير في Figma",
            "نماذج أولية تفاعلية وحركية قابلة للاختبار",
            "تسليم ملفات ومواصفات برمجية دقيقة للمطورين"
          ]
        },
        {
          id: "02",
          title: "تطوير مواقع الويب الحديثة",
          icon: "Code2",
          features: [
            "تطوير بـ React و Next.js وأحدث تقنيات الويب",
            "تصميم متجاوب وسريع للغاية مع Tailwind CSS",
            "نتائج فحص أداء استثنائية على Google Lighthouse (+95)",
            "توافق تام مع معايير محركات البحث (SEO) وسهولة الوصول"
          ]
        },
        {
          id: "03",
          title: "بناء تطبيقات الويب المتكاملة (Full-Stack)",
          icon: "Database",
          features: [
            "برمجة وربط واجهات برمجة التطبيقات (REST & GraphQL APIs)",
            "نظم تسجيل دخول آمنة وإدارة قواعد البيانات الحديثة",
            "تكامل بوابات الدفع الإلكتروني وتأمين المعاملات",
            "النشر السحابي، الحماية، والصيانة الدورية للمشروع"
          ]
        },
        {
          id: "04",
          title: "الهوية البصرية والمؤثرات التفاعلية",
          icon: "Sparkles",
          features: [
            "تصميم الشعارات ودليل الهوية البصرية للعلامة التجارية",
            "أنيميشن ومؤثرات حركية خفيفة تلفت انتباه الزوار",
            "عناصر ثلاثية الأبعاد ورسومات Canvas تفاعلية",
            "أيقونات مخصصة ونظام طباعي أنيق"
          ]
        }
      ]
    },
    process: {
      subtitle: "منهجية العمل",
      headline: "كيف تتحول فكرتك إلى منتج رقمي ناجح؟",
      steps: [
        {
          step: "01",
          title: "الاستكشاف والتحليل",
          description: "نجتمع لنفهم بدقة متطلبات مشروعك، جمهورك المستهدف، وأهدافك البيعية لنضع خارطة طريق واضحة."
        },
        {
          step: "02",
          title: "التخطيط والنمذجة",
          description: "تصميم النماذج الأولية والهياكل السلكية في Figma لاختبار سهولة الاستخدام قبل بدء كتابة الكود."
        },
        {
          step: "03",
          title: "التصميم والتطوير",
          description: "كتابة كود نظيف، سريع، وآمن باستخدام أحدث التقنيات مع ضبط أدق التفاصيل الجمالية والحركية."
        },
        {
          step: "04",
          title: "الاختبار والإطلاق",
          description: "فحص شامل عبر كافة الشاشات والمتصفحات، تحسين سرعة التحميل، وإطلاق الموقع مع دعم فني مستمر."
        }
      ]
    },
    tech: {
      subtitle: "الأدوات والتقنيات",
      headline: "حزمتي التقنية اليومية",
      items: [
        { name: "React / Next.js", desc: "بناء واجهات تفاعلية", icon: "atom" },
        { name: "Tailwind CSS", desc: "تنسيق فائق السرعة", icon: "palette" },
        { name: "TypeScript", desc: "برمجة متينة ومنظمة", icon: "file-code" },
        { name: "Figma", desc: "تصميم واجهات ونماذج", icon: "figma" },
        { name: "Node.js", desc: "خوادم وبرمجة خلفية", icon: "server" },
        { name: "Git & GitHub", desc: "إدارة وتتبع الأكواد", icon: "git-branch" },
        { name: "Python", desc: "أتمتة ومعالجة بيانات", icon: "terminal" },
        { name: "Docker", desc: "بيئات تشغيل معزولة", icon: "box" }
      ]
    },
    testimonials: {
      subtitle: "آراء العملاء",
      headline: "ماذا يقول شركاء النجاح؟",
      items: [
        {
          quote: "علي حوّل فكرتنا المجردة إلى منتج مذهل وتجربة مستخدم فاقت كل التوقعات. الاهتمام بأدق التفاصيل والسرعة في التنفيذ كانت مدهشة حقاً.",
          author: "ماركوس فانس",
          title: "المؤسس والرئيس التنفيذي، Apex Dynamics (بريطانيا)",
          rating: 5
        },
        {
          quote: "العمل مع علي كان من أسهل وأكثر التجارب احترافية. التزم بالموعد بالكامل والموقع يعمل بسلاسة متناهية على كافة الهواتف.",
          author: "إيلينا روستوفا",
          title: "مديرة منتجات، NovaTech (ألمانيا)",
          rating: 5
        },
        {
          quote: "مزيج نادر من الحس التصميمي الفاخر والخبرة البرمجية الصارمة. ارتفعت نسبة التحويل لدينا بنسبة 42% بعد إطلاق الموقع الجديد.",
          author: "طارق المنصور",
          title: "مدير التقنية، GulfVentures (دبي)",
          rating: 5
        }
      ]
    },
    pricing: {
      subtitle: "خطط الأسعار",
      headline: "أسعار واضحة ومرنة تناسب احتياجاتك",
      plans: [
        {
          name: "الخطة القياسية (Standard)",
          price: "$45",
          period: "/ ساعة",
          desc: "مثالية للمشاريع الصغيرة والمتوسطة، وصفحات الهبوط، وتحسينات الواجهات المحددة.",
          features: [
            "تصميم الواجهات في Figma",
            "تطوير الواجهات بـ React و Tailwind",
            "متجاوب 100% مع جميع الهواتف والحواسيب",
            "تواصل مباشر عبر Slack أو Discord",
            "3 أشهر دعم فني مجاني لحل أي مشكلات"
          ],
          popular: false,
          buttonText: "اختيار الباقة القياسية"
        },
        {
          name: "الخطة المتقدمة المتكاملة (Premium)",
          price: "$85",
          period: "/ ساعة",
          desc: "بناء وتصميم منتج رقمي متكامل من الصفر، بأولوية قصوى ودعم برمجي شامل.",
          features: [
            "هندسة النظام وبناء كامل لـ UI/UX",
            "تطوير Full-Stack شامل (React, Node, DB)",
            "مؤثرات بصرية متقدمة و 3D Canvas",
            "جلسات يومية ومزامنة مستمرة للتقدم",
            "12 شهر دعم وصيانة فنية بأولوية عليا",
            "ضمان أداء وسرعة قياسية (+95 Lighthouse)"
          ],
          popular: true,
          buttonText: "اختيار الباقة المتقدمة"
        }
      ]
    },
    faq: {
      subtitle: "الأسئلة الشائعة",
      headline: "إجابات على أكثر الاستفسارات تكراراً",
      items: [
        {
          q: "كم يستغرق إنجاز المشروع عادةً؟",
          a: "صفحات الهبوط وتصميمات الواجهات تستغرق عادة من أسبوع إلى أسبوعين. أما تطبيقات الويب المتكاملة فتستغرق من 3 إلى 6 أسابيع حسب حجم الميزات والربط البرمجي."
        },
        {
          q: "هل يمكنك العمل مع فريق التطوير الحالي في شركتنا؟",
          a: "نعم بالتأكيد! أعمل بانتظام مع فرق التطوير في الشركات، وأقوم بتسليم أكواد نظيفة عبر GitHub وتصميمات منظمة في Figma مع Design Tokens دقيقة."
        },
        {
          q: "هل توفر خدمات الدعم والصيانة بعد إطلاق الموقع؟",
          a: "نعم، كافة المشاريع تشمل فترة دعم فني مجانية تتراوح من 3 إلى 12 شهراً لضمان عمل الموقع بأمان وسرعة ومواكبته لأي تحديثات."
        },
        {
          q: "كيف تتم آلية الدفع؟",
          a: "يتم الاتفاق بناءً على مراحل تسليم واضحة (Milestones) عادة 50% كدفعة أولى للبدء و 50% عند اكتمال المشروع ورضاك التام عنه، أو بنظام الفواتير الأسبوعية للتعاقدات المستمرة."
        }
      ]
    },
    contact: {
      subtitle: "تواصل معي",
      headline: "دعنا نبدأ مشروعك القادم معاً",
      description: "هل لديك فكرة أو ترغب في تطوير موقعك الحالي؟ املأ النموذج أو راسلني مباشرة وسأرد عليك سريعاً.",
      fields: {
        name: "الاسم الكامل",
        namePlaceholder: "مثال: أحمد محمد",
        email: "البريد الإلكتروني",
        emailPlaceholder: "name@example.com",
        service: "الخدمة المطلوبة",
        servicesList: ["تطوير موقع ويب", "تصميم واجهات UI/UX", "تطبيق ويب متكامل", "استشارة تقنية"],
        budget: "الميزانية التقديرية",
        budgets: ["أقل من 1,000$", "1,000$ - 3,000$", "3,000$ - 6,000$", "أكثر من 6,000$"],
        message: "تفاصيل المشروع",
        messagePlaceholder: "أخبرني بالمزيد عن فكرتك، الموعد المطلوب، وأي تفاصيل أخرى...",
        submit: "إرسال الرسالة",
        successMsg: "شكراً لتواصلك! تم استلام رسالتك بنجاح وسأقوم بالرد عليك خلال أقل من 24 ساعة."
      }
    },
    footer: {
      ticker: "احجز مكالمة عمل • متاح للمشاريع الجديدة • دعنا نتحدث • نصنع تجارب رقمية استثنائية •",
      copyright: "© 2026 علي السيد. صُمم بأحدث معايير تصميم المواقع العالمية."
    }
  }
};
