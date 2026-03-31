import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, ArrowRight, CheckCircle, Zap, MessageCircle, Globe, Calendar, ChevronDown, HeadphonesIcon } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. Our team will get back to you within 24 hours.' });
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', service: '', message: '' });
    
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  const services = [
    'Cloud Computing',
    'Cybersecurity',
    'Data Infrastructure',
    'Product Engineering',
    'IT Consulting',
    'Custom Development',
    'Other',
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['EcomSyncify Technologies LLP P-53 / VK Residency Haldharu, Surat, Gujarat, India - 394305'],
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      hoverColor: 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700',
    },
    {
      icon: Phone,
      title: 'Call Us Directly',
      details: ['+91 7275646711'],
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      hoverColor: 'hover:bg-gradient-to-br hover:from-pink-600 hover:to-pink-700',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@ecomsyncify .com'],
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      hoverColor: 'hover:bg-gradient-to-br hover:from-teal-600 hover:to-teal-700',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      hoverColor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-700',
    },
  ];

  const faqs = [
    {
      question: 'What services does EcomSyncify  provide?',
      answer: 'We offer comprehensive IT solutions including cloud integration, cybersecurity, data infrastructure, product engineering, and IT consulting services. Our solutions are tailored to meet your specific business needs and goals.',
    },
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'Our support team typically responds within 2-4 hours during business hours. For critical issues, we offer 24/7 emergency support for our premium clients with guaranteed response times.',
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. We offer flexible engagement models and can tailor solutions to fit your budget and requirements.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while larger enterprise solutions may take 3-6 months. We provide detailed timelines and milestones during the consultation phase.',
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, we provide comprehensive maintenance and support packages including regular updates, monitoring, security patches, and technical assistance. Our SLAs ensure your systems remain optimal and secure.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'We specialize in seamless integrations with existing infrastructure. Our team has experience with major platforms and can ensure smooth data flow and compatibility across your entire technology stack.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] pt-32 pb-24">
        {/* Decorative Circle Left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-[40px] lg:border-[60px] border-[#2a2a2a] opacity-60" />
        </div>
        
        {/* Decorative Circle Right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full border-[35px] lg:border-[50px] border-[#2a2a2a] opacity-60" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-teal/20 px-5 py-2.5 rounded-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary-teal animate-pulse" />
              <span className="text-primary-teal text-sm font-bold uppercase tracking-wider">Get In Touch</span>
            </motion.div>
            
            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Contact Us For<br />
              <span className="text-primary-teal">IT Solutions</span>
            </h1>
            
            <p className="text-gray-300 text-base font-medium leading-relaxed">
              Have questions about our IT solutions? Need a custom quote? Our experts are ready to help you transform your business with cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white -mt-1">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="inline-flex h-16 w-16 items-center justify-center mb-6 bg-gray-50 group-hover:bg-white/20 transition-all duration-300 rounded-2xl shadow-lg">
                      <Icon className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-black text-primary-dark mb-4 group-hover:text-white transition-colors duration-300">
                      {info.title}
                    </h3>
                    
                    {info.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-gray-600 text-sm font-medium leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[3px] w-10 bg-primary-teal" />
                  <span className="text-primary-teal font-bold uppercase tracking-widest text-sm">
                    Send Message
                  </span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-black text-primary-dark leading-tight mb-4">
                  Let's Start a <span className="text-primary-teal">Conversation</span>
                </h2>
                
                <p className="text-gray-600 leading-relaxed font-medium mb-8">
                  Fill out the form below and our team will get back to you within 24 hours. We're here to help with all your IT needs.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-primary-dark mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full border-2 border-gray-100 py-4 pl-12 pr-4 text-sm rounded-xl focus:outline-none focus:border-primary-teal transition-colors bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-primary-dark mb-2 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full border-2 border-gray-100 py-4 pl-12 pr-4 text-sm rounded-xl focus:outline-none focus:border-primary-teal transition-colors bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-primary-dark mb-2 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full border-2 border-gray-100 py-4 pl-12 pr-4 text-sm rounded-xl focus:outline-none focus:border-primary-teal transition-colors bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-primary-dark mb-2 uppercase tracking-wider">
                        Company
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Name"
                          className="w-full border-2 border-gray-100 py-4 pl-12 pr-4 text-sm rounded-xl focus:outline-none focus:border-primary-teal transition-colors bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-primary-dark mb-2 uppercase tracking-wider">
                        Service Interested *
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full border-2 border-gray-100 py-4 px-4 text-sm rounded-xl focus:outline-none focus:border-primary-teal transition-colors bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select a Service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-primary-dark mb-2 uppercase tracking-wider">
                        Subject *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help?"
                          className="w-full border-2 border-gray-100 py-4 pl-12 pr-4 text-sm rounded-xl focus:outline-none focus:border-primary-teal transition-colors bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary-dark mb-2 uppercase tracking-wider">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your project, requirements, or questions..."
                      className="w-full border-2 border-gray-100 py-4 px-4 text-sm rounded-xl focus:outline-none focus:border-primary-teal transition-colors resize-none bg-gray-50 focus:bg-white"
                    />
                  </div>

                  {formStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-5 rounded-xl ${
                        formStatus.type === 'success'
                          ? 'bg-green-50 text-green-700 border-2 border-green-200'
                          : 'bg-red-50 text-red-700 border-2 border-red-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {formStatus.type === 'success' && <CheckCircle className="h-5 w-5 shrink-0" />}
                        <p className="text-sm font-semibold">{formStatus.message}</p>
                      </div>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-dark to-primary-teal text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-primary-teal/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-primary-dark to-[#2a2a4a] p-8 rounded-3xl text-white relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-teal/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-primary-teal rounded-2xl flex items-center justify-center">
                      <HeadphonesIcon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black">Quick Contact</h3>
                      <p className="text-gray-400 text-sm">Response within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    <a href="tel:5003692580" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group">
                      <div className="w-12 h-12 bg-primary-teal rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Call Us Now</p>
                        <p className="text-lg font-black group-hover:text-primary-teal transition-colors">+91 7275646711</p>
                      </div>
                    </a>

                    <a href="mailto:info@EcomSyncify .com" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group">
                      <div className="w-12 h-12 bg-primary-teal rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Email Us</p>
                        <p className="text-lg font-black group-hover:text-primary-teal transition-colors">support@ecomsyncify .com</p>
                      </div>
                    </a>

                    <a href="#" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group">
                      <div className="w-12 h-12 bg-primary-teal rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Live Chat</p>
                        <p className="text-lg font-black group-hover:text-primary-teal transition-colors">Start Chat</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              {/* <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EcomSyncify  Location"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-bold text-primary-dark">📍 New York, NY</p>
                </div>
              </div> */}

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-black text-primary-dark mb-5 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary-teal" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', available: true },
                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM', available: true },
                    { day: 'Sunday', hours: 'Closed', available: false },
                  ].map((schedule, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
                    >
                      <span className="text-sm font-semibold text-primary-dark">
                        {schedule.day}
                      </span>
                      <span className={`text-sm font-bold ${schedule.available ? 'text-green-600' : 'text-red-500'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[3px] w-10 bg-primary-teal" />
              <span className="text-primary-teal font-bold uppercase tracking-widest text-sm">FAQ</span>
              <div className="h-[3px] w-10 bg-primary-teal" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-primary-dark leading-tight">
              Frequently Asked<br />
              <span className="text-primary-teal">Questions</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">Can't find what you're looking for? Reach out to our team directly.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h4 className="text-lg font-bold text-primary-dark pr-4 flex items-start gap-3">
                    <span className="text-primary-teal shrink-0 font-black">Q{idx + 1}.</span>
                    {faq.question}
                  </h4>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openFaq === idx ? 'bg-primary-teal text-white rotate-180' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed font-medium pl-8">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      
    </>
  );
};

export default ContactPage;
