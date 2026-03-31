import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
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
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative overflow-hidden bg-primary-dark section-padding">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
          alt="bg"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-primary-dark/80" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-pink" />
              <span className="text-primary-pink font-semibold uppercase tracking-widest text-sm">
                Industry Insights
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Exclusive Analysis On The<br />
              Latest Developments In<br />
              <span className="text-primary-teal">The IT Industry</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed font-normal italic border-l-4 border-primary-pink pl-6 mb-8">
              "We provide Analysis and Commentary on the latest developments in the IT industry, including new technologies, market trends, and emerging best practices."
            </p>
            <button className="btn-primary shadow-lg shadow-primary-pink/30">
              Proven IT Solutions <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-5 group"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-white/5 border border-white/10 text-primary-teal transition-all duration-300 group-hover:bg-primary-pink group-hover:text-white group-hover:border-primary-pink">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white leading-none">
                    <CountUp target={stat.count} inView={inView} />+
                  </h4>
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
