import React from 'react';

const PMSPage = () => {
  // Existing content reused from the original page
  const benefits = [
    {
      icon: '🧠',
      title: 'Intelligent Decision Making',
      description: 'AI-powered analytics for informed investment decisions',
    },
    {
      icon: '🔄',
      title: 'Real-time Monitoring',
      description: 'Continuous portfolio monitoring and optimization',
    },
    {
      icon: '✅',
      title: 'Expert Guidance',
      description: 'Dedicated relationship managers and investment experts',
    },
  ];

  const stats = [
    { value: '99.9%', label: 'System Uptime' },
    { value: '24/7', label: 'Market Monitoring' },
    { value: 'Real-time', label: 'Portfolio Updates' },
  ];

  const features = [
    {
      icon: '📈',
      title: 'Performance Tracking',
      description:
        'Comprehensive performance analytics with detailed attribution analysis and benchmark comparisons.',
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description:
        'Advanced risk assessment tools including VaR modeling, stress testing, and scenario analysis.',
    },
    {
      icon: '📊',
      title: 'Portfolio Analytics',
      description:
        'Deep insights into portfolio composition, sector allocation, and asset distribution.',
    },
    {
      icon: '🎯',
      title: 'Goal-Based Investing',
      description:
        'Customized investment strategies aligned with your financial goals and risk appetite.',
    },
  ];

  return (
    <main id="pms" className="bg-white">
      {/* Hero */}
      <section className="pt-28 pb-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-5">Premium Services</p>
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-semibold tracking-tight text-slate-900 leading-[1.08]">
                Portfolio Management Services (PMS)
              </h1>
              <p className="mt-6 text-[15px] md:text-[16px] leading-relaxed text-slate-600 max-w-2xl">
                Our Portfolio Management Services combine cutting-edge technology with expert oversight to deliver
                superior investment outcomes.
              </p>
              <div className="mt-10 flex gap-4">
                <a href="#features" className="inline-flex items-center h-11 px-6 rounded-sm bg-slate-900 text-white text-[13px] font-medium tracking-wide hover:bg-slate-800">Explore features <span className="ml-2" aria-hidden>→</span></a>
                <a href="#contact" className="inline-flex items-center h-11 px-6 rounded-sm border border-slate-300 text-slate-800 text-[13px] font-medium tracking-wide hover:border-slate-900 hover:text-slate-900">Talk to our team</a>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-100 shadow-sm ring-1 ring-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop"
                  alt="Portfolio management overview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual showcase collage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[ 
              {
                src: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop',
                alt: 'Equities performance overview'
              },
              {
                src: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1200&auto=format&fit=crop',
                alt: 'Fixed income analytics'
              },
              {
                src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
                alt: 'Risk heatmap'
              },
              {
                src: 'https://images.unsplash.com/photo-1559523182-a284c3fb7cff?q=80&w=1200&auto=format&fit=crop',
                alt: 'Portfolio allocation view'
              }
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-slate-200 shadow-sm group">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-8 bg-white">
                <div className="mb-5">
                  <div className="h-12 w-12 rounded-full bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center text-lg">
                    <span aria-hidden>{b.icon}</span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900 mb-3">{b.title}</h3>
                <p className="text-[13px] leading-relaxed text-slate-700">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wide illustrative image */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <figure className="rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
              alt="Advisor reviewing PMS dashboard"
              loading="lazy"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-8 bg-white text-center">
                <p className="text-4xl font-semibold text-slate-900 tracking-tight">{s.value}</p>
                <p className="mt-2 text-[13px] tracking-widest uppercase text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.1]">Comprehensive PMS features</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">Everything you need to manage and grow your wealth effectively.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-lg ring-1 ring-slate-200 bg-white hover:ring-slate-900 transition">
                <div className="h-10 w-10 rounded-full bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center text-base">
                  <span aria-hidden>{f.icon}</span>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-[13px] text-slate-700 leading-relaxed max-w-prose">{f.description}</p>
                </div>
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
              Ready to elevate your investment strategy?
            </h2>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-600 max-w-3xl mb-10">
              See how our PMS couples real-time monitoring with expert guidance to deliver outcomes aligned to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#contact" className="inline-flex items-center justify-center h-12 px-10 rounded-sm bg-slate-900 text-white text-[13px] font-medium tracking-wide hover:bg-slate-800">SCHEDULE CONSULTATION <span className="ml-3" aria-hidden>→</span></a>
              <a href="#features" className="inline-flex items-center justify-center h-12 px-10 rounded-sm border border-slate-300 text-slate-800 text-[13px] font-medium tracking-wide hover:border-slate-900 hover:text-slate-900">VIEW FEATURES</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PMSPage;
