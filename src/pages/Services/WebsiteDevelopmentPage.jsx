import React from 'react';
import { Code, Zap, ArrowRight, CheckCircle, Monitor, Layout, ShoppingCart } from 'lucide-react';
import QuoteModal from '../../components/Modal/QuoteModal';

const WebsiteDevelopmentPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);

  const features = [
    {
      icon: Monitor,
      title: 'Responsive Design',
      description: 'Websites that look and perform flawlessly on all devices - desktop, tablet, and mobile.'
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive and engaging user experiences.'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with secure payment gateways and inventory management.'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored web applications built with modern technologies for your specific needs.'
    }
  ];

  const technologies = [
    'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'PHP', 'WordPress', 'Shopify', 'Magento'
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
    { step: '02', title: 'Design', desc: 'Creating wireframes and visual designs' },
    { step: '03', title: 'Development', desc: 'Building with clean, efficient code' },
    { step: '04', title: 'Launch', desc: 'Testing, deployment, and ongoing support' }
  ];

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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-sm font-bold uppercase tracking-wider">IT Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Website <span className="text-white">Development</span>
            </h1>
            
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Create stunning, high-performance websites that drive results. From corporate sites to complex web applications, we deliver digital experiences that engage and convert.
            </p>

            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-primary-blue px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-xl"
            >
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-4">
              Our Web Development <span className="text-white">Services</span>
            </h2>
            <p className="text-gray-600">
              We build websites that are fast, secure, scalable, and designed to achieve your business goals.
            </p>
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

      {/* Technologies Section */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-6">
                Technologies We <span className="text-white">Use</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We leverage the latest technologies and frameworks to build modern, scalable web solutions that meet your business needs.
              </p>
              <ul className="space-y-3">
                {['Modern JavaScript frameworks', 'Progressive Web Apps (PWA)', 'API integrations', 'Cloud deployment', 'SEO optimization'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-primary-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 bg-white rounded-full text-gray-700 font-bold shadow-sm hover:shadow-md hover:text-primary-blue transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-4">
              Our Development <span className="text-white">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="text-6xl font-black text-primary-blue/20 absolute -top-4 -left-2">
                  {item.step}
                </span>
                <div className="relative pt-8">
                  <h3 className="text-2xl font-black text-primary-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-base font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-white/80 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-primary-blue px-10 py-4 font-black rounded-full uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all inline-flex items-center gap-2"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default WebsiteDevelopmentPage;
