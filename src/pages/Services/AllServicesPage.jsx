import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cloud, Rocket, Cpu, Shield, BarChart2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'data-infrastructure',
    icon: Database,
    title: 'Data Infrastructure',
    description: 'We build comprehensive data infrastructure solutions that help businesses manage, store, and process large volumes of data efficiently and securely.',
    features: ['Scalable Storage Solutions', 'Data Warehousing', 'Real-time Processing', 'Backup & Recovery'],
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    id: 'cloud-integration',
    icon: Cloud,
    title: 'IT Cloud Integration',
    description: 'Seamlessly integrate your business operations with leading cloud platforms for improved scalability, flexibility, and cost efficiency.',
    features: ['AWS/Azure/GCP Integration', 'Hybrid Cloud Solutions', 'Cloud Migration', 'Cloud Security'],
    color: 'bg-pink-50',
    iconColor: 'text-primary-pink',
  },
  {
    id: 'startup-projects',
    icon: Rocket,
    title: 'IT Startup Projects',
    description: 'We help startups build their digital foundation with tailored IT solutions, from MVP development to full-scale product launches.',
    features: ['MVP Development', 'Product Strategy', 'Tech Stack Selection', 'Rapid Prototyping'],
    color: 'bg-teal-50',
    iconColor: 'text-primary-teal',
  },
  {
    id: 'product-engineering',
    icon: Cpu,
    title: 'Product Engineering',
    description: 'End-to-end product engineering services covering design, development, testing, and deployment of software products.',
    features: ['Custom Software Development', 'UI/UX Design', 'Quality Assurance', 'DevOps Integration'],
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    id: 'business-security',
    icon: Shield,
    title: 'Business Security',
    description: 'Comprehensive cybersecurity solutions to protect your business from digital threats, data breaches, and vulnerabilities.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Management', '24/7 Monitoring'],
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    id: 'it-consulting',
    icon: BarChart2,
    title: 'IT Consulting',
    description: 'Strategic IT consulting services to help businesses align their technology investments with their overall business goals.',
    features: ['Digital Transformation', 'Technology Roadmap', 'Cost Optimization', 'Process Automation'],
    color: 'bg-green-50',
    iconColor: 'text-green-500',
  },
];

const AllServicesPage = () => {
  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden bg-primary-dark pt-24 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full border-[50px] border-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-[40px] border-white -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary-pink/10 px-4 py-2 mb-4">
              <div className="h-2 w-2 bg-primary-pink rounded-full animate-pulse" />
              <span className="text-primary-pink font-bold uppercase tracking-wider text-xs">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Complete IT Solutions<br />
              <span className="text-primary-pink">For Your Business</span>
            </h1>
            <p className="text-gray-300 text-base font-medium leading-relaxed">
              From cloud integration to cybersecurity, we provide comprehensive IT services designed to help your business thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Icon */}
                  <div className={`inline-flex h-14 w-14 items-center justify-center mb-4 ${service.color} transition-all duration-300 group-hover:bg-primary-pink`}>
                    <Icon className={`h-7 w-7 ${service.iconColor} transition-colors duration-300 group-hover:text-white`} />
                  </div>

                  <h3 className="text-lg font-black text-primary-dark mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-1.5 mb-5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary-pink mt-0.5" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-primary-pink font-bold text-xs uppercase tracking-wider hover-line"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary-pink/5 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:bg-primary-pink/3 -z-0" />
                  <div className="absolute bottom-0 right-0 w-0 h-1 bg-primary-pink transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-pink/10 px-3 py-1.5 mb-4">
                <div className="h-1.5 w-1.5 bg-primary-pink rounded-full" />
                <span className="text-primary-pink font-bold uppercase tracking-wider text-xs">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-primary-dark leading-tight mb-5">
                Your Trusted IT<br />
                <span className="text-primary-pink">Solutions Partner</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6">
                With over 25 years of experience, we've helped 1000+ businesses transform their operations through innovative IT solutions. Our team of experts is dedicated to delivering excellence in every project.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Experienced team of certified professionals',
                  'Proven track record with 960+ successful projects',
                  '24/7 support and maintenance services',
                  'Cutting-edge technology and best practices',
                  'Customized solutions for your unique needs',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-pink mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900"
                alt="Why Choose Us"
                className="w-full object-cover shadow-2xl"
                style={{ height: '450px' }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary-pink/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary-pink">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-5">
              Ready To Get Started?
            </h2>
            <p className="text-white/80 text-base font-medium mb-8">
              Let's discuss how our IT solutions can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-primary-pink px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all duration-300">
                Request A Quote <ArrowRight className="h-4 w-4 inline ml-2" />
              </button>
              <a
                href="tel:5003692580"
                className="border-2 border-white text-white px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-white hover:text-primary-pink transition-all duration-300"
              >
                Call: 500.369.2580
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AllServicesPage;
