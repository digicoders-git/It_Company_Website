import React, { useRef } from 'react';
import { ArrowRight, Globe, Smartphone, Code, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Create stunning, high-performance websites that drive results and engage your audience.',
    link: '/services/website-development',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Transform your ideas into powerful iOS and Android applications with exceptional UX.',
    link: '/services/mobile-app-development',
    bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80',
    popular: true,
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions built to streamline operations and drive business growth.',
    link: '/services/software-development',
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Boost your online presence with data-driven marketing strategies that deliver results.',
    link: '/services/digital-marketing',
    bgImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop&q=80',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="solutions" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            style={{ transformStyle: "preserve-3d" }}
            className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-6"
          >
            <motion.span 
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary-blue" 
            />
            <span className="text-primary-blue font-bold uppercase tracking-wider text-sm">
              What We Offer
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight"
          >
            Our Core <motion.span 
              whileHover={{ scale: 1.1, display: "inline-block" }}
              style={{ display: "inline-block" }}
              className="text-primary-blue"
            >
              Services
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 80, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <Link
                  to={service.link}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 block"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <motion.img 
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.7 }}
                      src={service.bgImage} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      whileHover={{ opacity: 0.95 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 to-[#0d2050]/90" 
                    />
                  </div>

                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20, rotateZ: -10 }}
                      whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                      className="absolute top-4 right-4 bg-white text-primary-blue text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-lg"
                    >
                      Popular
                    </motion.div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 p-8 min-h-[360px] flex flex-col">
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ 
                        scale: 1.2, 
                        rotateY: 360,
                        boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
                      }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border-2 border-white/30"
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Text Content - Pushed to bottom */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.3 }}
                      className="mt-auto"
                    >
                      <motion.h3 
                        whileHover={{ x: 5 }}
                        className="text-2xl font-bold text-white mb-3 tracking-tight"
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <motion.span 
                        whileHover={{ x: 10 }}
                        className="inline-flex items-center gap-2 text-white font-semibold text-sm"
                      >
                        Learn More <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </motion.span>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
