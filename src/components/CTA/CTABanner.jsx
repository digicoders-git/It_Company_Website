import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden bg-primary-teal py-20">
      {/* Background circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-[40px] border-white -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border-[60px] border-white translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full border-[30px] border-white" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-white/80 font-semibold uppercase tracking-widest text-sm mb-3">
              Get Started Today
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Need A Free Consultation?<br />
              <span className="text-white/80">We're Ready To Help!</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 shrink-0"
          >
            <a
              href="tel:5003692580"
              className="flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-primary-teal transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              500.369.2580
            </a>
            <button className="flex items-center gap-2 bg-white text-primary-teal px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all duration-300">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
