import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LINKS } from '../constants/links';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll Spy logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const sectionIds = ['alternatives', 'features', 'how-it-works', 'admin-portal', 'testimonials'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Handle being at the very top (Hero)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on resize if desktop view is reached
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Alternatives', href: '#alternatives', id: 'alternatives' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Admin Portal', href: '#admin-portal', id: 'admin-portal' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  ];

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 68, // Account for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full h-[68px] bg-forest border-b border-sage/20 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-0 text-[22px] font-extrabold tracking-tight">
          <span className="text-white">Client</span>
          <span className="text-sage">Nest</span>
        </a>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center gap-[36px]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative py-2 text-[15px] font-medium transition-colors duration-300 ${isActive ? 'text-sage' : 'text-white/70 hover:text-white'}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sage rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={LINKS.DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="border-[1.5px] border-gold text-gold px-[22px] py-[10px] rounded-full font-semibold hover:bg-gold hover:text-forest transition-all duration-200"
          >
            See Live Demo
          </a>
          <a
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-forest px-[22px] py-[10px] rounded-full font-bold hover:bg-[#C39732] transition-all duration-200 flex items-center gap-2"
          >
            <svg size={16} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[68px] left-0 w-full bg-forest border-b border-sage/20 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleClick(e, link.href);
                    setIsOpen(false);
                  }}
                  className={`text-lg font-medium transition-colors ${activeSection === link.id ? 'text-sage' : 'text-white/70 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-sage/10">
                <a
                  href={LINKS.DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[1.5px] border-gold text-gold px-6 py-3 rounded-full font-semibold text-center hover:bg-gold hover:text-forest transition-all"
                >
                  See Live Demo
                </a>
                <a
                  href={LINKS.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-forest px-6 py-3 rounded-full font-bold text-center hover:bg-[#C39732] transition-all flex items-center justify-center gap-2"
                >
                  <svg size={18} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
