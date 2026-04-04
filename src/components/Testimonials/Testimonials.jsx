import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Johnson',
    role: 'CEO, TechCorp Inc.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    text: 'EcomSyncify  transformed our entire IT infrastructure. Their team was professional, knowledgeable, and delivered beyond our expectations. Highly recommend their services to any business looking to scale.',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'CTO, DataFlow Solutions',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    text: 'The cloud integration project was completed on time and within budget. EcomSyncify \'s expertise in IT solutions is unmatched. Our team productivity increased by 40% after their implementation.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    role: 'Director, StartupHub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    text: 'Working with EcomSyncify  was a game-changer for our startup. They understood our vision and built exactly what we needed. Their support team is always available and incredibly responsive.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-[#F5F7F9] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-blue" />
              <span className="text-primary-blue font-semibold uppercase tracking-widest text-sm">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight mb-6">
              What Our Clients<br />
              <span className="text-primary-blue">Say About Us</span>
            </h2>
            <p className="text-gray-500 font-normal leading-relaxed mb-10">
              Don't just take our word for it. Here's what our clients have to say about working with EcomSyncify  IT Solutions.
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="h-14 w-14 flex items-center justify-center border-2 border-gray-200 text-gray-400 hover:border-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                className="h-14 w-14 flex items-center justify-center border-2 border-primary-blue bg-primary-blue text-white hover:bg-transparent hover:text-primary-blue transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <span className="text-gray-400 font-semibold text-sm ml-2">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right - Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-10 shadow-xl relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-5 -left-5 h-14 w-14 bg-primary-blue flex items-center justify-center">
                  <Quote className="h-7 w-7 text-white" fill="white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill="#facc15" />
                  ))}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed font-normal mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="h-14 w-14 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-primary-dark">{testimonials[current].name}</h4>
                    <p className="text-primary-blue text-sm font-semibold">{testimonials[current].role}</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary-blue to-primary-blue" />
              </motion.div>
            </AnimatePresence>

            {/* Decorative box */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-blue/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
