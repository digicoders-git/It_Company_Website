import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag, User, CheckCircle2, TrendingUp, Award, Image as ImageIcon } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const caseStudiesDetails = {
  'enterprise-data-migration': {
    title: 'Enterprise Data Migration & Cloud Setup',
    category: 'Data Infrastructure',
    client: 'TechCorp Global',
    industry: 'Technology',
    date: 'December 2023',
    duration: '6 Months',
    teamSize: '12 Members',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?w=1200&h=600&fit=crop&q=80',
    overview: 'TechCorp Global, a Fortune 500 technology company, needed to migrate 5TB of critical enterprise data from legacy on-premise servers to a modern cloud infrastructure. The challenge was to complete the migration with zero downtime while maintaining data integrity and security.',
    challenge: {
      description: 'The client faced multiple challenges including outdated infrastructure, data scattered across multiple systems, strict compliance requirements, and the need for 24/7 availability during migration.',
      points: [
        'Legacy systems with 15+ years of accumulated data',
        'Multiple data formats and inconsistent schemas',
        'Zero downtime requirement for critical business operations',
        'Strict compliance with GDPR and SOC 2 standards',
        'Limited migration window due to business constraints',
      ],
    },
    solution: {
      description: 'We designed a comprehensive migration strategy using AWS cloud services, implementing a phased approach with real-time data synchronization and automated validation processes.',
      points: [
        'Implemented AWS Database Migration Service for seamless data transfer',
        'Created automated data validation and integrity checking systems',
        'Deployed hybrid cloud architecture for gradual migration',
        'Established real-time monitoring and rollback mechanisms',
        'Conducted extensive testing in staging environment',
        'Provided 24/7 support during migration phases',
      ],
    },
    results: [
      { metric: '60%', label: 'Performance Improvement', icon: TrendingUp },
      { metric: '40%', label: 'Cost Reduction', icon: Award },
      { metric: '99.99%', label: 'Uptime Achieved', icon: CheckCircle2 },
      { metric: '0', label: 'Data Loss', icon: CheckCircle2 },
    ],
    technologies: ['AWS', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Terraform', 'Python', 'Node.js'],
    testimonial: {
      text: 'Zentec delivered an exceptional migration project. Their expertise and attention to detail ensured a smooth transition with zero business disruption. The performance improvements have exceeded our expectations.',
      author: 'John Anderson',
      role: 'CTO, TechCorp Global',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
    },
  },
  'financial-security-audit': {
    title: 'Full Security Audit & Threat Prevention',
    category: 'Cyber Security',
    client: 'SecureBank Inc.',
    industry: 'Financial Services',
    date: 'November 2023',
    duration: '4 Months',
    teamSize: '8 Members',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop&q=80',
    overview: 'SecureBank Inc., a leading financial institution, required a comprehensive security audit and implementation of advanced threat prevention systems to protect customer data and meet regulatory compliance.',
    challenge: {
      description: 'The bank faced increasing cybersecurity threats, outdated security protocols, and needed to comply with strict financial regulations while maintaining seamless customer experience.',
      points: [
        'Multiple security vulnerabilities in legacy systems',
        'Compliance requirements for PCI DSS and SOX',
        'Increasing sophistication of cyber attacks',
        'Need for real-time threat detection and response',
        'Integration with existing banking infrastructure',
      ],
    },
    solution: {
      description: 'We conducted a thorough security assessment, implemented multi-layered security architecture, and established 24/7 monitoring with automated threat response systems.',
      points: [
        'Performed comprehensive penetration testing and vulnerability assessment',
        'Implemented zero-trust security architecture',
        'Deployed AI-powered threat detection systems',
        'Established Security Operations Center (SOC)',
        'Implemented multi-factor authentication across all systems',
        'Conducted security awareness training for all staff',
      ],
    },
    results: [
      { metric: '95%', label: 'Risk Reduction', icon: TrendingUp },
      { metric: '100%', label: 'Compliance Achieved', icon: Award },
      { metric: '24/7', label: 'Monitoring', icon: CheckCircle2 },
      { metric: '0', label: 'Security Breaches', icon: CheckCircle2 },
    ],
    technologies: ['Splunk', 'CrowdStrike', 'Palo Alto', 'Azure Sentinel', 'Okta', 'HashiCorp Vault', 'Python', 'ELK Stack'],
    testimonial: {
      text: 'The security transformation led by Zentec has given us complete confidence in our cybersecurity posture. Their proactive approach and expertise have been invaluable.',
      author: 'Sarah Mitchell',
      role: 'CISO, SecureBank Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
    },
  },
  'saas-platform-development': {
    title: 'SaaS Platform Development From Scratch',
    category: 'Product Engineering',
    client: 'StartupHub',
    industry: 'SaaS',
    date: 'October 2023',
    duration: '8 Months',
    teamSize: '15 Members',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop&q=80',
    overview: 'StartupHub needed a scalable SaaS platform built from scratch to serve their growing customer base. The platform required real-time analytics, multi-tenancy, and seamless integration capabilities.',
    challenge: {
      description: 'Building a production-ready SaaS platform with enterprise-grade features while maintaining rapid development pace and ensuring scalability for future growth.',
      points: [
        'Complex multi-tenant architecture requirements',
        'Real-time data processing and analytics',
        'High availability and 99.9% uptime SLA',
        'Integration with 20+ third-party services',
        'Scalability to support 100,000+ users',
      ],
    },
    solution: {
      description: 'We architected and developed a modern cloud-native SaaS platform using microservices architecture, implementing best practices for scalability, security, and performance.',
      points: [
        'Built microservices architecture using Node.js and React',
        'Implemented real-time analytics with Apache Kafka',
        'Deployed on AWS with auto-scaling capabilities',
        'Created comprehensive API for third-party integrations',
        'Implemented CI/CD pipeline for rapid deployments',
        'Established monitoring and alerting systems',
      ],
    },
    results: [
      { metric: '50K+', label: 'Active Users', icon: TrendingUp },
      { metric: '99.9%', label: 'Uptime', icon: Award },
      { metric: '200ms', label: 'Avg Response Time', icon: CheckCircle2 },
      { metric: '$5M', label: 'ARR Achieved', icon: CheckCircle2 },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'Docker', 'Kubernetes', 'GraphQL'],
    testimonial: {
      text: 'Zentec built us a world-class platform that has become the foundation of our business. Their technical expertise and commitment to quality are outstanding.',
      author: 'Michael Chen',
      role: 'CEO, StartupHub',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80',
    },
  },
};

const CaseStudyDetailPage = () => {
  const { caseId } = useParams();
  const caseStudy = caseStudiesDetails[caseId];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-primary-dark mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-primary-pink font-bold hover:underline">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Banner */}
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
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-pink" />
              <span className="text-primary-pink font-bold uppercase tracking-widest text-sm">
                {caseStudy.category}
              </span>
              <div className="h-[2px] w-10 bg-primary-pink" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6 text-center">
              {caseStudy.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm font-bold">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary-pink" />
                {caseStudy.client}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary-pink" />
                {caseStudy.industry}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary-pink" />
                {caseStudy.date}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full object-cover shadow-2xl"
              style={{ height: '500px' }}
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-primary-pink/20 hidden lg:block" />
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-[#F5F7F9]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Duration</p>
              <p className="text-2xl font-black text-primary-dark">{caseStudy.duration}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Team Size</p>
              <p className="text-2xl font-black text-primary-dark">{caseStudy.teamSize}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Industry</p>
              <p className="text-2xl font-black text-primary-dark">{caseStudy.industry}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Category</p>
              <p className="text-2xl font-black text-primary-dark">{caseStudy.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-pink" />
              <span className="text-primary-pink font-bold uppercase tracking-widest text-sm">
                Project Overview
              </span>
            </div>
            <h2 className="text-3xl font-black text-primary-dark mb-6">About This Project</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              {caseStudy.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-[#F5F7F9]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-primary-pink" />
                <span className="text-primary-pink font-bold uppercase tracking-widest text-sm">
                  The Challenge
                </span>
              </div>
              <h3 className="text-2xl font-black text-primary-dark mb-6">What We Faced</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-6">
                {caseStudy.challenge.description}
              </p>
              <ul className="flex flex-col gap-3">
                {caseStudy.challenge.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-pink mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-primary-teal" />
                <span className="text-primary-teal font-bold uppercase tracking-widest text-sm">
                  The Solution
                </span>
              </div>
              <h3 className="text-2xl font-black text-primary-dark mb-6">How We Solved It</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-6">
                {caseStudy.solution.description}
              </p>
              <ul className="flex flex-col gap-3">
                {caseStudy.solution.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-teal mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-primary-dark">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-pink" />
              <span className="text-primary-pink font-bold uppercase tracking-widest text-sm">
                Results
              </span>
              <div className="h-[2px] w-10 bg-primary-pink" />
            </div>
            <h2 className="text-4xl font-black text-white leading-tight">
              Measurable Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.results.map((result, idx) => {
              const Icon = result.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 bg-primary-pink/20 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-pink" />
                    </div>
                  </div>
                  <h4 className="text-4xl font-black text-white mb-2">{result.metric}</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{result.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-pink" />
              <span className="text-primary-pink font-bold uppercase tracking-widest text-sm">
                Technologies Used
              </span>
            </div>
            <h2 className="text-3xl font-black text-primary-dark mb-8">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-[#F5F7F9] text-primary-dark font-bold text-sm px-6 py-3 uppercase tracking-wider hover:bg-primary-pink hover:text-white transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-[#F5F7F9]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 shadow-xl relative"
          >
            <div className="absolute -top-6 -left-6 h-16 w-16 bg-primary-pink flex items-center justify-center text-white text-4xl font-black">
              "
            </div>
            <p className="text-gray-600 text-xl leading-relaxed font-medium mb-8 italic">
              {caseStudy.testimonial.text}
            </p>
            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
              <img
                src={caseStudy.testimonial.image}
                alt={caseStudy.testimonial.author}
                className="h-16 w-16 object-cover rounded-full"
              />
              <div>
                <h4 className="font-black text-primary-dark text-lg">{caseStudy.testimonial.author}</h4>
                <p className="text-primary-pink text-sm font-bold">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-pink">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Ready To Start Your Project?
            </h2>
            <p className="text-white/80 text-lg font-medium mb-10">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-primary-pink px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all duration-300">
                Get Started <ArrowRight className="h-4 w-4 inline ml-2" />
              </button>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-white hover:text-primary-pink transition-all duration-300 inline-block"
              >
                View More Cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetailPage;
