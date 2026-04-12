import { motion } from 'motion/react';
import { Check, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const benefits = [
    "Branded to your agency",
    "Personalized onboarding",
    "No obligation"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation: At least one of Email or Mobile Number must be filled
    if (!formData.email && !formData.mobile) {
      setErrorMessage('Please provide either an email or a mobile number.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const url = 'https://script.google.com/macros/s/AKfycbycOHbuwNm2ifj0EoA2575wovc4KtPIjs3GaxqFVki64T6lc11OY-WlhcbQQMwwCLkX/exec';
      
      // Using URLSearchParams for x-www-form-urlencoded (standard for Apps Script)
      const data = new URLSearchParams();
      data.append('Timestamp', new Date().toLocaleString());
      data.append('Name', formData.name);
      data.append('Email', formData.email);
      data.append('Phone', formData.mobile);

      await fetch(url, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      setStatus('success');
      setFormData({ name: '', email: '', mobile: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us on WhatsApp.');
    }
  };

  return (
    <section id="demo-form" className="relative bg-forest py-[100px] px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/95 to-forest" />
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-white text-[44px] md:text-[56px] font-extrabold leading-[1.1] mb-6">
              The All-In-One Portal <br className="hidden md:block" />
              Your Clients Deserve.
            </h2>
            <p className="text-white/70 text-lg leading-[1.8] mb-10 max-w-[500px]">
              Join leading Australian agencies delivering a professional, branded experience with ClientNest.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-white/80 text-[16px]">
                  <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center shrink-0">
                    <Check className="text-sage" size={14} />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://cp-demo.boltblazers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-forest px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-[#C39732] transition-all shadow-lg"
              >
                See Live Demo →
              </a>
              <a
                href="https://wa.me/9470171298?text=hi,%20want%20to%20know%20more%20about%20client%20nest"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1.5px] border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <svg size={18} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-white/10"
          >
            <h3 className="text-forest text-2xl font-bold mb-2">Get Started Today</h3>
            <p className="text-muted text-sm mb-8">Fill out the form below and we'll be in touch.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-forest text-sm font-bold mb-1.5 text-left">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-forest placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-forest text-sm font-bold mb-1.5 text-left">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@agency.com"
                  className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-forest placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-forest text-sm font-bold mb-1.5 text-left">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="0400 000 000"
                  className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-forest placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-xs font-medium text-left">{errorMessage}</p>
              )}

              {status === 'success' ? (
                <div className="bg-sage/10 border border-sage/30 rounded-xl p-4 text-sage text-sm font-bold flex items-center gap-3">
                  <Check size={18} />
                  Message sent! We'll be in touch shortly.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-forest text-white py-4 rounded-xl font-bold text-[16px] hover:bg-forest/90 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    'Claim Your Branded Portal →'
                  )}
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
