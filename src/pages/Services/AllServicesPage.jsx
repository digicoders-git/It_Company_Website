import React from 'react';
import { ArrowRight, Code, Cloud, Shield, Zap, Database, Cpu, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/Modal/QuoteModal';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Create stunning, high-performance websites that drive results and engage users.',
    link: '/services/website-development'
  },
  {
    icon: Cpu,
    title: 'Mobile App Development',
    description: 'Transform your ideas into powerful mobile applications for iOS and Android.',
    link: '/services/mobile-app-development'
  },
  {
    icon: Database,
    title: 'Software Development',
    description: 'Custom software solutions built to streamline operations and drive growth.',
    link: '/services/software-development'
  },
  {
    icon: LineChart,
    title: 'Digital Marketing',
    description: 'Boost your online presence with data-driven marketing strategies.',
    link: '/services/digital-marketing'
  }
];

const AllServicesPage = () => {
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
              <span className="text-primary-teal text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Our <span className="text-primary-teal">Services</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We provide comprehensive IT solutions to help your business grow and succeed in the digital age.
            </p>

            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="btn-primary inline-flex"
            >
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-teal/10 rounded-xl flex items-center justify-center text-primary-teal mb-6 group-hover:bg-primary-teal group-hover:text-white transition-all">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary-teal font-semibold text-sm">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-teal">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-white/80 mb-8">
              Let's discuss your project and find the best solution for your business.
            </p>
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-primary-teal px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default AllServicesPage;
