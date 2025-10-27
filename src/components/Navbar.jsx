import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'PMS', to: '/pms' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeBtnRef = useRef(null);
  const location = useLocation();

  // Close mobile dropdown on Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Toggle compact/light navbar once scrolling starts
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll(); // initialize
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Robust: lock background scroll while drawer is open and restore on close
  useEffect(() => {
    if (!mobileOpen) return;
    const root = document.documentElement;
    const scrollY = window.scrollY;
    const original = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overscroll: root.style.overscrollBehavior,
      touch: root.style.touchAction,
    };
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    root.style.overscrollBehavior = 'contain';
    root.style.touchAction = 'none';
    // focus close button for a11y
    setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = original.overflow;
      document.body.style.position = original.position;
      document.body.style.top = original.top;
      document.body.style.width = original.width;
      root.style.overscrollBehavior = original.overscroll;
      root.style.touchAction = original.touch;
      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  const currentPath = location.pathname;
  const isHome = currentPath === '/';
  // On homepage: transparent at top, white when scrolled
  // On other pages: always white background (since they have light backgrounds)
  const light = !isHome || scrolled;

  const textBase = light ? 'text-neutral-700 hover:text-neutral-900' : 'text-white/70 hover:text-white';
  const focusOutline = light ? 'focus-visible:outline-neutral-900' : 'focus-visible:outline-white';

  return (
  <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${light ? 'bg-white/95 backdrop-blur border-b border-black/5' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-5 lg:px-8" aria-label="Global">
        <div className="flex h-22 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 ${focusOutline}`}
          >
            <img src="/Vionix-Logo .JPG" alt="Vionix" className="h-10 w-auto rounded-sm" />
            <span className={`${light ? 'text-neutral-900' : 'text-white'} font-semibold text-lg hidden sm:inline`}>Vionix</span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-base font-semibold tracking-wide transition ${textBase} ${currentPath === link.to ? (light ? 'text-neutral-900' : 'text-white') : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Call Now Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+911244056631"
              className={`hidden md:inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${light ? 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600' : 'bg-white text-neutral-900 hover:bg-gray-100 focus-visible:outline-white'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            
            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(o=>!o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className={`lg:hidden inline-flex flex-col justify-center gap-1.5 p-3 rounded-md ${light ? 'hover:bg-black/5 text-neutral-900' : 'hover:bg-white/5 text-white'} focus-visible:outline-2 focus-visible:outline-offset-2 ${focusOutline}`}
            >
              <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay/drawer via portal to avoid stacking issues */}
      {mobileOpen && createPortal(
        <div className="lg:hidden fixed inset-0 z-[70]" aria-hidden={!mobileOpen}>
          <div className={`absolute inset-0 transition-opacity duration-200 ${light ? 'bg-black/40 backdrop-blur-sm opacity-100' : 'bg-black/60 backdrop-blur-sm opacity-100'}`} onClick={() => setMobileOpen(false)} />
          <div className={`absolute top-0 right-0 h-full w-[88%] max-w-80 transform transition-transform duration-300 border-l ${light ? 'bg-white border-black/10' : 'bg-neutral-950 border-white/10'} ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="p-6 flex flex-col h-full" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
              <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <img src="/Vionix-Logo .JPG" alt="Vionix" className="h-8 w-auto rounded" />
                  <span className={`${light ? 'text-neutral-900' : 'text-white'} font-semibold`}>Vionix</span>
                </Link>
                <button ref={closeBtnRef} aria-label="Close menu" onClick={() => setMobileOpen(false)} className={`${light ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/70 hover:text-white'}`}>✕</button>
              </div>
              <nav className="flex-1 overflow-y-auto space-y-1">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full text-left px-2 py-2 text-base font-semibold rounded-md ${light ? 'text-neutral-800 hover:text-neutral-900 hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <a 
                    href="tel:+911244056631" 
                    onClick={() => setMobileOpen(false)} 
                    className={`mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-bold ${light ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-neutral-900 hover:bg-gray-100'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </nav>
              <p className={`mt-8 text-[10px] ${light ? 'text-neutral-500' : 'text-white/40'}`}>© {new Date().getFullYear()} Vionix</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Navbar;
