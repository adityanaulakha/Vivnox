import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SolutionsPage = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const solutions = [
    {
      id: 'ecm',
      title: 'Equity Capital Markets (ECM)',
      icon: '📈',
      gradient: 'from-blue-50 via-blue-50 to-cyan-50',
      accentColor: 'blue',
      summary: 'End-to-end support for ECM advisors navigating high-volatility markets and alternate financing solutions.',
      context: 'The COVID-19 pandemic has led to high volatility in the global stocks markets and financial disruption, resulting in companies struggling with liquidity – for immediate, short-term needs, recapitalising balance sheets or to meet long-term requirements. They have turned to the equity markets to address their liquidity concerns, and these markets saw a 41% y/y spike in equity and equity-related issuances globally in 1H 2020, bolstered by a record number of secondary offerings.',
      description: 'At Vionix Wealth Management LLP, we provide a broad range of equity capital markets (ECM) support to HNIs and UHNIs globally. Our experts provide end-to-end support to ECM advisors, helping onshore teams on live transactions and regular work streams related to IPOs, FOs, registered direct offerings (RDOs), PIPE transactions, rights, convertibles and other equity-related offerings.',
      keyServices: [
        'IPO support and execution',
        'Follow-on offerings (FOs)',
        'PIPE transactions advisory',
        'Rights issues management',
        'Convertibles structuring',
        'Secondary offerings support'
      ],
      stats: [
        { value: '41%', label: 'Y/Y spike in equity issuances' },
        { value: '24/7', label: 'Live transaction support' }
      ]
    },
    {
      id: 'dcm',
      title: 'Debt Capital Markets (DCM)',
      icon: '💰',
      gradient: 'from-purple-50 via-purple-50 to-pink-50',
      accentColor: 'purple',
      summary: 'Bespoke DCM investment banking services from deal origination to execution with proprietary tech solutions.',
      context: 'Debt capital markets investment banking boasted of strong start in 2024, shrugging off the worries from geopolitical tensions in Middle East and lingering Russian-Ukraine war along with expectations of subsiding Fed rates. The current market backdrop is subject to a few risks including stickier than expected inflation, the prospect of weaker economic growth and geopolitical conflicts.',
      description: 'At Vionix Wealth Management LLP, we provide bespoke DCM in investment banking services to DCM teams of investment banks and advisory firms across the world through a wide range of solutions for Corporate DCM, FIG DCM, SSA DCM and Sustainable DCM teams. Our DCM Support team of experts regularly tracks macroeconomic factors affecting the markets and provides end-to-end support from deal origination to execution, including the most intricate financial analysis and after-market support.',
      keyServices: [
        'Corporate DCM advisory',
        'Sustainable DCM services',
        'Deal origination tracking',
        'Financial analysis & modeling',
        'After-market monitoring',
        'Macroeconomic research'
      ],
      stats: [
        { value: '2024', label: 'Strong market start' },
        { value: 'End-to-end', label: 'Deal lifecycle support' }
      ]
    },
    {
      id: 'restructuring',
      title: 'Restructuring & Turnaround',
      icon: '🔄',
      gradient: 'from-amber-50 via-amber-50 to-orange-50',
      accentColor: 'amber',
      summary: 'Strategic debt advisory and restructuring solutions for increased demand in specialized services.',
      context: 'Disruption in economic activity, coupled with high debt levels, has made borrowers vulnerable to the risk of default and bankruptcy. Bond and loan default rates are likely to rise due to the pandemic. These factors have led to an increased demand for specialised debt advisory investment banking services and strategic restructuring solutions.',
      description: 'Vionix Wealth Management LLP enables Investment banks to meet the challenge of rising restructuring needs by delivering support across the debt and capital advisory and restructuring spectrum. We enable our clients win more mandates and expand their outreach by supporting towards insolvency and reorganisation support, liquidity management, creditor advisory and turnaround activities.',
      keyServices: [
        'Insolvency support',
        'Reorganization advisory',
        'Liquidity management',
        'Creditor advisory services',
        'Turnaround strategy'
      ],
      stats: [
        { value: 'Rising', label: 'Default rates trend' },
        { value: 'Full-spectrum', label: 'Advisory coverage' }
      ]
    },
    {
      id: 'ma',
      title: 'Merger & Acquisition Services',
      icon: '🤝',
      gradient: 'from-green-50 via-green-50 to-emerald-50',
      accentColor: 'green',
      summary: 'Full suite of M&A services from deal origination to execution with timely insights and valuations.',
      context: 'In the current environment, where everything seems to be uncertain, volatility and change remain constant, making mergers and acquisitions consulting services more critical than ever. As the global markets open after months of lockdown, M&A deals that had been stalled or postponed are now being reconsidered, making it the right time for investment bankers and advisory firms to gain first-mover advantage.',
      description: 'We understand what it takes to support investment banks across the globe; we have a full suite of services, including M&A Valuation and due diligence support, offering end-to-end support from deal origination to execution. Our years of experience in working with global and regional investment banks and advisory firms help us support them as an extension of their teams, offering timely and accurate insights, valuations and due diligence to keep them in the lead.',
      keyServices: [
        'Deal execution support',
        'Target identification',
        'Financial modeling',
        'Transaction advisory',
        'Post-merger integration'
      ],
      stats: [
        { value: 'First-mover', label: 'Advantage positioning' },
        { value: 'Global', label: 'Coverage reach' }
      ]
    },
    {
      id: 'vc',
      title: 'Venture Capital Solutions',
      icon: '🚀',
      gradient: 'from-indigo-50 via-indigo-50 to-violet-50',
      accentColor: 'indigo',
      summary: 'Comprehensive VC support across investment lifecycle with 95% visibility of attractive companies.',
      context: '',
      description: 'We provide comprehensive support to venture capital (VC) firms across the investment lifecycle. We help them monitor existing and new markets for consumer behaviour and economic/demographic changes, assisting them with real-time market-pulse tracking and sourcing quality targets to invest in.',
      extendedDescription: 'Our deal-sourcing services help VC clients identify and maintain a pipeline of potentially interesting startups, providing increased visibility of startups in the space (95% visibility of attractive companies) and helping them pre-empt investment opportunities. We also conduct VC due diligence by compiling customised diligence frameworks and conducting research, ensuring faster turnaround on deal decisions (40-50% reduction in time taken to close a deal).',
      additionalInfo: 'Our portfolio monitoring and advisory services enable VC firms to track performance of portfolio companies and funds periodically, conduct strategic portfolio reviews and prepare bespoke presentation material for investor reporting with limited partners.',
      dataSourceInfo: 'Our Venture Capital consulting team is experienced in working with all market data sources relevant for VC clients including Preqin, FactSet, CB Insights, Crunchbase, SimilarWeb, App Annie, Venture Intelligence, PitchBook and sector-specific sources.',
      keyServices: [
        'Deal sourcing & pipeline',
        'Strategic reviews',
        'Investor reporting',
        'Target identification',
        'Research & analysis'
      ],
      stats: [
        { value: '95%', label: 'Startup visibility' },
        { value: '40-50%', label: 'Deal closure reduction' }
      ],
      dataSources: ['Preqin', 'FactSet', 'CB Insights', 'Crunchbase', 'SimilarWeb', 'App Annie', 'Venture Intelligence', 'PitchBook']
    },
    {
      id: 'realestate',
      title: 'Real Estate Fund Support',
      icon: '🏢',
      gradient: 'from-teal-50 via-teal-50 to-cyan-50',
      accentColor: 'teal',
      summary: 'Comprehensive support for equity and debt funds across entire investment lifecycle.',
      context: '',
      description: 'Vionix Wealth Management LLP caters to both real estate equity and debt funds, and offers comprehensive support across investment strategies, including core, core-plus, value-add, opportunistic and debt/hybrid. Our support covers the entire investment lifecycle, spanning fundraising, opportunity screening, underwriting, due diligence, deal acquisition, portfolio monitoring and asset management.',
      extendedDescription: 'Our services empower clients to expedite their investment decision-making process, enhance market responsiveness, increase client-facing activities, accommodate higher deal flow and manage large datasets. We streamline the due diligence process by developing customised frameworks and conducting thorough research, reducing the time required to finalise deals by as much as 40-50%.',
      additionalInfo: 'As an extension of a client\'s onshore team, we help the client drive ROI by implementing industry-wide best practices and transforming their operating models. Our subject-matter experts have experience in diverse property types, such as multifamily, single-family rentals (SFRs), retail, office, self-storage, industrial, hotels, student housing and care homes.',
      keyServices: [
        'Deal acquisition',
        'Portfolio monitoring',
        'Asset management',
      ],
      stats: [
        { value: '40-50%', label: 'Deal timeline reduction' },
        { value: 'Full-cycle', label: 'Lifecycle coverage' }
      ],
      strategies: ['Core', 'Core-plus', 'Value-add', 'Opportunistic', 'Debt/Hybrid'],
      propertyTypes: ['Multifamily', 'SFRs', 'Retail', 'Office', 'Self-storage', 'Industrial', 'Hotels', 'Student housing', 'Care homes']
    }
  ];

  return (
    <main id="solutions" className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative pt-28 md:pt-32 pb-32 md:pb-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2000&q=80"
            alt="Wealth Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95"></div>
        </div>

        {/* Content Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                COMPREHENSIVE SOLUTIONS
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.1]"
            >
              Investment Banking & Capital Markets Solutions
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-xl text-slate-200 leading-relaxed mb-8 md:mb-10"
            >
              Comprehensive investment banking and capital markets support services designed for HNIs, UHNIs, 
              and institutional clients globally. Expert solutions across equity, debt, restructuring, M&A, 
              ratings advisory, venture capital, and real estate funds.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-slate-900 text-base font-semibold hover:bg-slate-100 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Explore Solutions
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/40 text-white text-base font-semibold hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Talk to Our Team
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Cards */}
      <section id="services-overview" className="py-10 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Specialized expertise across the full spectrum of investment banking and capital markets operations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.button
                key={solution.id}
                variants={fadeInUp}
                onClick={() => document.getElementById(solution.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="group text-left bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:-translate-y-2"
              >
                <div className="text-6xl mb-5 transform group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {solution.summary}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid - REVAMPED */}
      <section id="solutions-grid" className="py-20 md:py-10 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                id={solution.id}
                className="relative"
              >
                {/* Hero Card with Image Background */}
                <motion.div 
                  variants={scaleIn}
                  className="relative rounded-3xl overflow-hidden shadow-2xl mb-8"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1611974789855-9c2a0a7236a3' : // ECM
                        index === 1 ? '1579621970563-ebec7560ff3e' : // DCM
                        index === 2 ? '1454165804606-c3d57bc86b40' : // Restructuring
                        index === 3 ? '1552664730-d307ca884978' : // M&A
                        index === 4 ? '1460925895917-afdab827c52f' : // Ratings
                        index === 5 ? '1519389950473-47ba0277781c' : // VC
                        '1560520653-9e0347f939b7' // Real Estate
                      }?auto=format&fit=crop&w=1600&q=80`}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 px-8 md:px-12 py-12 md:py-16">
                    <div className="max-w-4xl">
                      <motion.div 
                        variants={fadeInUp}
                        className="flex items-center gap-4 mb-6"
                      >
                        <div className="text-6xl md:text-7xl p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                          {solution.icon}
                        </div>
                        <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-200 text-xs font-bold rounded-full border border-blue-400/30 uppercase tracking-wider">
                          {index === 0 ? 'Capital Markets' :
                           index === 1 ? 'Debt Solutions' :
                           index === 2 ? 'Advisory' :
                           index === 3 ? 'M&A Services' :
                           index === 4 ? 'Ratings & ESG' :
                           index === 5 ? 'Venture Capital' :
                           'Real Estate'}
                        </div>
                      </motion.div>

                      <motion.h2 
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                      >
                        {solution.title}
                      </motion.h2>

                      <motion.p 
                        variants={fadeInUp}
                        className="text-xl md:text-2xl font-semibold text-slate-200 leading-relaxed mb-8"
                      >
                        {solution.summary}
                      </motion.p>

                      {/* Stats Bar */}
                      <motion.div 
                        variants={fadeInUp}
                        className="flex flex-wrap gap-6 pt-6 border-t border-white/20"
                      >
                        {solution.stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="text-3xl md:text-4xl font-black text-blue-400">
                              {stat.value}
                            </div>
                            <div className="text-sm text-slate-300 font-medium max-w-[120px] leading-tight">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Context & Description Card */}
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
                  >
                    {solution.context && (
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 border-b border-blue-100">
                        <div className="flex items-start gap-3 mb-3">
                          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-2">Market Context</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                              {solution.context}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="p-6 space-y-4">
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                        Our Approach
                      </h3>
                      <div className="space-y-4 text-sm text-slate-600 leading-relaxed text-center md:text-left">
                        <p>{solution.description}</p>
                        {solution.extendedDescription && <p>{solution.extendedDescription}</p>}
                        {solution.additionalInfo && <p>{solution.additionalInfo}</p>}
                        {solution.dataSourceInfo && (
                          <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-100">
                            {solution.dataSourceInfo}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Key Services Card */}
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></span>
                      Key Services & Capabilities
                    </h3>
                    
                    <div className="space-y-3">
                      {solution.keyServices.map((service, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="group flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-50 to-transparent hover:from-emerald-50 hover:to-transparent border border-transparent hover:border-emerald-200 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                            <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Additional Info Tags */}
                    {(solution.dataSources || solution.strategies || solution.propertyTypes) && (
                      <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
                        {solution.dataSources && (
                          <div>
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Data Sources</h4>
                            <div className="flex flex-wrap gap-2">
                              {solution.dataSources.map((source, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 rounded-lg text-xs font-semibold border border-indigo-200/50"
                                >
                                  {source}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {solution.strategies && (
                          <div>
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Investment Strategies</h4>
                            <div className="flex flex-wrap gap-2">
                              {solution.strategies.map((strategy, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-50 text-teal-700 rounded-lg text-xs font-semibold border border-teal-200/50"
                                >
                                  {strategy}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {solution.propertyTypes && (
                          <div>
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Property Types</h4>
                            <div className="flex flex-wrap gap-2">
                              {solution.propertyTypes.map((type, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-50 text-teal-700 rounded-lg text-xs font-semibold border border-teal-200/50"
                                >
                                  {type}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white" id="get-started">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                  onClick={() => navigate('/contact')}
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
    </main>
  );
};

export default SolutionsPage;
