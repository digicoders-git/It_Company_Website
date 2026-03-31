import React from 'react';
import { ArrowRight, Cloud, Shield, Database, Cpu, Globe, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <section className="relative overflow-hidden bg-[#1a1a1a] pt-32 pb-24">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-[40px] lg:border-[60px] border-[#2a2a2a] opacity-60" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full border-[35px] lg:border-[50px] border-[#2a2a2a] opacity-60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-teal/20 px-5 py-2.5 rounded-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-teal animate-pulse" />
              <span className="text-primary-teal text-sm font-semibold uppercase tracking-wider">Our Products</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Powerful Solutions for Your <span className="text-primary-teal">Business</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Discover our suite of enterprise-grade products designed to accelerate your digital transformation and drive business growth.
            </p>

            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="btn-primary inline-flex"
            >
              Request Demo <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Featured <span className="text-primary-teal">Products</span>
            </h2>
            <p className="text-gray-600">
              Explore our comprehensive range of products built to solve complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-teal/10 rounded-xl flex items-center justify-center text-primary-teal mb-6 group-hover:bg-primary-teal group-hover:text-white transition-all">
                  <product.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-teal transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setQuoteModalOpen(true)}
                  className="text-primary-teal font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Why Choose Our <span className="text-primary-teal">Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-14 h-14 bg-primary-teal/10 rounded-xl flex items-center justify-center text-primary-teal mx-auto mb-6">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-6">
                Seamless <span className="text-primary-teal">Integrations</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our products integrate seamlessly with your existing tech stack. Connect with popular tools and platforms to create a unified workflow.
              </p>
              <ul className="space-y-4">
                {['Slack, Microsoft Teams, Discord', 'Salesforce, HubSpot, Zoho', 'AWS, Azure, Google Cloud', 'Jira, Trello, Asana'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary-teal/10 flex items-center justify-center text-primary-teal text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10">
              <div className="grid grid-cols-3 gap-6">
                {['Slack', 'Salesforce', 'AWS', 'Jira', 'Azure', 'HubSpot'].map((logo, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 flex items-center justify-center h-16 shadow-sm">
                    <span className="text-gray-400 font-semibold text-sm">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-teal">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 mb-8">
              Get started with our products today and experience the difference.
            </p>
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-primary-teal px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all inline-flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default ProductsPage;
