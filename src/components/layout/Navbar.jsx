import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation();

  /* -----------------------------------
     Scroll background change
  ----------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* -----------------------------------
     Close menu/search on route change
  ----------------------------------- */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  /* -----------------------------------
     Lock body scroll
  ----------------------------------- */
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  /* -----------------------------------
     Focus search input
  ----------------------------------- */
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Our Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
    { name: 'Get In Touch', href: '/contact' },
    { name: 'Work With Us', href: '/careers' },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300
          ${isScrolled
            ? 'bg-white shadow-sm border-b border-gray-100 py-3'
            : 'bg-white md:bg-transparent py-4 md:py-5'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-tight"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
              DEOS<span className="text-[10px] align-top ml-0.5">TM</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">
              Social
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[13px] font-bold uppercase tracking-wide transition-colors
                  ${location.pathname === link.href
                    ? 'text-[#91c744]'
                    : 'text-[#1a1a1a] hover:text-[#91c744]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open Search"
              className="text-[#1a1a1a] hover:text-[#91c744]"
            >
              <Search size={18} />
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 z-[9050]"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9001] bg-white pt-24 lg:hidden">
          <nav className="flex flex-col px-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-bold py-4 border-b uppercase tracking-wide transition-all
                  ${location.pathname === link.href
                    ? 'text-[#91c744] pl-2'
                    : 'text-[#1a1a1a] hover:text-[#91c744]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="text-left text-xl font-bold py-4 border-b uppercase flex items-center gap-2"
            >
              Search <Search size={20} />
            </button>
          </nav>
        </div>
      )}

      {/* ================= SEARCH OVERLAY ================= */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[9100] bg-[#ffe600] flex items-center justify-center p-6">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 text-black"
          >
            <X size={40} />
          </button>

          <div className="max-w-4xl w-full text-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">
              What are you looking for?
            </h2>

            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Type words and hit enter..."
                className="w-full bg-transparent border-b-4 border-black text-3xl md:text-5xl font-bold py-4 focus:outline-none"
              />
              <ArrowRight
                size={36}
                className="absolute right-0 top-1/2 -translate-y-1/2"
              />
            </div>

            <p className="mt-8 uppercase tracking-widest text-sm opacity-70">
              Press ESC to close
            </p>
          </div>
        </div>
      )}

      {/* ================= SCROLL TO TOP ================= */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-[8000]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-[#ffe600] border-2 border-black flex items-center justify-center"
        >
          ↑
        </button>
      </div>
    </>
  );
};

export default Navbar;
