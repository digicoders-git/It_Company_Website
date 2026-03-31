import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag, Search, TrendingUp, Clock, Share2, Bookmark, ChevronRight, Filter, Zap, Globe, Cpu, Shield, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsData = [
  {
    id: 'future-cloud-computing',
    title: 'The Future of Cloud Computing in Enterprise IT Solutions',
    category: 'IT Solutions',
    author: 'John Anderson',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    date: 'January 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Explore how cloud computing is reshaping enterprise IT infrastructure and what businesses need to know to stay ahead in the digital transformation era.',
    tags: ['Cloud Computing', 'Enterprise', 'Digital Transformation'],
    featured: true,
    views: '12.5K',
  },
  {
    id: 'cybersecurity-threats-2026',
    title: 'Top 10 Cybersecurity Threats Businesses Face in 2026',
    category: 'Cyber Security',
    author: 'Sarah Mitchell',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    date: 'January 22, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    excerpt: 'As digital threats evolve, businesses must stay informed about the latest cybersecurity risks and how to mitigate them effectively.',
    tags: ['Cybersecurity', 'Threats', 'Security'],
    views: '8.3K',
  },
  {
    id: 'data-analytics-transformation',
    title: 'How Data Analytics Is Transforming Business Decision Making',
    category: 'Data Analysis',
    author: 'Michael Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    date: 'February 5, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Data analytics has become a critical tool for businesses looking to make smarter, faster, and more informed decisions in competitive markets.',
    tags: ['Data Analytics', 'Business Intelligence', 'AI'],
    views: '6.7K',
  },
  {
    id: 'ai-machine-learning-trends',
    title: 'AI and Machine Learning Trends Shaping 2026',
    category: 'Technology',
    author: 'Emma Rodriguez',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    date: 'February 12, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Discover the latest AI and machine learning trends that are revolutionizing industries and creating new opportunities for innovation.',
    tags: ['AI', 'Machine Learning', 'Innovation'],
    views: '15.2K',
  },
  {
    id: 'devops-best-practices',
    title: 'DevOps Best Practices for Modern Software Development',
    category: 'Development',
    author: 'Robert Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    date: 'February 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Learn the essential DevOps practices that can help your team deliver software faster, more reliably, and with higher quality.',
    tags: ['DevOps', 'CI/CD', 'Automation'],
    views: '5.1K',
  },
  {
    id: 'blockchain-enterprise-adoption',
    title: 'Blockchain Technology: Enterprise Adoption in 2026',
    category: 'Technology',
    author: 'David Lee',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
    date: 'February 25, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Explore how enterprises are leveraging blockchain technology to improve transparency, security, and efficiency in their operations.',
    tags: ['Blockchain', 'Enterprise', 'Innovation'],
    views: '7.8K',
  },
  {
    id: 'remote-work-infrastructure',
    title: 'Building Robust IT Infrastructure for Remote Work',
    category: 'IT Solutions',
    author: 'Lisa Wang',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
    date: 'March 3, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Essential strategies for creating a secure and efficient IT infrastructure that supports distributed teams and remote collaboration.',
    tags: ['Remote Work', 'Infrastructure', 'Collaboration'],
    views: '4.9K',
  },
  {
    id: 'iot-industrial-applications',
    title: 'IoT Applications Revolutionizing Industrial Operations',
    category: 'Technology',
    author: 'James Brown',
    authorAvatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&q=80&w=100',
    date: 'March 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Discover how IoT technology is transforming manufacturing, logistics, and industrial operations with real-time monitoring and automation.',
    tags: ['IoT', 'Manufacturing', 'Automation'],
    views: '5.6K',
  },
  {
    id: 'quantum-computing-future',
    title: 'Quantum Computing: The Next Frontier in Technology',
    category: 'Technology',
    author: 'Dr. Alan Smith',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
    date: 'March 17, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    excerpt: 'An in-depth look at quantum computing technology and its potential to solve complex problems that are impossible for classical computers.',
    tags: ['Quantum Computing', 'Future Tech', 'Innovation'],
    views: '9.4K',
  },
];

const categories = [
  { name: 'All', count: 9, icon: <Globe className="h-4 w-4" /> },
  { name: 'IT Solutions', count: 2, icon: <Cpu className="h-4 w-4" /> },
  { name: 'Cyber Security', count: 1, icon: <Shield className="h-4 w-4" /> },
  { name: 'Data Analysis', count: 1, icon: <Zap className="h-4 w-4" /> },
  { name: 'Technology', count: 4, icon: <TrendingUp className="h-4 w-4" /> },
  { name: 'Development', count: 1, icon: <Code className="h-4 w-4" /> },
];

const popularTags = [
  'Cloud Computing', 'Cybersecurity', 'AI', 'Machine Learning', 'DevOps', 
  'Blockchain', 'IoT', 'Data Analytics', 'Remote Work', 'Digital Transformation'
];

const AllNewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredNews = newsData.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsData.find(post => post.featured);
  const recentPosts = newsData.slice(0, 4);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
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
              className="inline-flex items-center gap-2 bg-primary-pink/20 px-5 py-2.5 rounded-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary-pink animate-pulse" />
              <span className="text-primary-pink text-sm font-bold uppercase tracking-wider">News & Insights</span>
            </motion.div>
            
            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Latest News &<br />
              <span className="text-primary-pink">Industry Updates</span>
            </h1>
            
            <p className="text-gray-300 text-base font-medium leading-relaxed">
              Stay ahead of the curve with expert insights, cutting-edge trends, and in-depth analysis from the world of technology and IT solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && activeCategory === 'All' && !searchQuery && (
        <section className="py-16 bg-white -mt-1">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[3px] w-10 bg-primary-pink" />
                <span className="text-primary-pink font-bold uppercase tracking-widest text-sm">Featured Article</span>
              </div>
              
              <Link to={`/news/${featuredArticle.id}`} className="group block">
                <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/90 lg:bg-gradient-to-t from-gray-900/90 to-transparent" />
                      <div className="absolute top-6 left-6 flex items-center gap-2">
                        <div className="bg-primary-pink text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full flex items-center gap-2">
                          <TrendingUp className="h-3 w-3" /> Featured
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                          {featuredArticle.category}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> {featuredArticle.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4" /> {featuredArticle.readTime}
                        </span>
                        <span className="flex items-center gap-2">
                          <User className="h-4 w-4" /> {featuredArticle.views} views
                        </span>
                      </div>
                      
                      <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight mb-4 group-hover:text-primary-pink transition-colors">
                        {featuredArticle.title}
                      </h2>
                      
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={featuredArticle.authorAvatar}
                            alt={featuredArticle.author}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-pink"
                          />
                          <div>
                            <span className="text-white font-bold block">{featuredArticle.author}</span>
                            <span className="text-gray-400 text-sm">Tech Expert</span>
                          </div>
                        </div>
                        
                        <span className="inline-flex items-center gap-2 bg-primary-pink text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider group-hover:bg-white group-hover:text-primary-dark transition-all">
                          Read Full Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          {/* Category Pills & Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
            {/* Category Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide"
            >
              <Filter className="h-5 w-5 text-gray-400 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.name
                      ? 'bg-primary-dark text-white shadow-lg shadow-primary-dark/30'
                      : 'bg-white text-gray-600 hover:bg-primary-dark hover:text-white shadow-sm'
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === cat.name ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative w-full lg:w-80"
            >
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-gray-100 py-3.5 pl-5 pr-14 text-sm rounded-2xl focus:outline-none focus:border-primary-pink transition-all shadow-sm"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content - Blog Grid */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchQuery}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {filteredNews.slice(0, visibleCount).map((post) => (
                    <motion.article
                      key={post.id}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredCard(post.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                        hoveredCard === post.id ? 'transform -translate-y-1' : ''
                      }`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                        {/* Image */}
                        <div className="md:col-span-2 relative h-56 md:h-auto overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/60" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-dark text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5">
                            {categories.find(c => c.name === post.category)?.icon}
                            {post.category}
                          </div>

                          {/* Views */}
                          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Globe className="h-3 w-3" /> {post.views}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            {/* Meta */}
                            <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
                              <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full">
                                <Calendar className="h-3 w-3" /> {post.date}
                              </span>
                              <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full">
                                <Clock className="h-3 w-3" /> {post.readTime}
                              </span>
                            </div>

                            <Link to={`/news/${post.id}`}>
                              <h3 className="text-lg md:text-xl font-black text-primary-dark leading-snug mb-3 group-hover:text-primary-pink transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                            </Link>

                            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full hover:bg-primary-pink hover:text-white transition-colors cursor-pointer"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                              <img
                                src={post.authorAvatar}
                                alt={post.author}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <span className="text-sm font-bold text-gray-600">{post.author}</span>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <button className="p-2 text-gray-400 hover:text-primary-pink hover:bg-primary-pink/10 rounded-full transition-colors">
                                <Bookmark className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-primary-pink hover:bg-primary-pink/10 rounded-full transition-colors">
                                <Share2 className="h-4 w-4" />
                              </button>
                              <Link
                                to={`/news/${post.id}`}
                                className="inline-flex items-center gap-2 bg-primary-dark text-white px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary-pink transition-colors"
                              >
                                Read More <ChevronRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredNews.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 bg-white rounded-3xl"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                </motion.div>
              )}

              {/* Load More */}
              {filteredNews.length > visibleCount && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-10"
                >
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center gap-2 bg-white border-2 border-primary-dark text-primary-dark px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-primary-dark hover:text-white transition-all"
                  >
                    Load More Articles
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <p className="text-gray-400 text-sm mt-3">
                    Showing {visibleCount} of {filteredNews.length} articles
                  </p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search (Mobile Only) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:hidden"
              >
                <h4 className="text-lg font-black text-primary-dark mb-4">Search Articles</h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border-2 border-gray-100 py-3 pl-5 pr-12 text-sm rounded-xl focus:outline-none focus:border-primary-pink transition-colors"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h4 className="text-lg font-black text-primary-dark mb-6 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary-pink" />
                  Categories
                </h4>
                <ul className="space-y-2">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => setActiveCategory(cat.name)}
                        className={`w-full flex items-center justify-between py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                          activeCategory === cat.name
                            ? 'bg-gradient-to-r from-primary-dark to-primary-pink text-white shadow-lg'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary-dark'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {cat.icon}
                          {cat.name}
                        </span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full ${
                          activeCategory === cat.name ? 'bg-white/20' : 'bg-gray-100'
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Recent Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h4 className="text-lg font-black text-primary-dark mb-6 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary-pink" />
                  Trending Now
                </h4>
                <ul className="space-y-4">
                  {recentPosts.map((post, idx) => (
                    <li key={idx} className="group">
                      <Link to={`/news/${post.id}`} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="relative shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-20 h-20 object-cover rounded-xl group-hover:ring-2 group-hover:ring-primary-pink transition-all"
                          />
                          <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary-pink text-white text-xs font-black flex items-center justify-center rounded-full">
                            {idx + 1}
                          </span>
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-primary-dark leading-snug mb-2 group-hover:text-primary-pink transition-colors line-clamp-2">
                            {post.title}
                          </h5>
                          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                            {post.date}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h4 className="text-lg font-black text-primary-dark mb-6 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary-pink" />
                  Popular Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(tag)}
                      className="text-xs font-semibold text-gray-600 bg-gray-50 px-4 py-2 rounded-full hover:bg-primary-dark hover:text-white transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-primary-dark to-[#2a2a4a] p-8 rounded-2xl text-white relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-pink/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-pink rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-black mb-2">Stay Informed</h4>
                  <p className="text-gray-300 text-sm font-medium mb-6">
                    Get the latest tech insights and industry news delivered to your inbox weekly.
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 py-3.5 px-5 text-white text-sm placeholder:text-gray-400 rounded-xl focus:outline-none focus:border-primary-pink transition-colors mb-4"
                  />
                  <button className="w-full bg-primary-pink text-white py-3.5 rounded-xl font-bold uppercase tracking-wider hover:bg-white hover:text-primary-dark transition-colors flex items-center justify-center gap-2">
                    Subscribe Now <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-gray-400 text-xs mt-4 text-center">
                    Join 5,000+ subscribers. Unsubscribe anytime.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllNewsPage;
