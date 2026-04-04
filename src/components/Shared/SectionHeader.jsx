import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, accent, color = 'pink'}) => {
  return (
    <div className="mb-16 max-w-2xl">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`mb-4 inline-block text-sm font-bold uppercase tracking-widest ${
          color === 'pink' ? 'text-primary-blue' : 'text-primary-blue'
        }`}
      >
        {accent}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-black leading-tight text-primary-dark lg:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-gray-500 font-medium leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
