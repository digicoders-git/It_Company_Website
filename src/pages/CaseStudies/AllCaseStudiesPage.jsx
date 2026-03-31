import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudiesData = [
  {
    id: 'enterprise-data-migration',
    title: 'Enterprise Data Migration & Cloud Setup',
    category: 'Data Infrastructure',
    client: 'TechCorp Global',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?w=800&h=600&fit=crop&q=80',
    excerpt: 'Successfully migrated 5TB of enterprise data to cloud infrastructure with zero downtime and improved performance by 60%.',
    tags: ['Cloud Migration', 'Data Infrastructure', 'AWS'],
  },
  {
    id: 'financial-security-audit',
    title: 'Full Security Audit & Threat Prevention',
    category: 'Cyber Security',
    client: 'SecureBank Inc.',
    date: 'November 2023',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&q=80',
    excerpt: 'Implemented end-to-end security protocols reducing breach risk by 95% for a major financial institution.',
    tags: ['Security Audit', 'Compliance', 'Penetration Testing'],
  },
  {
    id: 'saas-platform-development',
    title: 'SaaS Platform Development From Scratch',
    category: 'Product Engineering',
    client: 'StartupHub',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80',
    excerpt: 'Built a scalable SaaS platform serving 50,000+ users with 99.9% uptime guarantee and real-time analytics.',
    tags: ['SaaS', 'Product Development', 'React', 'Node.js'],
  },
  {
    id: 'retail-cloud-transformation',
    title: 'Retail Chain Cloud Transformation',
    category: 'Cloud Integration',
    client: 'MegaMart Retail',
    date: 'September 2023',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80',
    excerpt: 'Transformed legacy retail systems to cloud-based infrastructure, reducing operational costs by 40%.',
    tags: ['Cloud Migration', 'Azure', 'Retail'],
  },
  {
    id: 'healthcare-compliance-system',
    title: 'Healthcare Compliance Management System',
    category: 'Business Security',
    client: 'HealthCare Plus',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
    excerpt: 'Developed HIPAA-compliant system for managing patient data with advanced encryption and access controls.',
    tags: ['Healthcare', 'HIPAA', 'Compliance'],
  },
  {
    id: 'fintech-mvp-launch',
    title: 'FinTech Startup MVP Launch',
    category: 'Startup Projects',
    client: 'PayFlow',
    date: 'July 2023',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80',
    excerpt: 'Launched fintech MVP in 3 months, secured $2M funding, now processing $10M+ monthly transactions.',
    tags: ['MVP', 'FinTech', 'Startup'],
  },
  {
    id: 'manufacturing-iot-solution',
    title: 'Manufacturing IoT Solution',
    category: 'Data Infrastructure',
    client: 'IndustrialTech',
    date: 'June 2023',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80',
    excerpt: 'Implemented IoT-based monitoring system for manufacturing plant, improving efficiency by 35%.',
    tags: ['IoT', 'Manufacturing', 'Real-time Analytics'],
  },
  {
    id: 'ecommerce-platform-redesign',
    title: 'E-Commerce Platform Redesign',
    category: 'Product Engineering',
    client: 'ShopNow',
    date: 'May 2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    excerpt: 'Complete platform redesign resulting in 120% increase in conversion rate and 80% faster load times.',
    tags: ['E-Commerce', 'UI/UX', 'Performance'],
  },
  {
    id: 'enterprise-digital-transformation',
    title: 'Enterprise Digital Transformation',
    category: 'IT Consulting',
    client: 'GlobalCorp',
    date: 'April 2023',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
    excerpt: 'Led complete digital transformation initiative for Fortune 500 company, modernizing 20+ legacy systems.',
    tags: ['Digital Transformation', 'Enterprise', 'Strategy'],
  },
];

const categories = ['All', 'Data Infrastructure', 'Cyber Security', 'Product Engineering', 'Cloud Integration', 'Business Security', 'Startup Projects', 'IT Consulting'];

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
            <ImageIcon className="h-12 w-12 text-white/50 mb-2" />
            <span className="text-white/70 text-sm font-bold">{caseStudy.category}</span>
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
        <div className="absolute top-4 left-4 bg-primary-teal text-white text-xs font-black uppercase tracking-wider px-3 py-1 z-10">
          {caseStudy.category}
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

const AllCaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCases = activeCategory === 'All' 
    ? caseStudiesData 
    : caseStudiesData.filter(c => c.category === activeCategory);

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
                Case Studies
              </span>
              <div className="h-[2px] w-10 bg-primary-teal" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Our Success Stories &<br />
              <span className="text-primary-teal">Client Projects</span>
            </h1>
            <p className="text-gray-300 text-lg font-medium leading-relaxed">
              Explore our portfolio of successful IT projects delivered across various industries and sectors worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-bold uppercase tracking-wider text-xs transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-teal text-white shadow-lg shadow-primary-teal/30'
                    : 'border-2 border-gray-200 text-gray-600 hover:border-primary-teal hover:text-primary-teal'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-[#F5F7F9]">
        <div className="container">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCases.map((caseStudy, idx) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} idx={idx} />
            ))}
          </motion.div>

          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg font-medium">No case studies found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section-padding bg-primary-dark">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { count: '960+', label: 'Projects Completed' },
              { count: '1000+', label: 'Happy Clients' },
              { count: '50+', label: 'Countries Served' },
              { count: '98%', label: 'Success Rate' },
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
              Want To Be Our Next Success Story?
            </h2>
            <p className="text-white/80 text-lg font-medium mb-10">
              Let's discuss how we can help transform your business with innovative IT solutions.
            </p>
            <button className="bg-white text-primary-teal px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all duration-300">
              Start Your Project <ArrowRight className="h-4 w-4 inline ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AllCaseStudiesPage;
