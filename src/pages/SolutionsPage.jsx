import React from 'react';

const SolutionsPage = () => {
  const pillars = [
    {
      title: 'Portfolio Construction',
      desc: 'Model, simulate and optimize multi‑asset portfolios with institutional risk and constraints.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-slate-900"><rect x="6" y="20" width="8" height="12" rx="2" className="fill-none stroke-current" strokeWidth="2"/><rect x="18" y="12" width="8" height="20" rx="2" className="fill-none stroke-current" strokeWidth="2"/><rect x="30" y="8" width="8" height="24" rx="2" className="fill-none stroke-current" strokeWidth="2"/></svg>
      )
    },
    {
      title: 'Risk & Compliance',
      desc: 'Intraday exposures, VaR, limits and surveillance with auditable controls and alerts.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-slate-900"><path d="M8 14v12l12 6 12-6V14L20 8 8 14Z" className="fill-none stroke-current" strokeWidth="2"/><path d="M20 12v18" className="stroke-current" strokeWidth="2"/><path d="M12 18l8 4 8-4" className="stroke-current" strokeWidth="2"/></svg>
      )
    },
    {
      title: 'Performance & Reporting',
      desc: 'Attribution, benchmark comparison and client reporting with automated distribution.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-slate-900"><circle cx="12" cy="20" r="3" className="fill-none stroke-current" strokeWidth="2"/><circle cx="20" cy="20" r="3" className="fill-none stroke-current" strokeWidth="2"/><circle cx="28" cy="20" r="3" className="fill-none stroke-current" strokeWidth="2"/><path d="M10 28h20" className="stroke-current" strokeWidth="2"/></svg>
      )
    },
    {
      title: 'ESG & Private Assets',
      desc: 'Integrate ESG metrics and model private investments alongside public markets.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-slate-900"><path d="M8 24c6-10 12-10 18 0" className="stroke-current fill-none" strokeWidth="2"/><circle cx="20" cy="20" r="14" className="fill-none stroke-current" strokeWidth="2"/></svg>
      )
    }
  ];

  const modules = [
    'Portfolio modeling & scenarios',
    'Trade order & execution hooks',
    'Positions, cash & exposure',
    'Risk (VaR, stress, limits)',
    'Performance & attribution',
    'Client & regulatory reporting',
    'ESG data integration',
    'Private markets ledger',
    'APIs & data export',
    'Audit trail & governance'
  ];

  const benefitIcons = [
    // Data integrity
    (
      <svg viewBox="0 0 40 40" className="w-6 h-6 text-slate-900" role="img" aria-label="Data integrity icon">
        <path d="M8 14l12-6 12 6-12 6-12-6Z" className="fill-none stroke-current" strokeWidth="2" />
        <path d="M8 20l12 6 12-6" className="fill-none stroke-current" strokeWidth="2" />
        <path d="M8 26l12 6 12-6" className="fill-none stroke-current" strokeWidth="2" />
      </svg>
    ),
    // Operational efficiency
    (
      <svg viewBox="0 0 40 40" className="w-6 h-6 text-slate-900" role="img" aria-label="Operational efficiency icon">
        <circle cx="20" cy="20" r="5" className="fill-none stroke-current" strokeWidth="2" />
        <path d="M20 10v4M20 26v4M10 20h4M26 20h4M14 14l3 3M26 14l-3 3M14 26l3-3M26 26l-3-3" className="stroke-current" strokeWidth="2" />
      </svg>
    ),
    // Governance
    (
      <svg viewBox="0 0 40 40" className="w-6 h-6 text-slate-900" role="img" aria-label="Governance icon">
        <path d="M8 14v10l12 8 12-8V14L20 8 8 14Z" className="fill-none stroke-current" strokeWidth="2" />
        <path d="M15 20l3 3 7-7" className="fill-none stroke-current" strokeWidth="2" />
      </svg>
    )
  ];

  return (
    <main id="solutions" className="bg-white">
      {/* Hero */}
      <section className="pt-28 pb-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-5">Solutions</p>
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-semibold tracking-tight text-slate-900 leading-[1.08] max-w-4xl">
                Comprehensive investment solutions for modern managers
              </h1>
              <p className="mt-6 text-[15px] md:text-[16px] leading-relaxed text-slate-600 max-w-2xl">
                Unify portfolio construction, risk, performance and reporting on a single platform. Reduce operational drag
                and elevate governance with real‑time, multi‑asset insight.
              </p>
              <div className="mt-10 flex gap-4">
                <a href="#modules" className="inline-flex items-center h-11 px-6 rounded-sm bg-slate-900 text-white text-[13px] font-medium tracking-wide hover:bg-slate-800">Explore modules <span className="ml-2" aria-hidden>→</span></a>
                <a href="#contact" className="inline-flex items-center h-11 px-6 rounded-sm border border-slate-300 text-slate-800 text-[13px] font-medium tracking-wide hover:border-slate-900 hover:text-slate-900">Talk to our team</a>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-100 shadow-sm ring-1 ring-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                  alt="Portfolio analytics dashboard preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">
            {pillars.map((p, i) => (
              <div key={i} className="group">
                <div className="mb-6">{p.icon}</div>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900 mb-3 leading-snug max-w-[18ch]">{p.title}</h3>
                <p className="text-[13px] leading-relaxed text-slate-700">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform modules */}
      <section id="modules" className="py-24 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">Unified, modular platform</h2>
              <p className="text-[15px] leading-relaxed text-slate-700 mb-5 max-w-xl">
                Mix-and-match capabilities across public and private markets. Our architecture embeds controls and
                analytics natively while remaining API-open for extension and integration into your ecosystem.
              </p>
              <p className="text-[15px] leading-relaxed text-slate-700 max-w-xl">
                Consolidate data, streamline operations and surface risk-aware performance insight—at scale.
              </p>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-gray-100 ring-1 ring-gray-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                  alt="Risk and performance visualization"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modules.map((m, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 rounded-md ring-1 ring-slate-200 hover:ring-slate-900 transition">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span className="text-[13px] text-slate-800">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits band */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { k: 'Data integrity', v: 'Single source of truth' },
              { k: 'Operational efficiency', v: 'Lower total cost' },
              { k: 'Governance', v: 'Auditability by design' }
            ].map((b, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-8 bg-white">
                <div className="mb-5">
                  <div className="h-12 w-12 rounded-full bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
                    {benefitIcons[i]}
                  </div>
                </div>
                <p className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase mb-3">{b.k}</p>
                <p className="text-xl text-slate-900">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-xl p-12 md:p-16 bg-white">
            <h2 className="text-[2.2rem] md:text-[3rem] font-semibold tracking-tight text-slate-900 leading-[1.08] mb-8">
              Ready to see the platform in action?
            </h2>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-600 max-w-3xl mb-10">
              Discover how Vionix unifies investment operations across asset classes while strengthening oversight and
              accelerating decision‑making.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#contact" className="inline-flex items-center justify-center h-12 px-10 rounded-sm bg-slate-900 text-white text-[13px] font-medium tracking-wide hover:bg-slate-800">TALK TO OUR TEAM <span className="ml-3" aria-hidden>→</span></a>
              <a href="#" className="inline-flex items-center justify-center h-12 px-10 rounded-sm border border-slate-300 text-slate-800 text-[13px] font-medium tracking-wide hover:border-slate-900 hover:text-slate-900">DOWNLOAD OVERVIEW</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage;
