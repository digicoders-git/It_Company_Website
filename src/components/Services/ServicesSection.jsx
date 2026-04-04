import React from 'react';
import { ArrowRight, Globe, Smartphone, Code, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
            <span className="text-primary-blue font-bold uppercase tracking-wider text-sm">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight">
            Our Core <span className="text-primary-blue">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link
                key={idx}
                to={service.link}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.bgImage} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 to-[#0d2050]/90" />
                </div>

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-white text-primary-blue text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-lg">
                    Popular
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 p-8 min-h-[360px] flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border-2 border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Text Content - Pushed to bottom */}
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
