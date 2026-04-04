import React from 'react';
import { ArrowRight, Building2, Landmark, Stethoscope, ShoppingBag, Truck, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
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
              <span className="text-white text-sm font-bold uppercase tracking-wider">Our Clients</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Trusted by Industry <span className="text-white">Leaders</span>
            </h1>
            
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              We partner with businesses across various industries to deliver innovative IT solutions that drive growth and success.
            </p>

            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-primary-blue px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-xl"
            >
              Work With Us <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group text-center bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary-blue/10 hover:border-primary-blue"
              >
                <div className="text-5xl lg:text-6xl font-black text-primary-blue mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-sm font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-4">
              <div className="h-1.5 w-1.5 bg-primary-blue rounded-full" />
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                Industries
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-4">
              Industries We <span className="text-primary-blue">Serve</span>
            </h2>
            <p className="text-gray-600 text-base font-medium">
              We have experience working across diverse industries, delivering tailored solutions for each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-primary-blue"
              >
                <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all group-hover:scale-110">
                  <industry.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">{industry.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">{industry.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Key Clients:</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.clients.map((client, cIdx) => (
                      <span key={cIdx} className="text-xs bg-primary-blue/5 px-3 py-1.5 rounded-full text-gray-700 font-medium border border-primary-blue/10">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-blue to-[#0d2050] rounded-2xl p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="text-white text-6xl font-serif mb-6">"</div>
                <p className="text-white/90 text-xl leading-relaxed mb-8 font-medium">
                  EcomSyncify transformed our digital infrastructure completely. Their team's expertise and dedication helped us achieve 40% growth in operational efficiency. Highly recommended for any business looking for reliable IT partners.
                </p>
                <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-black text-xl">MC</span>
                  </div>
                  <div>
                    <div className="font-black text-white text-lg">Michael Chen</div>
                    <div className="text-white/70 text-sm font-medium">CTO, TechCorp Global</div>
                  </div>
                </div>
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
              Join Our Growing Client Base
            </h2>
            <p className="text-gray-600 text-lg font-medium mb-10">
              Let's work together to achieve your business goals with innovative technology solutions.
            </p>
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-primary-blue text-white px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default ClientsPage;
