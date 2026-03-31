import React from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';

const Facebook = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Twitter = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const Linkedin = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-primary-dark text-white py-2.5">
      <div className="container flex items-center justify-between">
        {/* Left - tagline */}
        <p className="text-xs font-medium text-gray-400 tracking-wide">
          IT solutions that are designed to integrate multiple sectors
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          {/* Social */}
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-gray-400 hover:text-primary-teal transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="w-px h-4 bg-white/10" />

          {/* Phone */}
          <a href="tel:5003692580" className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors">
            <Phone className="h-3.5 w-3.5 text-primary-teal" />
            <span>500.369.2580</span>
          </a>

          {/* Email */}
          <a href="mailto:info@EcomSyncify .com" className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors">
            <Mail className="h-3.5 w-3.5 text-primary-teal" />
            <span>info@EcomSyncify .com</span>
          </a>

          <div className="w-px h-4 bg-white/10" />

          {/* Language */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 cursor-pointer hover:text-white transition-colors">
            <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="h-3 w-4 object-cover rounded-sm" />
            <span>EN</span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
