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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.12 }}
      className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-pink"></div>
          </div>
        )}
        {imageError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-dark to-primary-pink">
            <ImageIcon className="h-12 w-12 text-white/50 mb-2" />
            <span className="text-white/70 text-sm font-bold">{item.category}</span>
          </div>
        )}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category tag */}
        <div className="absolute top-4 left-4 bg-primary-pink text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 z-10">
          {item.category}
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-4 right-4 h-12 w-12 bg-primary-pink flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
          <ArrowRight className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-lg font-bold text-primary-dark leading-snug mb-3 group-hover:text-primary-pink transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed font-normal">
          {item.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-pink transition-all duration-500 group-hover:w-full" />
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
              <div className="h-[2px] w-10 bg-primary-pink" />
              <span className="text-primary-pink font-semibold uppercase tracking-widest text-sm">
                Case Studies
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight">
              Our Recent Work &<br />
              <span className="text-primary-pink">Success Stories</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-500 font-normal leading-relaxed mb-6">
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
          className="mt-16 bg-primary-dark p-10 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { count: '100+', label: 'Projects Done' },
            { count: '500+', label: 'Expert Members' },
            { count: '200+', label: 'Local IT Companies' },
            { count: '1000+', label: 'Happy Clients' },
          ].map((item, idx) => (
            <div key={idx} className="text-center border-r border-white/10 last:border-0">
              <h4 className="text-4xl font-bold text-primary-pink mb-1">{item.count}</h4>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
