import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const values = [
    {
      icon: '🎯',
      title: 'Precision',
      description: 'Technology meets expertise',
      detail: 'Advanced algorithms combined with seasoned investment professionals to deliver accurate, data-driven decisions.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: '👁️',
      title: 'Visibility',
      description: 'Real-time insights',
      detail: 'Complete transparency with live dashboards, comprehensive analytics, and instant access to your portfolio data.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: '🛡️',
      title: 'Governance',
      description: 'Auditability by design',
      detail: 'Built-in compliance frameworks, automated audit trails, and regulatory reporting for peace of mind.',
      color: 'from-sky-400 to-cyan-500'
    },
  ];

  const stats = [
    { value: '12+', label: 'Years of Excellence', icon: '⏱️' },
    { value: '30+', label: 'Trusted Clients', icon: '🤝' },
    { value: '50+', label: 'Integrations', icon: '🔗' },
    { value: '$2.5B+', label: 'Assets Managed', icon: '💼' },
  ];

  const team = [
    { role: 'Investment Experts', count: '25+', icon: '📊' },
    { role: 'Tech Specialists', count: '40+', icon: '💻' },
    { role: 'Support Staff', count: '15+', icon: '🎧' },
  ];

  const timeline = [
    { year: '2012', title: 'Foundation', description: 'Started with a vision to revolutionize portfolio management' },
    { year: '2015', title: 'Growth', description: 'Expanded services and reached 100+ integrations milestone' },
    { year: '2018', title: 'Innovation', description: 'Launched AI-powered analytics and risk management tools' },
    { year: '2024', title: 'Leadership', description: 'Industry leader managing $2.5B+ across diverse portfolios' },
  ];

  return (
    <main id="about" className="bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section - Split Design */}
      <section className="pt-28 md:pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              <motion.div variants={slideUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">About Vionix</span>
              </motion.div>

              <motion.h1 
                variants={slideUp}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]"
              >
                Transforming Portfolio <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Management</span>
              </motion.h1>

              <motion.p 
                variants={slideUp}
                className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8"
              >
                Innovative, tailored solutions powered by cutting-edge technology and backed by expert-managed services. We're redefining what's possible in wealth management.
              </motion.p>

              <motion.div variants={slideUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Our Story
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-slate-300 text-slate-900 text-base font-bold hover:border-blue-600 hover:bg-blue-50 transition-all"
                >
                  Operating Models
                </button>
              </motion.div>
            </div>

            {/* Right - Image Collage */}
            <motion.div 
              variants={fadeIn}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-200 transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
                      alt="Strategy meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                      alt="Workshop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-200 transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80"
                      alt="Data analysis"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">Trusted</div>
                    <div className="text-sm text-slate-600">By Industry Leaders</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Expandable Cards */}
      <section className="py-20 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={slideUp}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="text-6xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-base font-semibold text-blue-600 mb-4">{value.description}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Bold Numbers */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={slideUp}
                className="text-center flex flex-col items-center"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story + Timeline */}
      <section id="story" className="py-20 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2012 by portfolio management veterans, we recognized that traditional PMS solutions were falling behind the pace of modern wealth management.
                </p>
                <p>
                  We set out to build not just a software platform, but a complete ecosystem that empowers portfolio managers with real-time insights, automated workflows, and institutional-grade analytics.
                </p>
                <p>
                  By integrating advanced analytics and domain expertise, Vionix empowers investors to make informed decisions, optimize strategies, and drive growth.
                </p>
                <p className="text-blue-600 font-semibold">
                  Today, we serve 30+ institutional clients managing over $2.5 billion in assets across diverse investment strategies.
                </p>
              </div>

              {/* Team Stats */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
              >
                {team.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={slideUp}
                    className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center"
                  >
                    <div className="text-3xl font-black text-blue-600 mb-2">{item.count}</div>
                    <div className="text-xs font-semibold text-slate-600">{item.role}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={slideUp}
                  className="relative pl-12 pb-8 border-l-4 border-blue-200 last:border-l-transparent"
                >
                  <div className="absolute left-0 -translate-x-[11px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 border-4 border-white shadow-lg"></div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-black text-blue-600 mb-2">{item.year}</div>
                    <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery - Interactive Showcase */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Where <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Innovation</span> Happens
            </h2>
            <p className="text-lg text-slate-600">A glimpse into our workspace and culture</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
          
            <motion.div variants={slideUp} className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl border-2 border-blue-200 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdlYWx0aCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500q=80&w=2000&auto=format&fit=crop" 
                alt="Strategy whiteboard" 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute bottom-6 left-6 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-xl font-bold">Strategy Sessions</div>
                <div className="text-sm">Where ideas take shape</div>
              </div>
            </motion.div>
            
            {[
              { src: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop", alt: "Data visualization", label: "Analytics Lab" },
              { src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop", alt: "Team focus", label: "Team Collaboration" },
              { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop", alt: "Product meeting", label: "Product Reviews" },
              { src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1200&auto=format&fit=crop", alt: "Architecture planning", label: "Tech Architecture" }
            ].map((img, i) => (
              <motion.div 
                key={i}
                variants={slideUp}
                className="rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 group relative aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute bottom-4 left-4 z-20 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Operating Models - Split Design */}
      <section id="models" className="py-20 md:py-10 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-blue-900">Operating Models</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Choose the Model That <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Fits You</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Needs differ; one size does not fit all. Pick the blend of technology and managed services that suits your team.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Complete Control */}
            <motion.div
              variants={slideUp}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border-2 border-blue-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 h-full flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6 text-3xl shadow-lg">
                  👑
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Complete Control</h3>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Gain greater control and enable smarter decision making across your portfolio—construction, optimization, risk and trading, including ESG, in one place.
                </p>
                
                <div className="space-y-3 w-full">
                  {[
                    { icon: '📊', text: 'Portfolio construction & optimization' },
                    { icon: '⚡', text: 'Risk analysis & management' },
                    { icon: '🌱', text: 'ESG metrics integration' },
                    { icon: '🔍', text: 'Complete transparency' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm text-slate-700">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Managed Service */}
            <motion.div
              variants={slideUp}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border-2 border-blue-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 h-full flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 text-3xl shadow-lg">
                  🤝
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Managed Service</h3>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Expert team manages data collection, reconciliation and reporting, ensuring accuracy and oversight while preserving transparency and control.
                </p>
                
                <div className="space-y-3 w-full">
                  {[
                    { icon: '👥', text: 'Expert data management' },
                    { icon: '🔄', text: 'Automated reconciliation' },
                    { icon: '📈', text: 'Comprehensive reporting' },
                    { icon: '💬', text: 'Dedicated support team' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm text-slate-700">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Gradient Hero */}
      <section className="py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Ready to Elevate Your <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Investment Strategy?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
              From technology to managed services, Vionix tailors the right mix for your operating model and governance needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#models"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-base shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
              >
                Explore Models
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#story"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-base border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Read Our Story
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
