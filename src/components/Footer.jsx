import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const columns = [
    {
      heading: 'Platform',
      links: [
        { id: 'solutions', label: 'Overview' },
        { id: 'solutions', label: 'Risk & Analytics' },
        { id: 'pms', label: 'Private Markets' },
        { id: 'solutions', label: 'ESG & Reporting' }
      ]
    },
    {
      heading: 'Solutions',
      links: [
        { id: 'solutions', label: 'Asset Managers' },
        { id: 'solutions', label: 'Wealth Platforms' },
        { id: 'solutions', label: 'Family Offices' },
        { id: 'solutions', label: 'Institutional' }
      ]
    },
    {
      heading: 'Resources',
      links: [
        { id: 'about', label: 'Insights' },
        { id: 'about', label: 'Case Studies' },
        { id: 'about', label: 'Support' },
        { id: 'contact', label: 'Contact' }
      ]
    },
    {
      heading: 'Company',
      links: [
        { id: 'about', label: 'About Us' },
        { id: 'about', label: 'Leadership' },
        { id: 'about', label: 'Careers' },
        { id: 'contact', label: 'Get in Touch' }
      ]
    }
  ];

  return (
    <footer className="bg-white text-slate-800 border-t border-slate-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-12 items-start gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">Vionix</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-8">
              Integrated investment management platform delivering multi-asset analytics, risk intelligence and unified operational oversight.
            </p>
            {/* Newsletter form */}
            <form onSubmit={(e)=>e.preventDefault()} className="mb-10 max-w-sm">
              <label htmlFor="newsletter" className="block text-[11px] font-medium tracking-wide uppercase text-slate-500 mb-2">Subscribe for insights</label>
              <div className="flex gap-2">
                <input id="newsletter" type="email" required placeholder="Work email" className="flex-1 h-10 rounded-sm border border-slate-300 px-3 text-sm focus:ring-2 focus:ring-slate-900/30 focus:outline-none" />
                <button className="h-10 px-5 rounded-sm bg-slate-900 text-white text-[12px] font-medium tracking-wide hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition">Join</button>
              </div>
            </form>
            <div className="flex items-center gap-4 text-slate-600">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-sm hover:bg-slate-100 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-sm hover:bg-slate-100 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:info@vionix.co.in" aria-label="Email" className="p-2 rounded-sm hover:bg-slate-100 transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          {columns.map((col, ci) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * (ci + 1) }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <h4 className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase mb-5">{col.heading}</h4>
              <ul className="space-y-3 text-[13px]">
                {col.links.map(l => (
                  <li key={l.label}>
                    <button
                      onClick={() => scrollToSection(l.id)}
                      className="text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 rounded-sm"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-12 items-center mt-20 gap-6 border-t border-slate-200 pt-8 text-[12px] text-slate-500"
        >
          <p className="md:col-span-6">&copy; {new Date().getFullYear()} Vionix Wealth Management LLP. All rights reserved. LLPIN: ACP-8819</p>
          <div className="md:col-span-6 flex md:justify-end gap-6">
            <a href="#" className="hover:text-slate-900 transition flex items-center gap-1">Privacy <ArrowUpRight className="w-3 h-3" /></a>
            <a href="#" className="hover:text-slate-900 transition flex items-center gap-1">Terms <ArrowUpRight className="w-3 h-3" /></a>
            <a href="#" className="hover:text-slate-900 transition flex items-center gap-1">Security <ArrowUpRight className="w-3 h-3" /></a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
