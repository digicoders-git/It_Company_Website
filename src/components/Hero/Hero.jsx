import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* Decorative Elements with 3D effect */}
      <motion.div 
        style={{ y: smoothY, rotateZ: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" 
      />

      <motion.div style={{ opacity, scale }} className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, z: -50 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, z: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 mb-6"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 bg-primary-blue rounded-full" 
              />
              <span className="text-primary-blue font-semibold uppercase tracking-wider text-xs">
                IT Solutions For Easy Integration
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.15] text-primary-dark mb-5"
            >
              IT Services To Develop{' '}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, color: "#0066cc" }}
                style={{ display: "inline-block" }}
                className="text-primary-blue"
              >
                Solutions
              </motion.span> Your Way!
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl"
            >
              Building a relationship between IT companies & experts. We provide coverage of industry events and conferences, including highlights.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-5"
            >
              <motion.button
                whileHover={{ scale: 1.05, rotateX: 5, boxShadow: "0 20px 40px rgba(0, 102, 204, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                style={{ transformStyle: "preserve-3d" }}
                className="btn-primary shadow-lg shadow-primary-blue/30"
              >
                More Details <ArrowRight className="h-4 w-4" />
              </motion.button>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-primary-blue text-primary-blue transition-all group-hover:bg-primary-blue group-hover:text-white shadow-md"
                >
                  <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                </motion.div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Play Video</p>
                  <p className="text-sm font-semibold text-primary-dark">Watch Demo</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.02, rotateY: -5 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ z: 50 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
                alt="IT Team"
                className="w-full h-auto object-cover shadow-2xl"
              />
              
              {/* Floating Stats Card 1 */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0],
                  rotateX: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.1, z: 50, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute -left-6 top-1/4 bg-white rounded-lg shadow-2xl p-4 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary-blue font-black text-lg">25+</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Years</p>
                    <p className="text-sm font-black text-primary-dark">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card 2 */}
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotateY: [0, -5, 0],
                  rotateX: [0, 5, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                whileHover={{ scale: 1.1, z: 50, boxShadow: "0 25px 50px rgba(0,102,204,0.5)" }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute -right-6 bottom-1/4 bg-primary-blue rounded-lg shadow-2xl p-4 text-white hidden lg:block"
              >
                <p className="text-2xl font-black leading-none mb-1">960+</p>
                <p className="text-xs font-bold uppercase tracking-wider opacity-90">Projects Done</p>
              </motion.div>

              {/* Decorative Shape */}
              <motion.div 
                animate={{ 
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary-blue/20 -z-10 hidden lg:block" 
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
