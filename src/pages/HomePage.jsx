import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Img1 from '../assets/adidas.png';
import Img2 from '../assets/bank.png';
import Img3 from '../assets/electronics-arts.png';
import Img4 from '../assets/ibm(1).png';
import Img5 from '../assets/microsoft.png';
import Img6 from '../assets/oracle.png';
import Img7 from '../assets/twitter.png';
import Img8 from '../assets/uber.png';
import Img9 from '../assets/whatsapp.png';

const HomePage = () => {
  // Animation variants for scroll-triggered animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - unchanged */}
      <Hero />

      {/* About Us Section */}
      <section className="bg-white py-20 md:py-14" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
              className="relative group"
            >
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-xl ring-1 ring-gray-200 mt-5">
                <img
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1080&q=60"
                  alt="Professional portfolio management visualization"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-xl text-center lg:text-left"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
              >
                About Us
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 leading-snug"
              >
                Institutional‑grade investment analytics
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="space-y-5 text-base md:text-lg leading-relaxed text-slate-600"
              >
                <p>
                  Vionix provides an integrated portfolio management platform combining advanced analytics, risk
                  intelligence and expert oversight. We enable investors to act decisively with reliable, consolidated data.
                </p>
                <p>
                  Our framework unifies portfolio construction, optimization, risk, ESG metrics and reporting—reducing
                  operational drag while elevating governance and transparency.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-8 flex justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center rounded-lg bg-slate-900 px-8 py-4 text-sm font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Learn More
                  <span className="ml-2" aria-hidden>→</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vionix Platform Section */}
      <section className="py-20 md:py-10 bg-gradient-to-br from-slate-50 to-white" id="core-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Vionix Platform
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              A unified, modular investment management stack spanning portfolio construction, order & execution, risk, 
              performance, private assets, ESG data and client reporting.
            </p>
          </motion.div>

          {/* Platform Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-14 h-14 text-teal-600"><circle cx="20" cy="20" r="18" className="fill-none stroke-current" strokeWidth="2" /><path d="M10 24c4-8 8-8 12 0 4-6 8-6 12 0" className="stroke-current fill-none" strokeWidth="2" strokeLinecap="round" /></svg>
                ),
                title: 'Complete asset class coverage',
                desc: 'Manage equities, fixed income, derivatives, private markets and alternatives in one consolidated view.'
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-14 h-14 text-teal-600"><rect x="6" y="10" width="8" height="20" rx="2" className="fill-none stroke-current" strokeWidth="2" /><rect x="18" y="6" width="8" height="24" rx="2" className="fill-none stroke-current" strokeWidth="2" /><rect x="30" y="14" width="8" height="16" rx="2" className="fill-none stroke-current" strokeWidth="2" /></svg>
                ),
                title: 'Real-time data',
                desc: 'Centralize trades, exposures, cash and positions across all strategies for intraday transparency.'
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-14 h-14 text-teal-600"><path d="M8 30V12l12-6 12 6v18l-12 6-12-6Z" className="fill-none stroke-current" strokeWidth="2" strokeLinejoin="round" /><path d="M20 6v24" className="stroke-current" strokeWidth="2" strokeLinecap="round" /><path d="M8 18l12 6 12-6" className="stroke-current" strokeWidth="2" strokeLinecap="round" /></svg>
                ),
                title: 'Market-leading analytics',
                desc: 'Institutional-grade optimization, attribution & risk models integrated into portfolio construction.'
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-14 h-14 text-teal-600"><path d="M6 30h16" className="stroke-current" strokeWidth="2" strokeLinecap="round" /><path d="M10 26V12l8-4 8 4v14" className="fill-none stroke-current" strokeWidth="2" strokeLinejoin="round" /><path d="M26 20h8v10h-8z" className="fill-none stroke-current" strokeWidth="2" strokeLinejoin="round" /></svg>
                ),
                title: 'Managed services',
                desc: 'Specialized data, investment operations & accounting services delivering scale and efficiency.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-teal-200 hover:-translate-y-1"
              >
                <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300 flex justify-center lg:justify-start">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Solutions Section - Masonry Grid Layout */}
      <section className="py-24 md:py-10 bg-white relative" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">What We Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Comprehensive investment banking and capital markets support services designed for HNIs, UHNIs, 
              and institutional clients globally.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Equity Capital Markets (ECM)',
                desc: 'End-to-end support for ECM advisors on IPOs, FOs, PIPE transactions, rights, convertibles and equity-related offerings.',
                icon: '📈',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Debt Capital Markets (DCM)',
                desc: 'Bespoke DCM investment banking services across Corporate, FIG, SSA and Sustainable DCM with proprietary tech solutions.',
                icon: '💰',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Restructuring & Turnaround',
                desc: 'Strategic debt advisory and restructuring solutions including insolvency support and turnaround activities.',
                icon: '🔄',
                color: 'from-amber-500 to-orange-500'
              },
              {
                title: 'Merger & Acquisition Services',
                desc: 'Full suite of M&A services from deal origination to execution with expert valuation and due diligence support.',
                icon: '🤝',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Ratings Advisory Support',
                desc: 'Expertise in developing standardized models based on rating agency methodologies and frameworks.',
                icon: '⭐',
                color: 'from-rose-500 to-red-500'
              },
              {
                title: 'Venture Capital Solutions',
                desc: 'Comprehensive VC support across the investment lifecycle with customized due diligence frameworks.',
                icon: '🚀',
                color: 'from-indigo-500 to-violet-500'
              },
              {
                title: 'Real Estate Fund Support',
                desc: 'Support for real estate equity and debt funds across core, value-add, and opportunistic strategies.',
                icon: '🏢',
                color: 'from-teal-500 to-cyan-500'
              },
              {
                title: 'Portfolio Management',
                desc: 'Integrated portfolio construction, optimization and rebalancing with real-time risk analytics.',
                icon: '📊',
                color: 'from-slate-500 to-gray-600'
              },
              {
                title: 'ESG Advisory',
                desc: 'Sustainability-linked financing solutions and ESG risk assessment frameworks.',
                icon: '🌱',
                color: 'from-lime-500 to-green-600'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="relative text-xl font-bold text-slate-900 mb-4 leading-snug">{service.title}</h3>
                <p className="relative text-sm text-slate-600 leading-relaxed flex-grow">{service.desc}</p>
                
                {/* Animated bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <button
              onClick={() => window.location.href = '/solutions'}
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              View All Solutions
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Zig-zag alternating layout */}
      <section className="py-24 md:py-10 bg-gradient-to-b from-slate-50 to-white" id="outcomes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-4 leading-[1.1]">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vionix</span>
            </h2>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                title: 'Data integrity at scale',
                desc: 'Automated validations and golden-source reconciliation to eliminate breaks and reduce operational risk. Our platform ensures your data is accurate, consistent, and audit-ready at all times.',
                img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60',
                features: ['Automated validation', 'Real-time reconciliation', 'Zero data breaks', 'Audit trails'],
                side: 'left'
              },
              {
                title: 'Operational efficiency',
                desc: 'Streamlined workflows with managed services to free your teams for higher-value activities. Reduce manual work by up to 80% and focus on strategic decision-making.',
                img: 'https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?auto=format&fit=crop&w=1200&q=60',
                features: ['80% less manual work', 'Managed services', 'Automated workflows', 'Resource optimization'],
                side: 'right'
              },
              {
                title: 'Governance & oversight',
                desc: 'Embedded controls and audit-ready reporting for confident compliance and stakeholder transparency. Meet regulatory requirements with ease.',
                img: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=1200&q=60',
                features: ['Embedded controls', 'Compliance ready', 'Transparent reporting', 'Regulatory adherence'],
                side: 'left'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`grid lg:grid-cols-2 gap-12 items-center ${benefit.side === 'right' ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <motion.div
                  variants={benefit.side === 'left' ? slideLeft : slideRight}
                  className={`relative ${benefit.side === 'right' ? 'lg:col-start-2' : ''}`}
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
                    <img
                      src={benefit.img}
                      alt={benefit.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-6"
                  >
                    <div className="text-3xl font-black text-white">{i + 1}</div>
                    <div className="text-xs text-blue-100 font-semibold">KEY BENEFIT</div>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={benefit.side === 'left' ? slideRight : slideLeft}
                  className={benefit.side === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {benefit.desc}
                  </p>
                  
                  {/* Feature checklist */}
                  <div className="grid grid-cols-2 gap-4">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section with Infinite Logo Carousel */}
      <section className="py-20 md:py-10 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden" id="clients">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 text-sm font-semibold rounded-full border border-blue-200/50">
                TRUSTED GLOBALLY
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Our Clients
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading investment managers, asset owners and wealth platforms globally. 
              Institutions rely on Vionix for unified data integrity and scalable operations.
            </p>
          </motion.div>

          {/* Infinite Logo Carousel */}
          <div className="relative w-full overflow-hidden py-12">
            {/* Enhanced Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
            
            {/* Single continuous carousel */}
            <motion.div
              animate={{
                x: [0, -1800],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-20 md:gap-28 items-center"
              style={{ willChange: 'transform' }}
            >
              {/* First set of logos */}
              {[
                { name: 'Adidas', logo: Img1 },
                { name: 'Bank', logo: Img2 },
                { name: 'EA', logo: Img3 },
                { name: 'IBM', logo: Img4 },
                { name: 'MICROSOFT', logo: Img5 },
                { name: 'ORACLE', logo: Img6 },
                { name: 'twitter', logo: Img7 },
                { name: 'uber', logo: Img8 },
                { name: 'whatsapp', logo: Img9 },
              ].map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center w-48 h-24"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-20 max-w-[180px] w-auto h-auto object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to styled text if image fails to load
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      parent.innerHTML = `<div class="text-2xl font-bold text-slate-700 px-6 py-3 bg-slate-100 rounded-lg">${client.name}</div>`;
                    }}
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'Adidas', logo: Img1 },
                { name: 'Bank', logo: Img2 },
                { name: 'EA', logo: Img3 },
                { name: 'IBM', logo: Img4 },
                { name: 'MICROSOFT', logo: Img5 },
                { name: 'ORACLE', logo: Img6 },
                { name: 'twitter', logo: Img7 },
                { name: 'uber', logo: Img8 },
                { name: 'whatsapp', logo: Img9 },
              ].map((client, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex-shrink-0 flex items-center justify-center w-48 h-24"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-20 max-w-[180px] w-auto h-auto object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to styled text if image fails to load
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      parent.innerHTML = `<div class="text-2xl font-bold text-slate-700 px-6 py-3 bg-slate-100 rounded-lg">${client.name}</div>`;
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 mb-12"
          >
            {[
              { number: '500+', label: 'Global Clients' },
              { number: '$2.5T+', label: 'Assets Under Management' },
              { number: '50+', label: 'Countries Served' },
              { number: '99.9%', label: 'Uptime Guarantee' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:border-blue-300/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Client Stories Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <button className="inline-flex items-center border-2 border-slate-900 px-8 py-4 text-sm font-semibold tracking-wide hover:bg-slate-900 hover:text-white transition-all rounded-lg hover:shadow-lg">
              View All Client Stories
              <span className="ml-3" aria-hidden>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Revamped with reduced padding */}
      <section className="bg-gradient-to-br from-slate-50 to-white" id="get-started">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden border border-slate-700/50"
          >
            {/* Animated Decorative background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ 
                    x: Math.random() * 100 + '%', 
                    y: Math.random() * 100 + '%',
                    opacity: 0
                  }}
                  animate={{ 
                    y: [null, Math.random() * -100 + '%'],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 text-sm font-semibold rounded-full border border-blue-400/30 backdrop-blur-sm">
                    ✨ START YOUR JOURNEY
                  </span>
                </div>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
              >
                Ready to transform your{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  investment strategy?
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-3xl mb-10"
              >
                Accelerate operational efficiency, unify portfolio data and gain risk-aware performance insight on a single modern platform. 
                Start the conversation today.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-white to-slate-100 text-slate-900 text-base font-semibold hover:from-slate-100 hover:to-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all shadow-lg hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative">Talk to Our Team</span>
                  <motion.span 
                    className="ml-3 relative" 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    aria-hidden
                  >
                    →
                  </motion.span>
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/40 text-white text-base font-semibold hover:bg-white/15 hover:border-white/60 backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all shadow-lg relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <svg className="w-5 h-5 mr-3 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="relative">Download Overview</span>
                </motion.button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center text-slate-400 text-sm"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Setup in minutes</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
