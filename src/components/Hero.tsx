import { motion } from 'motion/react';
import face1 from '../assets/aiface1.webp';
import face2 from '../assets/aiface2.webp';
import face3 from '../assets/aiface3.webp';
import face4 from '../assets/aiface4.webp';
import face5 from '../assets/aiface5.webp';

function Typewriter({ text }: { text: string }) {
  const characters = text.split("");
  
  return (
    <span className="inline-block whitespace-pre">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: 0.8 + (index * 0.05), // Start after the main headline animation
            ease: "easeIn"
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: 0.8
        }}
        className="inline-block w-[3px] h-[0.8em] bg-sage ml-1 translate-y-[0.1em]"
      />
    </span>
  );
}

export default function Hero() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-forest overflow-hidden flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Office" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/90 to-forest" />
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(82,183,136,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(82,183,136,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px'
        }}
      />

      {/* Soft Glow Top Right */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none translate-x-1/3 -translate-y-1/3"
      >
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(82,183,136,0.15)_0%,transparent_65%)]" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 max-w-[760px] text-center pt-[100px] pb-[100px]">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sage/12 border border-sage/30 mb-8">
          <motion.div 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-sage shadow-[0_0_8px_rgba(82,183,136,0.6)]"
          />
          <span className="text-sage text-[11px] font-bold tracking-[0.1em] uppercase">
            Built for Australian Buyer's Agents
          </span>
        </div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white font-extrabold leading-[1.05] tracking-[-0.03em] mb-5" 
          style={{ fontSize: 'clamp(38px, 5.5vw, 68px)' }}
        >
          The All-In-One <br />
          <span className="text-sage italic">
            <Typewriter text="Client Portal" />
          </span> <br />
          for Buyer's Agents.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white/70 mx-auto max-w-[560px] leading-[1.8] mb-10 text-lg" 
        >
          Stop sending manual updates on WhatsApp and Email. Manage everything in one premium branded portal.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-[14px] mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://cp-demo.boltblazers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-forest px-8 py-3.5 rounded-full font-bold text-[15px] transition-all"
          >
            See Live Demo →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/9470171298?text=hi,%20want%20to%20know%20more%20about%20client%20nest"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[1.5px] border-white/30 text-white px-8 py-3.5 rounded-full font-medium hover:border-white hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <svg size={20} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact Us
          </motion.a>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="flex items-center -space-x-2">
            {[face1, face2, face3, face4, face5].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + (i * 0.1) }}
                className="w-8 h-8 rounded-full overflow-hidden border-2 border-forest"
              >
                <img src={img} alt={`Agent ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-white/50 text-[13px]"
          >
            Trusted by buyer's agents across QLD, VIC & WA
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom Highlight Band */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 border-t border-sage/20 py-[18px] px-6 backdrop-blur-sm">
        <div className="container mx-auto text-center flex items-center justify-center gap-2">
          <p className="text-white/90 text-[13px] font-medium">
            ClientNest offers more than generic portals for a fraction of the cost.
          </p>
        </div>
      </div>
    </section>
  );
}
