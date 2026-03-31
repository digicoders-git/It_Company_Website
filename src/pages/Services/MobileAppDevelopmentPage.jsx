import React from 'react';
import { ArrowRight, CheckCircle, Apple, Smartphone, Layers, Zap } from 'lucide-react';
import QuoteModal from '../../components/Modal/QuoteModal';

const MobileAppDevelopmentPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);

  const features = [
    {
      icon: Apple,
      title: 'iOS Development',
      description: 'Native iOS apps built with Swift for iPhone and iPad with seamless performance.'
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Native Android apps using Kotlin with Material Design principles.'
    },
    {
      icon: Layers,
      title: 'Cross-Platform',
      description: 'Build once, deploy everywhere with React Native and Flutter solutions.'
    },
    {
      icon: Zap,
      title: 'App Optimization',
      description: 'Performance tuning and optimization for speed and battery efficiency.'
    }
  ];

  const technologies = [
    'Swift', 'Kotlin', 'React Native', 'Flutter', 'iOS SDK', 'Android SDK', 'Firebase', 'AWS Amplify'
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#1a1a1a] pt-32 pb-24">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-[40px] lg:border-[60px] border-[#2a2a2a] opacity-60" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full border-[35px] lg:border-[50px] border-[#2a2a2a] opacity-60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-teal/20 px-5 py-2.5 rounded-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-teal animate-pulse" />
              <span className="text-primary-teal text-sm font-semibold uppercase tracking-wider">IT Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Mobile App <span className="text-primary-teal">Development</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Transform your ideas into powerful mobile applications. We build native and cross-platform apps that deliver exceptional user experiences on iOS and Android.
            </p>

            <button onClick={() => setQuoteModalOpen(true)} className="btn-primary inline-flex">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Mobile App <span className="text-primary-teal">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-teal/10 rounded-xl flex items-center justify-center text-primary-teal mb-6">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-6">
                Technologies We <span className="text-primary-teal">Use</span>
              </h2>
              <div className="flex flex-wrap gap-3 mt-8">
                {technologies.map((tech, idx) => (
                  <span key={idx} className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <ul className="space-y-4">
                {['Native iOS & Android development', 'Cross-platform solutions', 'UI/UX design for mobile', 'App store optimization', 'Maintenance & support'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-primary-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-teal">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Have an App Idea?
            </h2>
            <button onClick={() => setQuoteModalOpen(true)} className="bg-white text-primary-teal px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-white transition-all inline-flex items-center gap-2">
              Let's Talk <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default MobileAppDevelopmentPage;
