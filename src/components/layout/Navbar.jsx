import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and search on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);

    // Disable body scroll when menu or search is open
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [location, isMobileMenuOpen, isSearchOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
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
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3 border-b border-gray-100' : 'bg-transparent py-4 md:py-5'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-tight group z-[110] relative"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1a1a1a]">
              DEOS<span className="text-[10px] md:text-xs align-top ml-0.5">TM</span>
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase group-hover:text-[#91c744] transition-colors">Social</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[12px] xl:text-[13px] font-bold hover:text-[#91c744] transition-colors uppercase tracking-wide ${location.pathname === link.href ? 'text-[#91c744]' : 'text-[#1a1a1a]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="text-[#1a1a1a] hover:text-[#91c744] transition-colors"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open Search"
            >
              <Search size={18} />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#1a1a1a] z-[110] relative focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-md z-[100] transform transition-transform duration-300 ease-in-out lg:hidden pt-24 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <nav className="flex flex-col px-6 h-full overflow-y-auto pb-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xl font-bold py-4 border-b border-gray-100 uppercase tracking-wide hover:text-[#91c744] hover:pl-2 transition-all ${location.pathname === link.href ? 'text-[#91c744] pl-2' : 'text-[#1a1a1a]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="text-left text-xl font-bold py-4 border-b border-gray-100 uppercase tracking-wide text-[#1a1a1a] flex items-center gap-2 w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
            >
              Search <Search size={20} />
            </button>
          </nav>
        </div>
      </header>

      {/* Full Screen Search Overlay */}
      <div
        className={`fixed inset-0 bg-[#ffe600] z-[120] transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${isSearchOpen ? 'opacity-100 visible clip-diagonal-enter' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 md:top-10 md:right-10 text-black p-2 hover:scale-110 transition-transform"
          onClick={() => setIsSearchOpen(false)}
        >
          <X size={40} />
        </button>

        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 text-center uppercase tracking-tight">
            What are you looking for?
          </h2>
          <div className="relative group">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Type words and hit enter..."
              className="w-full bg-transparent border-b-4 border-black text-2xl md:text-5xl font-bold text-black placeholder-black/50 py-4 focus:outline-none focus:border-white transition-colors"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black group-focus-within:text-white transition-colors">
              <ArrowRight size={32} className="md:w-12 md:h-12" />
            </button>
          </div>
          <p className="mt-8 text-black/60 text-center font-medium uppercase tracking-widest text-sm md:text-base">
            Press ESC to close
          </p>
        </div>
      </div>
      {/* Dual Purpose Floating Action Button (FAB) */}
      <div className="hidden lg:block fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[110]">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-[#ffe600] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-sm shadow-2xl hover:bg-white transition-all text-black border-2 border-black"
          aria-label="Scroll to Top"
        >
          <div className="text-2xl font-bold pb-1">
            ↑
          </div>
        </button>
      </div>
    </>
  );
};

export default Navbar;
