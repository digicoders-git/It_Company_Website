import React from 'react';
import { ArrowRight, Cloud, Shield, Database, Cpu, Globe, Lock, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import QuoteModal from '../components/Modal/QuoteModal';

const products = [
  {
    icon: Cloud,
    title: 'CloudSync Pro',
    description: 'Enterprise-grade cloud storage and synchronization solution for seamless data management across teams.',
    features: ['Unlimited Storage', 'Real-time Sync', 'Advanced Security', 'API Access']
  },
  {
    icon: Shield,
    title: 'SecureGuard',
    description: 'Comprehensive cybersecurity platform protecting your business from threats and vulnerabilities.',
    features: ['Threat Detection', 'Firewall Management', 'VPN Services', '24/7 Monitoring']
  },
  {
    icon: Database,
    title: 'DataVault',
    description: 'Advanced data management and analytics platform for intelligent business insights.',
    features: ['Data Analytics', 'Backup & Recovery', 'Compliance Tools', 'Visualization']
  },
  {
    icon: Cpu,
    title: 'AICore',
    description: 'AI-powered automation tools to streamline workflows and boost productivity.',
    features: ['Machine Learning', 'Process Automation', 'Smart Analytics', 'Custom Models']
  },
  {
    icon: Globe,
    title: 'WebScale',
    description: 'High-performance web hosting and CDN solution for global reach and speed.',
    features: ['Global CDN', '99.9% Uptime', 'Auto Scaling', 'DDoS Protection']
  },
  {
    icon: Lock,
    title: 'AuthMaster',
    description: 'Identity and access management solution for secure authentication and authorization.',
    features: ['SSO Integration', 'MFA Support', 'Role Management', 'Audit Logs']
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Fast Deployment',
    description: 'Get up and running in minutes with our easy setup process.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption and compliance standards.'
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: '24/7 technical support from our expert team worldwide.'
  }
];

const ProductsPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-blue pt-32 pb-24">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-[40px] lg:border-[60px] border-white/5 opacity-60" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full border-[35px] lg:border-[50px] border-white/5 opacity-60" />
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-sm font-bold uppercase tracking-wider">Our Products</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Powerful Solutions for Your <span className="text-white">Business</span>
            </h1>
            
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Discover our suite of enterprise-grade products designed to accelerate your digital transformation and drive business growth.
            </p>

            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-primary-blue px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-xl"
            >
              Request Demo <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-4">
              <div className="h-1.5 w-1.5 bg-primary-blue rounded-full" />
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                Products
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-4">
              Featured <span className="text-primary-blue">Products</span>
            </h2>
            <p className="text-gray-600 text-base font-medium">
              Explore our comprehensive range of products built to solve complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-primary-blue"
              >
                <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all group-hover:scale-110">
                  <product.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-primary-blue shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setQuoteModalOpen(true)}
                  className="text-primary-blue font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-4">
              <div className="h-1.5 w-1.5 bg-primary-blue rounded-full" />
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                Benefits
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-4">
              Why Choose Our <span className="text-primary-blue">Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue mx-auto mb-6">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-primary-dark mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-base font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-4">
                <div className="h-1.5 w-1.5 bg-primary-blue rounded-full" />
                <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                  Integrations
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-6">
                Seamless <span className="text-primary-blue">Integrations</span>
              </h2>
              <p className="text-gray-600 text-base font-medium mb-8 leading-relaxed">
                Our products integrate seamlessly with your existing tech stack. Connect with popular tools and platforms to create a unified workflow.
              </p>
              <ul className="space-y-4">
                {['Slack, Microsoft Teams, Discord', 'Salesforce, HubSpot, Zoho', 'AWS, Azure, Google Cloud', 'Jira, Trello, Asana'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-8 h-8 rounded-full bg-primary-blue flex items-center justify-center text-white text-sm font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary-blue to-[#0d2050] rounded-2xl p-10 shadow-2xl"
            >
              <div className="grid grid-cols-3 gap-6">
                {['Slack', 'Salesforce', 'AWS', 'Jira', 'Azure', 'HubSpot'].map((logo, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-16 hover:bg-white/20 transition-all"
                  >
                    <span className="text-white font-bold text-sm">{logo}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-primary-dark mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 text-lg font-medium mb-10">
              Get started with our products today and experience the difference.
            </p>
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-primary-blue text-white px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default ProductsPage;
