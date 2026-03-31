import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  'We are committed to providing quality IT Services',
  'Our benefits are endless for local IT Companies & Startups',
  'Really know the true needs and expectations of customers',
  'Talented & experienced management solutions for IT',
  'Processes of achieving the excellence and continue improvements',
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#F5F7F9]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 xl:gap-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=900"
                alt="About Zentec"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ height: '520px' }}
              />
              {/* Pink overlay on hover */}
              <div className="absolute inset-0 bg-primary-pink/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative border box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary-pink z-0 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary-teal/30 z-0 hidden lg:block" />

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-8 z-10 bg-primary-pink text-white p-8 text-center shadow-2xl"
            >
              <span className="text-5xl font-black block leading-none">25+</span>
              <span className="text-xs font-black uppercase tracking-widest block mt-2 opacity-90">
                Years Of<br />Experience
              </span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-pink" />
              <span className="text-primary-pink font-semibold uppercase tracking-widest text-sm">
                ZenTec — Welcome To IT Solutions
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight mb-6">
              Your Next Preferred<br />
              <span className="text-primary-pink">IT Partner</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-4 font-medium">
              We feature interviews with industry experts and thought leaders, providing our clients with valuable insights and perspectives on the latest trends and challenges in the IT industry.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">
              We provide coverage of industry events and conferences, including highlights and key takeaways from presentations and panel discussions.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-pink" />
                  <span className="text-gray-700 font-medium text-sm leading-snug group-hover:text-primary-pink transition-colors">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary shadow-lg shadow-primary-pink/30"
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
