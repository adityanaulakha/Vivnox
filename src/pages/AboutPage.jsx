import React from 'react';

const AboutPage = () => {
  return (
    <main id="about" className="bg-white">
      {/* Hero */}
      <section className="pt-28 pb-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-5">About Vionix</p>
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-semibold tracking-tight text-slate-900 leading-[1.08]">
                Asset and portfolio management solutions
              </h1>
              <p className="mt-6 text-[15px] md:text-[16px] leading-relaxed text-slate-600 max-w-2xl">
                Revamp your portfolio management with innovative, tailored solutions and comprehensive managed services.
              </p>
              <div className="mt-10 flex gap-4">
                <a href="#story" className="inline-flex items-center h-11 px-6 rounded-sm bg-slate-900 text-white text-[13px] font-medium tracking-wide hover:bg-slate-800">Our story <span className="ml-2" aria-hidden>→</span></a>
                <a href="#models" className="inline-flex items-center h-11 px-6 rounded-sm border border-slate-300 text-slate-800 text-[13px] font-medium tracking-wide hover:border-slate-900 hover:text-slate-900">Operating models</a>
              </div>
            </div>
            <div className="relative">
              {/* subtle dotted pattern background */}
              <div className="pointer-events-none absolute -inset-4 rounded-2xl opacity-60 [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
              {/* collage */}
              <div className="relative">
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-100 shadow-sm ring-1 ring-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                    alt="Team planning investment strategy"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-28 rounded-lg overflow-hidden shadow ring-1 ring-slate-200 rotate-[-3deg] bg-white">
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" alt="Collaboration" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="hidden md:block absolute -top-6 -right-6 w-48 h-32 rounded-lg overflow-hidden shadow ring-1 ring-slate-200 rotate-3 bg-white">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop" alt="Workshop" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { k: 'Precision', v: 'Technology + expertise' },
              { k: 'Visibility', v: 'Real-time insights' },
              { k: 'Governance', v: 'Auditability by design' },
            ].map((card, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-8 bg-white">
                <p className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase mb-3">{card.k}</p>
                <p className="text-xl text-slate-900">{card.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Stats */}
      <section id="story" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">Innovative, tailored solutions</h2>
              <div className="space-y-5 text-[15px] text-slate-700 leading-relaxed">
                <p>
                  Vionix provides portfolio management solutions that leverage technology and expert oversight,
                  enabling private market players to achieve unparalleled efficiency and accuracy.
                </p>
                <p>
                  By integrating advanced analytics and domain expertise, Vionix empowers investors to make informed decisions,
                  optimize strategies, and drive growth. Our capabilities provide real-time insights and comprehensive reporting,
                  ensuring you stay ahead of the curve.
                </p>
                <p>
                  With personalized support and guidance from our expert-managed services, Vionix helps you navigate complex
                  investment landscapes with confidence.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-gray-100 ring-1 ring-slate-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                  alt="Advisor reviewing PMS dashboard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: '12+', k: 'Years' },
                  { v: '30+', k: 'Clients' },
                  { v: '50+', k: 'Integrations' },
                ].map((s, i) => (
                  <div key={i} className="border border-slate-200 rounded-md p-5 text-center bg-white">
                    <p className="text-2xl font-semibold text-slate-900">{s.v}</p>
                    <p className="mt-1 text-[11px] tracking-widest uppercase text-slate-500">{s.k}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Mosaic layout: first tile spans larger */}
            <div className="col-span-2 row-span-2 rounded-lg overflow-hidden ring-1 ring-slate-200 shadow-sm group">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdlYWx0aCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500q=80&w=2000&auto=format&fit=crop" alt="Strategy whiteboard" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="rounded-lg overflow-hidden ring-1 ring-slate-200 shadow-sm group">
              <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop" alt="Data visualization" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="rounded-lg overflow-hidden ring-1 ring-slate-200 shadow-sm group">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" alt="Team focus" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="rounded-lg overflow-hidden ring-1 ring-slate-200 shadow-sm group">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop" alt="Product meeting" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="rounded-lg overflow-hidden ring-1 ring-slate-200 shadow-sm group">
              <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1200&auto=format&fit=crop" alt="Architecture planning" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
          </div>
        </div>
      </section>

      {/* Operating models (existing content reframed) */}
      <section id="models" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-4">Operating models</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.1]">Choose the model that fits you</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">Needs differ; one size does not fit all. Pick the blend of technology and managed services that suits your team.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-xl p-8 bg-white">
              <div className="h-12 w-12 rounded-full bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center mb-5 text-xl">👑</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Complete Control</h3>
              <p className="text-[13px] text-slate-700 leading-relaxed mb-4">Gain greater control and enable smarter decision making across your portfolio—construction, optimization, risk and trading, including ESG, in one place.</p>
              <ul className="space-y-2 text-[13px] text-slate-700">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Portfolio construction & optimization</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Risk analysis & management</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> ESG metrics integration</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Complete transparency</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-xl p-8 bg-white">
              <div className="h-12 w-12 rounded-full bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center mb-5 text-xl">🤝</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Managed Service</h3>
              <p className="text-[13px] text-slate-700 leading-relaxed mb-4">Expert team manages data collection, reconciliation and reporting, ensuring accuracy and oversight while preserving transparency and control.</p>
              <ul className="space-y-2 text-[13px] text-slate-700">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Expert data management</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Automated reconciliation</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Comprehensive reporting</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Dedicated support team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-xl p-12 md:p-16 bg-white">
            <h2 className="text-[2.2rem] md:text-[3rem] font-semibold tracking-tight text-slate-900 leading-[1.08] mb-8">
              Let’s build the right model together
            </h2>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-600 max-w-3xl mb-10">
              From technology to managed services, Vionix tailors the right mix for your operating model and governance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#models" className="inline-flex items-center justify-center h-12 px-10 rounded-sm bg-slate-900 text-white text-[13px] font-medium tracking-wide hover:bg-slate-800">EXPLORE MODELS <span className="ml-3" aria-hidden>→</span></a>
              <a href="#story" className="inline-flex items-center justify-center h-12 px-10 rounded-sm border border-slate-300 text-slate-800 text-[13px] font-medium tracking-wide hover:border-slate-900 hover:text-slate-900">READ OUR STORY</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
