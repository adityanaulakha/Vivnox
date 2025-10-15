import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
  Redesigned enterprise-style Hero referencing provided screenshot:
  - Full viewport gradient (left cool blue to right warm orange)
  - Center-left aligned large heading & supporting paragraph
  - Single high-emphasis CTA + subtle secondary link
  - Slim tabbed underline bar (mirrors "WHO WE ARE | DECISION CONFIDENCE | PRIVATE MARKETS")
  - Reduced ornamental animations for a more professional feel
*/

// Unified slide definitions: each slide couples background + headline + description + topic mapping
const slides = [
  {
    id: 'slide-1',
    topicId: 'about',
    label: 'WHO WE ARE',
    headline: 'EMPOWERING INVESTMENT\nMANAGEMENT',
    description: 'Vionix delivers integrated portfolio and investment management solutions combining advanced analytics, risk intelligence and expert oversight for the global buy-side.',
    ctaScroll: 'contact',
    secondaryScroll: 'solutions',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1600&q=60',
    alt: 'Financial advisor reviewing portfolio performance charts on a laptop',
    overlay: 'dark'
  },
  {
    id: 'slide-2',
    topicId: 'solutions',
    label: 'DECISION CONFIDENCE',
    headline: 'DATA-DRIVEN RISK INTELLIGENCE',
    description: 'Harness real-time risk analytics, multi-factor performance attribution and scenario modelling to make sharper, faster portfolio decisions with confidence.',
    ctaScroll: 'solutions',
    secondaryScroll: 'pms',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=60',
    alt: 'Close-up of digital stock market data and analytics dashboard',
    overlay: 'dark'
  },
  {
    id: 'slide-3',
    topicId: 'pms',
    label: 'PRIVATE MARKETS',
    headline: 'INSIGHT ACROSS PRIVATE ASSETS',
    description: 'Unify fund, deal and portfolio company data for transparent monitoring, valuation workflows and proactive value creation across private markets.',
    ctaScroll: 'pms',
    secondaryScroll: 'contact',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=60',
    alt: 'Professional wealth management meeting around a conference table',
    overlay: 'dark'
  }
];

const AUTO_INTERVAL = 6000; // ms
const Hero = () => {
  const [index, setIndex] = useState(0);
  // Autoplay only (no manual pause/controls now)
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setIndex(i => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(next, AUTO_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [index, next]);

  // Removed keyboard manual controls since controls are gone

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const current = slides[index];

  // Preload adjacent images to avoid flash during fade
  useEffect(() => {
    const adjacent = [ (index + 1) % slides.length, (index - 1 + slides.length) % slides.length ];
    adjacent.forEach(i => {
      const s = slides[i];
      if (s.type === 'image') {
        const img = new Image();
        img.src = s.src;
      }
    });
  }, [index]);

  return (
    <section
      id="home"
      className="relative min-h-[80vh] lg:min-h-[88vh] flex items-center pt-24 pb-12 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Carousel background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-0 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={i !== index}
          >
            {s.type === 'image' ? (
              <>
                <img
                  src={s.src}
                  alt=""
                  className="w-full h-full object-cover"
                  fetchpriority={i === index ? 'high' : 'auto'}
                />
                <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
              </>
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${s.gradient}`} />
            )}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,rgba(255,255,255,0.12),transparent_60%)]" />
          </div>
        ))}
      </div>

      <div className="container-custom">
        <div className="max-w-4xl relative" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            <motion.h1
              key={current.id + '-h'}
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white whitespace-pre-line"
            >
              {current.headline}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={current.id + '-p'}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-8 text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl"
            >
              {current.description}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + '-cta'}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => handleScroll(current.ctaScroll)}
                className="inline-flex items-center justify-center rounded-md bg-white px-7 py-4 text-sm md:text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
              >
                {current.label === 'DECISION CONFIDENCE' ? 'SEE PLATFORM' : current.label === 'PRIVATE MARKETS' ? 'DISCOVER MORE' : 'CONTACT US'} <span aria-hidden className="ml-2">→</span>
              </button>
              <button
                onClick={() => handleScroll(current.secondaryScroll)}
                className="inline-flex items-center justify-center rounded-md px-7 py-4 text-sm md:text-base font-medium text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
              >
                {current.label === 'PRIVATE MARKETS' ? 'Investor Solutions' : 'Explore Solutions'}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tab style anchor bar */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          aria-label="Hero topics"
          role="tablist"
          className="mt-24 md:mt-28 border-t border-white/10 flex flex-wrap gap-10 text-sm font-medium"
        >
            {slides.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.topicId}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setIndex(i)}
                  className={`relative py-5 transition focus-visible:outline-none ${active ? 'text-white' : 'text-white/55 hover:text-white'}`}
                >
                  {s.label}
                  <span
                    className={`absolute left-0 -bottom-px h-[2px] bg-white/90 transition-all ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </motion.nav>
      </div>

    </section>
  );
};

export default Hero;
