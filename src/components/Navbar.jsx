import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const navLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'PMS', to: '/pms' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

// const flatSections = ['home','solutions','about','pms','contact','login','signup']; // legacy ids mapping (not used)

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const searchWrapperRef = useRef(null);
  const inputRef = useRef(null);
  const closeBtnRef = useRef(null);
  const location = useLocation();

  // Close search or dropdown on outside click / Esc
  useEffect(() => {
    const handleClick = (e) => {
      if (searchOpen && searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (searchOpen) {
          setSearchOpen(false);
        }
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [searchOpen]);

  // Focus input when opened
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  // Toggle compact/light navbar once scrolling starts
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll(); // initialize
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // No dropdowns; links are direct now

  // Close mobile/search on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
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
  const light = scrolled || !isHome; // light style on scroll or any non-home route

  const textBase = light ? 'text-neutral-700 hover:text-neutral-900' : 'text-white/70 hover:text-white';
  const textMuted = light ? 'text-neutral-600' : 'text-white/60';
  const focusOutline = light ? 'focus-visible:outline-neutral-900' : 'focus-visible:outline-white';

  return (
  <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${light ? 'bg-white/95 backdrop-blur border-b border-black/5' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-5 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center gap-6">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 ${focusOutline}`}
          >
            <img src="/Vionix-Logo .JPG" alt="Vionix" className="h-8 w-auto rounded-sm" />
            <span className={`${light ? 'text-neutral-900' : 'text-white'} font-semibold text-lg hidden sm:inline`}>Vionix</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 ml-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-[13px] font-medium tracking-wide transition ${textBase} ${currentPath === link.to ? (light ? 'text-neutral-900' : 'text-white') : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 ml-auto" ref={searchWrapperRef}>
            {/* Search icon / bar */}
            <div className="hidden md:flex items-center">
              {!searchOpen && (
                <button
                  aria-label="Open search"
                  onClick={() => setSearchOpen(true)}
                  className={`inline-flex ${textMuted} ${light ? 'hover:text-neutral-900' : 'hover:text-white'} transition p-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 ${focusOutline}`}
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
              {searchOpen && (
                <div className={`flex items-center gap-2 overflow-hidden rounded-full pl-3 pr-1 py-1 ring-1 transition-all w-64 animate-fadeInUp ${light ? 'bg-black/5 ring-black/10 focus-within:ring-black/30' : 'bg-white/10 backdrop-blur-md ring-white/15 focus-within:ring-white/30'}`}>
                  <Search className={`w-4 h-4 ${light ? 'text-neutral-700' : 'text-white/70'}`} />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className={`flex-1 bg-transparent text-sm focus:outline-none ${light ? 'text-neutral-900 placeholder-neutral-500' : 'text-white placeholder-white/40'}`}
                    aria-label="Search input"
                  />
                  {query && (
                    <button
                      aria-label="Clear search"
                      onClick={() => setQuery('')}
                      className={`p-1 ${textMuted} ${light ? 'hover:text-neutral-900' : 'hover:text-white'}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  <button
                    aria-label="Close search"
                    onClick={() => setSearchOpen(false)}
                    className={`p-1 ${textMuted} ${light ? 'hover:text-neutral-900' : 'hover:text-white'}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
            {/* Auth CTAs (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/login"
                className={`inline-flex items-center rounded-md px-4 py-2.5 text-[12px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${light ? 'text-neutral-900 hover:bg-black/5 focus-visible:outline-neutral-900' : 'text-white hover:bg-white/10 focus-visible:outline-white'}`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`inline-flex items-center rounded-md px-4 py-2.5 text-[12px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${light ? 'bg-black text-white hover:bg-neutral-900 focus-visible:outline-neutral-900' : 'bg-white text-neutral-900 hover:bg-gray-100 focus-visible:outline-white'}`}
              >
                Sign Up
              </Link>
            </div>
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
                    className={`block w-full text-left px-2 py-2 text-sm font-medium rounded-md ${light ? 'text-neutral-800 hover:text-neutral-900 hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Link to="/login" onClick={() => setMobileOpen(false)} className={`block w-full text-left px-2 py-2 text-sm font-medium rounded-md ${light ? 'text-neutral-800 hover:text-neutral-900 hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>Login</Link>
                  <Link to="/signup" onClick={() => setMobileOpen(false)} className={`block w-full text-left px-2 py-2 text-sm font-medium rounded-md ${light ? 'text-neutral-800 hover:text-neutral-900 hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>Sign Up</Link>
                  <Link to="/contact" onClick={() => setMobileOpen(false)} className={`mt-4 w-full inline-flex justify-center rounded-md px-4 py-2.5 text-sm font-semibold ${light ? 'bg-black text-white hover:bg-neutral-900' : 'bg-white text-neutral-900 hover:bg-gray-100'}`}>Contact Us</Link>
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
