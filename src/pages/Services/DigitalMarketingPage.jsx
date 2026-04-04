import React from 'react';
import { TrendingUp, Megaphone, ArrowRight, CheckCircle, BarChart, Users, Search } from 'lucide-react';
import QuoteModal from '../../components/Modal/QuoteModal';

const DigitalMarketingPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);

  const features = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic with proven SEO strategies.'
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all major social platforms with engaging content.'
    },
    {
      icon: TrendingUp,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns on Google and social media.'
    },
    {
      icon: Users,
      title: 'Content Marketing',
      description: 'Compelling content that attracts, engages, and converts your target audience.'
    }
  ];

  const services = [
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
    'Pay-Per-Click (PPC) Advertising',
    'Email Marketing Campaigns',
    'Content Strategy & Creation',
    'Analytics & Reporting',
    'Conversion Rate Optimization'
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-primary-blue pt-32 pb-24">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-[40px] lg:border-[60px] border-white/5 opacity-60" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full border-[35px] lg:border-[50px] border-white/5 opacity-60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-sm font-bold uppercase tracking-wider">IT Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Digital <span className="text-white">Marketing</span>
            </h1>
            
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Boost your online presence and drive measurable results. Our data-driven digital marketing strategies help you reach your target audience and grow your business.
            </p>

            <button onClick={() => setQuoteModalOpen(true)} className="bg-white text-primary-blue px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-xl">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-4">
              Our Marketing <span className="text-white">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-blue hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue mb-6">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-primary-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-base font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-6">
                Complete <span className="text-white">Solutions</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From strategy to execution, we provide comprehensive digital marketing services that deliver results.
              </p>
              <ul className="space-y-4">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-primary-blue shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <BarChart className="h-8 w-8 text-primary-blue" />
                <h3 className="text-2xl font-bold text-primary-dark">Results Driven</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We focus on measurable outcomes, providing detailed analytics and regular reports to track your campaign performance.
              </p>
              <ul className="space-y-3">
                {['Custom strategy development', 'Data-driven decision making', 'Transparent reporting', 'Continuous optimization'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-blue">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <button onClick={() => setQuoteModalOpen(true)} className="bg-white text-primary-blue px-10 py-4 font-black rounded-full uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all inline-flex items-center gap-2">
              Start Marketing <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default DigitalMarketingPage;
