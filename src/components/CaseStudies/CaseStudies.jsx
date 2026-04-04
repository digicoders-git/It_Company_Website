import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

const cases = [
  {
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?w=800&h=600&fit=crop&q=80',
    category: 'Data Infrastructure',
    title: 'Enterprise Data Migration & Cloud Setup',
    description: 'Successfully migrated 5TB of enterprise data to cloud infrastructure with zero downtime.',
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&q=80',
    category: 'Cyber Security',
    title: 'Full Security Audit & Threat Prevention',
    description: 'Implemented end-to-end security protocols reducing breach risk by 95% for a financial firm.',
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80',
    category: 'Product Engineering',
    title: 'SaaS Platform Development From Scratch',
    description: 'Built a scalable SaaS platform serving 50,000+ users with 99.9% uptime guarantee.',
  },
];

const CaseCard = ({ item, idx }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden bg-white border-2 border-gray-100 hover:border-primary-blue shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-xl cursor-pointer h-[450px]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-[#0d2050]" />

      {/* Category Badge - Always Visible */}
      <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-4 py-2 z-30 rounded-full border border-white/20">
        {item.category}
      </div>

      {/* Title - Always Visible */}
      <div className="absolute bottom-6 left-6 right-6 z-30">
        <h3 className="text-2xl font-black text-white leading-tight mb-3">
          {item.title}
        </h3>
        <p className="text-white/90 text-sm leading-relaxed font-medium">
          {item.description}
        </p>
      </div>

      {/* Left Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isHovered ? '-100%' : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-br from-primary-blue to-[#0d2050] z-20"
        style={{ width: '50%', left: 0 }}
      />

      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-br from-primary-blue to-[#0d2050] z-20"
        style={{ width: '50%', right: 0, left: 'auto' }}
      />

      {/* Image Behind Doors */}
      <div className="absolute inset-0 z-10">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
          </div>
        )}
        
        {imageError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200">
            <ImageIcon className="h-16 w-16 text-gray-400 mb-3" />
            <span className="text-gray-500 text-lg font-bold">{item.category}</span>
          </div>
        )}
        
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`h-full w-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Hover Arrow */}
      <div className="absolute bottom-6 right-6 h-12 w-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 z-30 shadow-lg">
        <ArrowRight className="h-5 w-5 text-primary-blue" />
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  return (
    <section id="cases" className="section-padding bg-[#F5F7F9] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-blue" />
              <span className="text-primary-blue font-bold uppercase tracking-widest text-sm">
                Case Studies
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-primary-dark leading-tight">
              Our Recent Work &<br />
              <span className="text-primary-blue">Success Stories</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-600 font-medium leading-relaxed mb-6">
              Explore our portfolio of successful IT projects delivered across various industries and sectors worldwide.
            </p>
            <button className="btn-primary inline-flex">
              View All Cases <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <CaseCard key={idx} item={item} idx={idx} />
          ))}
        </div>

        {/* Global Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-blue to-[#0d2050] p-12 rounded-xl grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-2xl"
        >
          {[
            { count: '100+', label: 'Projects Done' },
            { count: '500+', label: 'Expert Members' },
            { count: '200+', label: 'Local IT Companies' },
            { count: '1000+', label: 'Happy Clients' },
          ].map((item, idx) => (
            <div key={idx} className="text-center border-r border-white/20 last:border-0">
              <h4 className="text-5xl font-black text-white mb-2">{item.count}</h4>
              <p className="text-white/90 text-sm font-bold uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
