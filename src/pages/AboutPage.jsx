import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, Globe, ArrowRight, Briefcase, Target, Zap } from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: 'John Anderson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
      bio: 'Visionary leader with 20+ years in IT industry',
    },
    {
      name: 'Sarah Mitchell',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
      bio: 'Tech innovator specializing in cloud solutions',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Services',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
      bio: 'Expert in enterprise IT solutions',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
      bio: 'Creative strategist for digital transformation',
    },
  ];

  const skills = [
    { name: 'Cloud Infrastructure', percentage: 95 },
    { name: 'Cybersecurity', percentage: 92 },
    { name: 'Data Analytics', percentage: 88 },
    { name: 'Software Development', percentage: 96 },
    { name: 'IT Consulting', percentage: 90 },
    { name: 'Business Solutions', percentage: 94 },
  ];

  const timeline = [
    {
      year: '2001',
      title: 'Company Founded',
      description: 'EcomSyncify was established with a vision to revolutionize IT solutions in the industry.',
    },
    {
      year: '2008',
      title: 'Global Expansion',
      description: 'Opened offices in 15 countries across Europe, Asia, and Americas.',
    },
    {
      year: '2015',
      title: 'Industry Recognition',
      description: 'Awarded Best IT Solutions Provider by International Tech Association.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched AI-powered solutions and expanded cloud services portfolio.',
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Became top 3 IT solutions provider globally with 1000+ enterprise clients.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge IT solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients to achieve their business goals.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality services and support.',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'Quick adaptation to market changes and emerging technologies.',
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden bg-primary-blue pt-32 pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full border-[50px] border-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-[40px] border-white -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
              <span className="text-white font-bold uppercase tracking-wider text-xs">
                About EcomSyncify
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Transforming Business Through<br />
              <span className="text-white">IT Innovation</span>
            </h1>
            <p className="text-white/90 text-lg font-medium leading-relaxed">
              For over 25 years, EcomSyncify has been at the forefront of IT solutions, helping businesses worldwide achieve digital transformation and sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&q=80"
                alt="Our Story"
                className="w-full h-[500px] object-cover shadow-2xl rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary-blue/30 rounded-lg" />
              <div className="absolute -top-6 -left-6 w-40 h-40 border-4 border-primary-blue/30 rounded-lg" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-4">
                <div className="h-1.5 w-1.5 bg-primary-blue rounded-full" />
                <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                  Our Journey
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-primary-dark leading-tight mb-5">
                Building Trust Through<br />
                <span className="text-primary-blue">Excellence</span>
              </h2>

              <p className="text-gray-600 text-base leading-relaxed font-medium mb-4">
                Founded in 2001, EcomSyncify started with a simple mission: to provide world-class IT solutions that empower businesses to thrive in the digital age. What began as a small team of passionate technologists has grown into a global powerhouse serving over 1000 enterprise clients across 50+ countries.
              </p>

              <p className="text-gray-600 text-base leading-relaxed font-medium mb-6">
                Our success is built on three pillars: innovation, integrity, and customer-centricity. We don't just provide IT services; we become strategic partners in our clients' digital transformation journey.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Pioneered cloud integration solutions in 2008',
                  'Recognized as Industry Leader by Tech Association',
                  'Expanded to 25+ offices globally',
                  'Served 1000+ enterprise clients successfully',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-blue mt-0.5" />
                    <span className="text-gray-700 font-medium text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <button className="btn-primary shadow-lg shadow-primary-blue/30">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-4">
              <div className="h-1.5 w-1.5 bg-primary-blue rounded-full" />
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                Our Foundation
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-primary-dark leading-tight">
              Mission, Vision &<br />
              <span className="text-primary-blue">Values</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-black uppercase tracking-wider text-xs transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary-blue text-white shadow-lg shadow-primary-blue/30'
                    : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-primary-blue hover:text-primary-blue'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            {activeTab === 'mission' && (
              <div className="bg-white p-10 shadow-xl rounded-lg text-center">
                <h3 className="text-2xl font-black text-primary-dark mb-4">Our Mission</h3>
                <p className="text-gray-600 text-base leading-relaxed font-medium mb-4">
                  To empower businesses worldwide by delivering innovative, reliable, and scalable IT solutions that drive digital transformation, enhance operational efficiency, and create sustainable competitive advantages in an ever-evolving technological landscape.
                </p>
                <div className="h-1 w-16 bg-primary-blue mx-auto" />
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="bg-white p-10 shadow-xl rounded-lg text-center">
                <h3 className="text-2xl font-black text-primary-dark mb-4">Our Vision</h3>
                <p className="text-gray-600 text-base leading-relaxed font-medium mb-4">
                  To be the globally recognized leader in IT solutions and digital transformation, known for our unwavering commitment to innovation, excellence, and customer success. We envision a world where technology seamlessly enables businesses to achieve their boldest ambitions.
                </p>
                <div className="h-1 w-16 bg-primary-blue mx-auto" />
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg hover:-translate-y-1"
                    >
                      <div className="h-14 w-14 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary-blue" />
                      </div>
                      <h4 className="text-xl font-black text-primary-dark mb-3">{value.title}</h4>
                      <p className="text-gray-600 text-base leading-relaxed font-medium">{value.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-4">
              <div className="h-1.5 w-1.5 bg-primary-blue rounded-full" />
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                Leadership Team
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-primary-dark leading-tight">
              Meet Our<br />
              <span className="text-primary-blue">Expert Team</span>
            </h2>
            <p className="mt-4 text-gray-600 font-medium text-base">
              Experienced professionals dedicated to delivering excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group text-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative mb-4 overflow-hidden rounded-t-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-black text-primary-dark mb-2">{member.name}</h4>
                  <p className="text-primary-blue font-bold text-sm uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm font-medium">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-[#F5F7F9]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-4">
              <div className="h-1.5 w-1.5 bg-primary-blue rounded-full" />
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                Our Expertise
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-primary-dark leading-tight">
              Technical<br />
              <span className="text-primary-blue">Expertise</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="mb-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-black text-primary-dark">{skill.name}</h4>
                  <span className="text-primary-blue font-black text-lg">{skill.percentage}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-blue to-[#0d2050] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-4">
              <div className="h-1.5 w-1.5 bg-primary-blue rounded-full" />
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                Our History
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-primary-dark leading-tight">
              Journey Through<br />
              <span className="text-primary-blue">Time</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex gap-6 mb-10 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white p-8 hover:shadow-2xl transition-all duration-300 rounded-lg border-l-4 border-primary-blue">
                    <span className="text-primary-blue font-black text-2xl">{item.year}</span>
                    <h4 className="text-xl font-black text-primary-dark mt-3 mb-3">{item.title}</h4>
                    <p className="text-gray-600 font-medium text-base">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 bg-primary-blue rounded-full border-4 border-white shadow-xl" />
                  {idx !== timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-primary-blue to-transparent mt-2" />
                  )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-blue">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, count: '25+', label: 'Years Experience' },
              { icon: Users, count: '1000+', label: 'Happy Clients' },
              { icon: Briefcase, count: '960+', label: 'Projects Done' },
              { icon: Globe, count: '50+', label: 'Countries' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-4xl font-black text-white mb-2">{stat.count}</h4>
                  <p className="text-white/80 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-primary-dark leading-tight mb-6">
              Ready To Partner With Us?
            </h2>
            <p className="text-gray-600 text-lg font-medium mb-10">
              Let's discuss how EcomSyncify can help transform your business through innovative IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-primary-blue text-white px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:shadow-xl transition-all duration-300">
                Get Free Consultation <ArrowRight className="h-4 w-4 inline ml-2" />
              </button>
              <a
                href="tel:5003692580"
                className="border-2 border-primary-blue text-primary-blue px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
