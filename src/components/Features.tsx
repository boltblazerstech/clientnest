import { motion } from 'motion/react';
import { Home, ShieldCheck, Bell, Map, User, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import { LINKS } from '../constants/links';

export default function Features() {
  const features = [
    {
      icon: <Home size={20} />,
      title: "Property Dashboard",
      body: "A clean dashboard for every property. Track current and past purchases in one place.",
      iconBg: "bg-sage",
      iconColor: "text-white",
      mockup: (
        <div className="mt-6 bg-forest/5 rounded-lg p-3 border border-sage/10">
          <div className="space-y-2">
            {[1, 2].map(i => (
              <div key={i} className="bg-white rounded-md p-2 shadow-sm border border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sage/10 rounded flex items-center justify-center text-[8px] font-bold text-sage">PIC</div>
                  <div>
                    <div className="h-2 w-16 bg-forest/20 rounded mb-1" />
                    <div className="h-1.5 w-10 bg-forest/10 rounded" />
                  </div>
                </div>
                <div className="h-4 w-10 bg-sage/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-1 bg-sage/40 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Document Vault",
      body: "Securely store and access reports, contracts, and letters in seconds.",
      iconBg: "bg-gold",
      iconColor: "text-forest",
      mockup: (
        <div className="mt-6 bg-forest/5 rounded-lg p-3 border border-sage/10">
          <div className="space-y-2">
            {['Contract.pdf', 'Report.pdf'].map((file, i) => (
              <div key={i} className="flex items-center gap-2 bg-white p-2 rounded border border-border">
                <FileText size={12} className="text-gold" />
                <span className="text-[10px] font-medium text-forest">{file}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: <Bell size={20} />,
      title: "Real-Time Notifications",
      body: "Automatic alerts for every milestone—from assignment to settlement.",
      iconBg: "bg-sage",
      iconColor: "text-white",
      mockup: (
        <div className="mt-6 bg-forest/5 rounded-lg p-3 border border-sage/10">
          <div className="relative bg-white p-2 rounded border border-border shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="text-[10px] font-bold text-forest">New Property Assigned</span>
            </div>
            <p className="text-[9px] text-muted mt-1">Check your dashboard for details.</p>
          </div>
        </div>
      )
    },
    {
      icon: <Map size={20} />,
      title: "Deal Progress Timeline",
      body: "A visual timeline of the entire purchase journey. Every stage clearly shown from brief to settlement.",
      iconBg: "bg-gold",
      iconColor: "text-forest",
      mockup: (
        <div className="mt-6 bg-forest/5 rounded-lg p-3 border border-sage/10">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold/30 -translate-y-1/2" />
            {[1, 2, 3].map(i => (
              <div key={i} className={`w-3 h-3 rounded-full z-10 ${i <= 2 ? 'bg-gold' : 'bg-white border border-gold'}`} />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[8px] text-forest font-bold">Brief</span>
            <span className="text-[8px] text-forest font-bold">Offer</span>
            <span className="text-[8px] text-muted">Settled</span>
          </div>
        </div>
      )
    },
    {
      icon: <User size={20} />,
      title: "Buyer Brief Profile",
      body: "Budget and pre-approval status in one place. Clients feel understood.",
      iconBg: "bg-sage",
      iconColor: "text-white",
      mockup: (
        <div className="mt-6 bg-forest/5 rounded-lg p-3 border border-sage/10">
          <div className="bg-white p-3 rounded-md border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-sage/20 border border-sage/30 flex items-center justify-center">
                <User size={10} className="text-sage" />
              </div>
              <div className="h-2 w-20 bg-forest/20 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-cream p-1.5 rounded border border-border">
                <div className="h-1 w-8 bg-muted/30 rounded mb-1" />
                <div className="h-1.5 w-12 bg-forest/20 rounded" />
              </div>
              <div className="bg-cream p-1.5 rounded border border-border">
                <div className="h-1 w-8 bg-muted/30 rounded mb-1" />
                <div className="h-1.5 w-12 bg-forest/20 rounded" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Calendar size={20} />,
      title: "Meeting Booking",
      body: "Integrated booking. Clients book strategy sessions in seconds.",
      iconBg: "bg-gold",
      iconColor: "text-forest",
      mockup: (
        <div className="mt-6 bg-forest/5 rounded-lg p-3 border border-sage/10">
          <div className="bg-white p-3 rounded-md border border-border shadow-sm">
            <div className="h-2 w-24 bg-forest/20 rounded mb-3" />
            <div className="space-y-1.5">
              {['10:00 AM', '11:30 AM', '2:00 PM'].map((time, i) => (
                <div key={i} className={`h-6 flex items-center justify-center rounded border text-[9px] font-bold ${i === 1 ? 'bg-gold border-gold text-forest' : 'border-border text-muted'}`}>
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  const scrollToDemo = () => {
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="bg-cream py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[56px]">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-[22px] h-[2px] bg-sage" />
            <span className="text-sage text-[11px] font-bold uppercase tracking-[0.15em]">
              Everything Your Clients Need
            </span>
          </div>
          <h2 className="text-forest font-extrabold leading-[1.15] text-center" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            The All-In-One Solution <br />
            for the Property Journey.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
              className="bg-white border border-border rounded-xl p-8 transition-all duration-300 flex flex-col group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className={`w-10 h-10 rounded-xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center shrink-0 transition-transform`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-forest font-bold text-[17px] mt-5">
                {feature.title}
              </h3>
              <p className="text-muted text-[14px] leading-[1.75] mt-2 flex-grow">
                {feature.body}
              </p>
              
              {/* UI Mockup Area */}
              {feature.mockup}
            </motion.div>
          ))}
        </div>

        {/* Customization Banner */}
        <div className="bg-forest rounded-2xl p-10 mt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <span className="text-gold text-[11px] font-bold uppercase tracking-wider mb-2 block">
              Unlimited Customisation
            </span>
            <h3 className="text-white text-2xl font-bold mb-2">
              Built exactly the way you work.
            </h3>
            <p className="text-white/65 text-[14px] max-w-[500px]">
              We customise ClientNest to match your brand and workflow—exactly as you need it.
            </p>
          </div>
          <a
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="border-[1.5px] border-gold text-gold px-7 py-3 rounded-full font-semibold hover:bg-gold hover:text-forest transition-all duration-200 whitespace-nowrap flex items-center gap-2"
          >
            <svg size={18} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tell Us What You Need →
          </a>
        </div>
      </div>
    </section>
  );
}
