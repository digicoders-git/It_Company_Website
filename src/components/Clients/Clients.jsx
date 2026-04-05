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
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mb-10 text-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-2"
        >
          <motion.div 
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-10 bg-primary-blue" 
          />
          <span className="text-primary-blue font-semibold uppercase tracking-widest text-sm">
            Our Trusted Partners
          </span>
          <motion.div 
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-10 bg-primary-blue" 
          />
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-primary-dark"
        >
          Trusted By Industry Leaders
        </motion.h3>
      </motion.div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center w-max"
        >
          {[...clients, ...clients].map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 0.5, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: "spring" }}
              whileHover={{ 
                opacity: 1, 
                scale: 1.2, 
                rotateY: 360,
                filter: "grayscale(0%)"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex items-center justify-center h-16 w-40 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
