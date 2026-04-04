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
      <section className="relative overflow-hidden bg-primary-blue pt-32 pb-24">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-[40px] lg:border-[60px] border-white/5 opacity-60" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full border-[35px] lg:border-[50px] border-white/5 opacity-60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-sm font-bold uppercase tracking-wider">What We Offer</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Our <span className="text-white">Services</span>
            </h1>
            
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              We provide comprehensive IT solutions to help your business grow and succeed in the digital age.
            </p>

            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-primary-blue px-8 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-xl"
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
                className="group bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-primary-blue"
              >
                <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all group-hover:scale-110">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4 font-medium">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-primary-dark mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-600 text-lg font-medium mb-8">
              Let's discuss your project and find the best solution for your business.
            </p>
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-primary-blue text-white px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:shadow-xl transition-all inline-flex items-center gap-2"
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
