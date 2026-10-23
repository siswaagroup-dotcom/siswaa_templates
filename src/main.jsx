import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Builder from "./App";
import {
  ArrowUpRight, ArrowRight, ArrowDown, Heart, PawPrint, ShieldCheck,
  CalendarDays, Clock3, MapPin, Phone, Menu, X, Check, ChevronDown,
  Stethoscope, Syringe, Activity, Scissors, Microscope, HeartPulse,
  Star, Quote, Plus, Minus, Sparkles, Instagram, Facebook, Send
} from "lucide-react";

const services = [
  { icon: Stethoscope, n:"01", title:"Wellness & checkups", text:"Little check-ins today can mean healthier, happier tomorrows." },
  { icon: Syringe, n:"02", title:"Vaccinations", text:"Personalised vaccination plans to help protect every adventure." },
  { icon: HeartPulse, n:"03", title:"Diagnostics & care", text:"Thoughtful answers and clear next steps when something feels off." },
  { icon: Scissors, n:"04", title:"Grooming & hygiene", text:"Gentle grooming and everyday care, always at your pet's pace." },
  { icon: Activity, n:"05", title:"Surgery & recovery", text:"Careful planning, attentive monitoring, and support all the way." },
  { icon: Microscope, n:"06", title:"Dental health", text:"Comfort-first dental care for brighter smiles and healthier lives." }
];

const faqs = [
  { q:"How do I book my pet's first visit?", a:"Choose a convenient time using our appointment form or call the clinic. If you have previous vaccination records or test results, bring them along so our team can get to know your pet's health history." },
  { q:"What should I bring to the appointment?", a:"Bring any previous medical records, a list of current medicines, and your pet's favourite treats if they help them feel comfortable. Cats should travel in a secure carrier." },
  { q:"Do you accept walk-ins?", a:"Appointments help us give every pet the time they deserve. For urgent concerns, please call before travelling so the team can guide you on the next step." },
  { q:"Can I ask a question before booking?", a:"Of course. Use the contact details below to speak with our team. We can help with appointment planning and general clinic information, but diagnosis and treatment advice require a veterinarian." }
];

function LegacyPetCareDemo() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [petType, setPetType] = useState("Dog");
  const [menuSelection, setMenuSelection] = useState("Wellness checkup");

  const openBooking = (service = "Wellness checkup") => {
    setMenuSelection(service);
    setBookingSent(false);
    setBookingOpen(true);
  };

  const submitBooking = (e) => {
    e.preventDefault();
    setBookingSent(true);
  };

  return <div className="site">
    <div className="announcement">
      <span className="announcement-dot"></span>
      <span>Here for the little paws and the big feelings.</span>
      <a href="#contact">Need help? Talk to our team <ArrowUpRight size={13}/></a>
    </div>

    <header className="header">
      <a href="#home" className="brand" aria-label="Paw and Whisker home">
        <span className="brand-symbol"><PawPrint size={21}/></span>
        <span className="brand-name">paw<span>&</span>whisker<small>VETERINARY CARE</small></span>
      </a>
      <nav className={mobileOpen ? "nav open" : "nav"}>
        <a href="#care" onClick={() => setMobileOpen(false)}>Our care</a>
        <a href="#difference" onClick={() => setMobileOpen(false)}>Why us</a>
        <a href="#team" onClick={() => setMobileOpen(false)}>Our team</a>
        <a href="#stories" onClick={() => setMobileOpen(false)}>Pet stories</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Find us</a>
      </nav>
      <div className="header-right">
        <a className="header-phone" href="tel:+911234567890"><Phone size={15}/><span>+91 12345 67890</span></a>
        <button className="btn btn-dark header-book" onClick={() => openBooking()}>Book a visit <ArrowUpRight size={15}/></button>
        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-bg-shape shape-one"></div><div className="hero-bg-shape shape-two"></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-icon"><Heart size={12} fill="currentColor"/></span> VETERINARY CARE, WITH HEART</div>
          <h1>Big love for<br/>their <em>little lives.</em></h1>
          <p className="hero-text">From first vaccinations to senior snuggles, thoughtful care for every stage, every quirk, and every tail wag.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => openBooking()}>Book an appointment <ArrowUpRight size={16}/></button>
            <a className="link-arrow" href="#care">Explore our care <ArrowDown size={15}/></a>
          </div>
          <div className="hero-reassurance">
            <div className="reassurance-icon"><ShieldCheck size={19}/></div>
            <div><b>Care that feels personal.</b><span>Unhurried visits. Clear answers. Kind people.</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-main"><img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1100&q=85" alt="Happy golden retriever looking at the camera"/></div>
          <div className="photo-tag tag-top"><span className="tag-paw"><PawPrint size={16}/></span><div><b>Every pet matters</b><small>Big hearts, gentle hands</small></div></div>
          <div className="photo-tag tag-bottom"><div className="tiny-avatars"><span>♡</span><span>✳</span><span>+</span></div><div><b>A little more comfort</b><small>From hello to all better</small></div></div>
          <div className="hero-sticker"><span>GOOD</span><b>pets</b><span>GOOD DAYS</span><Heart size={17} fill="currentColor"/></div>
          <div className="hero-sparkle sparkle-one">✳</div><div className="hero-sparkle sparkle-two">✳</div>
        </div>
        <div className="hero-bottomline"><span>COMPASSIONATE BY NATURE</span><span className="bottomline"></span><span>CLINICAL WHEN IT COUNTS</span><span className="bottomline"></span><span>ALWAYS ON YOUR TEAM</span></div>
      </section>

      <section className="quick-info">
        <div className="quick-info-inner">
          <div className="quick-item"><span className="quick-icon"><CalendarDays size={18}/></span><div><small>MAKE TIME FOR HEALTH</small><b>Easy appointment booking</b></div><ArrowUpRight size={15}/></div>
          <div className="quick-item"><span className="quick-icon"><HeartPulse size={18}/></span><div><small>CARE THAT CONNECTS</small><b>From checkups to recovery</b></div><ArrowUpRight size={15}/></div>
          <div className="quick-item"><span className="quick-icon"><MapPin size={18}/></span><div><small>RIGHT AROUND THE CORNER</small><b>Find your nearest care</b></div><ArrowUpRight size={15}/></div>
        </div>
      </section>

      <section className="section services-section" id="care">
        <div className="section-head">
          <div><div className="eyebrow"><span className="eyebrow-dot"></span> HERE FOR EVERY CHAPTER</div><h2>Care for all the ways<br/>they make life <em>better.</em></h2></div>
          <div className="section-head-side"><p>Good care starts with listening. We take time to understand your pet, explain your options, and make the next step feel a little easier.</p><a className="link-arrow" href="#contact">Talk to our team <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="services-grid">{services.map((s,i)=>{const Icon=s.icon;return <article className="service-card" key={s.n}><div className="service-card-top"><span className="service-icon"><Icon size={20}/></span><span className="service-number">{s.n}</span></div><h3>{s.title}</h3><p>{s.text}</p><button className="service-link" onClick={() => openBooking(s.title)} aria-label={"Book "+s.title}>Explore care <ArrowUpRight size={14}/></button><span className="service-card-watermark">{s.n}</span></article>})}</div>
      </section>

      <section className="difference-section" id="difference">
        <div className="difference-image"><img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1000&q=85" alt="A relaxed cat resting comfortably"/><div className="image-caption"><PawPrint size={17}/><span>Small details. A softer experience.</span></div><div className="image-roundel">KIND<br/><em>by</em><br/>nature <Sparkles size={17}/></div></div>
        <div className="difference-copy"><div className="eyebrow"><span className="eyebrow-dot"></span> A DIFFERENT KIND OF VET VISIT</div><h2>Because they're<br/>not <em>just pets.</em></h2><p className="difference-lede">They're the welcome-home dance. The quiet company. The family member who can't tell us what's wrong.</p><p className="difference-body">That's why we bring together thoughtful medicine and a gentle approach. We explain what we're doing, respect your pet's pace, and help you feel confident about their care.</p><div className="promise-list"><div><span><Check size={14}/></span><div><b>Time to listen</b><small>Your questions are always welcome.</small></div></div><div><span><Check size={14}/></span><div><b>Clear, honest guidance</b><small>Understand the options and the why.</small></div></div><div><span><Check size={14}/></span><div><b>Care built around them</b><small>Every pet is different. Their care should be, too.</small></div></div></div><a href="#team" className="btn btn-dark">Meet your care team <ArrowUpRight size={15}/></a></div>
      </section>

      <section className="team-section section" id="team">
        <div className="section-head team-head"><div><div className="eyebrow"><span className="eyebrow-dot"></span> THE PEOPLE BEHIND THE PAWS</div><h2>Good humans.<br/><em>Great with animals.</em></h2></div><p>Skilled hands, curious minds, and a whole lot of heart. Our team is here to care for your pet—and support you, too.</p></div>
        <div className="team-grid">
          <article className="team-card team-feature"><div className="team-photo"><img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85" alt="Veterinarian in a white coat"/><span className="team-badge">YOUR PET'S PARTNER</span></div><div className="team-info"><div><h3>Dr. Your Name</h3><p>Lead Veterinarian</p></div><ArrowUpRight size={18}/></div></article>
          <article className="team-card"><div className="team-photo"><img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85" alt="Veterinary professional smiling"/><span className="team-badge">GENTLE BY NATURE</span></div><div className="team-info"><div><h3>Dr. Team Member</h3><p>Veterinary Care</p></div><ArrowUpRight size={18}/></div></article>
          <article className="team-card team-note"><div className="team-note-symbol"><PawPrint size={32}/></div><span className="eyebrow">A NOTE FROM US</span><h3>Every pet deserves to feel safe, seen, and cared for.</h3><p>That's the promise we bring to every appointment, every day.</p><a href="#contact" className="link-arrow">Come say hello <ArrowUpRight size={15}/></a><div className="note-doodle">♡</div></article>
        </div>
        <p className="sample-note">Design preview: replace sample team names and photos with your clinic's verified details before launch.</p>
      </section>

      <section className="testimonial-section" id="stories">
        <div className="testimonial-deco">“</div>
        <div className="testimonial-content"><div className="eyebrow"><span className="eyebrow-dot"></span> KIND WORDS FROM PET PARENTS</div><div className="stars" aria-label="Five stars">★★★★★</div><blockquote>“You can tell they genuinely care. They took time to explain everything, and for the first time, our nervous little rescue felt comfortable at the vet.”</blockquote><div className="review-author"><div className="review-avatar">R</div><div><b>Riya & Milo</b><span>Pet parents · Sample testimonial</span></div><span className="review-mark"><Quote size={18}/></span></div><div className="testimonial-progress"><span></span><span></span><span></span></div></div>
        <div className="testimonial-pet"><img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=85" alt="Happy dog enjoying a sunny day"/><span className="pet-photo-note">A little love goes a long way <Heart size={13} fill="currentColor"/></span></div>
      </section>

      <section className="faq-section section">
        <div className="faq-intro"><div className="eyebrow"><span className="eyebrow-dot"></span> GOOD TO KNOW</div><h2>A few things<br/>you might be <em>wondering.</em></h2><p>Can't find your answer? Our team is happy to help you figure out the next step.</p><a className="link-arrow" href="#contact">Ask us anything <ArrowUpRight size={15}/></a></div>
        <div className="faq-list">{faqs.map((f,i)=><div className={"faq-item "+(faqOpen===i?"faq-active":"")} key={f.q}><button onClick={()=>setFaqOpen(faqOpen===i?-1:i)} aria-expanded={faqOpen===i}><span>{f.q}</span>{faqOpen===i?<Minus size={17}/>:<Plus size={17}/>}</button>{faqOpen===i&&<p>{f.a}</p>}</div>)}</div>
      </section>

      <section className="appointment-cta">
        <div className="cta-blob"></div><div className="cta-content"><div className="eyebrow"><span className="eyebrow-icon"><Heart size={12} fill="currentColor"/></span> THEIR HEALTH IS YOUR PEACE OF MIND</div><h2>Let's make their<br/>next chapter <em>a healthy one.</em></h2><p>Book a visit with a team that treats your pet like the one-of-a-kind family member they are.</p><button className="btn btn-cream" onClick={() => openBooking()}>Book an appointment <ArrowUpRight size={16}/></button><span className="cta-footnote"><ShieldCheck size={14}/> A thoughtful visit starts with a simple hello.</span></div>
        <div className="cta-image"><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85" alt="Two happy dogs outdoors"/><div className="cta-image-label">MORE TAIL WAGS.<br/><em>FEWER WORRIES.</em></div></div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="contact-copy"><div className="eyebrow"><span className="eyebrow-dot"></span> YOUR NEIGHBOURHOOD VET</div><h2>Come as you are.<br/><em>Paws and all.</em></h2><p>We're here to make looking after your best friend feel a little easier. Reach out or stop by—we'd love to meet you both.</p><div className="contact-detail"><span><MapPin size={18}/></span><div><small>COME FIND US</small><b>Your clinic address, Noida, Uttar Pradesh</b><a href="https://maps.google.com/?q=veterinary+clinic+Noida" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={13}/></a></div></div><div className="contact-detail"><span><Clock3 size={18}/></span><div><small>CLINIC HOURS</small><b>Mon – Sat · 9:00 AM – 8:00 PM</b><p>Hours shown are sample content. Confirm before launch.</p></div></div><div className="contact-detail"><span><Phone size={18}/></span><div><small>GIVE US A CALL</small><b>+91 12345 67890</b><a href="tel:+911234567890">Call the clinic <ArrowUpRight size={13}/></a></div></div><div className="emergency-note"><HeartPulse size={18}/><p><b>Is your pet unwell right now?</b><br/>Call the clinic before travelling so we can guide you. For emergencies, contact your nearest available veterinary hospital.</p></div></div>
        <div className="contact-card"><div className="contact-card-top"><span className="contact-icon"><CalendarDays size={19}/></span><span className="eyebrow">LET'S FIND A TIME</span></div><h3>Book a little<br/><em>peace of mind.</em></h3><p>Tell us a little about your pet and we'll help you plan a visit.</p><button className="btn btn-primary contact-book" onClick={() => openBooking()}>Request an appointment <ArrowRight size={16}/></button><div className="contact-card-divider"><span></span><small>OR CALL US DIRECTLY</small><span></span></div><a href="tel:+911234567890" className="contact-card-phone"><Phone size={15}/> +91 12345 67890</a><div className="contact-card-paw"><PawPrint size={90}/></div></div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-main"><a href="#home" className="brand footer-brand"><span className="brand-symbol"><PawPrint size={21}/></span><span className="brand-name">paw<span>&</span>whisker<small>VETERINARY CARE</small></span></a><p>Care that comes from the heart.<br/>For the ones who make us whole.</p><div className="social-links"><a href="#contact" aria-label="Instagram"><Instagram size={17}/></a><a href="#contact" aria-label="Facebook"><Facebook size={17}/></a></div></div>
      <div className="footer-bottom"><span>© 2026 Paw & Whisker. Sample website concept by Siswaa Technologies.</span><div><a href="#care">Services</a><a href="#team">Our team</a><a href="#contact">Contact</a></div><a href="#home" className="back-top">BACK TO TOP ↑</a></div>
    </footer>

    {bookingOpen && <div className="modal-overlay" onClick={() => setBookingOpen(false)}><div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setBookingOpen(false)} aria-label="Close booking form"><X size={18}/></button>
      {bookingSent ? <div className="booking-success"><div className="success-mark"><Check size={25}/></div><div className="eyebrow">REQUEST PREPARED</div><h2>One step closer<br/>to <em>feeling better.</em></h2><p>This demo form is working locally. Connect it to your clinic's booking system, email, or CRM to receive real appointment requests.</p><button className="btn btn-dark" onClick={() => setBookingOpen(false)}>Back to the website <ArrowRight size={16}/></button></div> : <><div className="eyebrow"><span className="eyebrow-dot"></span> LET'S PLAN A VISIT</div><h2 id="booking-title">A little care<br/>goes a <em>long way.</em></h2><p className="booking-sub">Share a few details and your clinic team can follow up to confirm a time.</p><form className="booking-form" onSubmit={submitBooking}><label>Your name<input required placeholder="Pet parent's name"/></label><label>Phone number<input required type="tel" pattern="[0-9+() -]{8,}" placeholder="+91"/></label><div className="form-row"><label>Pet's name<input required placeholder="Their name"/></label><label>They are a<select value={petType} onChange={e=>setPetType(e.target.value)}><option>Dog</option><option>Cat</option><option>Bird</option><option>Rabbit</option><option>Other</option></select></label></div><label>What can we help with?<select value={menuSelection} onChange={e=>setMenuSelection(e.target.value)}>{["Wellness checkup","Vaccinations","Diagnostics & care","Grooming & hygiene","Surgery & recovery","Dental health","Something else"].map(s=><option key={s}>{s}</option>)}</select></label><label>Preferred date<input type="date" min={new Date().toISOString().split("T")[0]}/></label><button className="btn btn-primary booking-submit" type="submit">Request appointment <Send size={15}/></button><small className="form-disclaimer">Demo only: submitting won't contact a real clinic until a backend is connected.</small></form></>}
    </div></div>}
  </div>;
}

createRoot(document.getElementById("root")).render(<Builder />);
