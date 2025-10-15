import React from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div>
      {/* New consolidated hero */}
      <Hero />

      {/* Supporting marketing sections retained below (trimmed styling for cleaner aesthetic) */}
      <section className="bg-white py-32" id="about-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image side */}
            <div className="relative group">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-100 shadow-sm ring-1 ring-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1080&q=60"
                  alt="Professional portfolio management visualization"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content side */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-wider text-teal-700 uppercase mb-6">About Us</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.15]">
                Institutional‑grade investment
                <span className="block">analytics & oversight</span>
              </h2>
              <div className="space-y-6 text-[15px] leading-relaxed text-slate-600">
                <p>
                  Vionix provides an integrated portfolio management platform combining advanced analytics, risk
                  intelligence and expert oversight. We enable investors to act decisively with reliable, consolidated data.
                </p>
                <p>
                  Our framework unifies portfolio construction, optimization, risk, ESG metrics and reporting—reducing
                  operational drag while elevating governance and transparency.
                </p>
                <p>
                  Regulated, secure and extensible, the platform supports long‑term performance objectives while
                  maintaining rigorous compliance standards.
                </p>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition"
                >
                  Learn More
                  <span className="ml-2" aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional marketing sections */}
      <section className="py-32 bg-white" id="core-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro two-column */}
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15] mb-10">
                Navigate complexity with <span className="block font-bold">confidence</span>
              </h2>
              <div className="space-y-5 text-[15px] leading-relaxed text-slate-700 max-w-xl">
                <p>
                  For over a decade, Vionix has partnered with institutional investors and high-net-worth platforms to unify front-to-back investment operations. We blend modern portfolio technology with expert managed services and an open data ecosystem.
                </p>
                <p>
                  This integrated model reduces operational drag, improves data fidelity and creates a consolidated source of truth—helping you streamline workflows, surface actionable risk & performance insight, and focus on strategic allocation.
                </p>
              </div>
            </div>
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Vionix Platform</h3>
              <p className="text-[15px] leading-relaxed text-slate-700 mb-5">
                A unified, modular investment management stack spanning portfolio construction, order & execution, risk, performance, private assets, ESG data and client reporting. Our architecture eliminates fragmented spreadsheets and legacy hand-offs.
              </p>
              <p className="text-[15px] leading-relaxed text-slate-700 mb-5">
                Institutional-grade analytics and controls are embedded natively—delivering scale, resilience and auditability while remaining API-open for extension and integration.
              </p>
              <p className="text-[15px] leading-relaxed text-slate-700">
                The result: higher decision velocity, lower total cost of ownership and a durable data foundation for innovation across public and private markets.
              </p>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">
            {[
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-12 h-12 text-slate-900"><circle cx="20" cy="20" r="18" className="fill-none stroke-current" strokeWidth="2" /><path d="M10 24c4-8 8-8 12 0 4-6 8-6 12 0" className="stroke-current fill-none" strokeWidth="2" strokeLinecap="round" /></svg>
                ),
                title: 'Complete asset class coverage',
                desc: 'Manage equities, fixed income, derivatives, private markets and alternatives in one consolidated view with multi-asset analytics.',
                link: '#'
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-12 h-12 text-slate-900"><rect x="6" y="10" width="8" height="20" rx="2" className="fill-none stroke-current" strokeWidth="2" /><rect x="18" y="6" width="8" height="24" rx="2" className="fill-none stroke-current" strokeWidth="2" /><rect x="30" y="14" width="8" height="16" rx="2" className="fill-none stroke-current" strokeWidth="2" /></svg>
                ),
                title: 'Real-time data',
                desc: 'Centralize trades, exposures, cash and positions across all strategies for intraday transparency and faster investment decisions.',
                link: '#'
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-12 h-12 text-slate-900"><path d="M8 30V12l12-6 12 6v18l-12 6-12-6Z" className="fill-none stroke-current" strokeWidth="2" strokeLinejoin="round" /><path d="M20 6v24" className="stroke-current" strokeWidth="2" strokeLinecap="round" /><path d="M8 18l12 6 12-6" className="stroke-current" strokeWidth="2" strokeLinecap="round" /></svg>
                ),
                title: 'Market-leading analytics',
                desc: 'Institutional-grade optimization, attribution & risk models integrated directly into portfolio construction and monitoring.',
                link: '#'
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-12 h-12 text-slate-900"><path d="M6 30h16" className="stroke-current" strokeWidth="2" strokeLinecap="round" /><path d="M10 26V12l8-4 8 4v14" className="fill-none stroke-current" strokeWidth="2" strokeLinejoin="round" /><path d="M26 20h8v10h-8z" className="fill-none stroke-current" strokeWidth="2" strokeLinejoin="round" /></svg>
                ),
                title: 'Managed Business Services',
                desc: 'Specialized data, investment operations & accounting services delivering scale while you focus on strategy & client outcomes.',
                link: '#'
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900 mb-3 leading-snug max-w-[14ch]">{item.title}</h3>
                <p className="text-[13px] leading-relaxed text-slate-700 mb-6 pr-6">{item.desc}</p>
                <a href={item.link} className="text-[13px] font-medium text-slate-900 underline decoration-slate-300 underline-offset-[5px] hover:decoration-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 rounded-sm">
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <section className="py-40 bg-white" id="clients">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[3.25rem] md:text-[5.25rem] font-light tracking-tight text-slate-900 text-center leading-none mb-20">OUR<br className="md:hidden"/> CLIENTS</h2>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20">
              <p className="text-lg md:text-xl text-slate-800 max-w-xl leading-relaxed">
                Trusted by leading investment managers, asset owners and wealth platforms globally. Institutions rely on Vionix for unified data integrity, scalable operations and risk-aware performance.
              </p>
              <div>
                <button className="inline-flex items-center border border-slate-900 px-8 h-12 text-[13px] font-medium tracking-wide hover:bg-slate-900 hover:text-white transition rounded-sm">
                  SEE ALL CLIENT STORIES <span className="ml-3" aria-hidden>→</span>
                </button>
              </div>
            </div>

            {/* Infinite autoplay logo carousel */}
            <div className="relative overflow-hidden" aria-label="Client logos">
              <div className="flex w-max animate-[logo-marquee_30s_linear_infinite]" role="list">
                {[
                  'Fannie Mae','Zurich','ADIA','BlackRock','Allianz','Temasek','NorthStar','Sovereign One'
                ].map((name,i) => (
                  <div
                    key={i}
                    role="listitem"
                    className="flex items-center justify-center w-56 h-24 mx-6 grayscale hover:grayscale-0 transition"
                  >
                    <span className="text-slate-700 text-lg font-medium tracking-wide whitespace-nowrap">{name}</span>
                  </div>
                ))}
                {/* duplicate for seamless loop */}
                {[
                  'Fannie Mae','Zurich','ADIA','BlackRock','Allianz','Temasek','NorthStar','Sovereign One'
                ].map((name,i) => (
                  <div
                    key={'dup-'+i}
                    role="listitem"
                    className="flex items-center justify-center w-56 h-24 mx-6 grayscale hover:grayscale-0 transition"
                  >
                    <span className="text-slate-700 text-lg font-medium tracking-wide whitespace-nowrap">{name}</span>
                  </div>
                ))}
              </div>
              {/* Gradient fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
            </div>

            {/* Pagination dots removed as requested */}
          </div>
          {/* Tailwind keyframes (scoped via arbitrary variant if using TW v4 compiled config) */}
          <style>{`@keyframes logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </section>

        {/* Final CTA Section (revamped) */}
        <section id="get-started">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-slate-200 rounded-xl md:p-16 bg-white">
              <h2 className="text-[2.4rem] md:text-[3.3rem] font-semibold tracking-tight text-slate-900 leading-[1.08] mb-10">
                Ready to transform your <span className="font-light">investment strategy?</span>
              </h2>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-600 max-w-3xl mb-10">
                Accelerate operational efficiency, unify portfolio data and gain risk-aware performance insight on a single modern platform. Start the conversation to see how Vionix can align with your growth and governance objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="inline-flex items-center justify-center h-12 px-10 rounded-sm bg-slate-900 text-white text-[13px] font-medium tracking-wide hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition">
                  TALK TO OUR TEAM <span className="ml-3" aria-hidden>→</span>
                </button>
                <button className="inline-flex items-center justify-center h-12 px-10 rounded-sm border border-slate-300 text-slate-800 text-[13px] font-medium tracking-wide hover:border-slate-900 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition">
                  DOWNLOAD OVERVIEW
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
