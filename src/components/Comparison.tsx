import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { LINKS } from '../constants/links';

export default function Comparison() {
  const bullets = [
    "Compare up to 4 properties simultaneously",
    "Specs, yields, and pricing side by side",
    "Documents accessible during comparison",
    "Agent notes visible per property",
    "Accept or reject directly from compare view"
  ];

  return (
    <section id="comparison" className="bg-white py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center">
        
        {/* Left Column: Content */}
        <div className="order-1 lg:order-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[22px] h-[2px] bg-sage" />
            <span className="text-sage text-[11px] font-bold uppercase tracking-[0.15em]">
              Side-by-Side Comparison
            </span>
          </div>

          <h2 className="text-forest text-[40px] font-extrabold leading-[1.1] mb-6">
            Compare Properties <br />
            With Confidence.
          </h2>
          
          <p className="text-muted text-lg leading-[1.8] mb-8">
            The all-in-one view for clients to compare specs, financials, and agent notes side by side.
          </p>

          <ul className="mt-7 space-y-3">
            {bullets.slice(0, 3).map((bullet, index) => (
              <li key={index} className="flex items-center gap-3 text-forest font-medium">
                <CheckCircle2 className="text-sage shrink-0" size={20} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <motion.a
            whileHover={{ scale: 1.02 }}
            href={LINKS.DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-gold text-forest px-7 py-3 rounded-full font-bold transition-all"
          >
            See It in Action →
          </motion.a>
        </div>

        {/* Right Column: UI Mockup */}
        <div className="order-2 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-forest rounded-2xl p-5 shadow-2xl"
          >
            {/* Mockup Header */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-white font-bold">Compare Properties</span>
              <span className="bg-sage/20 text-sage text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                3 selected
              </span>
            </div>

            {/* Mockup Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              {/* Property 1 */}
              <div className="bg-white/5 border border-sage/15 rounded-xl p-3.5">
                <div className="h-20 bg-gradient-to-br from-sage/40 to-sage/10 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold tracking-widest">QLD</span>
                </div>
                <p className="text-white font-bold text-[12px] mb-1">Bundaberg QLD</p>
                <p className="text-white/60 text-[11px] mb-2">3 🛏 2 🛁 1 🚗</p>
                <p className="text-gold font-bold text-[13px] mb-1">$485k – $510k</p>
                <p className="text-sage text-[11px] mb-3">4.7% yield</p>
                <span className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Pending
                </span>
              </div>

              {/* Property 2 */}
              <div className="bg-white/5 border border-sage/15 rounded-xl p-3.5">
                <div className="h-20 bg-gradient-to-br from-sage/40 to-sage/10 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold tracking-widest">QLD</span>
                </div>
                <p className="text-white font-bold text-[12px] mb-1">Townsville QLD</p>
                <p className="text-white/60 text-[11px] mb-2">3 🛏 2 🛁 2 🚗</p>
                <p className="text-gold font-bold text-[13px] mb-1">$520k – $545k</p>
                <p className="text-sage text-[11px] mb-3">5.1% yield</p>
                <span className="inline-block bg-sage/10 text-sage text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Accepted ✓
                </span>
              </div>

              {/* Property 3 */}
              <div className="bg-white/5 border border-sage/15 rounded-xl p-3.5">
                <div className="h-20 bg-gradient-to-br from-sage/40 to-sage/10 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold tracking-widest">QLD</span>
                </div>
                <p className="text-white font-bold text-[12px] mb-1">Mackay QLD</p>
                <p className="text-white/60 text-[11px] mb-2">4 🛏 2 🛁 2 🚗</p>
                <p className="text-gold font-bold text-[13px] mb-1">$590k – $620k</p>
                <p className="text-sage text-[11px] mb-3">4.9% yield</p>
                <span className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Pending
                </span>
              </div>
            </div>

            {/* Mockup Footer */}
            <button className="w-full mt-5 bg-sage text-forest py-2.5 rounded-lg text-[12px] font-bold hover:bg-sage/90 transition-colors">
              View Full Comparison
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
