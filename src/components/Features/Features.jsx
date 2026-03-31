import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Shield, Cpu } from 'lucide-react';

const featureCards = [
  {
    icon: Database,
    title: 'Data Analysis',
    description: 'The process of examining and interpreting data to extract useful insights and inform decision-making.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=800',
    color: 'bg-blue-500',
  },
  {
    icon: Cpu,
    title: 'IT Solutions',
    description: 'A wide range of services such as software development, data analysis, and cybersecurity solutions.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    color: 'bg-primary-pink',
    featured: true,
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'The practice of protecting computer systems and networks from digital threats like hacking and malware.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    color: 'bg-primary-teal',
  },
];

const Features = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#F5F7F9]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-pink/10 px-4 py-2 mb-4"
          >
            <div className="h-2 w-2 bg-primary-pink rounded-full animate-pulse" />
            <span className="text-primary-pink font-semibold uppercase tracking-wider text-xs">
              What We Offer
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-primary-dark leading-tight"
          >
            Our Core Services
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative overflow-hidden bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                  card.featured ? 'ring-2 ring-primary-pink' : ''
                }`}
              >
                {/* Image with Icon Overlay */}
                <div className="relative h-56 overflow-hidden bg-gray-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }}
                  />
                  
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`h-20 w-20 ${card.color} rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {card.featured && (
                    <div className="absolute top-4 right-4 bg-primary-pink text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5">
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary-dark mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">
                    {card.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      card.featured
                        ? 'border-primary-pink bg-primary-pink text-white'
                        : 'border-gray-200 group-hover:border-primary-pink group-hover:bg-primary-pink group-hover:text-white'
                    }`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-pink transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
