import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import QuoteModal from '../Modal/QuoteModal';

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'About Us', link: '/about' },
  {
    label: 'IT Solutions',
    link: '/services',
    submenu: [
      { label: 'Website Development', link: '/services/website-development' },
      { label: 'Mobile App Development', link: '/services/mobile-app-development' },
      { label: 'Software Development', link: '/services/software-development' },
      { label: 'Digital Marketing', link: '/services/digital-marketing' },
    ],
  },
  { label: 'Clients', link: '/clients' },
  { label: 'Products', link: '/products' },
  { label: 'News', link: '/news' },
  { label: 'Contact', link: '/contact' },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const location = useLocation();
  
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, -10]);
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (link) => {
    if (link === '/') return location.pathname === '/';
    return location.pathname === link;
  };

  return (
    <>
      <motion.nav
        style={{ y: navY, opacity: navOpacity }}
        className={`z-50 transition-all duration-300 ${
          isSticky
            ? 'fixed top-0 left-0 right-0 bg-white shadow-lg py-3'
            : 'relative bg-white py-5 border-b border-gray-100'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <motion.img 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/image.png" 
              alt="EcomSyncify" 
              className="h-10 w-auto" 
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, idx) => (
              <li key={idx} className="group relative">
                {item.submenu ? (
                  <span
                    className={`flex items-center gap-1 px-4 py-5 font-bold text-[14px] uppercase tracking-wide transition-colors cursor-pointer ${
                      isActive(item.link) ? 'text-primary-blue' : 'text-[#333] hover:text-primary-blue'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </span>
                ) : (
                  <Link
                    to={item.link}
                    className={`flex items-center gap-1 px-4 py-5 font-bold text-[14px] uppercase tracking-wide transition-colors ${
                      isActive(item.link) ? 'text-primary-blue' : 'text-[#333] hover:text-primary-blue'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.submenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="absolute top-full left-0 w-[240px] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 bg-white shadow-2xl border-t-2 border-primary-blue"
                  >
                    <ul>
                      {item.submenu.map((sub, sIdx) => (
                        <motion.li 
                          key={sIdx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: sIdx * 0.05 }}
                          whileHover={{ x: 10, backgroundColor: "#f0f9ff" }}
                          className="border-b border-gray-50 last:border-0"
                        >
                          <Link
                            to={sub.link}
                            className="flex items-center gap-2 px-6 py-3.5 text-[13px] font-bold text-gray-600 hover:text-primary-blue hover:pl-8 transition-all duration-200 uppercase tracking-wide"
                          >
                            <ArrowRight className="h-3 w-3 shrink-0 text-primary-blue" />
                            {sub.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-500 hover:text-primary-blue transition-colors p-2"
            >
              <motion.div
                whileHover={{ rotate: 90, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Search className="h-5 w-5" />
              </motion.div>
            </button>
            <motion.button 
              onClick={() => setQuoteModalOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,102,204,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xs py-3 px-6"
            >
              Free Quote <ArrowRight className="h-3.5 w-3.5" />
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(true)}>
            <Menu className="h-7 w-7 text-primary-dark" />
          </button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-gray-100"
            >
              <div className="container py-4">
                <div className="relative">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search..."
                    className="w-full border border-gray-200 py-3 pl-5 pr-12 text-sm focus:outline-none focus:border-primary-blue transition-colors"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-70 w-[300px] bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="text-xl font-black text-primary-dark">EcomSyncify </span>
                <button onClick={() => setMobileOpen(false)}>
                  <X className="h-6 w-6 text-primary-dark" />
                </button>
              </div>

              <ul className="flex flex-col p-6 gap-1 flex-1 overflow-y-auto">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    {item.submenu ? (
                      <>
                        <button
                          className={`w-full flex items-center justify-between py-3 px-4 font-bold text-sm uppercase tracking-wide transition-colors hover:text-primary-blue hover:bg-gray-50 ${
                            isActive(item.link) ? 'text-primary-blue' : 'text-primary-dark'
                          }`}
                          onClick={() => setOpenSubmenu(openSubmenu === idx ? null : idx)}
                        >
                          {item.label}
                          <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === idx ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === idx && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-gray-50 ml-4"
                            >
                              {item.submenu.map((sub, sIdx) => (
                                <li key={sIdx}>
                                  <Link
                                    to={sub.link}
                                    className="block py-2.5 px-4 text-xs font-bold text-gray-500 hover:text-primary-blue uppercase tracking-wide"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.link}
                        className={`w-full flex items-center justify-between py-3 px-4 font-bold text-sm uppercase tracking-wide transition-colors hover:text-primary-blue hover:bg-gray-50 ${
                          isActive(item.link) ? 'text-primary-blue' : 'text-primary-dark'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="p-6 border-t border-gray-100">
                <button 
                  onClick={() => {
                    setMobileOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full btn-primary justify-center"
                >
                  Get Free Quote <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default Navbar;
