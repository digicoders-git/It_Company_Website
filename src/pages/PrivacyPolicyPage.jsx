import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `At EcomSyncify , we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.`
    },
    {
      id: 'collection',
      title: 'Information We Collect',
      icon: <Eye className="h-5 w-5" />,
      content: `We collect information that you provide directly to us, including:

• Personal identification information (Name, email address, phone number, etc.)
• Business information (Company name, job title, industry)
• Payment information when you purchase our services
• Communication data when you contact us
• Usage data and analytics when you interact with our website

We may also collect information automatically through cookies and similar technologies.`
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      icon: <FileText className="h-5 w-5" />,
      content: `We use the information we collect to:

• Provide, operate, and maintain our services
• Improve, personalize, and expand our offerings
• Understand and analyze how you use our website
• Develop new products, services, features, and functionality
• Communicate with you about updates, security alerts, and support
• Process your transactions and manage your orders
• Find and prevent fraud and abuse
• Comply with legal obligations`
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      icon: <Shield className="h-5 w-5" />,
      content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except:

• To trusted third parties who assist us in operating our website and conducting our business
• When we believe release is appropriate to comply with the law or protect our rights
• To enforce our site policies or protect ours or others' rights, property, or safety
• In connection with a merger, acquisition, or sale of assets (with notice to you)

These third parties are bound by confidentiality obligations and are prohibited from using your information for any other purpose.`
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: <Lock className="h-5 w-5" />,
      content: `We implement a variety of security measures to maintain the safety of your personal information:

• Encryption of sensitive data in transit and at rest
• Regular security assessments and penetration testing
• Access controls and authentication mechanisms
• Employee training on data protection practices
• Incident response and breach notification procedures

While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`
    },
    {
      id: 'rights',
      title: 'Your Rights',
      content: `Depending on your location, you may have the following rights regarding your personal data:

• The right to access your personal information
• The right to request correction of inaccurate data
• The right to request deletion of your data
• The right to restrict or object to processing
• The right to data portability
• The right to withdraw consent at any time

To exercise these rights, please contact us using the information provided below.`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: `If you have any questions about this Privacy Policy, please contact us:

• Email: privacy@EcomSyncify .com
• Phone: +1 (500) 369-2580
• Address: 123 Business Street, Suite 500, New York, NY 10001, USA`
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] pt-32 pb-24">
        {/* Decorative Circles */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-[40px] lg:border-[60px] border-[#2a2a2a] opacity-60" />
        </div>
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
            <div className="inline-flex items-center gap-2 bg-primary-teal/20 px-5 py-2.5 rounded-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-teal animate-pulse" />
              <span className="text-primary-teal text-sm font-semibold uppercase tracking-wider">Legal</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Privacy <span className="text-primary-teal">Policy</span>
            </h1>
            
            <p className="text-gray-300 text-base font-medium leading-relaxed">
              Last Updated: March 31, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              {sections[0].content}
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.slice(1).map((section, idx) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  {section.icon && (
                    <div className="w-10 h-10 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal">
                      {section.icon}
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-primary-dark">
                    {section.title}
                  </h2>
                </div>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-teal font-semibold hover:gap-3 transition-all"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
