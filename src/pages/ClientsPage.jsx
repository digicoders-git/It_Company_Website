import React from 'react';
import { ArrowRight, Building2, Landmark, Stethoscope, ShoppingBag, Truck, GraduationCap, Factory } from 'lucide-react';
import QuoteModal from '../components/Modal/QuoteModal';

const industries = [
  {
    icon: Building2,
    title: 'Enterprise',
    description: 'Large-scale solutions for Fortune 500 companies and enterprise organizations.',
    clients: ['TechCorp Global', 'Enterprise Solutions Inc', 'Business Dynamics']
  },
  {
    icon: Landmark,
    title: 'Finance & Banking',
    description: 'Secure and compliant solutions for financial institutions and banks.',
    clients: ['Global Finance Bank', 'Secure Investments', 'Capital Trust']
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'HIPAA-compliant technology solutions for healthcare providers.',
    clients: ['MedCare Systems', 'HealthFirst Network', 'LifeCare Hospitals']
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    description: 'Digital transformation for retail businesses and online stores.',
    clients: ['ShopMax Retail', 'Fashion Forward', 'E-Shop Global']
  },
  {
    icon: Truck,
    title: 'Logistics & Transport',
    description: 'Efficient solutions for logistics and transportation companies.',
    clients: ['FastTrack Logistics', 'Global Transport Co', 'Swift Delivery']
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Innovative EdTech solutions for educational institutions.',
    clients: ['EduTech Institute', 'Learning Academy', 'Knowledge Hub']
  }
];

const stats = [
  { value: '500+', label: 'Clients Worldwide' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Countries Served' },
  { value: '15+', label: 'Years Experience' }
];

const ClientsPage = () => {
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
              <span className="text-primary-teal text-sm font-semibold uppercase tracking-wider">Our Clients</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Trusted by Industry <span className="text-primary-teal">Leaders</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We partner with businesses across various industries to deliver innovative IT solutions that drive growth and success.
            </p>

            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="btn-primary inline-flex"
            >
              Work With Us <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-teal">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Industries We <span className="text-primary-teal">Serve</span>
            </h2>
            <p className="text-gray-600">
              We have experience working across diverse industries, delivering tailored solutions for each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-teal/10 rounded-xl flex items-center justify-center text-primary-teal mb-6">
                  <industry.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{industry.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500 mb-2">Key Clients:</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.clients.map((client, cIdx) => (
                      <span key={cIdx} className="text-xs bg-white px-3 py-1 rounded-full text-gray-600">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="text-primary-teal text-6xl font-serif mb-6">"</div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                EcomSyncify  transformed our digital infrastructure completely. Their team's expertise and dedication helped us achieve 40% growth in operational efficiency. Highly recommended for any business looking for reliable IT partners.
              </p>
              <div>
                <div className="font-bold text-primary-dark">Michael Chen</div>
                <div className="text-gray-500 text-sm">CTO, TechCorp Global</div>
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
              Join Our Growing Client Base
            </h2>
            <p className="text-white/80 mb-8">
              Let's work together to achieve your business goals with innovative technology solutions.
            </p>
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-primary-teal px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default ClientsPage;
