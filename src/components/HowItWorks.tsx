import { motion } from 'motion/react';
import { LayoutGrid } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "We Configure Everything",
      body: "We set up your branded portal with your logo and colors. Our team handles every technical detail."
    },
    {
      number: "02",
      title: "Onboard Your First Client",
      body: "Add clients in seconds. They'll receive a login and instant visibility of their property journey."
    },
    {
      number: "03",
      title: "Focus on Finding Properties",
      body: "Assign properties and upload documents. Clients are notified instantly while you focus on finding deals."
    }
  ];

  return (
    <section id="how-it-works" className="bg-cream py-[100px] px-6 overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[64px]">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-[22px] h-[2px] bg-sage" />
            <span className="text-sage text-[11px] font-bold uppercase tracking-[0.15em]">
              Simple to Set Up
            </span>
          </div>
          <h2 className="text-forest font-extrabold leading-[1.15] text-center" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Your All-In-One Portal <br />
            Ready in 3 Steps.
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] w-[80%] h-[2px] z-0">
            <svg width="100%" height="2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M0 1H800"
                stroke="#52B788"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Step Number Circle */}
                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-forest text-[22px] font-extrabold shadow-lg">
                  {step.number}
                </div>
                
                {/* Step Title */}
                <h3 className="text-forest font-bold text-lg mt-5 mb-3">
                  {step.title}
                </h3>
                
                {/* Step Body */}
                <p className="text-muted text-[14px] leading-[1.75] max-w-[260px]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CRM Integration Info Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-[64px] bg-sage/10 border border-sage/30 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6"
        >
          <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center shrink-0">
            <LayoutGrid className="text-white" size={24} />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-forest font-bold text-lg mb-2">
              Integrates with Zoho, HubSpot & More.
            </h4>
            <p className="text-muted text-[15px] leading-relaxed">
              ClientNest syncs directly with your existing CRM. Properties and documents update automatically so your team's workflow stays the same.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
