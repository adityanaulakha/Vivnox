import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PMSPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  const benefits = [
    {
      icon: '🧠',
      title: 'Intelligent Decision Making',
      description: 'AI-powered analytics for informed investment decisions',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: '🔄',
      title: 'Real-time Monitoring',
      description: 'Continuous portfolio monitoring and optimization',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: '✅',
      title: 'Expert Guidance',
      description: 'Dedicated relationship managers and investment experts',
      color: 'from-sky-400 to-cyan-500'
    },
  ];

  const stats = [
    { value: '99.9%', label: 'System Uptime', icon: '⚡' },
    { value: '24/7', label: 'Market Monitoring', icon: '🌐' },
    { value: 'Real-time', label: 'Portfolio Updates', icon: '📡' },
  ];

  const features = [
    {
      icon: '📈',
      title: 'Performance Tracking',
      description: 'Comprehensive performance analytics with detailed attribution analysis and benchmark comparisons.',
      details: ['Real-time P&L tracking', 'Multi-period returns analysis', 'Benchmark comparison', 'Attribution reports']
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description: 'Advanced risk assessment tools including VaR modeling, stress testing, and scenario analysis.',
      details: ['Value at Risk (VaR)', 'Stress testing', 'Scenario analysis', 'Drawdown metrics']
    },
    {
      icon: '📊',
      title: 'Portfolio Analytics',
      description: 'Deep insights into portfolio composition, sector allocation, and asset distribution.',
      details: ['Asset allocation view', 'Sector analysis', 'Geographic distribution', 'Holdings breakdown']
    },
    {
      icon: '🎯',
      title: 'Goal-Based Investing',
      description: 'Customized investment strategies aligned with your financial goals and risk appetite.',
      details: ['Goal tracking', 'Risk profiling', 'Custom strategies', 'Milestone alerts']
    },
  ];

  const tabs = [
    { id: 0, name: 'Overview', icon: '📊' },
    { id: 1, name: 'Features', icon: '⚙️' },
    { id: 2, name: 'Benefits', icon: '✨' },
    { id: 3, name: 'Process', icon: '🔄' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your financial goals, risk tolerance, and investment preferences.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our experts craft a personalized investment strategy tailored to your objectives.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Portfolio Construction',
      description: 'We build a diversified portfolio optimized for risk-adjusted returns.',
      icon: '🏗️'
    },
    {
      step: '04',
      title: 'Active Management',
      description: 'Continuous monitoring and rebalancing to keep your portfolio on track.',
      icon: '⚡'
    }
  ];


  return (
    <main id="pms" className="bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section - Professional Page Style */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Premium Services</span>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
              >
                Portfolio Management Services
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8"
              >
                Comprehensive wealth management combining cutting-edge technology with expert oversight. Our PMS delivers superior investment outcomes through real-time monitoring, risk management, and personalized strategies.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              >
                <button
                  onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                >
                  Explore Features
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-900 text-base font-semibold hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
                >
                  Contact Us
                </button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{stat.icon}</span>
                      <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div 
              variants={scaleIn}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                  alt="Portfolio Management Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-slate-200 p-6 max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl font-bold">
                    📊
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">$2.45M+</div>
                    <div className="text-sm text-slate-600">Assets Under Management</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Benefits Section - Card Carousel Style */}
      <section className="py-20 md:py-10 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">PMS</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the perfect blend of technology, expertise, and personalized service.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10`}></div>
                
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-200 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Features Section - Tabbed Interface */}
      <section id="features-section" className="py-20 md:py-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6">
              Powerful Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to manage and grow your wealth effectively
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 px-4">
            <div className="inline-flex gap-2 p-2 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-x-auto max-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-3 rounded-xl font-bold text-xs md:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 1 && (
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all group"
                  >
                    <div className="flex items-start gap-5 mb-6">
                      <div className="text-5xl p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                          <span className="text-sm font-medium text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-200 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="text-center flex flex-col items-center">
                      <div className="text-6xl mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {process.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="relative"
                    >
                      <div className="absolute -left-4 top-0 text-7xl font-black text-violet-100 -z-10">
                        {step.step}
                      </div>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all ml-8">
                        <div className="text-4xl mb-4">{step.icon}</div>
                        <div className="text-sm font-bold text-blue-600 mb-2">STEP {step.step}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 0 && (
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-2xl border border-blue-200">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">
                      Comprehensive Portfolio Management
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Our PMS combines cutting-edge technology with expert oversight to deliver superior investment outcomes. We provide real-time monitoring, risk management, and personalized strategies tailored to your financial goals.
                    </p>
                    <ul className="space-y-3">
                      {['AI-Powered Analytics', 'Expert Guidance', 'Real-Time Monitoring', 'Customized Strategies', 'Risk Management'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium text-slate-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 shadow-2xl">
                      <div className="text-white space-y-6">
                        {/* Portfolio Value */}
                        <div>
                          <div className="text-sm opacity-80 mb-2">Total Portfolio Value</div>
                          <div className="text-5xl font-black">$2.45M</div>
                          <div className="text-sm mt-2 flex items-center gap-2">
                            <span className="text-green-300">↗ +12.5%</span>
                            <span className="opacity-60">This Year</span>
                          </div>
                        </div>

                        <div className="h-px bg-white/20"></div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm opacity-80 mb-1">Active Positions</div>
                            <div className="text-3xl font-black">42</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80 mb-1">Asset Classes</div>
                            <div className="text-3xl font-black">8</div>
                          </div>
                        </div>

                        <div className="h-px bg-white/20"></div>

                        {/* Performance Stats */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm opacity-90">Annualized Return</span>
                            <span className="text-lg font-bold text-green-300">18.7%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm opacity-90">Risk-Adjusted Return</span>
                            <span className="text-lg font-bold">2.3x</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm opacity-90">Portfolio Volatility</span>
                            <span className="text-lg font-bold">12.4%</span>
                          </div>
                        </div>

                        <div className="h-px bg-white/20"></div>

                        {/* Asset Allocation */}
                        <div>
                          <div className="text-sm opacity-80 mb-3">Top Performing Sectors</div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                              <span>Technology</span>
                              <span className="font-bold">35%</span>
                            </div>
                            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" style={{width: '35%'}}></div>
                            </div>
                          </div>
                          <div className="space-y-2 mt-3">
                            <div className="flex justify-between items-center text-sm">
                              <span>Healthcare</span>
                              <span className="font-bold">28%</span>
                            </div>
                            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" style={{width: '28%'}}></div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Insight */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <div className="flex items-start gap-3">
                            <div className="text-2xl">💡</div>
                            <div>
                              <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Portfolio Insight</div>
                              <p className="text-sm leading-relaxed opacity-90">
                                Your portfolio is well-diversified across sectors with strong tech exposure driving growth.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>


      {/* Final CTA - Modern Bento Box Style */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - CTA Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-10 md:p-12 text-white shadow-2xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-sm font-bold uppercase tracking-wider">Get Started Today</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Ready to elevate your investment strategy?
                </h2>

                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Join thousands of investors who trust our PMS for superior returns and expert guidance.
                </p>

                <div className="space-y-4 mb-10">
                  {['Personalized portfolio strategy', 'Real-time performance tracking', 'Dedicated relationship manager', 'Transparent fee structure'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 text-base font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 group">
                    Schedule Consultation
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/40 text-white text-base font-bold hover:bg-white/10 backdrop-blur-sm transition-all">
                    Download Brochure
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right - Info Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Award-Winning Service</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Recognized for excellence in portfolio management and client service.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">24/7 Support</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our team is always available to assist you with your investment needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Minimum Investment</h3>
                <p className="text-slate-600 leading-relaxed mb-2">
                  Start your journey with a minimum investment of
                </p>
                <div className="text-4xl font-black text-amber-600 mb-4">₹50 Lakhs</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PMSPage;
