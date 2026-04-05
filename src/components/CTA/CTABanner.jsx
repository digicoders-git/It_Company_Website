import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="relative overflow-hidden bg-primary-blue py-20">
      {/* Background circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div 
          style={{ scale, rotate }}
          className="absolute top-0 left-0 w-64 h-64 rounded-full border-[40px] border-white -translate-x-1/2 -translate-y-1/2" 
        />
        <motion.div 
          style={{ 
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -360])
          }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full border-[60px] border-white translate-x-1/3 translate-y-1/3" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full border-[30px] border-white" 
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center lg:text-left"
          >
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 font-semibold uppercase tracking-widest text-sm mb-3"
            >
              Get Started Today
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-5xl font-bold text-white leading-tight"
            >
              Need A Free Consultation?<br />
              <motion.span 
                whileHover={{ scale: 1.05, display: "inline-block" }}
                style={{ display: "inline-block" }}
                className="text-white/80"
              >
                We're Ready To Help!
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
            className="flex flex-col sm:flex-row items-center gap-4 shrink-0"
          >
            <motion.a
              href="tel:5003692580"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#ffffff",
                color: "#0066cc",
                boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-primary-blue transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="h-5 w-5" />
              </motion.div>
              500.369.2580
            </motion.a>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#1a1a2e",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex items-center gap-2 bg-white text-primary-blue px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all duration-300"
            >
              Get Free Quote <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
