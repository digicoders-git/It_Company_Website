import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Facebook = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Twitter = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const Instagram = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const Linkedin = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'IT Solutions', path: '/services' },
  { label: 'Clients', path: '/clients' },
  { label: 'Products', path: '/products' },
  { label: 'News', path: '/news' },
  { label: 'Contact Us', path: '/contact' }
];

const services = [
  { label: 'Website Development', path: '/services/website-development' },
  { label: 'Mobile App Development', path: '/services/mobile-app-development' },
  { label: 'Software Development', path: '/services/software-development' },
  { label: 'Digital Marketing', path: '/services/digital-marketing' }
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary-blue pt-24 pb-0 text-white">
      {/* Decorative shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" 
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-white/20">

          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="flex items-center gap-2 mb-6"
            >
              <img src="/image.png" alt="EcomSyncify" className="h-10 w-auto" />
            </motion.div>

            <p className="text-white/80 text-sm font-medium leading-relaxed mb-8">
              Through our focus on innovation and efficiency, we provide results that matter. Our team of experts works closely with you to understand your unique challenges.
            </p>

            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: '#ffffff',
                    rotateY: 360,
                    boxShadow: "0 10px 30px rgba(255,255,255,0.3)"
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white hover:text-primary-blue transition-all"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h4 className="text-lg font-bold text-white mb-6 pb-4 border-b border-white/20 relative">
              Quick Links
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-0 left-0 h-[2px] w-10 bg-white origin-left" 
              />
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 10 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-all duration-200"
                  >
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                    >
                      <ArrowRight className="h-3 w-3 shrink-0" />
                    </motion.div>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h4 className="text-lg font-bold text-white mb-6 pb-4 border-b border-white/20 relative">
              Our Services
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-0 left-0 h-[2px] w-10 bg-white origin-left" 
              />
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 10 }}
                >
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-all duration-200"
                  >
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                    >
                      <ArrowRight className="h-3 w-3 shrink-0" />
                    </motion.div>
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h4 className="text-lg font-black text-white mb-6 pb-4 border-b border-white/20 relative">
              Contact Info
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-0 left-0 h-[2px] w-10 bg-white origin-left" 
              />
            </h4>
            <ul className="flex flex-col gap-4 mb-8">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="h-5 w-5 shrink-0 text-white mt-0.5" />
                </motion.div>
                <span className="text-white/80 text-sm font-medium">EcomSyncify Technologies LLP

P-53 / VK Residency Haldharu,
Surat, Gujarat, India - 394305</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="h-5 w-5 shrink-0 text-white" />
                </motion.div>
                <a href="tel:+156984538" className="text-white/80 text-sm font-medium hover:text-white transition-colors">
                  +91 7275646711
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="h-5 w-5 shrink-0 text-white" />
                </motion.div>
                <a href="mailto:info@EcomSyncify .com" className="text-white/80 text-sm font-medium hover:text-white transition-colors">
                  support@ecomsyncify .com
                </a>
              </motion.li>
            </ul>

          </motion.div>
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-semibold uppercase tracking-widest border-t border-white/10">
          <span>© 2026 EcomSyncify  — Creafted with ❤️ by <a href="https://digicoders.in/" className="text-orange-500 hover:underline">Team Digicoders</a> </span>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
