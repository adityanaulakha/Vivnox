import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, X, ChevronDown } from 'lucide-react';

const primaryNav = [
  { id: 'industry', label: 'Your Industry', dropdown: true },
  {
    id: 'solutions',
    label: 'Solutions',
    dropdown: true,
    children: [
      { label: 'Overview', to: '/solutions' },
      { label: 'Portfolio Management (PMS)', to: '/pms' },
    ],
  },
  { id: 'partners', label: 'Partners', dropdown: true },
  { id: 'resources', label: 'Resources', dropdown: true },
  {
    id: 'about',
    label: 'About Us',
    dropdown: true,
    children: [
      { label: 'About Vionix', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

const flatSections = ['home','solutions','about','pms','contact','login','signup']; // legacy ids mapping

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const searchWrapperRef = useRef(null);
  const headerRef = useRef(null);
  const inputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close search or dropdown on outside click / Esc
  useEffect(() => {
    const handleClick = (e) => {
      if (searchOpen && searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
      if (openDropdown && headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (searchOpen) {
          setSearchOpen(false);
        }
        if (openDropdown) {
          setOpenDropdown(null);
        }
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [searchOpen, openDropdown]);

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

  const toggleDropdown = (id) => {
    setOpenDropdown(prev => prev === id ? null : id);
  };

  const goTo = (id) => {
    // map legacy ids to routes
    const routeMap = {
      home: '/',
      about: '/about',
      solutions: '/solutions',
      pms: '/pms',
      contact: '/contact',
      login: '/login',
      signup: '/signup'
    };
    if (routeMap[id]) {
      navigate(routeMap[id]);
      return;
    }
    // fallback in-page scroll
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentPath = location.pathname;
  const isHome = currentPath === '/';
  const light = scrolled || !isHome; // light style on scroll or any non-home route

  const textBase = light ? 'text-neutral-700 hover:text-neutral-900' : 'text-white/70 hover:text-white';
  const textMuted = light ? 'text-neutral-600' : 'text-white/60';
  const focusOutline = light ? 'focus-visible:outline-neutral-900' : 'focus-visible:outline-white';

  return (
  <header ref={headerRef} className={`fixed top-0 inset-x-0 z-50 transition-colors ${light ? 'bg-white/95 backdrop-blur border-b border-black/5' : 'bg-transparent'}`}>
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
            {primaryNav.map(item => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => item.dropdown ? toggleDropdown(item.id) : goTo(item.id)}
                  aria-expanded={openDropdown === item.id}
                  className={`px-3 py-2 text-[13px] font-medium tracking-wide transition flex items-center gap-1 ${textBase} ${currentPath === '/' + (item.id === 'home' ? '' : item.id) ? (light ? 'text-neutral-900' : 'text-white') : ''}`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''} ${light ? 'text-neutral-600' : 'text-white/70'}`} />
                  )}
                </button>
                {/* Dropdown menu */}
                {item.dropdown && openDropdown === item.id && (
                  <div
                    className={`absolute left-0 top-full mt-2 min-w-56 rounded-lg p-2 grid gap-1 border ${light ? 'bg-white border-black/10 shadow-xl' : 'bg-neutral-950/95 border-white/5 backdrop-blur-sm'}`} role="menu"
                  >
                    {item.children ? (
                      item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setOpenDropdown(null)}
                          role="menuitem"
                          className={`block text-left text-[12px] px-3 py-2 rounded-md transition ${light ? 'text-neutral-800 hover:text-neutral-900 hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                        >
                          {child.label}
                        </Link>
                      ))
                    ) : (
                      [1,2,3].map(n => (
                        <button
                          key={n}
                          onClick={() => { goTo(item.id); setOpenDropdown(null); }}
                          role="menuitem"
                          className={`text-left text-[11px] px-2 py-1.5 rounded-md transition ${light ? 'text-neutral-700 hover:text-neutral-900 hover:bg-black/5' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                        >
                          {item.label} Option {n}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 ml-auto" ref={searchWrapperRef}>
            {/* Search icon / bar */}
            <div className="hidden md:flex items-center">
              {!searchOpen && (
                <button
                  aria-label="Open search"
                  onClick={() => setSearchOpen(true)}
                  className={`inline-flex ${textMuted} hover:${light ? 'text-neutral-900' : 'text-white'} transition p-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 ${focusOutline}`}
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
                      className={`p-1 ${textMuted} hover:${light ? 'text-neutral-900' : 'text-white'}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  <button
                    aria-label="Close search"
                    onClick={() => setSearchOpen(false)}
                    className={`p-1 ${textMuted} hover:${light ? 'text-neutral-900' : 'text-white'}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
            {/* Contact CTA */}
            <Link
              to="/contact"
              className={`hidden md:inline-flex items-center rounded-md px-5 py-2.5 text-[12px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${light ? 'bg-black text-white hover:bg-neutral-900 focus-visible:outline-neutral-900' : 'bg-white text-neutral-900 hover:bg-gray-100 focus-visible:outline-white'}`}
            >
              CONTACT US <span className="ml-1" aria-hidden>→</span>
            </Link>
            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(o=>!o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className={`lg:hidden inline-flex flex-col justify-center gap-1.5 p-2 rounded-md ${light ? 'hover:bg-black/5 text-neutral-900' : 'hover:bg-white/5 text-white'} focus-visible:outline-2 focus-visible:outline-offset-2 ${focusOutline}`}
            >
              <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
              <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <div className={`absolute inset-0 ${light ? 'bg-black/40' : 'bg-black/60'} backdrop-blur-sm opacity-100`} onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 transform transition-transform duration-300 border-l ${light ? 'bg-white border-black/10' : 'bg-neutral-950 border-white/10'} ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <img src="/Vionix-Logo .JPG" alt="Vionix" className="h-8 w-auto rounded" />
                <span className={`${light ? 'text-neutral-900' : 'text-white'} font-semibold`}>Vionix</span>
              </Link>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className={`${light ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/70 hover:text-white'}`}>✕</button>
            </div>
            <nav className="flex-1 overflow-y-auto space-y-1">
              {primaryNav.map(item => (
                <div key={item.id} className="border-b border-white/5 pb-2 mb-2">
                  <button
                    onClick={() => item.dropdown ? toggleDropdown(item.id) : (goTo(item.id), setMobileOpen(false))}
                    className={`w-full flex justify-between items-center text-left text-sm font-medium px-2 py-2 rounded-md ${light ? 'text-neutral-800 hover:text-neutral-900 hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''} ${light ? 'text-neutral-600' : 'text-white/70'}`} />}
                  </button>
                  {item.dropdown && openDropdown === item.id && (
                    <div className="mt-1 space-y-1 pl-3">
                      {item.children ? (
                        item.children.map(child => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={() => { setOpenDropdown(null); setMobileOpen(false); }}
                            className={`block w-full text-left text-xs px-2 py-1.5 rounded ${light ? 'text-neutral-800 hover:text-neutral-900 hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                          >
                            {child.label}
                          </Link>
                        ))
                      ) : (
                        [1,2,3].map(n => (
                          <button key={n} onClick={() => { goTo(item.id); setOpenDropdown(null); setMobileOpen(false); }} className={`block w-full text-left text-xs px-2 py-1.5 rounded ${light ? 'text-neutral-700 hover:text-neutral-900 hover:bg-black/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>{item.label} Option {n}</button>
                        ))
                      )}
                    </div>
                  )}
                </div>
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
      </div>
    </header>
  );
};

export default Navbar;
