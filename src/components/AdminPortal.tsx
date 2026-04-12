import { Check, Search } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function Counter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function AdminPortal() {
  const features = [
    "Manage all clients in one place",
    "One-click property assignment",
    "Track current & past purchases",
    "Live deal progress tracking",
    "Full activity audit trail"
  ];

  const clients = [
    { initials: "JM", name: "James Mitchell", email: "james.m@example.com", status: "Active", properties: 4 },
    { initials: "ST", name: "Sarah Thompson", email: "sarah.t@example.com", status: "Active", properties: 2 },
    { initials: "RC", name: "Ryan Chen", email: "ryan.c@example.com", status: "Onboarding", properties: 1 },
    { initials: "EW", name: "Emma Wilson", email: "emma.w@example.com", status: "Active", properties: 5 },
    { initials: "DK", name: "David Kumar", email: "david.k@example.com", status: "Active", properties: 3 }
  ];

  return (
    <section id="admin-portal" className="bg-forest py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-sage/12 border border-sage/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sage text-[11px] font-bold uppercase tracking-[0.1em]">
              For Your Team
            </span>
          </div>

          <h2 className="text-white text-[44px] font-extrabold leading-[1.1] mb-6">
            A Powerful Admin Portal <br />
            Your Team Will Actually Use.
          </h2>

          <p className="text-white/65 text-base leading-[1.8] mb-8">
            Empower your team with a full admin portal that gives you complete control over every client experience.
          </p>

          <div className="space-y-3.5 mb-9">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sage flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-white text-[15px]">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/9470171298?text=hi,%20want%20to%20know%20more%20about%20client%20nest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[1.5px] border-gold text-gold px-7 py-3 rounded-full font-semibold hover:bg-gold hover:text-forest transition-all duration-200"
          >
            <svg size={18} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            See Admin Demo →
          </a>
        </motion.div>

        {/* Right Column - Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.05] border border-sage/15 rounded-2xl p-6 md:p-8"
        >
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white/[0.05] rounded-xl p-4 text-center">
              <div className="text-gold text-2xl font-bold">
                <Counter value={24} />
              </div>
              <div className="text-white/40 text-[11px] uppercase tracking-wider font-bold">Total Clients</div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-4 text-center">
              <div className="text-sage text-2xl font-bold">
                <Counter value={18} />
              </div>
              <div className="text-white/40 text-[11px] uppercase tracking-wider font-bold">Active</div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-4 text-center">
              <div className="text-white text-2xl font-bold">
                <Counter value={67} />
              </div>
              <div className="text-white/40 text-[11px] uppercase tracking-wider font-bold">Properties</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-white/[0.06] rounded-xl px-4 py-2.5 flex items-center gap-3 mb-6">
            <Search size={16} className="text-white/40" />
            <input 
              type="text" 
              placeholder="Search clients..." 
              className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-white/40"
              disabled
            />
          </div>

          {/* Client List */}
          <div className="space-y-1">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between py-3 ${index !== clients.length - 1 ? 'border-bottom border-white/6' : ''}`}
                style={{ borderBottom: index !== clients.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {client.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-[13px]">{client.name}</span>
                    <span className="text-white/40 text-[11px]">{client.email}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex bg-sage/15 text-sage text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {client.properties} properties
                  </div>
                  <div className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    client.status === 'Active' ? 'bg-sage/15 text-sage' : 'bg-gold/15 text-gold'
                  }`}>
                    {client.status}
                  </div>
                  <button className="text-white/30 text-[10px] hover:text-white transition-colors">
                    View →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
