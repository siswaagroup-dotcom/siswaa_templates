import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3, Heart, Menu, Minus, Plus, Search, ShoppingBag, X } from "lucide-react";
import { categories, findCategory, findTemplate } from "./data/templateCatalog";
import "./builder.css";

const PetExperience = lazy(() => import("./templates/pets/PetExperience"));
const CuriousDogTemplate = lazy(() => import("./templates/pets/01-curious-dog/index.tsx"));
const LittleWildOnesTemplate = lazy(() => import("./templates/pets/02-little-wild-ones/index.tsx"));
const WaterInMotionTemplate = lazy(() => import("./templates/plumbing/01-water-in-motion/index.tsx"));
const EmergencyResponseTemplate = lazy(() => import("./templates/plumbing/02-emergency-response/index.tsx"));
const PipeExplorerTemplate = lazy(() => import("./templates/plumbing/03-pipe-explorer/index.tsx"));
const PremiumHomeCareTemplate = lazy(() => import("./templates/plumbing/04-premium-home-care/index.tsx"));
const IndustrialFlowTemplate = lazy(() => import("./templates/plumbing/05-industrial-flow/index.tsx"));

const asset = (id, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const pictures = {
  plumbing: ["photo-1607472586893-edb57bdc0e39", "photo-1504307651254-35680f356dfd", "photo-1621905251918-48416bd8575a", "photo-1600607687939-ce8a6c25118c"],
  clinic: ["photo-1576091160399-112ba8d25d1d", "photo-1559757175-0eb30cd8c063", "photo-1551601651-2a8555f1a136", "photo-1579684385127-1ef15d508118"],
  hospital: ["photo-1586773860418-d37222d8fce3", "photo-1551076805-e1869033e561", "photo-1579684385127-1ef15d508118", "photo-1584982751601-97dcc096659c"],
  restaurant: ["photo-1414235077428-338989a2e8c0", "photo-1517248135467-4c7edcad34c4", "photo-1555939594-58d7cb561ad1", "photo-1515003197210-e0cd7184f8b5"],
  pets: ["photo-1552053831-71594a27632d", "photo-1573865526739-10659fec78a5", "photo-1543466835-00a7907e9de1", "photo-1548199973-03cce0bbc87b"],
  photographer: ["photo-1470252649378-9c29740c9fa8", "photo-1492691527719-9d1e07e534b4", "photo-1516035069371-29a1b244cc32", "photo-1500530855697-b586d89ba3ee"],
  architecture: ["photo-1600607687939-ce8a6c25118c", "photo-1600210492486-724fe5c67fb0", "photo-1511818966892-d7d671e672a2", "photo-1600566753086-00f18fb6b3ea"],
  "interior-design": ["photo-1616486338812-3dadae4b4ace", "photo-1600210492486-724fe5c67fb0", "photo-1618221195710-dd6b41faaea6", "photo-1600607687939-ce8a6c25118c"],
  "beauty-parlour": ["photo-1560066984-138dadb4c035", "photo-1522337360788-8b13dee7a37e", "photo-1516975080664-ed2fc6a32937", "photo-1526045478516-99145907023c"],
  ecommerce: ["photo-1523275335684-37898b6baf30", "photo-1542291026-7eec264c27ff", "photo-1526170375885-4d8ecf77b99f", "photo-1546868871-7041f2a55e12"],
  electrical: ["photo-1621905251189-08b45d6a269e", "photo-1558618666-fcd25c85cd64", "photo-1497366754035-f200968a6e72", "photo-1504307651254-35680f356dfd"]
};

const variantStyles = {
  editorial: { background: "#f5f0e7", ink: "#26392f", accent: "#bd6947", soft: "#e5e9dd", font: "Georgia, serif" },
  essential: { background: "#f4f6f5", ink: "#153b45", accent: "#177d85", soft: "#dcebed", font: "Arial, sans-serif" },
  immersive: { background: "#171b1a", ink: "#f4efe4", accent: "#d4a752", soft: "#343a34", font: "Georgia, serif" },
  modular: { background: "#f8f3e7", ink: "#322a20", accent: "#d15f37", soft: "#efe0bf", font: "Trebuchet MS, sans-serif" },
  minimal: { background: "#f5f5f1", ink: "#272c28", accent: "#738368", soft: "#e6e8df", font: "Arial, sans-serif" }
};

function App() {
  const [categoryId, setCategoryId] = useState(null);
  const [templateId, setTemplateId] = useState(null);
  const [query, setQuery] = useState("");
  const [view, setView] = useState("desktop");
  const [panel, setPanel] = useState(null);
  const [notice, setNotice] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    const syncLocation = () => {
      const [, category, template] = window.location.hash.match(/^#\/([^/]+)(?:\/([^/]+))?/) || [];
      setCategoryId(findCategory(category)?.id || null);
      setTemplateId(findTemplate(template)?.id || null);
    };
    syncLocation();
    window.addEventListener("hashchange", syncLocation);
    return () => window.removeEventListener("hashchange", syncLocation);
  }, []);

  const goHome = () => { window.location.hash = "#/"; setCategoryId(null); setTemplateId(null); };
  const chooseCategory = (id) => { window.location.hash = `#/${id}`; setCategoryId(id); setTemplateId(null); window.scrollTo(0, 0); };
  const chooseTemplate = (id) => { window.location.hash = `#/${categoryId}/${id}`; setTemplateId(id); window.scrollTo(0, 0); };
  const chooseVariant = (id) => chooseTemplate(id);
  const category = findCategory(categoryId);
  const template = findTemplate(templateId);

  if (template && category) return <PreviewWorkspace category={category} template={template} view={view} setView={setView} onVariant={chooseVariant} onBack={() => { window.location.hash = `#/${category.id}`; setTemplateId(null); }} onHome={goHome} panel={panel} setPanel={setPanel} notice={notice} setNotice={setNotice} brand={brand} setBrand={setBrand} />;
  if (category) return <TemplateGallery category={category} onHome={goHome} onTemplate={chooseTemplate} />;

  const visibleCategories = categories.filter((item) => `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="builder-shell">
    <header className="builder-header"><a className="siswaa-brand" href="#/" onClick={goHome}><span className="brand-mark">s.</span><span>SISWAA<small>TECHNOLOGIES</small></span></a><nav><a href="#industries">Industries</a><a href="#how-it-works">How it works</a></nav><button className="header-quote" onClick={() => setPanel("quote")}>Talk to our team <ArrowUpRight size={15}/></button></header>
    <main>
      <section className="builder-hero"><div className="hero-kicker"><span/> WEBSITE STARTS HERE <span className="kicker-line"/></div><div className="hero-title-row"><div><h1>Good work deserves<br/>a <em>beautiful</em> website.</h1><p>Choose your industry. Find a direction. Make it yours.</p></div><div className="hero-side-note"><span>01 / 11</span><p>A collection of thoughtful website starting points, made for the way your business works.</p></div></div><a className="scroll-cue" href="#industries">EXPLORE INDUSTRIES <ArrowDown size={14}/></a><div className="hero-image"><img src={asset("photo-1600607687939-ce8a6c25118c", 1800)} alt="Sunlit contemporary architecture with warm natural materials"/><div className="hero-image-caption"><span>THE SISWAA COLLECTION</span><b>Made for your next chapter.</b><span>11 INDUSTRIES · 55 STARTING POINTS</span></div></div></section>
      <section className="industry-section" id="industries"><div className="section-top"><div><span className="section-label">FIND YOUR INDUSTRY</span><h2>Where should we begin?</h2></div><label className="industry-search"><Search size={16}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search industries" aria-label="Search industries"/><kbd>⌘ K</kbd></label></div><div className="industry-grid">{visibleCategories.map((item, index) => <button className="industry-card" key={item.id} onClick={() => chooseCategory(item.id)}><span className="industry-card-image"><img src={item.image} alt="" loading="lazy"/><span className="industry-index">{String(index + 1).padStart(2, "0")}</span><span className="industry-arrow"><ArrowUpRight size={19}/></span></span><span className="industry-card-copy"><span><b>{item.name}</b><small>{item.label}</small></span><span className="template-count">05 DESIGNS</span></span></button>)}</div>{visibleCategories.length === 0 && <p className="empty-search">No industries match that search.</p>}</section>
      <section className="builder-note" id="how-it-works"><span>01 — PICK A STARTING POINT</span><h2>One good idea can<br/><em>go a long way.</em></h2><p>Each collection brings together five distinct visual directions, ready to explore and shape around your business. Preview a full working site, switch its design, then make a request when it feels right.</p><button onClick={() => document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" })}>Browse the collection <ArrowDown size={15}/></button><div className="note-number">55</div></section>
    </main><BuilderFooter onHome={goHome}/>{panel === "quote" && <FormDialog title="Talk with Siswaa" onClose={() => setPanel(null)} onSubmit={() => { setPanel(null); setNotice("Thanks. This demo request is ready for a backend connection."); }} />}{notice && <div className="toast" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><X size={15}/></button></div>}</div>;
}

function TemplateGallery({ category, onHome, onTemplate }) {
  return <div className="builder-shell gallery-shell"><BuilderHeader onHome={onHome}/><main><div className="breadcrumb"><button onClick={onHome}>Industries</button><span>/</span><span>{category.name}</span></div><section className="gallery-intro"><div><span className="section-label">{category.label} · FIVE STARTING POINTS</span><h1>Meet your next<br/><em>online home.</em></h1><p>{category.description}</p></div><img src={category.image} alt={`${category.name} visual preview`} /></section><div className="gallery-head"><div><span className="section-label">THE COLLECTION</span><h2>Five ways to tell your story.</h2></div><span>01 — 05</span></div><div className="template-grid">{category.templates.map((item, index) => <article className={`template-card template-card-${item.mode}`} key={item.id}><button className="template-image" onClick={() => onTemplate(item.id)} aria-label={`Preview ${item.name}`}><img src={item.image} alt={`${category.name} website visual`} loading={index > 1 ? "lazy" : "eager"}/><span className="template-number">{item.number}</span><span className="preview-overlay"><span>OPEN FULL PREVIEW <ArrowUpRight size={15}/></span></span></button><div className="template-copy"><div><span className="section-label">DESIGN DIRECTION {item.number}</span><h3>{item.name}</h3><p>{item.description}. {category.tone}</p></div><button className="text-action" onClick={() => onTemplate(item.id)}>Preview <ArrowRight size={16}/></button></div></article>)}</div></main><BuilderFooter onHome={onHome}/></div>;
}

function PreviewWorkspace({ category, template, view, setView, onVariant, onBack, onHome, panel, setPanel, notice, setNotice, brand, setBrand }) {
  const [cart, setCart] = useState(0);
  const frameRef = useRef(null);
  useEffect(() => {
    setCart(0);
    setPanel(null);
    setNotice("");
    frameRef.current?.scrollTo({ top: 0 });
  }, [template.id]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.target instanceof HTMLElement && (event.target.isContentEditable || ["INPUT", "SELECT", "TEXTAREA"].includes(event.target.tagName))) return;
      const currentIndex = category.templates.findIndex((item) => item.id === template.id);
      if (/^[1-5]$/.test(event.key)) {
        onVariant(category.templates[Number(event.key) - 1].id);
      } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const offset = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (currentIndex + offset + category.templates.length) % category.templates.length;
        onVariant(category.templates[nextIndex].id);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [category.templates, onVariant, template.id]);

  return <div className="preview-workspace"><header className="preview-toolbar"><div className="preview-crumb"><button className="icon-button" onClick={onBack} title="Back to templates" aria-label="Back to templates"><ArrowLeft size={18}/></button><span className="crumb-divider"/><div><small>{category.name}</small><b>{template.name}</b></div></div><div className="viewport-controls" aria-label="Preview size">{["desktop", "tablet", "mobile"].map((size) => <button className={view === size ? "selected" : ""} key={size} onClick={() => setView(size)} aria-label={`${size} preview`} title={`${size} preview`}><ViewportIcon size={size}/></button>)}</div><div className="toolbar-actions"><button className="customize-action" onClick={() => setPanel("customize")}>Customize</button><button className="quote-action" onClick={() => setPanel("quote")}>Request a quote <ArrowUpRight size={15}/></button><button className="icon-button close-preview" onClick={onHome} aria-label="Back to industries" title="Back to industries"><X size={18}/></button></div></header><div className="preview-content"><div ref={frameRef} className={`website-frame frame-${view}`}><BusinessWebsite category={category} template={template} brand={brand} cart={cart} setCart={setCart} panel={panel} setPanel={setPanel} setNotice={setNotice}/></div><aside className="variant-rail" aria-label="Design variants"><span>DESIGN</span>{category.templates.map((item) => <button key={item.id} className={item.id === template.id ? "active" : ""} onClick={() => onVariant(item.id)} title={`${item.number} ${item.name}`} aria-label={`Switch to ${item.number} ${item.name}`} aria-current={item.id === template.id ? "true" : undefined}><b>{item.number}</b><small>{item.name}</small></button>)}</aside></div>{notice && <div className="toast" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><X size={15}/></button></div>}{panel === "customize" && <CustomizeDialog category={category} brand={brand} setBrand={setBrand} onClose={() => setPanel(null)} />}{panel === "quote" && <FormDialog title="Request a quote" onClose={() => setPanel(null)} onSubmit={(event) => { event.preventDefault(); setPanel(null); setNotice("Your demo quote request is prepared. Connect a backend to receive real submissions."); }} category={category} />}
  </div>;
}

function BusinessWebsite({ category, template, brand, cart, setCart, panel, setPanel, setNotice }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [filter, setFilter] = useState("All work");
  const variant = template.mode;
  const color = variantStyles[variant];
  const images = pictures[category.id];
  const isStore = category.id === "ecommerce";
  const isRestaurant = category.id === "restaurant";
  const displayName = brand.trim() || category.business;
  const titleLines = category.offer.split(" ");
  const nav = isStore ? ["Shop", "Collections", "Our story", "Journal"] : isRestaurant ? ["Our menu", "The story", "Gatherings", "Visit"] : ["Explore", "Our approach", "What we do", "Get in touch"];
  const book = () => setPanel("site-form");
  const submit = (event) => { event.preventDefault(); setNotice("Your demo request is prepared. Connect a backend to receive real submissions."); setPanel(null); };

  if (category.id === "plumbing" && template.id === "plumbing-01") return <Suspense fallback={<div className="pet-template-loading" role="status">Opening the design…</div>}><WaterInMotionTemplate businessName={brand.trim() || category.business}/></Suspense>;
  if (category.id === "plumbing" && template.id === "plumbing-02") return <Suspense fallback={<div className="pet-template-loading" role="status">Opening the design…</div>}><EmergencyResponseTemplate businessName={brand.trim() || category.business}/></Suspense>;
  if (category.id === "plumbing" && template.id === "plumbing-03") return <Suspense fallback={<div className="pet-template-loading" role="status">Opening the design…</div>}><PipeExplorerTemplate businessName={brand.trim() || category.business}/></Suspense>;
  if (category.id === "plumbing" && template.id === "plumbing-04") return <Suspense fallback={<div className="pet-template-loading" role="status">Opening the design…</div>}><PremiumHomeCareTemplate businessName={brand.trim() || category.business}/></Suspense>;
  if (category.id === "plumbing" && template.id === "plumbing-05") return <Suspense fallback={<div className="pet-template-loading" role="status">Opening the design…</div>}><IndustrialFlowTemplate businessName={brand.trim() || category.business}/></Suspense>;
  if (category.id === "pets" && template.id === "pets-01") return <Suspense fallback={<div className="pet-template-loading" role="status">Opening the design…</div>}><CuriousDogTemplate businessName={brand.trim() || category.business}/></Suspense>;
  if (category.id === "pets" && template.id === "pets-02") return <Suspense fallback={<div className="pet-template-loading" role="status">Opening the design…</div>}><LittleWildOnesTemplate/></Suspense>;
  if (category.id === "pets") return <Suspense fallback={<div className="pet-template-loading" role="status">Opening the design…</div>}><PetExperience category={category} template={template} brand={brand} cart={cart} setCart={setCart} panel={panel} setPanel={setPanel} setNotice={setNotice}/></Suspense>;

  return <div className={`business-site business-${variant} industry-${category.id}`} style={{ "--site-bg": color.background, "--site-ink": color.ink, "--site-accent": color.accent, "--site-soft": color.soft, "--site-font": color.font }}>
    <div className="site-announcement">A THOUGHTFUL {category.name.toUpperCase()} EXPERIENCE <span>·</span> SAMPLE WEBSITE CONCEPT</div>
    <header className="site-header"><button className="site-menu-toggle" aria-label="Toggle website menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button><a className="site-logo" href="#site-home">{displayName}<small>{category.label}</small></a><nav className={menuOpen ? "site-nav open" : "site-nav"}>{nav.map((item, index) => <a key={item} href={`#site-section-${index + 1}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav><div className="site-header-actions">{isStore && <button className="site-icon-action" aria-label="Search products" onClick={() => setSearchOpen(!searchOpen)}><Search size={17}/></button>}<button className="site-header-cta" onClick={book}>{isStore ? <><ShoppingBag size={16}/><span>Bag ({cart})</span></> : category.action}</button></div></header>
    {searchOpen && <form className="store-search" onSubmit={(event) => { event.preventDefault(); setSearchOpen(false); }}><Search size={15}/><input autoFocus aria-label="Search products" placeholder="Try travel, home, everyday…"/><button>Search</button></form>}
    <main id="site-home">
      <section className={`site-hero site-hero-${variant}`}><div className="site-hero-copy"><span className="site-eyebrow">{category.label} <i>—</i> AN INTRODUCTION</span><h1>{variant === "modular" ? <>{titleLines.slice(0, 2).join(" ")}<br/><em>{titleLines.slice(2).join(" ")}</em></> : <>{titleLines.slice(0, Math.ceil(titleLines.length / 2)).join(" ")}<br/><em>{titleLines.slice(Math.ceil(titleLines.length / 2)).join(" ")}</em></>}</h1><p>{category.tone} {category.description}</p><div className="site-hero-buttons"><button className="site-primary-button" onClick={isStore ? () => document.getElementById("site-products")?.scrollIntoView({ behavior: "smooth" }) : book}>{category.action}<ArrowUpRight size={15}/></button><a href="#site-section-1">Discover more <ArrowDown size={14}/></a></div><div className="site-proof"><span>01 — 05</span><span>MADE TO FEEL LIKE YOU</span></div></div><div className="site-hero-image"><img src={asset(images[0])} alt={`${category.name} website featured visual`}/><span className="image-annotation">A DIFFERENT KIND OF {category.name.toUpperCase()}</span>{variant === "editorial" && <span className="hero-stamp">MADE<br/><em>with</em><br/>INTENTION</span>}</div><div className="site-hero-index">{template.number}<span> / 05</span></div></section>
      <section className="site-intro" id="site-section-1"><span className="site-eyebrow">A NOTE ON WHAT WE DO</span><p>{category.tone} We believe the details matter: a considered first impression, a clear next step, and an experience that feels unmistakably yours.</p><a href="#site-services">MEET {displayName.toUpperCase()} <ArrowDown size={14}/></a></section>
      <section className="site-services" id="site-services"><div className="site-section-heading"><div><span className="site-eyebrow">GOOD WORK, THOUGHTFULLY DONE</span><h2>Considered from<br/><em>every angle.</em></h2></div><p>Whether you know exactly what you need or are still finding your way, here is a place to begin.</p></div><div className={`site-service-list service-layout-${variant}`}>{category.services.map((item, index) => <article className="site-service" key={item}><span className="service-index">0{index + 1}</span><span className="service-rule"/><div><h3>{item}</h3><p>{item.meta ? item.description : `${item.description}. ${category.tone}`}</p></div><button onClick={book} aria-label={`Learn about ${item}`}><ArrowUpRight size={18}/></button></article>)}</div></section>
      <section className="site-feature" id="site-section-2"><div className="feature-image"><img src={asset(images[1])} alt={`${category.name} supporting visual showing the character of the business`} loading="lazy"/><span>THE DETAILS MAKE THE DIFFERENCE</span></div><div className="feature-copy"><span className="site-eyebrow">A LITTLE MORE ABOUT US</span><h2>{variant === "immersive" ? "An experience worth remembering." : "Good work starts with listening."}</h2><p>{category.tone} Our approach brings care, craft, and clear communication together, so the process feels as considered as the result.</p><div className="feature-stat"><b>01</b><span>Curious by nature<br/>Thoughtful by design</span></div><a href="#site-section-3">OUR APPROACH <ArrowUpRight size={14}/></a></div></section>
      <section className="site-projects" id="site-section-3"><div className="site-section-heading"><div><span className="site-eyebrow">A FEW THINGS WE LOVE</span><h2>Stories in the <em>details.</em></h2></div><div className="project-filters">{["All work", "Recent", "Selected"].map((item) => <button key={item} className={filter === item ? "chosen" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="site-image-grid">{images.slice(1).map((image, index) => <figure key={image} className={`site-gallery-image gallery-${index + 1}`}><img src={asset(image, 900)} alt={`${category.name} project and service gallery ${index + 1}`} loading="lazy"/><figcaption><span>0{index + 1} / A CLOSER LOOK</span><b>{category.services[(index + 1) % category.services.length]}</b></figcaption></figure>)}</div></section>
      {isStore && <StoreProducts category={category} images={images} cart={cart} setCart={setCart} setNotice={setNotice}/>}
      {isRestaurant && <section className="menu-feature" id="site-menu"><div><span className="site-eyebrow">A TASTE OF THE SEASON</span><h2>Fresh from<br/><em>our kitchen.</em></h2><p>Our sample menu follows the seasons. Explore a few favorites, then join us at the table.</p><button className="site-primary-button" onClick={book}>Reserve a table <ArrowUpRight size={15}/></button></div><div className="menu-sample">{["Charred carrots · whipped feta", "Handmade pappardelle · garden herbs", "Olive oil cake · late summer fruit"].map((dish, index) => <div key={dish}><small>0{index + 1} / FROM THE MENU</small><b>{dish}</b><span>Seasonal ingredients, simply celebrated.</span></div>)}</div></section>}
      <section className="site-testimonial"><span className="quote-mark">“</span><blockquote>{testimonialFor(category.id)}</blockquote><span className="testimonial-byline">A NOTE FROM THE {category.name.toUpperCase()} COMMUNITY <i>· SAMPLE CONTENT</i></span></section>
      <section className="site-faq" id="site-section-4"><div><span className="site-eyebrow">GOOD TO KNOW</span><h2>A few helpful<br/><em>answers.</em></h2><p>Have a different question? Our team would be glad to help.</p><button className="site-primary-button" onClick={book}>Get in touch <ArrowUpRight size={15}/></button></div><div className="site-faq-list">{faqFor(category).map((item, index) => <div key={item.question} className="site-faq-item"><button aria-expanded={faqOpen === index} onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}><span>{item.question}</span>{faqOpen === index ? <Minus size={16}/> : <Plus size={16}/>}</button>{faqOpen === index && <p>{item.answer}</p>}</div>)}</div></section>
      <section className="site-cta"><div><span className="site-eyebrow">WHENEVER YOU'RE READY</span><h2>Let's make something<br/><em>good together.</em></h2><p>Tell us what you have in mind. We can take it from there, one thoughtful step at a time.</p><button className="site-primary-button" onClick={book}>{category.action}<ArrowUpRight size={15}/></button></div><img src={asset(images[3])} alt={`${category.name} service detail`} loading="lazy"/></section>
    </main><footer className="site-footer"><div className="site-footer-main"><a className="site-logo" href="#site-home">{displayName}<small>{category.label}</small></a><p>{category.tone}<br/>A SAMPLE WEBSITE CONCEPT BY SISWAA TECHNOLOGIES.</p><div className="footer-links"><a href="#site-services">Services</a><a href="#site-section-3">Selected work</a><a href="#site-section-4">Questions</a><button onClick={book}>Contact</button></div></div><div className="site-footer-bottom"><span>© 2026 {displayName}. Demo content for preview purposes.</span><a href="#site-home">BACK TO TOP ↑</a></div></footer>
    <div className="sample-site-disclaimer">Sample website preview · Imagery, business details, and testimonials are illustrative, not verified business claims.</div>
    {panel === "site-form" && <FormDialog title={isRestaurant ? "Reserve a table" : category.action} onClose={() => setPanel(null)} onSubmit={submit} category={category}/>}
  </div>;
}

function StoreProducts({ category, images, cart, setCart, setNotice }) {
  const [selected, setSelected] = useState("All objects");
  return <section className="store-products" id="site-products"><div className="site-section-heading"><div><span className="site-eyebrow">THE EVERYDAY COLLECTION</span><h2>Useful things, <em>well made.</em></h2></div><label className="store-filter">Showing <select value={selected} onChange={(event) => setSelected(event.target.value)}><option>All objects</option><option>Accessories</option><option>Essentials</option></select><ChevronDown size={14}/></label></div><div className="product-grid">{["Everyday watch", "Carry-all tote", "Studio camera", "Weekend essential"].map((name, index) => <article className="product-card" key={name}><div><img src={asset(images[index % images.length], 800)} alt={name} loading="lazy"/><button aria-label={`Add ${name} to bag`} onClick={() => { setCart(cart + 1); setNotice(`${name} added to your demo bag.`); }}>+</button></div><span>{selected === "All objects" ? ["Objects", "Accessories", "Essentials", "New arrival"][index] : selected}</span><h3>{name}</h3><p>Thoughtfully designed for everyday use.</p><b>${[68, 42, 120, 56][index]}.00</b></article>)}</div><p className="demo-checkout">Demo storefront: cart updates work locally; checkout does not process purchases.</p><button className="site-primary-button" onClick={() => setNotice(`Demo bag contains ${cart} item${cart === 1 ? "" : "s"}. Checkout is not connected.`)}>View bag ({cart}) <ShoppingBag size={15}/></button></section>;
}

function FormDialog({ title, onClose, onSubmit, category }) {
  return <div className="form-backdrop" onClick={onClose}><section className="form-dialog" role="dialog" aria-modal="true" aria-labelledby="form-title" onClick={(event) => event.stopPropagation()}><button className="form-close" onClick={onClose} aria-label="Close"><X size={18}/></button><span className="section-label">A FRONTEND-ONLY DEMO</span><h2 id="form-title">{title}</h2><p>{category ? `Share a few details with ${category.business}. This preview will not submit to a real business.` : "Tell us about your project. This preview will not submit until a backend is connected."}</p><form onSubmit={onSubmit}><label>Your name<input required placeholder="Name"/></label><label>Email address<input required type="email" placeholder="you@example.com"/></label>{category && <label>What are you looking for?<select defaultValue=""><option value="" disabled>Select a service</option>{category.services.map((service) => <option key={service}>{service}</option>)}</select></label>}<label>A few details<textarea rows="3" placeholder="What would you like us to know?"/></label><button className="quote-action" type="submit">Prepare request <ArrowRight size={15}/></button></form></section></div>;
}

function CustomizeDialog({ category, brand, setBrand, onClose }) {
  return <div className="form-backdrop" onClick={onClose}><section className="form-dialog customize-dialog" role="dialog" aria-modal="true" aria-labelledby="customize-title" onClick={(event) => event.stopPropagation()}><button className="form-close" onClick={onClose} aria-label="Close"><X size={18}/></button><span className="section-label">MAKE THIS PREVIEW YOURS</span><h2 id="customize-title">A few details.</h2><p>These changes are local to this preview. Sample site content remains illustrative.</p><label>Business name<input value={brand} onChange={(event) => setBrand(event.target.value)} placeholder={category.business}/></label><div className="customize-note"><Check size={16}/> Changes appear immediately in the website preview.</div><button className="quote-action" onClick={onClose}>Done <ArrowRight size={15}/></button></section></div>;
}

function BuilderHeader({ onHome }) { return <header className="builder-header"><a className="siswaa-brand" href="#/" onClick={onHome}><span className="brand-mark">s.</span><span>SISWAA<small>TECHNOLOGIES</small></span></a><div className="builder-crumb-right">WEBSITE COLLECTION · 2026</div></header>; }
function BuilderFooter({ onHome }) { return <footer className="builder-footer"><a className="siswaa-brand" href="#/" onClick={onHome}><span className="brand-mark">s.</span><span>SISWAA<small>TECHNOLOGIES</small></span></a><span>Thoughtful digital experiences for ambitious businesses.</span><a href="#/" onClick={onHome}>BACK TO COLLECTION ↑</a></footer>; }
function ViewportIcon({ size }) { if (size === "mobile") return <span className="viewport-phone"/>; if (size === "tablet") return <span className="viewport-tablet"/>; return <span className="viewport-desktop"/>; }
function serviceDescription(category, index) { const copy = ["A considered starting point, shaped around your needs and the details that matter.", "Clear guidance from first conversation to a result you feel good about.", "A thoughtful process, with room for questions along the way.", "Careful work and clear communication at every step.", "Practical options, personal attention, and a useful next step.", "Made to fit the way you live, work, and do business."]; return copy[(index + category.id.length) % copy.length]; }
function testimonialFor(id) { const samples = { restaurant: "The room felt welcoming from the moment we arrived, and every detail made the evening feel special.", photographer: "They found the little moments we would have missed. Looking back at the images feels like being there again.", architecture: "A thoughtful process from the first sketches through to the details that make this place feel like ours.", "interior-design": "They listened closely and gave our home a new rhythm without losing the things we love about it.", pets: "A kind, unhurried experience. We left with clear answers and a happier, more settled pet.", ecommerce: "Simple, useful, and beautifully made. The kind of thing you reach for every single day.", plumbing: "Clear communication and a considerate experience from the first call through to the finished work.", electrical: "They talked us through the options and made a complicated project feel straightforward.", clinic: "A welcoming experience and time to talk through the questions that mattered to me.", hospital: "Clear directions and thoughtful support made it easier to understand the next step.", "beauty-parlour": "A calm, considered visit. I left feeling refreshed and very much like myself." }; return `“${samples[id]}”`; }
function faqFor(category) { return [{ question: `How do I get started with ${category.business}?`, answer: `Use the ${category.action.toLowerCase()} button to share a few details. This demo form shows how a request flow can work; connect a booking or CRM service to receive real enquiries.` }, { question: "Can I tailor this service to what I need?", answer: "Absolutely. Every project begins with a conversation about your priorities, timeline, and the details that will make the result work for you." }, { question: "Is the information in this preview verified?", answer: "No. This is illustrative sample content for a template preview. Replace all business details, imagery, testimonials, prices, and claims with verified information before launch." }]; }

export default App;
