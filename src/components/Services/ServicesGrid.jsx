import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Users, Briefcase, Award, Globe, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Users, count: 120, label: 'Happy Customers' },
  { icon: Briefcase, count: 850, label: 'Expert Members' },
  { icon: Award, count: 960, label: 'Projects Completed' },
  { icon: Globe, count: 25, label: 'Offices Globally' },
];

const CountUp = ({ target, inView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}</span>;
};

const ServicesGrid = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(ref, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-primary-dark section-padding">
      {/* Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
          alt="bg"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-primary-dark/80" />
      </motion.div>

      {/* Decorative shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" 
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-10 bg-primary-blue" />
              <span className="text-primary-blue font-semibold uppercase tracking-widest text-sm">
                Industry Insights
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Exclusive Analysis On The<br />
              Latest Developments In<br />
              <motion.span 
                whileHover={{ scale: 1.05, display: "inline-block" }}
                style={{ display: "inline-block" }}
                className="text-primary-blue"
              >
                The IT Industry
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed font-normal italic border-l-4 border-primary-blue pl-6 mb-8"
            >
              "We provide Analysis and Commentary on the latest developments in the IT industry, including new technologies, market trends, and emerging best practices."
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0,102,204,0.5)",
                rotateX: 5
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              className="btn-primary shadow-lg shadow-primary-blue/30"
            >
              Proven IT Solutions <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-center gap-5 group"
              >
                <motion.div 
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    boxShadow: "0 10px 30px rgba(0,102,204,0.5)"
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="flex h-16 w-16 shrink-0 items-center justify-center bg-white/5 border border-white/10 text-primary-blue transition-all duration-300 group-hover:bg-primary-blue group-hover:text-white group-hover:border-primary-blue"
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                <div>
                  <motion.h4 
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl font-black text-white leading-none"
                  >
                    <CountUp target={stat.count} inView={inView} />+
                  </motion.h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
