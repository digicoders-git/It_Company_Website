import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag, Server, Database, Cloud, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const dataInfrastructureCaseStudies = [
  {
    id: 'enterprise-data-migration',
    title: 'Enterprise Data Migration & Cloud Setup',
    client: 'TechCorp Global',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?w=800&h=600&fit=crop&q=80',
    excerpt: 'Successfully migrated 5TB of enterprise data to cloud infrastructure with zero downtime and improved performance by 60%.',
    tags: ['Cloud Migration', 'AWS', 'Data Center'],
  },
  {
    id: 'manufacturing-iot-solution',
    title: 'Manufacturing IoT Solution',
    client: 'IndustrialTech',
    date: 'June 2023',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80',
    excerpt: 'Implemented IoT-based monitoring system for manufacturing plant, improving efficiency by 35%.',
    tags: ['IoT', 'Manufacturing', 'Real-time Analytics'],
  },
  {
    id: 'retail-cloud-transformation',
    title: 'Retail Chain Cloud Transformation',
    client: 'MegaMart Retail',
    date: 'September 2023',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80',
    excerpt: 'Transformed legacy retail systems to cloud-based infrastructure, reducing operational costs by 40%.',
    tags: ['Cloud Migration', 'Azure', 'Retail'],
  },
  {
    id: 'healthcare-data-platform',
    title: 'Healthcare Data Platform Modernization',
    client: 'MediCare Plus',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
    excerpt: 'Built a unified data platform for healthcare analytics, improving patient outcome predictions by 45%.',
    tags: ['Healthcare', 'Data Platform', 'Analytics'],
  },
];

const CaseStudyCard = ({ caseStudy, idx }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group bg-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-teal"></div>
          </div>
        )}
        {imageError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-dark to-primary-teal">
            <Database className="h-12 w-12 text-white/50 mb-2" />
            <span className="text-white/70 text-sm font-bold">Data Infrastructure</span>
          </div>
        )}
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-primary-teal text-white text-xs font-black uppercase tracking-wider px-3 py-1 z-10 flex items-center gap-1.5">
          <Database className="h-3 w-3" />
          Data Infrastructure
        </div>

        {/* Hover Arrow */}
        <Link
          to={`/case-studies/${caseStudy.id}`}
          className="absolute bottom-4 right-4 h-12 w-12 bg-primary-teal flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10"
        >
          <ArrowRight className="h-5 w-5 text-white" />
        </Link>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {caseStudy.date}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" /> {caseStudy.client}
          </span>
        </div>

        <Link to={`/case-studies/${caseStudy.id}`}>
          <h3 className="text-lg font-black text-primary-dark leading-snug mb-3 group-hover:text-primary-teal transition-colors">
            {caseStudy.title}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">
          {caseStudy.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 w-0 bg-primary-teal transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
};

const DataInfrastructurePage = () => {
  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-[60px] border-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full border-[50px] border-white -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-teal" />
              <span className="text-primary-teal font-bold uppercase tracking-widest text-sm">
                Data Infrastructure
              </span>
              <div className="h-[2px] w-10 bg-primary-teal" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Data Infrastructure<br />
              <span className="text-primary-teal">Case Studies</span>
            </h1>
            <p className="text-gray-300 text-lg font-medium leading-relaxed">
              Discover how we've helped enterprises build scalable, secure, and high-performance data infrastructure solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-[#F5F7F9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {dataInfrastructureCaseStudies.map((caseStudy, idx) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} idx={idx} />
            ))}
          </motion.div>

          {dataInfrastructureCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg font-medium">No case studies found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-teal" />
              <span className="text-primary-teal font-bold uppercase tracking-widest text-sm">
                What We Offer
              </span>
              <div className="h-[2px] w-10 bg-primary-teal" />
            </div>
            <h2 className="text-4xl font-black text-primary-dark leading-tight">
              Our Data Infrastructure Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: 'Cloud Migration',
                description: 'Seamlessly migrate your on-premise data infrastructure to cloud platforms like AWS, Azure, or Google Cloud with zero downtime.',
              },
              {
                icon: Database,
                title: 'Data Platform Design',
                description: 'Architect and implement modern data platforms that scale with your business needs and support advanced analytics.',
              },
              {
                icon: Server,
                title: 'Infrastructure Automation',
                description: 'Implement Infrastructure as Code (IaC) and automated deployment pipelines for consistent, reliable infrastructure.',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F5F7F9] p-8 text-center hover:bg-primary-dark group transition-all duration-500"
              >
                <div className="h-16 w-16 bg-primary-teal/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-teal transition-colors">
                  <service.icon className="h-8 w-8 text-primary-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black text-primary-dark mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-medium group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section-padding bg-primary-dark">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { count: '500+', label: 'Data Projects' },
              { count: '10PB+', label: 'Data Managed' },
              { count: '99.99%', label: 'Uptime SLA' },
              { count: '50+', label: 'Enterprise Clients' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-5xl font-black text-primary-teal mb-2">{stat.count}</h4>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-teal">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Ready To Modernize Your Data Infrastructure?
            </h2>
            <p className="text-white/80 text-lg font-medium mb-10">
              Let's discuss how we can help you build a scalable, secure, and high-performance data infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-primary-teal px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all duration-300">
                Get Started <ArrowRight className="h-4 w-4 inline ml-2" />
              </button>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-white hover:text-primary-teal transition-all duration-300 inline-block"
              >
                View All Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DataInfrastructurePage;
