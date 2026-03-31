import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag, Code, Layers, Rocket, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const productEngineeringCaseStudies = [
  {
    id: 'saas-platform-development',
    title: 'SaaS Platform Development From Scratch',
    client: 'StartupHub',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80',
    excerpt: 'Built a scalable SaaS platform serving 50,000+ users with 99.9% uptime guarantee and real-time analytics.',
    tags: ['SaaS', 'Product Development', 'React', 'Node.js'],
  },
  {
    id: 'ecommerce-platform-redesign',
    title: 'E-Commerce Platform Redesign',
    client: 'ShopNow',
    date: 'May 2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    excerpt: 'Complete platform redesign resulting in 120% increase in conversion rate and 80% faster load times.',
    tags: ['E-Commerce', 'UI/UX', 'Performance'],
  },
  {
    id: 'fintech-mvp-launch',
    title: 'FinTech Startup MVP Launch',
    client: 'PayFlow',
    date: 'July 2023',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80',
    excerpt: 'Launched fintech MVP in 3 months, secured $2M funding, now processing $10M+ monthly transactions.',
    tags: ['MVP', 'FinTech', 'Startup'],
  },
  {
    id: 'mobile-app-development',
    title: 'Enterprise Mobile App Platform',
    client: 'CloudSync Inc.',
    date: 'April 2023',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80',
    excerpt: 'Built cross-platform mobile app serving 1M+ users with real-time synchronization and offline support.',
    tags: ['Mobile', 'React Native', 'Enterprise'],
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
            <Code className="h-12 w-12 text-white/50 mb-2" />
            <span className="text-white/70 text-sm font-bold">Product Engineering</span>
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
        <div className="absolute top-4 left-4 bg-[#FF6B35] text-white text-xs font-black uppercase tracking-wider px-3 py-1 z-10 flex items-center gap-1.5">
          <Layers className="h-3 w-3" />
          Product Engineering
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
      <div className="h-1 w-0 bg-[#FF6B35] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
};

const ProductEngineeringPage = () => {
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
              <div className="h-[2px] w-10 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] font-bold uppercase tracking-widest text-sm">
                Product Engineering
              </span>
              <div className="h-[2px] w-10 bg-[#FF6B35]" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Product Engineering<br />
              <span className="text-[#FF6B35]">Case Studies</span>
            </h1>
            <p className="text-gray-300 text-lg font-medium leading-relaxed">
              Discover how we've helped startups and enterprises build scalable software products from concept to launch.
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
            {productEngineeringCaseStudies.map((caseStudy, idx) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} idx={idx} />
            ))}
          </motion.div>

          {productEngineeringCaseStudies.length === 0 && (
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
              <div className="h-[2px] w-10 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] font-bold uppercase tracking-widest text-sm">
                What We Offer
              </span>
              <div className="h-[2px] w-10 bg-[#FF6B35]" />
            </div>
            <h2 className="text-4xl font-black text-primary-dark leading-tight">
              Our Product Engineering Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'MVP Development',
                description: 'Rapid MVP development to validate your ideas and secure funding. Get to market fast with a scalable foundation.',
              },
              {
                icon: Layers,
                title: 'Product Architecture',
                description: 'Design and implement scalable, maintainable software architecture that grows with your business needs.',
              },
              {
                icon: Code,
                title: 'Full-Stack Development',
                description: 'End-to-end development services covering frontend, backend, APIs, databases, and DevOps implementation.',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F5F7F9] p-8 text-center hover:bg-[#FF6B35] group transition-all duration-500"
              >
                <div className="h-16 w-16 bg-[#FF6B35]/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <service.icon className="h-8 w-8 text-[#FF6B35] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black text-primary-dark mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-medium group-hover:text-white/80 transition-colors">
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
              { count: '150+', label: 'Products Built' },
              { count: '50+', label: 'Startups Funded' },
              { count: '99.9%', label: 'Avg Uptime' },
              { count: '$500M+', label: 'Client Revenue Generated' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-5xl font-black text-[#FF6B35] mb-2">{stat.count}</h4>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: '#FF6B35' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Ready To Build Your Product?
            </h2>
            <p className="text-white/80 text-lg font-medium mb-10">
              Let's discuss your product idea and build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-[#FF6B35] px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all duration-300">
                Start Your Project <ArrowRight className="h-4 w-4 inline ml-2" />
              </button>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-white hover:text-[#FF6B35] transition-all duration-300 inline-block"
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

export default ProductEngineeringPage;
