import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Database, Cloud, Rocket, Cpu, Shield, BarChart2 } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const servicesData = {
  'data-infrastructure': {
    icon: Database,
    title: 'Data Infrastructure',
    subtitle: 'Build Robust & Scalable Data Solutions',
    description: 'Our data infrastructure services help businesses manage, store, and process large volumes of data efficiently. We design and implement scalable solutions that grow with your business needs.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Scalable Storage Solutions',
      'Data Warehousing & Analytics',
      'Real-time Data Processing',
      'Backup & Disaster Recovery',
      'Data Migration Services',
      'Performance Optimization',
    ],
    benefits: [
      {
        title: 'Improved Performance',
        description: 'Optimized data infrastructure ensures faster query responses and better application performance.',
      },
      {
        title: 'Cost Efficiency',
        description: 'Reduce infrastructure costs with scalable solutions that match your actual usage.',
      },
      {
        title: 'Enhanced Security',
        description: 'Enterprise-grade security measures to protect your valuable data assets.',
      },
      {
        title: 'Business Intelligence',
        description: 'Transform raw data into actionable insights for better decision-making.',
      },
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Analyze current infrastructure and identify requirements' },
      { step: '02', title: 'Design', description: 'Create scalable architecture tailored to your needs' },
      { step: '03', title: 'Implementation', description: 'Deploy infrastructure with minimal disruption' },
      { step: '04', title: 'Optimization', description: 'Continuous monitoring and performance tuning' },
    ],
  },
  'cloud-integration': {
    icon: Cloud,
    title: 'IT Cloud Integration',
    subtitle: 'Seamless Cloud Migration & Integration',
    description: 'Transform your business with cloud integration services. We help you migrate to AWS, Azure, or Google Cloud Platform with zero downtime and maximum efficiency.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    features: [
      'AWS/Azure/GCP Integration',
      'Hybrid Cloud Solutions',
      'Cloud Migration Strategy',
      'Multi-Cloud Management',
      'Cloud Security & Compliance',
      'Cost Optimization',
    ],
    benefits: [
      {
        title: 'Scalability',
        description: 'Scale resources up or down based on demand without infrastructure investment.',
      },
      {
        title: 'Flexibility',
        description: 'Access your applications and data from anywhere, anytime.',
      },
      {
        title: 'Reduced Costs',
        description: 'Pay only for what you use with cloud-based pricing models.',
      },
      {
        title: 'Innovation',
        description: 'Leverage cutting-edge cloud services to drive innovation.',
      },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Evaluate current infrastructure and cloud readiness' },
      { step: '02', title: 'Strategy', description: 'Develop comprehensive cloud migration roadmap' },
      { step: '03', title: 'Migration', description: 'Execute seamless migration with zero downtime' },
      { step: '04', title: 'Optimization', description: 'Optimize cloud resources for cost and performance' },
    ],
  },
  'startup-projects': {
    icon: Rocket,
    title: 'IT Startup Projects',
    subtitle: 'Launch Your Startup With Confidence',
    description: 'We help startups build their digital foundation from the ground up. From MVP development to full-scale product launches, we provide the technical expertise you need to succeed.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200',
    features: [
      'MVP Development',
      'Product Strategy & Planning',
      'Tech Stack Selection',
      'Rapid Prototyping',
      'Agile Development',
      'Go-to-Market Support',
    ],
    benefits: [
      {
        title: 'Fast Time-to-Market',
        description: 'Launch your product quickly with agile development methodologies.',
      },
      {
        title: 'Cost-Effective',
        description: 'Optimize development costs with lean startup principles.',
      },
      {
        title: 'Expert Guidance',
        description: 'Benefit from our experience with 100+ successful startup launches.',
      },
      {
        title: 'Scalable Architecture',
        description: 'Build on a foundation that scales as your startup grows.',
      },
    ],
    process: [
      { step: '01', title: 'Ideation', description: 'Refine your idea and define product requirements' },
      { step: '02', title: 'MVP Build', description: 'Develop minimum viable product for market validation' },
      { step: '03', title: 'Launch', description: 'Deploy and launch your product to market' },
      { step: '04', title: 'Scale', description: 'Iterate and scale based on user feedback' },
    ],
  },
  'product-engineering': {
    icon: Cpu,
    title: 'Product Engineering',
    subtitle: 'End-to-End Product Development',
    description: 'Comprehensive product engineering services covering the entire software development lifecycle. From concept to deployment, we build products that users love.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Custom Software Development',
      'UI/UX Design',
      'Quality Assurance & Testing',
      'DevOps & CI/CD',
      'API Development',
      'Maintenance & Support',
    ],
    benefits: [
      {
        title: 'Quality Assurance',
        description: 'Rigorous testing ensures bug-free, high-quality products.',
      },
      {
        title: 'User-Centric Design',
        description: 'Beautiful interfaces that provide exceptional user experiences.',
      },
      {
        title: 'Agile Methodology',
        description: 'Flexible development process that adapts to changing requirements.',
      },
      {
        title: 'Continuous Delivery',
        description: 'Automated pipelines for faster, more reliable releases.',
      },
    ],
    process: [
      { step: '01', title: 'Requirements', description: 'Gather and document detailed requirements' },
      { step: '02', title: 'Design', description: 'Create wireframes, mockups, and prototypes' },
      { step: '03', title: 'Development', description: 'Build product using best practices and standards' },
      { step: '04', title: 'Deployment', description: 'Launch product with ongoing support' },
    ],
  },
  'business-security': {
    icon: Shield,
    title: 'Business Security',
    subtitle: 'Protect Your Digital Assets',
    description: 'Comprehensive cybersecurity solutions to protect your business from evolving digital threats. We provide end-to-end security services to keep your data and systems safe.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Security Audits & Assessments',
      'Penetration Testing',
      'Compliance Management',
      '24/7 Security Monitoring',
      'Incident Response',
      'Security Training',
    ],
    benefits: [
      {
        title: 'Risk Mitigation',
        description: 'Identify and address vulnerabilities before they can be exploited.',
      },
      {
        title: 'Compliance',
        description: 'Meet industry standards and regulatory requirements.',
      },
      {
        title: 'Peace of Mind',
        description: '24/7 monitoring ensures your systems are always protected.',
      },
      {
        title: 'Business Continuity',
        description: 'Rapid incident response minimizes downtime and data loss.',
      },
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Comprehensive security audit and risk analysis' },
      { step: '02', title: 'Strategy', description: 'Develop tailored security strategy and policies' },
      { step: '03', title: 'Implementation', description: 'Deploy security measures and monitoring systems' },
      { step: '04', title: 'Monitoring', description: 'Continuous monitoring and threat detection' },
    ],
  },
  'it-consulting': {
    icon: BarChart2,
    title: 'IT Consulting',
    subtitle: 'Strategic Technology Guidance',
    description: 'Strategic IT consulting services to help businesses align their technology investments with business goals. We provide expert guidance on digital transformation and technology strategy.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Digital Transformation',
      'Technology Roadmap',
      'Cost Optimization',
      'Process Automation',
      'Vendor Selection',
      'Change Management',
    ],
    benefits: [
      {
        title: 'Strategic Alignment',
        description: 'Ensure technology investments support business objectives.',
      },
      {
        title: 'Cost Savings',
        description: 'Optimize IT spending and eliminate wasteful expenses.',
      },
      {
        title: 'Competitive Advantage',
        description: 'Leverage technology to gain market advantage.',
      },
      {
        title: 'Expert Insights',
        description: 'Benefit from our 25+ years of industry experience.',
      },
    ],
    process: [
      { step: '01', title: 'Analysis', description: 'Assess current IT landscape and business goals' },
      { step: '02', title: 'Planning', description: 'Develop comprehensive technology roadmap' },
      { step: '03', title: 'Execution', description: 'Implement recommendations and initiatives' },
      { step: '04', title: 'Review', description: 'Monitor progress and adjust strategy as needed' },
    ],
  },
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  // Force component to re-render when serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-primary-dark mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary-pink font-bold hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

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
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-primary-pink/20 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary-pink" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
              {service.title}
            </h1>
            <p className="text-primary-pink text-lg font-bold uppercase tracking-wider mb-4">
              {service.subtitle}
            </p>
            <p className="text-gray-300 text-base font-medium leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[450px] bg-gradient-to-br from-primary-pink/10 to-primary-teal/10 overflow-hidden shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full"><div class="h-24 w-24 bg-primary-pink/20 rounded-full flex items-center justify-center"><svg class="h-12 w-12 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div></div>`;
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary-pink/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-pink/10 px-3 py-1.5 mb-4">
                <div className="h-1.5 w-1.5 bg-primary-pink rounded-full" />
                <span className="text-primary-pink font-bold uppercase tracking-wider text-xs">
                  Key Features
                </span>
              </div>
              <h2 className="text-3xl font-black text-primary-dark leading-tight mb-5">
                What We Offer
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-pink mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-pink/10 px-3 py-1.5 mb-3">
              <div className="h-1.5 w-1.5 bg-primary-pink rounded-full" />
              <span className="text-primary-pink font-bold uppercase tracking-wider text-xs">
                Benefits
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-primary-dark leading-tight">
              Why Choose This Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-lg font-black text-primary-dark mb-2">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-pink/10 px-3 py-1.5 mb-3">
              <div className="h-1.5 w-1.5 bg-primary-pink rounded-full" />
              <span className="text-primary-pink font-bold uppercase tracking-wider text-xs">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-primary-dark leading-tight">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-5">
                  <div className="h-16 w-16 mx-auto bg-primary-pink/10 flex items-center justify-center text-primary-pink font-black text-xl transition-all duration-300 group-hover:bg-primary-pink group-hover:text-white">
                    {step.step}
                  </div>
                  {idx < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-200" />
                  )}
                </div>
                <h4 className="text-base font-black text-primary-dark mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm font-medium">{step.description}</p>
              </motion.div>
            ))}
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
              Let's discuss how {service.title.toLowerCase()} can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-primary-pink px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all duration-300">
                Request A Quote <ArrowRight className="h-4 w-4 inline ml-2" />
              </button>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-white hover:text-primary-pink transition-all duration-300 inline-block"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
