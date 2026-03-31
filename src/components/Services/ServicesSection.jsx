import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cloud, Rocket, Cpu, Shield, BarChart2 } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Infrastructure',
    description: 'We build robust data infrastructure solutions that help businesses manage, store, and process large volumes of data efficiently.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Cloud,
    title: 'IT Cloud Integration',
    description: 'Seamlessly integrate your business operations with cloud platforms for improved scalability, flexibility, and cost efficiency.',
    color: 'bg-pink-50',
    iconColor: 'text-primary-pink',
  },
  {
    icon: Rocket,
    title: 'IT Startup Projects',
    description: 'We help startups build their digital foundation with tailored IT solutions, from MVP development to full-scale product launches.',
    color: 'bg-teal-50',
    iconColor: 'text-primary-teal',
  },
  {
    icon: Cpu,
    title: 'Product Engineering',
    description: 'End-to-end product engineering services covering design, development, testing, and deployment of software products.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: Shield,
    title: 'Business Security',
    description: 'Comprehensive cybersecurity solutions to protect your business from digital threats, data breaches, and vulnerabilities.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: BarChart2,
    title: 'IT Consulting',
    description: 'Strategic IT consulting services to help businesses align their technology investments with their overall business goals.',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
  },
];

const ServicesSection = () => {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-pink" />
              <span className="text-primary-pink font-semibold uppercase tracking-widest text-sm">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight">
              Our IT Solutions &<br />
              <span className="text-primary-pink">Services</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-500 font-normal leading-relaxed mb-6">
              We provide a wide range of IT services designed to help businesses grow, innovate, and stay competitive in the digital age.
            </p>
            <button className="btn-primary inline-flex">
              All Services <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Icon */}
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-none mb-6 ${service.color} transition-all duration-300 group-hover:bg-primary-pink`}>
                  <Icon className={`h-8 w-8 ${service.iconColor} transition-colors duration-300 group-hover:text-white`} />
                </div>

                <h3 className="text-xl font-bold text-primary-dark mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-primary-pink font-semibold text-sm uppercase tracking-wider hover-line">
                  Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary-pink/5 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:bg-primary-pink/3 -z-0" />
                <div className="absolute bottom-0 right-0 w-0 h-1 bg-primary-pink transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
