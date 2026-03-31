import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    category: 'IT Solutions',
    date: 'January 15, 2026',
    author: 'Admin',
    title: 'The Future of Cloud Computing in Enterprise IT Solutions',
    excerpt: 'Explore how cloud computing is reshaping enterprise IT infrastructure and what businesses need to know to stay ahead.',
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    category: 'Cyber Security',
    date: 'January 22, 2026',
    author: 'Admin',
    title: 'Top 10 Cybersecurity Threats Businesses Face in 2026',
    excerpt: 'As digital threats evolve, businesses must stay informed about the latest cybersecurity risks and how to mitigate them effectively.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    category: 'Data Analysis',
    date: 'February 5, 2026',
    author: 'Admin',
    title: 'How Data Analytics Is Transforming Business Decision Making',
    excerpt: 'Data analytics has become a critical tool for businesses looking to make smarter, faster, and more informed decisions.',
  },
];

const Blog = () => {
  return (
    <section id="news" className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-primary-teal" />
            <span className="text-primary-teal font-bold uppercase tracking-widest text-sm">
              Latest News
            </span>
            <div className="h-[2px] w-10 bg-primary-teal" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-primary-dark leading-tight">
            Latest News &{' '}
            <span className="text-primary-teal">Updates</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium leading-relaxed">
            Stay up to date with the latest trends, insights, and news from the IT industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary-teal text-white text-xs font-black uppercase tracking-wider px-3 py-1">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" /> {post.author}
                  </span>
                </div>

                <h3 className="text-lg font-black text-primary-dark leading-snug mb-3 group-hover:text-primary-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary-teal font-black text-sm uppercase tracking-wider hover-line"
                >
                  Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Bottom line */}
              <div className="h-1 w-0 bg-primary-teal transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
