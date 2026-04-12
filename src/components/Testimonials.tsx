import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

import pujaVishalImg from '../assets/puja_vihsal.jpg';
import liamImg from '../assets/Liam.png';
import cristinaImg from '../assets/Cristina Bastos.jpeg';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const testimonials = [
    {
      quote: "We were spending $300 AUD monthly for the zoho creator portal. ClientNest has reduced that to one third, saving us almost $2,500 AUD per year.",
      photo: pujaVishalImg,
      name: "Puja & Vishal",
      title: "Buyersmatch.com.au · Australia"
    },
     {
      quote: "The transparency builds a level of trust we simply couldn't achieve manually. Best investment we've made this year.",
      photo: cristinaImg,
      name: "Cristina Bastos",
      title: "Buyer's Agent · USA"
    },
    {
      quote: "Clients feel we are very advanced because many competitors are still using Trello or sharing updates on WhatsApp. I'm now getting more referrals because clients see our systematic approach.",
      photo: liamImg,
      name: "Liam",
      title: "Buyer's Agent · Canada"
    },
   
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" ref={containerRef} className="bg-white py-[100px] px-6">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[56px]">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-[22px] h-[2px] bg-sage" />
            <span className="text-sage text-[11px] font-bold uppercase tracking-[0.15em]">
              What Agents Are Saying
            </span>
          </div>
          <h2 className="text-forest font-extrabold leading-[1.15] text-center" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            The Portal Their Clients <br />
            Can't Stop Talking About.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-[56px] bg-cream border border-border rounded-[32px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 items-stretch"
            >
              {/* Big Photo */}
              <div className="h-[400px] lg:h-[600px] relative overflow-hidden">
                <img 
                  src={testimonials[currentIndex].photo} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent lg:hidden" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-16 flex flex-col justify-center relative">
                {/* Quote Decoration */}
                <motion.div 
                  style={{ y: quoteY }}
                  className="absolute top-10 right-10 text-sage opacity-[0.08] text-[160px] font-black pointer-events-none leading-none select-none hidden lg:block"
                >
                  "
                </motion.div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-forest text-[20px] lg:text-[24px] leading-[1.6] italic font-medium mb-8">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col">
                    <span className="text-forest font-extrabold text-[18px]">{testimonials[currentIndex].name}</span>
                    <span className="text-muted text-[15px]">{testimonials[currentIndex].title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex gap-3 z-20">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border bg-white text-forest flex items-center justify-center hover:bg-sage hover:border-sage hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-border bg-white text-forest flex items-center justify-center hover:bg-sage hover:border-sage hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-[calc(50%+4rem)] flex gap-2 z-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-sage' : 'w-2 bg-border hover:bg-sage/40'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8" />
      </div>
    </section>
  );
}
