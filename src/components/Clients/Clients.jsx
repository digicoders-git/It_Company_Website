import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
];

const Clients = () => {
  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="container mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-[2px] w-10 bg-primary-teal" />
          <span className="text-primary-teal font-semibold uppercase tracking-widest text-sm">
            Our Trusted Partners
          </span>
          <div className="h-[2px] w-10 bg-primary-teal" />
        </div>
        <h3 className="text-2xl font-bold text-primary-dark">
          Trusted By Industry Leaders
        </h3>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee gap-16 items-center w-max">
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-16 w-40 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
