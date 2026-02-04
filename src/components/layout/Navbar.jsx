import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DeosLogo from '../../assets/DEOS_Logo.svg';

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
            <img src={DeosLogo} alt="DEOS Logo" className="h-25 w-auto object-contain" />
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






// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, Search, ArrowRight } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const searchInputRef = useRef(null);
//   const location = useLocation();

//   // 1. Handle Background Change on Scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // 2. ONLY Close menu/search when the URL (location) changes
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     setIsSearchOpen(false);
//   }, [location]);

//   // 3. Handle Body Scroll Locking (Prevent scrolling when menu is open)
//   useEffect(() => {
//     if (isMobileMenuOpen || isSearchOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isMobileMenuOpen, isSearchOpen]);

//   // 4. Focus Search Input
//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       const timer = setTimeout(() => {
//         searchInputRef.current.focus();
//       }, 100);
//       return () => clearTimeout(timer);
//     }
//   }, [isSearchOpen]);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Our Services', href: '/services' },
//     { name: 'Our Work', href: '/work' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'Get In Touch', href: '/contact' },
//     { name: 'Work With Us', href: '/careers' },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
//           isScrolled ? 'bg-white shadow-sm py-3 border-b border-gray-100' : 'bg-transparent py-4 md:py-5'
//         }`}
//       >
//         <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex flex-col leading-tight group z-[9050] relative"
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           >
//             <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1a1a1a]">
//               DEOS<span className="text-[10px] md:text-xs align-top ml-0.5">TM</span>
//             </span>
//             <span className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase group-hover:text-[#91c744] transition-colors">
//               Social
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className={`text-[12px] xl:text-[13px] font-bold hover:text-[#91c744] transition-colors uppercase tracking-wide ${
//                   location.pathname === link.href ? 'text-[#91c744]' : 'text-[#1a1a1a]'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <button
//               className="text-[#1a1a1a] hover:text-[#91c744] transition-colors"
//               onClick={() => setIsSearchOpen(true)}
//               aria-label="Open Search"
//             >
//               <Search size={18} />
//             </button>
//           </nav>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="lg:hidden text-[#1a1a1a] z-[9050] relative focus:outline-none p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </header>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-white z-[9001] flex flex-col pt-24 lg:hidden"
//           style={{
//             height: '100dvh', // Dynamic Viewport Height for mobile browsers
//             width: '100vw',
//           }}
//         >
//           {/* Internal Logo for Branding */}
//           <div className="absolute top-6 left-4 sm:left-6">
//              <span className="text-xl font-bold tracking-tight text-[#1a1a1a]">
//               DEOS<span className="text-[10px] align-top ml-0.5">TM</span>
//             </span>
//           </div>

//           <nav className="flex flex-col px-6 h-full overflow-y-auto pb-10 mt-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className={`text-xl font-bold py-4 border-b border-gray-100 uppercase tracking-wide hover:text-[#91c744] hover:pl-2 transition-all ${
//                   location.pathname === link.href ? 'text-[#91c744] pl-2' : 'text-[#1a1a1a]'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <button
//               className="text-left text-xl font-bold py-4 border-b border-gray-100 uppercase tracking-wide text-[#1a1a1a] flex items-center gap-2 w-full"
//               onClick={() => setIsSearchOpen(true)}
//             >
//               Search <Search size={20} />
//             </button>
//           </nav>
//         </div>
//       )}

//       {/* Full Screen Search Overlay */}
//       {isSearchOpen && (
//         <div className="fixed inset-0 bg-[#ffe600] z-[9100] flex flex-col items-center justify-center p-6">
//           <button
//             className="absolute top-6 right-6 md:top-10 md:right-10 text-black p-2 hover:scale-110 transition-transform"
//             onClick={() => setIsSearchOpen(false)}
//           >
//             <X size={40} />
//           </button>

//           <div className="container mx-auto px-6 max-w-4xl w-full">
//             <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 text-center uppercase tracking-tight">
//               What are you looking for?
//             </h2>
//             <div className="relative group w-full">
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 placeholder="Type words and hit enter..."
//                 className="w-full bg-transparent border-b-4 border-black text-2xl md:text-5xl font-bold text-black placeholder-black/50 py-4 focus:outline-none focus:border-white transition-colors"
//               />
//               <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black group-focus-within:text-white transition-colors">
//                 <ArrowRight size={32} className="md:w-12 md:h-12" />
//               </button>
//             </div>
//             <p className="mt-8 text-black/60 text-center font-medium uppercase tracking-widest text-sm md:text-base">
//               Press ESC to close
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Scroll to Top */}
//       <div className="hidden lg:block fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[8000]">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="bg-[#ffe600] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-sm shadow-2xl hover:bg-white transition-all text-black border-2 border-black"
//           aria-label="Scroll to Top"
//         >
//           <div className="text-2xl font-bold pb-1">↑</div>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Navbar;
