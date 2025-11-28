import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Menu, X, MousePointer2 } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-accent py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`font-display text-3xl uppercase tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
          Pixel & Co
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-body font-bold text-sm uppercase tracking-wide transition-colors relative group ${isScrolled ? 'text-white hover:text-primary' : 'text-white hover:text-primary'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden text-white">
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-accent absolute w-full border-t border-neutral-800"
          >
            <div className="flex flex-col p-6 space-y-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileOpen(false)}
                  className="font-display text-2xl text-white hover:text-primary uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-accent">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 bg-hero-pattern bg-cover bg-center"
        style={{ y: y1, scale: 1.1 }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/50 to-accent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-black text-white uppercase tracking-tighter mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.9 }}
        >
          Ignite Your Brand with <span className="text-primary">Bold Digital Magic</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-neutral-200 text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          We craft immersive web experiences, striking branding, and motion graphics that propel tech startups and e-commerce brands into the spotlight. Authentic, animated, and unapologetically premium.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-accent font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#FFCB00] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,214,10,0.4)]">
            Launch Your Vision Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary"
      >
        <MousePointer2 size={32} />
      </motion.div>
    </section>
  );
};

const About = () => {
  const values = [
    "Authenticity First: We strip away the fluff for genuine stories that resonate.",
    "Bold Innovation: Pushing boundaries with motion graphics and immersive tech.",
    "Premium Craftsmanship: Every pixel polished to elevate your dynamic presence."
  ];

  return (
    <section id="about" className="py-32 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-black text-accent uppercase tracking-tighter mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
            We Are <span className="text-primary">Digital Rebels</span>
          </h2>
          <p className="font-body text-neutral-700 text-lg mb-8 leading-relaxed">
            Pixel & Co was born from the chaos of innovation, where forward-thinking founders demanded more than static sites—they craved dynamic worlds that pulse with energy. We're a crew of digital rebels blending minimalism with bold animations to deliver experiences that captivate and convert. For tech startups and e-commerce trailblazers aged 25-40, we turn bold ideas into premium realities that stand out in a crowded digital arena.
          </p>
          <ul className="space-y-4">
            {values.map((val, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start font-body font-medium text-neutral-800"
              >
                <span className="bg-primary p-1 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Check size={14} className="text-accent" />
                </span>
                {val}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute top-4 left-4 w-full h-full border-2 border-primary z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
            alt="Team Collaboration" 
            className="relative z-10 w-full h-[600px] object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Bold Branding",
      desc: "Forge an identity that's magnetic and memorable, infused with authentic vibes and premium edge for your tech or e-commerce venture.",
      cta: "Claim Your Brand Power",
      img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Immersive Web Design",
      desc: "Design dynamic sites that blend minimalism with subtle animations, creating seamless, user-obsessed experiences tailored for startups on the rise.",
      cta: "Design Your Digital Empire",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Motion Graphics Mastery",
      desc: "Bring your vision to life with energetic animations that add depth and excitement, perfect for e-commerce storytelling and tech demos.",
      cta: "Animate Your Edge",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-accent uppercase tracking-tighter text-center mb-24"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white border border-neutral-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 mb-8 overflow-hidden bg-neutral-100">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-4 uppercase">{service.title}</h3>
              <p className="font-body text-neutral-600 mb-8">{service.desc}</p>
              <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors">
                {service.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { name: "TechForge", desc: "Sleek e-commerce site with animated product flows", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
    { name: "NovaStart", desc: "Bold branding overhaul for a fintech startup", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2536&auto=format&fit=crop" },
    { name: "VibeCart", desc: "Minimalist web design with premium animations", img: "https://images.unsplash.com/photo-1481487484168-9b930d5b7d9f?q=80&w=2670&auto=format&fit=crop" },
    { name: "PulseAI", desc: "Motion graphics campaign that turned static demos into captivating experiences", img: "https://images.unsplash.com/photo-1614850523060-8da1d56e37ad?q=80&w=2670&auto=format&fit=crop" },
  ];

  return (
    <section id="portfolio" className="py-32 bg-accent text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="font-display font-black uppercase tracking-tighter mb-6"
             style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Our Bold <span className="text-primary">Creations</span> in Action
          </motion.h2>
          <p className="font-body text-neutral-400 max-w-2xl mx-auto text-lg">
            Dive into a showcase of premium projects where we've fused motion graphics, immersive design, and authentic branding to launch dynamic brands into orbit. Each one pulses with energy and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                 <img 
                   src={project.img} 
                   alt={project.name} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
                 />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="font-display text-3xl text-primary uppercase mb-2">{project.name}</h3>
                <p className="font-body text-white">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-primary">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-accent uppercase tracking-tighter mb-8"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Ready to <span className="text-white">Electrify</span> Your Brand?
        </motion.h2>
        <p className="font-body text-accent font-medium text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          Let's collaborate on something bold and premium. Share your vision, and we'll craft the immersive digital strategy your innovative startup deserves. No cookie-cutter solutions—just energetic, trend-setting magic.
        </p>
        
        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="w-full p-4 bg-white/90 border-none placeholder-neutral-500 focus:ring-4 focus:ring-black/20 outline-none transition-all" />
            <input type="email" placeholder="Email" className="w-full p-4 bg-white/90 border-none placeholder-neutral-500 focus:ring-4 focus:ring-black/20 outline-none transition-all" />
          </div>
          <textarea placeholder="Tell us about your bold vision" rows="4" className="w-full p-4 bg-white/90 border-none placeholder-neutral-500 focus:ring-4 focus:ring-black/20 outline-none transition-all"></textarea>
          <button className="w-full py-5 bg-accent text-white font-display uppercase text-xl tracking-widest hover:bg-black/80 hover:scale-[1.02] transition-all shadow-xl">
            Spark the Conversation Today
          </button>
        </motion.form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-accent py-12 border-t border-neutral-800">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <p className="font-display text-2xl text-white uppercase tracking-tighter mb-4 md:mb-0">Pixel & Co</p>
      <p className="font-body text-neutral-500 text-sm">© 2024 Pixel & Co. All rights reserved. Premium Digital Craftsmanship.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-white selection:bg-primary selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;