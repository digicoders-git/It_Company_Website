import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, Briefcase, MessageSquare, CheckCircle } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Data Infrastructure',
    'IT Cloud Integration',
    'IT Startup Projects',
    'Product Engineering',
    'Business Security',
    'IT Consulting',
    'Other',
  ];

  const budgets = [
    'Less than $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'More than $100,000',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your quote request has been submitted successfully. Our team will contact you within 24 hours.',
      });
      setIsSubmitting(false);

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
        });
        setFormStatus({ type: '', message: '' });
        onClose();
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white w-full max-w-2xl shadow-2xl relative max-h-[95vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-primary-dark p-5 relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary-teal/10 translate-x-1/3 -translate-y-1/3" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-white mb-1">
                    Get A Free Quote
                  </h2>
                  <p className="text-gray-300 font-medium text-sm">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Form - Scrollable */}
              <div className="p-5 overflow-y-auto flex-1">
                {formStatus.type === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center bg-green-100 rounded-full mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-black text-primary-dark mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-gray-600 font-medium text-sm max-w-md mx-auto">
                      {formStatus.message}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-primary-dark mb-1 uppercase tracking-wider">
                          <User className="h-3 w-3 text-primary-teal" />
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full border-2 border-gray-200 py-2 px-3 text-sm focus:outline-none focus:border-primary-teal transition-colors"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-primary-dark mb-1 uppercase tracking-wider">
                          <Mail className="h-3 w-3 text-primary-teal" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full border-2 border-gray-200 py-2 px-3 text-sm focus:outline-none focus:border-primary-teal transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-primary-dark mb-1 uppercase tracking-wider">
                          <Phone className="h-3 w-3 text-primary-teal" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full border-2 border-gray-200 py-2 px-3 text-sm focus:outline-none focus:border-primary-teal transition-colors"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-primary-dark mb-1 uppercase tracking-wider">
                          <Briefcase className="h-3 w-3 text-primary-teal" />
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full border-2 border-gray-200 py-2 px-3 text-sm focus:outline-none focus:border-primary-teal transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-primary-dark mb-1 uppercase tracking-wider block">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full border-2 border-gray-200 py-2 px-3 text-sm focus:outline-none focus:border-primary-teal transition-colors bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, idx) => (
                            <option key={idx} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-primary-dark mb-1 uppercase tracking-wider block">
                          Project Budget *
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full border-2 border-gray-200 py-2 px-3 text-sm focus:outline-none focus:border-primary-teal transition-colors bg-white"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map((budget, idx) => (
                            <option key={idx} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-bold text-primary-dark mb-1 uppercase tracking-wider">
                        <MessageSquare className="h-3 w-3 text-primary-teal" />
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="3"
                        placeholder="Tell us about your project requirements..."
                        className="w-full border-2 border-gray-200 py-2 px-3 text-sm focus:outline-none focus:border-primary-teal transition-colors resize-none"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs text-gray-500 font-medium">
                        * Required fields
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-primary shadow-lg shadow-primary-teal/30 ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="inline-block animate-spin mr-2">⏳</span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Request <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Footer */}
              <div className="bg-[#F5F7F9] px-5 py-2.5 border-t border-gray-200 shrink-0">
                <p className="text-xs text-gray-600 font-medium text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-primary-teal font-bold hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
