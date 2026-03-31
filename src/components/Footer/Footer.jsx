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
    <footer className="relative overflow-hidden bg-[#111111] pt-24 pb-0 text-white">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-lime/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-white/10">

          {/* Column 1 - About */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src="/image.png" alt="EcomSyncify" className="h-10 w-auto" />
            </div>

            <p className="text-white text-sm font-medium leading-relaxed mb-8">
              Through our focus on innovation and efficiency, we provide results that matter. Our team of experts works closely with you to understand your unique challenges.
            </p>

            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: '#E64A7C' }}
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-white hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 pb-4 border-b border-white/10 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-primary-teal" />
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white text-sm font-medium hover:text-primary-teal hover:gap-3 transition-all duration-200"
                  >
                    <ArrowRight className="h-3 w-3 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 pb-4 border-b border-white/10 relative">
              Our Services
              <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-primary-teal" />
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-white text-sm font-medium hover:text-primary-teal hover:gap-3 transition-all duration-200"
                  >
                    <ArrowRight className="h-3 w-3 shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact + Newsletter */}
          <div>
            <h4 className="text-lg font-black text-white mb-6 pb-4 border-b border-white/10 relative">
              Contact Info
              <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-primary-teal" />
            </h4>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary-teal mt-0.5" />
                <span className="text-white text-sm font-medium">EcomSyncify Technologies LLP

P-53 / VK Residency Haldharu,
Surat, Gujarat, India - 394305</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary-teal" />
                <a href="tel:+156984538" className="text-white text-sm font-medium hover:text-primary-teal transition-colors">
                  +91 7275646711
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary-teal" />
                <a href="mailto:info@EcomSyncify .com" className="text-white text-sm font-medium hover:text-primary-teal transition-colors">
                  support@ecomsyncify .com
                </a>
              </li>
            </ul>

          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-semibold uppercase tracking-widest">
          <span>© 2026 EcomSyncify  — Creafted with ❤️ by <a href="https://digicoders.in/" className="text-primary-teal">Team Digicoders</a> </span>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-primary-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary-teal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
