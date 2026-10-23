import React, { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronRight, Heart, Menu, PawPrint, Plus, ShoppingBag, Sparkles, X } from "lucide-react";
import "./pet-experience.css";

const photo = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const portraits = [
  "photo-1552053831-71594a27632d",
  "photo-1573865526739-10659fec78a5",
  "photo-1543466835-00a7907e9de1",
  "photo-1548199973-03cce0bbc87b"
];
const care = ["Wellness visits", "Vaccinations", "Dental care", "Diagnostics", "Grooming", "Senior pet care"];
const questions = [
  ["What should I bring to a first visit?", "Bring any records you have, a list of current medicines, and a few notes about what you would like us to know."],
  ["Can I ask a question before booking?", "Yes. Send a note through the demo request form and the team can follow up once a real contact service is connected."],
  ["Is this a real veterinary clinic?", "No. This is an illustrative website concept. Replace all business information with verified details before launch."]
];

const petDesigns = {
  "01": { className: "curious", name: "The Curious Dog" },
  "02": { className: "trail", name: "Little Wild Ones" },
  "03": { className: "hearth", name: "The Good Life" },
  "04": { className: "play", name: "Paws & Play" },
  "05": { className: "care", name: "Whiskerwell Clinic" }
};

export default function PetExperience({ category, template, brand, cart, setCart, panel, setPanel, setNotice }) {
  const design = petDesigns[template.number] || petDesigns["01"];
  const name = brand.trim() || category.business;
  const request = () => setPanel("site-form");
  const submitRequest = (event) => {
    event.preventDefault();
    setPanel(null);
    setNotice("Your demo request is prepared. Connect a backend to receive real submissions.");
  };

  return <div className={`pet-experience pet-${design.className}`}>
    {template.number === "01" && <CuriousDog name={name} request={request} />}
    {template.number === "02" && <TrailSite name={name} request={request} />}
    {template.number === "03" && <HearthSite name={name} request={request} />}
    {template.number === "04" && <PlaySite name={name} cart={cart} setCart={setCart} setNotice={setNotice} request={request} />}
    {template.number === "05" && <CareSite name={name} request={request} />}
    <PetDisclaimer />
    {panel === "site-form" && <RequestDialog name={name} onClose={() => setPanel(null)} onSubmit={submitRequest} />}
  </div>;
}

function PetHeader({ name, links, action, onAction, variant, cart }) {
  const [open, setOpen] = useState(false);
  return <header className={`pet-header pet-header-${variant}`}>
    <a className="pet-wordmark" href="#pet-home"><span className="pet-mark"><PawPrint size={18}/></span>{name}<small>THOUGHTFUL PET CARE</small></a>
    <button className="pet-menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={19}/> : <Menu size={19}/>}</button>
    <nav className={open ? "pet-nav pet-nav-open" : "pet-nav"}>{links.map((link) => <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav>
    <button className="pet-nav-action" onClick={onAction}>{variant === "play" ? <><ShoppingBag size={15}/> Bag {cart}</> : <>{action}<ArrowUpRight size={15}/></>}</button>
  </header>;
}

function CuriousDog({ name, request }) {
  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState(false);
  const track = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setGaze({ x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 9, y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 7 });
  };
  return <>
    <PetHeader name={name} variant="curious" action="Meet the team" onAction={request} links={[{ label: "Our care", href: "#curious-care" }, { label: "The people", href: "#curious-people" }, { label: "Find us", href: "#curious-visit" }]} />
    <main id="pet-home" className="curious-page">
      <section className="curious-hero">
        <div className="curious-copy"><span className="pet-eyebrow"><span/> A LITTLE MORE HEART IN EVERY VISIT</span><h1>Good care<br/>starts with a <em>hello.</em></h1><p>For the muddy paws, the brave first-timers, and every familiar face in between.</p><div className="pet-actions"><button className="pet-button pet-button-dark" onClick={request}>Plan a visit <ArrowUpRight size={16}/></button><a href="#curious-care">Take a look <ArrowDown size={15}/></a></div><span className="curious-caption">KIND HANDS. CLEAR ANSWERS. ROOM TO SNIFF.</span></div>
        <button className={`dog-portrait ${tilt ? "dog-portrait-tilt" : ""}`} onPointerMove={track} onPointerLeave={() => setGaze({ x: 0, y: 0 })} onClick={() => setTilt(!tilt)} aria-label="Say hello to the curious dog">
          <div className="dog-sun"/><div className="dog-ear dog-ear-left"/><div className="dog-ear dog-ear-right"/><div className="dog-face"><span className="dog-eye dog-eye-left"><i style={{ transform: `translate(${gaze.x}px, ${gaze.y}px)` }}/></span><span className="dog-eye dog-eye-right"><i style={{ transform: `translate(${gaze.x}px, ${gaze.y}px)` }}/></span><span className="dog-muzzle"/><span className="dog-nose"/><span className="dog-smile"/></div><span className="dog-collar"/><span className="dog-portrait-note">Psst. Move your pointer.</span><span className="dog-spark dog-spark-one">✳</span><span className="dog-spark dog-spark-two">✳</span>
        </button>
        <div className="curious-edge"><span>01 / A FRIENDLY FIRST IMPRESSION</span><span>SCROLL TO WANDER ↓</span></div>
      </section>
      <section className="curious-care pet-section" id="curious-care"><div className="pet-section-intro"><span className="pet-eyebrow">CARE, AT THEIR PACE</span><h2>Small check-ins.<br/><em>Big peace of mind.</em></h2><p>Clear next steps and a gentler rhythm, whatever brings you through the door.</p></div><div className="care-lines">{care.slice(0, 5).map((item, index) => <a href="#curious-visit" key={item}><span>0{index + 1}</span><b>{item}</b><ChevronRight size={18}/></a>)}</div></section>
      <section className="curious-people" id="curious-people"><img src={photo(portraits[1])} alt="A relaxed cat at home" loading="lazy"/><div><span className="pet-eyebrow">NO TWO PERSONALITIES ALIKE</span><h2>We make space<br/>for the <em>whole pet.</em></h2><p>Some need a minute. Some arrive like they own the place. We start by noticing who is in front of us and letting the visit follow their lead.</p><button className="pet-text-link" onClick={request}>Get to know us <ArrowUpRight size={15}/></button></div><span className="people-sticker">MORE<br/>SNIFFS<br/>LESS RUSH</span></section>
      <section className="curious-note"><span className="pet-eyebrow">A KIND WORD FROM A DEMO CLIENT</span><blockquote>“We had time to settle in, ask every question, and let Maple explore the room first.”</blockquote><span>JAMIE & MAPLE · FICTIONAL SAMPLE</span></section>
      <section className="curious-faq pet-section"><div><span className="pet-eyebrow">A FEW THINGS PEOPLE ASK</span><h2>Good to <em>know.</em></h2><p>Small practical details can make a first visit feel easier.</p></div><PetFaq /></section>
      <section className="curious-visit" id="curious-visit"><div><span className="pet-eyebrow">YOUR NEXT STEP CAN BE A SMALL ONE</span><h2>Come say <em>hello.</em></h2><p>Tell us a little about your companion and we can help plan a comfortable first visit.</p><button className="pet-button pet-button-light" onClick={request}>Start a request <ArrowUpRight size={16}/></button></div><div className="visit-hours"><b>GOOD TO KNOW</b><span>Weekdays · 8:30 am — 5:30 pm</span><span>Sample hours · confirm before launch</span><a href="#pet-home">Back to the top ↑</a></div></section>
    </main>
    <PetFooter name={name} variant="curious" links={[["Our care", "#curious-care"], ["The people", "#curious-people"], ["Plan a visit", "#curious-visit"]]}/>
  </>;
}

function TrailSite({ name, request }) {
  const [stop, setStop] = useState(0);
  const stops = ["The first hello", "A little check-in", "Back to adventure"];
  return <>
    <PetHeader name={name} variant="trail" action="Plan a visit" onAction={request} links={[{ label: "The trail", href: "#trail-map" }, { label: "Our pack", href: "#trail-pack" }, { label: "Field notes", href: "#trail-notes" }]} />
    <main id="pet-home" className="trail-page">
      <section className="trail-hero"><div className="trail-sky"><img src={photo(portraits[0], 1500)} alt="A dog ready for a walk in the countryside"/><div className="trail-scrim"/></div><div className="trail-hero-copy"><span className="pet-eyebrow">GOOD DAYS START OUTSIDE</span><h1>For every<br/><em>little wild one.</em></h1><p>Care for the companions who make the long way home the best part.</p><a href="#trail-map" className="trail-down">FOLLOW THE PAWPRINTS <ArrowDown size={15}/></a></div><div className="trail-stamp">TAKE<br/>THE<br/>SCENIC<br/>ROUTE</div><svg className="trail-line" viewBox="0 0 1000 160" preserveAspectRatio="none" aria-hidden="true"><path d="M4 112 C120 12 200 150 330 76 S540 16 640 99 820 152 996 42"/></svg></section>
      <section className="trail-map" id="trail-map"><div className="trail-map-heading"><span className="pet-eyebrow">A THREE-STOP KIND OF DAY</span><h2>Care along<br/>the <em>way.</em></h2></div><div className="trail-stops">{stops.map((label, index) => <button key={label} className={stop === index ? "trail-stop trail-stop-active" : "trail-stop"} onClick={() => setStop(index)}><span className="trail-stop-number">0{index + 1}</span><span className="trail-stop-paw"><PawPrint size={19}/></span><b>{label}</b><small>{["A calm introduction for new friends.", "Time to listen, check, and make a plan.", "A clear note to take home with you."][index]}</small></button>)}</div><div className="trail-selected"><span>YOU ARE HERE</span><b>{stops[stop]}</b><p>{["Start with a little room to look around.", "We can talk through routines and questions at your pace.", "Leave with a useful next step and a happier tail."][stop]}</p></div></section>
      <section className="trail-pack" id="trail-pack"><img src={photo(portraits[3])} alt="Two dogs exploring together" loading="lazy"/><div><span className="pet-eyebrow">THE BEST PART IS WHO YOU MEET</span><h2>Every good trail<br/>has a <em>good pack.</em></h2><p>Meet a small team of animal people who believe care can be thoughtful, practical, and full of tiny victories.</p><div className="trail-team"><span><b>Rae & Juniper</b><small>Fictional demo team</small></span><span><b>Alex & Oat</b><small>Fictional demo team</small></span></div></div></section>
      <section className="trail-cards"><div><span>01 / A SOFTER START</span><h3>New-pet visits</h3><p>Time to share the backstory and make the room feel less unfamiliar.</p></div><div><span>02 / KEEP WANDERING</span><h3>Everyday wellness</h3><p>Useful check-ins for changing seasons, routines, and life stages.</p></div><div><span>03 / WHEN PLANS CHANGE</span><h3>Support & follow-up</h3><p>Clear explanations and a way to ask what comes next.</p></div></section>
      <section className="trail-notes" id="trail-notes"><span className="pet-eyebrow">FIELD NOTE · FICTIONAL SAMPLE</span><blockquote>“They let Fern take the room at her own pace. By the end, she had claimed the sunny spot.”</blockquote><span>DEV & FERN · SAMPLE STORY</span></section>
      <section className="trail-end"><div><span className="pet-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready when<br/><em>you are.</em></h2></div><button className="pet-button pet-button-dark" onClick={request}>Plan a first visit <ArrowUpRight size={16}/></button></section>
    </main>
    <PetFooter name={name} variant="trail" links={[["The trail", "#trail-map"], ["Our pack", "#trail-pack"], ["Field notes", "#trail-notes"]]}/>
  </>;
}

function HearthSite({ name, request }) {
  const [reveal, setReveal] = useState(48);
  return <>
    <PetHeader name={name} variant="hearth" action="A first visit" onAction={request} links={[{ label: "Our approach", href: "#hearth-approach" }, { label: "At home", href: "#hearth-gallery" }, { label: "Contact", href: "#hearth-contact" }]} />
    <main id="pet-home" className="hearth-page">
      <section className="hearth-hero"><img src={photo(portraits[2], 1800)} alt="A dog resting in soft afternoon light"/><div className="hearth-overlay"/><div className="hearth-heading"><span className="pet-eyebrow">A MORE PERSONAL KIND OF CARE</span><h1>At home<br/>in good <em>company.</em></h1><a href="#hearth-approach">A quieter way to care <ArrowDown size={15}/></a></div><span className="hearth-vertical">PAW & WHISKER · EST. AS A DEMO CONCEPT</span></section>
      <section className="hearth-statement" id="hearth-approach"><span className="pet-eyebrow">LESS RUSH. MORE LISTENING.</span><p>Good care is made of small things: a familiar voice, an extra minute, a clear explanation you can carry home.</p><span>THE WAY WE LIKE TO BEGIN</span></section>
      <section className="hearth-reveal"><div className="hearth-reveal-copy"><span className="pet-eyebrow">A LITTLE ROOM TO SETTLE</span><h2>The visit should feel<br/>like <em>you belong.</em></h2><p>Move the line to reveal a small moment of calm. Every real pet has their own idea of comfortable.</p><label className="hearth-range-label" htmlFor="comfort-range">A little more room to settle</label><input id="comfort-range" type="range" min="15" max="85" value={reveal} onChange={(event) => setReveal(Number(event.target.value))}/></div><div className="hearth-slider" style={{ "--reveal": `${reveal}%` }}><img src={photo(portraits[0])} alt="A happy dog outdoors"/><div className="hearth-slider-after"><img src={photo(portraits[2])} alt="A calm dog resting at home"/></div><span className="hearth-slider-tag">OUT IN THE WORLD</span><span className="hearth-slider-tag hearth-slider-tag-after">AT YOUR PACE</span><span className="hearth-slider-divider"/></div></section>
      <section className="hearth-gallery" id="hearth-gallery"><div className="hearth-gallery-title"><span className="pet-eyebrow">LITTLE MOMENTS, WELL KEPT</span><h2>Life with <em>them.</em></h2></div><figure><img src={photo(portraits[1])} alt="A cat enjoying a quiet afternoon" loading="lazy"/><figcaption>01 / THE SUNNY WINDOW</figcaption></figure><figure><img src={photo(portraits[3])} alt="Dogs sharing a walk" loading="lazy"/><figcaption>02 / THE LONG WAY HOME</figcaption></figure></section>
      <section className="hearth-quote"><span>“</span><blockquote>“A gentle visit, with all the time we needed to ask the small questions.”</blockquote><small>MORGAN & LEO · FICTIONAL SAMPLE</small></section>
      <section className="hearth-contact" id="hearth-contact"><div><span className="pet-eyebrow">WHEN IT FEELS RIGHT</span><h2>We can begin<br/>with <em>hello.</em></h2></div><div><p>Share what would help your companion feel more at ease. We will use this demo to show the shape of a thoughtful first conversation.</p><button className="pet-button pet-button-light" onClick={request}>Start a conversation <ArrowUpRight size={15}/></button></div></section>
    </main>
    <PetFooter name={name} variant="hearth" links={[["Our approach", "#hearth-approach"], ["At home", "#hearth-gallery"], ["Contact", "#hearth-contact"]]}/>
  </>;
}

function PlaySite({ name, cart, setCart, setNotice, request }) {
  const products = ["Sniff & seek", "Soft landing", "Good walk kit", "Window watcher"];
  return <>
    <PetHeader name={name} variant="play" cart={cart} action="Shop the drop" onAction={() => document.getElementById("play-shop")?.scrollIntoView({ behavior: "smooth" })} links={[{ label: "The good stuff", href: "#play-shop" }, { label: "Our story", href: "#play-story" }, { label: "Care club", href: "#play-club" }]} />
    <main id="pet-home" className="play-page">
      <section className="play-hero"><div className="play-copy"><span className="pet-eyebrow">FOR THE FOUR-LEGGED ROOMMATE</span><h1>More play.<br/>Less <em>good dog.</em></h1><p>Useful little things for big personalities. No perfect paws required.</p><button className="pet-button pet-button-dark" onClick={() => document.getElementById("play-shop")?.scrollIntoView({ behavior: "smooth" })}>Shop the good stuff <ArrowDown size={15}/></button><span className="play-handnote">approved by nose</span></div><div className="play-hero-art"><img src={photo(portraits[0])} alt="A cheerful dog ready for play"/><span className="play-burst">WOOF!</span><span className="play-orbit play-orbit-one">✳</span><span className="play-orbit play-orbit-two">✦</span></div></section>
      <div className="play-marquee" aria-label="Good things for good pets"><span>WALK · SNIFF · REPEAT · WALK · SNIFF · REPEAT · </span></div>
      <section className="play-shop" id="play-shop"><div className="play-shop-head"><div><span className="pet-eyebrow">THE TINY JOY DEPARTMENT</span><h2>Made for <em>their kind.</em></h2></div><span>DEMO GOODS · 01—04</span></div><div className="play-products">{products.map((product, index) => <article key={product} className={`play-product play-product-${index + 1}`}><div className="play-product-image"><img src={photo(portraits[index])} alt={`${product}, sample pet product concept`} loading="lazy"/><button aria-label={`Add ${product} to demo bag`} onClick={() => { setCart(cart + 1); setNotice(`${product} added to your demo bag.`); }}>+</button><span>0{index + 1}</span></div><small>{["A LITTLE PUZZLE", "SOFT SPOT", "OUT THE DOOR", "HOME BASE"][index]}</small><h3>{product}</h3><p>Sample product content · demo only</p></article>)}</div><p className="play-demo-note">Cart changes are local to this preview. No purchase or payment is made.</p><button className="pet-text-link" onClick={() => setNotice(`Demo bag: ${cart} item${cart === 1 ? "" : "s"}. Checkout is not connected.`)}>Open demo bag ({cart}) <ShoppingBag size={15}/></button></section>
      <section className="play-story" id="play-story"><img src={photo(portraits[2])} alt="A curious cat at home" loading="lazy"/><div><span className="pet-eyebrow">A SMALL BRAND WITH A SOFT SPOT</span><h2>For the little<br/><em>everyday chaos.</em></h2><p>Made-up goods for very real routines. A place for useful things, silly moments, and the pets who keep us company through all of it.</p><button className="pet-text-link" onClick={request}>Ask us a question <ArrowUpRight size={15}/></button></div></section>
      <section className="play-customer-note"><span>FROM THE DEMO MAILBAG</span><blockquote>“The treat pouch made our walk routine a little less chaotic. Miso approves of the pockets.”</blockquote><small>RILEY & MISO · FICTIONAL SAMPLE</small></section>
      <section className="play-club" id="play-club"><Sparkles size={23}/><span className="pet-eyebrow">THE SNIFF NOTES CLUB</span><h2>Good mail for<br/><em>good company.</em></h2><form onSubmit={(event) => { event.preventDefault(); setNotice("Thanks for joining the demo list. No email was sent."); }}><label className="sr-only" htmlFor="pet-email">Email address</label><input id="pet-email" type="email" required placeholder="Your email address"/><button aria-label="Join demo list"><ArrowRight size={18}/></button></form><small>Sample signup only. No emails are sent.</small></section>
    </main>
    <PetFooter name={name} variant="play" links={[["The good stuff", "#play-shop"], ["Our story", "#play-story"], ["Care club", "#play-club"]]}/>
  </>;
}

function CareSite({ name, request }) {
  const [active, setActive] = useState("Before your visit");
  const steps = ["Before your visit", "Meet the team", "Your next step"];
  return <>
    <PetHeader name={name} variant="care" action="Request an appointment" onAction={request} links={[{ label: "Care options", href: "#care-options" }, { label: "Patient guide", href: "#care-guide" }, { label: "Visit us", href: "#care-visit" }]} />
    <main id="pet-home" className="care-page">
      <section className="care-dashboard"><div className="care-dashboard-copy"><span className="pet-eyebrow">A NEIGHBORHOOD VETERINARY CONCEPT</span><h1>Good care,<br/><em>made clear.</em></h1><p>Thoughtful veterinary visits for the companions who make a house feel like home.</p><button className="pet-button pet-button-blue" onClick={request}><CalendarDays size={16}/> Request an appointment</button><div className="care-note"><span className="care-dot"/> Demo clinic preview · not a live provider</div></div><div className="care-appointment-card"><div className="care-card-top"><span>YOUR VISIT, AT A GLANCE</span><CalendarDays size={17}/></div><b>Start with what matters.</b><p>Tell us what you have noticed and what would make this visit feel useful.</p><button onClick={request}>Begin a request <ArrowRight size={15}/></button><small>Frontend demo · no appointment is booked</small></div></section>
      <section className="care-options" id="care-options"><div className="care-section-title"><span className="pet-eyebrow">CARE FOR EVERYDAY LIFE</span><h2>Find your <em>starting point.</em></h2><p>Bring a question, a new routine, or just the feeling that something has changed.</p></div><div className="care-options-grid">{care.slice(0, 4).map((item, index) => <button key={item} onClick={request}><span>0{index + 1} / CARE PATH</span><b>{item}</b><ArrowUpRight size={17}/></button>)}</div></section>
      <section className="care-guide" id="care-guide"><div className="care-guide-header"><span className="pet-eyebrow">A VISIT, WITHOUT THE MYSTERY</span><h2>One step<br/>at a <em>time.</em></h2><div className="care-tabs" role="tablist" aria-label="Appointment steps">{steps.map((step) => <button role="tab" aria-selected={active === step} className={active === step ? "care-tab-active" : ""} key={step} onClick={() => setActive(step)}>{step}</button>)}</div></div><div className="care-guide-panel"><span>0{steps.indexOf(active) + 1}</span><div><h3>{active}</h3><p>{active === steps[0] ? "Gather any notes or records you have. You do not need to have every answer before you arrive." : active === steps[1] ? "We will make room to hear what you have noticed and help your companion settle in." : "Leave with a clear summary of the conversation and an easy way to follow up."}</p></div><Check size={22}/></div></section>
      <section className="care-team"><div><span className="pet-eyebrow">MEET YOUR CARE TEAM</span><h2>People who<br/><em>notice the details.</em></h2><p>Sample team portraits and names below are fictional placeholders, ready to be replaced with verified staff profiles.</p></div><div className="care-team-profile"><img src={photo(portraits[1])} alt="Illustrative portrait for a fictional clinic team member" loading="lazy"/><b>Jordan Lee</b><span>Fictional demo team member</span></div><div className="care-team-profile"><img src={photo(portraits[3])} alt="Illustrative portrait for a fictional clinic team member" loading="lazy"/><b>Sam Rivera</b><span>Fictional demo team member</span></div></section>
      <section className="care-faq"><div><span className="pet-eyebrow">PATIENT GUIDE</span><h2>A few things<br/>to <em>know.</em></h2></div><PetFaq /></section>
      <section className="care-visit" id="care-visit"><span className="pet-eyebrow">DEMO LOCATION · REPLACE BEFORE LAUNCH</span><h2>Here for the<br/><em>next step.</em></h2><p>Weekdays · sample hours 8:30 am to 5:30 pm<br/>Address and contact details to be confirmed</p><button className="pet-button pet-button-blue" onClick={request}>Request an appointment <ArrowUpRight size={15}/></button></section>
    </main>
    <PetFooter name={name} variant="care" links={[["Care options", "#care-options"], ["Patient guide", "#care-guide"], ["Visit us", "#care-visit"]]}/>
  </>;
}

function PetFaq() {
  const [open, setOpen] = useState(0);
  return <div className="pet-faq-list">{questions.map(([question, answer], index) => <div key={question}><button aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>{question}{open === index ? <X size={15}/> : <Plus size={15}/>}</button>{open === index && <p>{answer}</p>}</div>)}</div>;
}

function PetFooter({ name, variant, links }) {
  return <footer className={`pet-footer pet-footer-${variant}`}><a className="pet-wordmark" href="#pet-home"><span className="pet-mark"><PawPrint size={18}/></span>{name}<small>THOUGHTFUL PET CARE</small></a><p>Kind people. Clear answers. Care at your pet's pace.<br/>Illustrative website concept by Siswaa Technologies.</p><nav>{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><span>© 2026 · DEMO CONCEPT</span></footer>;
}

function PetDisclaimer() {
  return <div className="pet-disclaimer">Sample website preview · business details and stories are illustrative, not verified claims.</div>;
}

function RequestDialog({ name, onClose, onSubmit }) {
  return <div className="pet-dialog-backdrop" onClick={onClose}><section className="pet-request-dialog" role="dialog" aria-modal="true" aria-labelledby="pet-request-title" onClick={(event) => event.stopPropagation()}><button className="pet-request-close" onClick={onClose} aria-label="Close request form"><X size={18}/></button><span className="pet-eyebrow">FRONTEND-ONLY DEMO</span><h2 id="pet-request-title">A good place<br/>to <em>begin.</em></h2><p>Tell {name} a little about your companion. This request will not be sent to a real clinic.</p><form onSubmit={onSubmit}><label>Your name<input required autoComplete="name" placeholder="Name"/></label><label>Email<input type="email" required autoComplete="email" placeholder="you@example.com"/></label><label>What would help today?<select defaultValue=""><option value="" disabled>Choose a starting point</option>{care.map((item) => <option key={item}>{item}</option>)}</select></label><button className="pet-button pet-button-dark" type="submit">Prepare demo request <ArrowRight size={15}/></button></form><small><Check size={13}/> No booking, email, or medical advice is provided.</small></section></div>;
}