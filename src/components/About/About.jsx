import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  'We are committed to providing quality IT Services',
  'Our benefits are endless for local IT Companies & Startups',
  'Really know the true needs and expectations of customers',
  'Talented & experienced management solutions for IT',
  'Processes of achieving the excellence and continue improvements',
];

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-[#F5F7F9] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 xl:gap-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d", y: imageY }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=900"
                alt="About EcomSyncify "
                className="w-full object-cover"
                style={{ height: '520px' }}
              />
              {/* Teal overlay on hover */}
              <motion.div 
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-primary-blue/10" 
              />
            </motion.div>

            {/* Decorative border box */}
            <motion.div 
              animate={{ 
                rotate: [0, 2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary-blue z-0 hidden lg:block" 
            />
            <motion.div 
              animate={{ 
                rotate: [0, -2, 0],
                scale: [1, 1.03, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary-blue/30 z-0 hidden lg:block" 
            />

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10, z: -100 }}
              whileInView={{ scale: 1, rotate: 0, z: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 30px 60px rgba(0,102,204,0.5)"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-8 z-10 bg-primary-blue text-white p-8 text-center shadow-2xl"
            >
              <motion.span 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl font-black block leading-none"
              >
                25+
              </motion.span>
              <span className="text-xs font-black uppercase tracking-widest block mt-2 opacity-90">
                Years Of<br />Experience
              </span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d", y: contentY }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div 
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[2px] w-10 bg-primary-blue" 
              />
              <span className="text-primary-blue font-semibold uppercase tracking-widest text-sm">
                EcomSyncify  — Welcome To IT Solutions
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight mb-6"
            >
              Your Next Preferred<br />
              <motion.span 
                whileHover={{ scale: 1.05, display: "inline-block" }}
                style={{ display: "inline-block" }}
                className="text-primary-blue"
              >
                IT Partner
              </motion.span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 text-base leading-relaxed mb-4 font-medium"
            >
              We feature interviews with industry experts and thought leaders, providing our clients with valuable insights and perspectives on the latest trends and challenges in the IT industry.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-base leading-relaxed mb-8 font-medium"
            >
              We provide coverage of industry events and conferences, including highlights and key takeaways from presentations and panel discussions.
            </motion.p>

            <ul className="flex flex-col gap-4 mb-10">
              {benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20, rotateY: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08, type: "spring" }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-blue" />
                  </motion.div>
                  <span className="text-gray-700 font-medium text-sm leading-snug group-hover:text-primary-blue transition-colors">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5,
                boxShadow: "0 20px 40px rgba(0,102,204,0.4)" 
              }}
              whileTap={{ scale: 0.97 }}
              style={{ transformStyle: "preserve-3d" }}
              className="btn-primary shadow-lg shadow-primary-blue/30"
            >
              Read More About Us <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
