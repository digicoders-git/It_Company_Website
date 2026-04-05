import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
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
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: -20, z: -100 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: idx * 0.12, type: "spring" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      whileHover={{ scale: 1.02, z: 50 }}
      className="group relative overflow-hidden bg-white border-2 border-gray-100 hover:border-primary-blue shadow-lg hover:shadow-2xl transition-all duration-500 rounded-xl cursor-pointer h-[450px]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-[#0d2050]" />

      {/* Category Badge - Always Visible */}
      <motion.div 
        initial={{ opacity: 0, scale: 0, rotateZ: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.12 + 0.3, type: "spring" }}
        whileHover={{ scale: 1.1, rotateZ: 5 }}
        style={{ transformStyle: "preserve-3d", z: 50 }}
        className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-4 py-2 z-30 rounded-full border border-white/20"
      >
        {item.category}
      </motion.div>

      {/* Title - Always Visible */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.12 + 0.4 }}
        style={{ transformStyle: "preserve-3d", z: 50 }}
        className="absolute bottom-6 left-6 right-6 z-30"
      >
        <motion.h3 
          whileHover={{ x: 5 }}
          className="text-2xl font-black text-white leading-tight mb-3"
        >
          {item.title}
        </motion.h3>
        <p className="text-white/90 text-sm leading-relaxed font-medium">
          {item.description}
        </p>
      </motion.div>

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
      <motion.div 
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 0 : -180
        }}
        transition={{ duration: 0.3, type: "spring" }}
        whileHover={{ scale: 1.2, rotate: 45 }}
        style={{ transformStyle: "preserve-3d", z: 100 }}
        className="absolute bottom-6 right-6 h-12 w-12 bg-white rounded-full flex items-center justify-center z-30 shadow-lg"
      >
        <ArrowRight className="h-5 w-5 text-primary-blue" />
      </motion.div>
    </motion.div>
  );
};

const CaseStudies = () => {
  return (
    <section id="cases" className="section-padding bg-[#F5F7F9] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-10 bg-primary-blue" />
              <span className="text-primary-blue font-bold uppercase tracking-widest text-sm">
                Case Studies
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-black text-primary-dark leading-tight"
            >
              Our Recent Work &<br />
              <motion.span 
                whileHover={{ scale: 1.05, display: "inline-block" }}
                style={{ display: "inline-block" }}
                className="text-primary-blue"
              >
                Success Stories
              </motion.span>
            </motion.h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:text-right"
          >
            <p className="text-gray-600 font-medium leading-relaxed mb-6">
              Explore our portfolio of successful IT projects delivered across various industries and sectors worldwide.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,102,204,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex"
            >
              View All Cases <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <CaseCard key={idx} item={item} idx={idx} />
          ))}
        </div>

        {/* Global Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{ transformStyle: "preserve-3d" }}
          className="mt-16 bg-gradient-to-r from-primary-blue to-[#0d2050] p-12 rounded-xl grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-2xl"
        >
          {[
            { count: '100+', label: 'Projects Done' },
            { count: '500+', label: 'Expert Members' },
            { count: '200+', label: 'Local IT Companies' },
            { count: '1000+', label: 'Happy Clients' },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -10 }}
              style={{ transformStyle: "preserve-3d" }}
              className="text-center border-r border-white/20 last:border-0"
            >
              <motion.h4 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                className="text-5xl font-black text-white mb-2"
              >
                {item.count}
              </motion.h4>
              <p className="text-white/90 text-sm font-bold uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
