import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, Scale, AlertCircle, UserCheck, FileText } from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Agreement to Terms',
      content: `Welcome to EcomSyncify. These Terms of Service constitute a legally binding agreement made between you and EcomSyncify IT Solutions ("we," "us," or "our"), concerning your access to and use of our website and services.

By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.`
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: <FileCheck className="h-5 w-5" />,
      content: `EcomSyncify provides IT solutions and services including but not limited to:

• Cloud computing and infrastructure services
• Cybersecurity solutions and consulting
• Data infrastructure and analytics
• Product engineering and development
• IT consulting and strategy
• Technical support and maintenance

We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.`
    },
    {
      id: 'accounts',
      title: 'User Accounts',
      icon: <UserCheck className="h-5 w-5" />,
      content: `When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.

You are responsible for:
• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized access
• Ensuring your account information is up to date

We reserve the right to disable any user account at any time in our sole discretion.`
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property',
      icon: <Scale className="h-5 w-5" />,
      content: `All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of EcomSyncify and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

You may not:
• Reproduce, duplicate, copy, sell, or exploit any portion of the service
• Use our trademarks without express written permission
• Create derivative works based on our content
• Remove any copyright or proprietary notices from our materials

Any unauthorized use terminates the permission or license granted by us.`
    },
    {
      id: 'prohibited',
      title: 'Prohibited Activities',
      icon: <AlertCircle className="h-5 w-5" />,
      content: `You agree not to engage in any of the following prohibited activities:

• Using the service for any illegal purpose or in violation of any laws
• Attempting to interfere with or disrupt our servers or networks
• Transmitting any viruses, malware, or malicious code
• Attempting to gain unauthorized access to any portion of the service
• Harassing, abusing, or harming another person
• Collecting or harvesting any personally identifiable information
• Impersonating another person or entity
• Engaging in any activity that could damage, disable, or impair our services`
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      content: `For paid services, you agree to provide current, complete, and accurate purchase and account information. All payments are due according to the terms specified in your service agreement or invoice.

• Prices are subject to change without notice
• All fees are exclusive of taxes, which you are responsible for paying
• Refunds are handled according to our Refund Policy
• Late payments may result in service suspension
• We reserve the right to modify pricing upon renewal periods`
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by applicable law, EcomSyncify and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for:

• Any indirect, incidental, special, consequential, or punitive damages
• Loss of profits, data, use, goodwill, or other intangible losses
• Any damages resulting from unauthorized access to your data
• Any errors, mistakes, or inaccuracies in our services
• Personal injury or property damage from using our services
• Any interruption or cessation of transmission to or from our services

Our total liability shall not exceed the amount you paid us in the 12 months prior to the event giving rise to liability.`
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      content: `You agree to defend, indemnify, and hold harmless EcomSyncify and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:

• Your use of and access to the service
• Your violation of any term of these Terms
• Your violation of any third-party right
• Your violation of any applicable law or regulation
• Any claim that your content caused damage to a third party`
    },
    {
      id: 'termination',
      title: 'Termination',
      content: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

Upon termination:
• Your right to use the service will immediately cease
• All provisions of the Terms which by their nature should survive termination shall survive
• We may delete your account and data (subject to legal retention requirements)
• Any outstanding payment obligations will remain due

If you wish to terminate your account, you may simply discontinue using the service or contact us to request account deletion.`
    },
    {
      id: 'governing',
      title: 'Governing Law',
      content: `These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.

Any dispute arising from these Terms shall be resolved through:
1. Good faith negotiation between parties
2. Mediation if negotiation fails
3. Binding arbitration if mediation fails

Each party shall bear its own costs in connection with the dispute resolution process.`
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.

What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: `If you have any questions about these Terms, please contact us:

• Email: legal@ecomsyncify.com
• Phone: +91 7275646711
• Address: EcomSyncify Technologies LLP, P-53 / VK Residency Haldharu, Surat, Gujarat, India - 394305
• Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST`
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-blue pt-32 pb-24">
        {/* Decorative Circles */}
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full mb-8">
              <Scale className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-bold uppercase tracking-wider">Legal</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Terms of <span className="text-white">Service</span>
            </h1>
            
            <p className="text-white/90 text-lg font-medium leading-relaxed">
              Last Updated: March 31, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 bg-gradient-to-br from-primary-blue to-[#0d2050] rounded-2xl p-10 text-white shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-black">Agreement to Terms</h2>
            </div>
            <p className="text-white/90 text-base leading-relaxed">
              {sections[0].content}
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.slice(1).map((section, idx) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-primary-blue transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  {section.icon && (
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue">
                      {section.icon}
                    </div>
                  )}
                  <h2 className="text-2xl font-black text-primary-dark">
                    {section.title}
                  </h2>
                </div>
                <div className="text-gray-600 text-base leading-relaxed whitespace-pre-line font-medium">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#F5F7F9] rounded-2xl p-10 text-center"
          >
            <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Scale className="h-8 w-8 text-primary-blue" />
            </div>
            <h3 className="text-2xl font-black text-primary-dark mb-4">
              Questions About Our Terms?
            </h3>
            <p className="text-gray-600 text-base font-medium mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about our Terms of Service, our legal team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary-blue text-white px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-primary-dark hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/"
                className="border-2 border-primary-blue text-primary-blue px-10 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-primary-blue hover:text-white transition-all inline-flex items-center gap-2"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;
