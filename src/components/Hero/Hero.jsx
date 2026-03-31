import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-pink/10 px-4 py-2 mb-6"
            >
              <div className="h-2 w-2 bg-primary-pink rounded-full animate-pulse" />
              <span className="text-primary-pink font-semibold uppercase tracking-wider text-xs">
                IT Solutions For Easy Integration
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.15] text-primary-dark mb-5">
              IT Services To Develop{' '}
              <span className="text-primary-pink">Solutions</span> Your Way!
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl">
              Building a relationship between IT companies & experts. We provide coverage of industry events and conferences, including highlights.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary shadow-lg shadow-primary-pink/30"
              >
                More Details <ArrowRight className="h-4 w-4" />
              </motion.button>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-primary-pink text-primary-pink transition-all group-hover:bg-primary-pink group-hover:text-white shadow-md">
                  <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Play Video</p>
                  <p className="text-sm font-semibold text-primary-dark">Watch Demo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
                alt="IT Team"
                className="w-full h-auto object-cover shadow-2xl"
              />
              
              {/* Floating Stats Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-1/4 bg-white rounded-lg shadow-2xl p-4 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary-pink/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary-pink font-black text-lg">25+</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Years</p>
                    <p className="text-sm font-black text-primary-dark">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-6 bottom-1/4 bg-primary-pink rounded-lg shadow-2xl p-4 text-white hidden lg:block"
              >
                <p className="text-2xl font-black leading-none mb-1">960+</p>
                <p className="text-xs font-bold uppercase tracking-wider opacity-90">Projects Done</p>
              </motion.div>

              {/* Decorative Shape */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary-pink/20 -z-10 hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
