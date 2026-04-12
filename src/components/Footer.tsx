import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest pt-20 pb-10 px-6 border-t border-sage/20">
      <div className="max-w-[1100px] mx-auto">
      
        <div className="pt-10 border-t border-sage/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[13px]">
            © {currentYear} ClientNest. All rights reserved. Built for Australian Buyer's Agents.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-[13px]">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-[13px]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
