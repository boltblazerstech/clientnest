import { motion } from 'motion/react';
import { MailX, Folder, UserX, ArrowDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      title: "Scattered Communication",
      body: "Updates scattered across email, WhatsApp, and phone. No single source of truth—just noise.",
      icon: <MailX className="text-[#EF8B8B]" size={24} />,
      borderColor: "border-l-[#EF8B8B]",
      iconBg: "bg-[#EF8B8B]/10"
    },
    {
      title: "Documents Lost in Email",
      body: "Contracts and reports buried in email threads. Impossible to find when they matter most.",
      icon: <Folder className="text-[#F0A500]" size={24} />,
      borderColor: "border-l-[#F0A500]",
      iconBg: "bg-[#F0A500]/10"
    },
    {
      title: "Anxious Buyers Kill Deals",
      body: "Lack of visibility leads to anxiety, second-guessing, and deals falling through at the finish line.",
      icon: <UserX className="text-[#6B7B6C]" size={24} />,
      borderColor: "border-l-[#6B7B6C]",
      iconBg: "bg-[#6B7B6C]/10"
    }
  ];

  return (
    <section id="problem" className="bg-white py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-[22px] h-[2px] bg-sage" />
          <span className="text-sage text-[11px] font-bold uppercase tracking-[0.15em]">
            The Old Way Is Broken
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-forest font-extrabold leading-[1.15] text-center max-w-[640px] mx-auto mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
          Your Clients Are Left in the Dark. <br />
          That's Costing You Referrals.
        </h2>

        {/* Subheadline */}
        <p className="text-muted text-center max-w-[540px] mx-auto text-lg leading-[1.8] mb-[56px]">
          Stop sending scattered updates on WhatsApp and Email. Give your clients a professional, branded source of truth.
        </p>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[56px]">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
              className={`bg-cream border border-border ${problem.borderColor} border-l-4 rounded-xl p-8 transition-all duration-300 group`}
            >
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`w-12 h-12 rounded-full ${problem.iconBg} flex items-center justify-center mb-6 transition-transform`}
              >
                {problem.icon}
              </motion.div>
              <h3 className="text-forest font-bold text-xl mb-4">
                {problem.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {problem.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition Section */}
    
      </div>
    </section>
  );
}
