import { motion } from 'motion/react';
import { MessageSquare, Mail, Layout, Code, Puzzle, X, Check, Minus } from 'lucide-react';
import React from 'react';
import { LINKS } from '../constants/links';

export default function AlternativesComparison() {
  const cards = [
    {
      name: "WhatsApp & Email",
      headline: "Messages get buried. Clients get anxious.",
      body: "No structure. No history. Documents lost in chat. Contracts buried in email threads. Clients message at 10pm because they have no visibility.",
      icon: (
        <div className="flex gap-4">
          <img src="https://cdn.simpleicons.org/whatsapp/%2325D366" alt="WhatsApp" className="w-12 h-12" />
          <img src="https://cdn.simpleicons.org/gmail/%23EA4335" alt="Gmail" className="w-12 h-12" />
        </div>
      ),
      color: "border-red-100 bg-red-50/30"
    },
    {
      name: "Trello / Notion",
      headline: "Looks like a project board. Not a portal.",
      body: "Clients feel like they joined your internal workspace. No branding. No property focus. Referrals do not come from a shared Trello board.",
      icon: (
        <div className="flex gap-4">
          <img src="https://cdn.simpleicons.org/trello/%230079BF" alt="Trello" className="w-12 h-12" />
          <img src="https://cdn.simpleicons.org/notion/%23000000" alt="Notion" className="w-12 h-12" />
        </div>
      ),
      color: "border-forest/10 bg-forest/5"
    },
    {
      name: "Zoho / HubSpot",
      headline: "Months to build. Thousands to maintain.",
      body: "You spend $5,000–$20,000 building something that still needs a developer every time you want to change a field. Then pay monthly forever.",
      icon: (
        <div className="flex gap-4">
          <img src="https://cdn.simpleicons.org/zoho/%23000000" alt="Zoho" className="w-12 h-12" />
          <img src="https://cdn.simpleicons.org/hubspot/%23FF7A59" alt="HubSpot" className="w-12 h-12" />
        </div>
      ),
      color: "border-forest/10 bg-forest/5"
    },
    {
      name: "Generic Portals",
      headline: "Built for everyone. Perfect for no one.",
      body: "Other portal tools are built for agencies, consultants, and coaches — not buyer's agents. No property workflow. No deal timeline. No document vault.",
      icon: <Puzzle size={40} className="text-forest/60" />,
      color: "border-forest/10 bg-forest/5"
    }
  ];

  const tableData = [
    {
      feature: "Client-facing portal",
      others: { status: "fail", text: "Not available" },
      nest: { status: "pass", text: "Fully branded" },
      diff: "They see YOUR brand"
    },
    {
      feature: "Property assignment workflow",
      others: { status: "partial", text: "Manual via email" },
      nest: { status: "pass", text: "One click assign" },
      diff: "Zero friction"
    },
    {
      feature: "Document vault",
      others: { status: "partial", text: "Files in Drive/email" },
      nest: { status: "pass", text: "Organised by property" },
      diff: "Always findable"
    },
    {
      feature: "Deal stage timeline",
      others: { status: "fail", text: "Not available" },
      nest: { status: "pass", text: "Visual progress tracker" },
      diff: "Clients stop asking"
    },
    {
      feature: "Real-time notifications",
      others: { status: "partial", text: "Manual message" },
      nest: { status: "pass", text: "Automatic at every stage" },
      diff: "You never forget"
    },
    {
      feature: "Buyer brief profile",
      others: { status: "fail", text: "Buried in CRM" },
      nest: { status: "pass", text: "Client sees their brief" },
      diff: "They feel understood"
    },
    {
      feature: "Side-by-side comparison",
      others: { status: "fail", text: "Not available" },
      nest: { status: "pass", text: "Compare 2, 3 or 4 properties" },
      diff: "Decisions made faster"
    },
    {
      feature: "Mobile friendly",
      others: { status: "partial", text: "Varies" },
      nest: { status: "pass", text: "Works on any device" },
      diff: "No app needed"
    },
    {
      feature: "Your branding and domain",
      others: { status: "fail", text: "Generic" },
      nest: { status: "pass", text: "Fully white-label" },
      diff: "Looks like you built it"
    },
    {
      feature: "Unlimited customisation",
      others: { status: "fail", text: "Pay developer" },
      nest: { status: "pass", text: "Included" },
      diff: "No surprise invoices"
    },
    {
      feature: "Setup time",
      others: { status: "partial", text: "Weeks to months" },
      nest: { status: "pass", text: "Done for you" },
      diff: "Running immediately"
    },
    {
      feature: "Cost",
      others: { status: "partial", text: "$1,300–$2,600+/yr" },
      nest: { status: "pass", text: "Pay per client" },
      diff: "Only pay as you grow"
    }
  ];

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="alternatives" className="bg-[#ECF1EC] py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[64px]">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-[22px] h-[2px] bg-sage" />
            <span className="text-sage text-[11px] font-bold uppercase tracking-[0.15em]">
              Every Agent We Talk To Uses One of These
            </span>
          </div>
          <h2 className="text-forest font-extrabold leading-[1.15] mb-6" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
            We Tried Them All. <br />
            Here's the Honest Truth.
          </h2>
          <p className="text-muted mx-auto max-w-[520px] text-lg leading-[1.8]">
            There is no shortage of tools. But none of them were built for what you actually do.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${card.color} flex flex-col`}
            >
              <div className="mb-6">{card.icon}</div>
              <span className="text-forest/40 text-[10px] font-bold uppercase tracking-widest mb-2">
                {card.name}
              </span>
              <h3 className="text-forest font-bold text-[18px] leading-[1.3] mb-4">
                {card.headline}
              </h3>
              <p className="text-muted text-[13px] leading-[1.7]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-[56px] bg-white rounded-2xl border border-[#E2EAE2] overflow-hidden shadow-xl">
          {/* Table Header */}
          <div className="bg-forest grid grid-cols-[1.5fr_1fr_1fr_1fr] px-7 py-5 text-white font-bold text-[14px]">
            <div>Feature</div>
            <div className="text-center text-red-400">Other Tools</div>
            <div className="text-center text-sage">ClientNest</div>
            <div className="text-center text-gold">The Difference</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#E2EAE2]">
            {tableData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-[1.5fr_1fr_1fr_1fr] px-7 py-4 items-center text-[13px] ${index % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}
              >
                <div className="text-forest font-medium">{row.feature}</div>
                
                {/* Others Column */}
                <div className="flex flex-col items-center justify-center text-center px-2">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    {row.others.status === 'fail' ? (
                      <X size={14} className="text-red-500" />
                    ) : (
                      <Minus size={14} className="text-orange-500" />
                    )}
                    <span className="text-red-500/80 font-medium">{row.others.text}</span>
                  </div>
                </div>

                {/* ClientNest Column */}
                <div className="flex flex-col items-center justify-center text-center bg-sage/5 py-4 -my-4 border-x border-sage/10">
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-sage" strokeWidth={3} />
                    <span className="text-sage font-bold">{row.nest.text}</span>
                  </div>
                </div>

                {/* Difference Column */}
                <div className="text-center text-gold italic text-[12px] px-2">
                  "{row.diff}"
                </div>
              </div>
            ))}

            {/* Verdict Row */}
            <div className="bg-forest grid grid-cols-[1.5fr_1fr_1fr_1fr] px-7 py-6 items-center text-white">
              <div className="font-bold text-[15px]">Overall verdict</div>
              <div className="text-center text-red-400/70 italic text-[13px] leading-tight px-2">
                Multiple tools, patched together, high cost, low client experience
              </div>
              <div className="text-center text-sage font-bold text-[14px] leading-tight px-2">
                One portal. Complete journey. Clients who refer.
              </div>
              <div className="text-center text-gold font-bold text-[14px] px-2">
                The professional choice
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-[48px] text-center">
          <h3 className="text-forest font-extrabold leading-[1.2] mb-4" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
            Stop patching together tools <br />
            that were never built for you.
          </h3>
          <p className="text-muted mx-auto max-w-[600px] text-base leading-[1.8] mb-10">
            Your clients deserve a single, beautiful, branded experience — not a trail of WhatsApp messages and shared Drive folders.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href={LINKS.DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-forest px-8 py-3.5 rounded-full font-bold text-[15px] shadow-lg"
            >
              See ClientNest Live →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#demo-form"
              onClick={scrollToDemo}
              className="border-2 border-gold text-gold px-8 py-3.5 rounded-full font-bold text-[15px]"
            >
              Book a Demo
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
