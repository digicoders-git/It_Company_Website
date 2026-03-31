import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag, Share2, MessageCircle, ThumbsUp } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const Facebook = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Twitter = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const Linkedin = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const newsDetails = {
  'future-cloud-computing': {
    title: 'The Future of Cloud Computing in Enterprise IT Solutions',
    category: 'IT Solutions',
    author: {
      name: 'John Anderson',
      role: 'Senior IT Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      bio: 'John has over 15 years of experience in enterprise IT solutions and cloud architecture.',
    },
    date: 'January 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Cloud Computing', 'Enterprise', 'Digital Transformation'],
    content: `
      <p>Cloud computing has revolutionized the way enterprises manage their IT infrastructure. As we move further into 2026, the landscape continues to evolve at an unprecedented pace, bringing new opportunities and challenges for businesses worldwide.</p>

      <h3>The Current State of Cloud Adoption</h3>
      <p>According to recent industry reports, over 94% of enterprises now use cloud services in some capacity. This widespread adoption has been driven by the need for scalability, cost efficiency, and the ability to support remote work environments.</p>

      <p>The shift from traditional on-premise infrastructure to cloud-based solutions has enabled businesses to:</p>
      <ul>
        <li>Reduce capital expenditure on hardware and data centers</li>
        <li>Scale resources dynamically based on demand</li>
        <li>Improve disaster recovery and business continuity</li>
        <li>Enable global collaboration and remote work</li>
        <li>Access cutting-edge technologies like AI and machine learning</li>
      </ul>

      <h3>Emerging Trends in Cloud Computing</h3>
      <p>Several key trends are shaping the future of cloud computing in enterprise environments:</p>

      <h4>1. Multi-Cloud and Hybrid Cloud Strategies</h4>
      <p>Organizations are increasingly adopting multi-cloud strategies, leveraging services from multiple cloud providers to avoid vendor lock-in and optimize costs. Hybrid cloud solutions that combine on-premise infrastructure with public cloud services are also gaining traction.</p>

      <h4>2. Edge Computing Integration</h4>
      <p>The rise of IoT devices and the need for real-time data processing are driving the integration of edge computing with cloud infrastructure. This allows businesses to process data closer to its source, reducing latency and bandwidth costs.</p>

      <h4>3. Serverless Architecture</h4>
      <p>Serverless computing is becoming more popular as it allows developers to focus on code without managing infrastructure. This approach can significantly reduce operational costs and improve scalability.</p>

      <h3>Security and Compliance Considerations</h3>
      <p>As cloud adoption grows, so do concerns about security and compliance. Enterprises must ensure that their cloud infrastructure meets industry regulations and protects sensitive data. Key considerations include:</p>
      <ul>
        <li>Implementing zero-trust security models</li>
        <li>Ensuring data encryption at rest and in transit</li>
        <li>Regular security audits and compliance checks</li>
        <li>Employee training on cloud security best practices</li>
      </ul>

      <h3>The Road Ahead</h3>
      <p>Looking forward, cloud computing will continue to be a cornerstone of enterprise IT strategy. Organizations that embrace cloud technologies and stay ahead of emerging trends will be better positioned to compete in an increasingly digital marketplace.</p>

      <p>The key to success lies in developing a comprehensive cloud strategy that aligns with business objectives, prioritizes security, and leverages the latest innovations in cloud technology.</p>
    `,
  },
  'cybersecurity-threats-2026': {
    title: 'Top 10 Cybersecurity Threats Businesses Face in 2026',
    category: 'Cyber Security',
    author: {
      name: 'Sarah Mitchell',
      role: 'Cybersecurity Expert',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      bio: 'Sarah specializes in enterprise cybersecurity and has helped numerous organizations strengthen their security posture.',
    },
    date: 'January 22, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    tags: ['Cybersecurity', 'Threats', 'Security'],
    content: `
      <p>As digital transformation accelerates, cybersecurity threats continue to evolve in sophistication and scale. Understanding these threats is crucial for businesses to protect their assets and maintain customer trust.</p>

      <h3>1. Ransomware Attacks</h3>
      <p>Ransomware remains one of the most significant threats to businesses. Attackers encrypt critical data and demand payment for its release. The average ransom demand has increased by 300% in the past year.</p>

      <h3>2. AI-Powered Phishing</h3>
      <p>Cybercriminals are now using artificial intelligence to create highly convincing phishing emails that are difficult to detect. These attacks can bypass traditional security measures and trick even security-aware employees.</p>

      <h3>3. Supply Chain Attacks</h3>
      <p>Attackers are increasingly targeting the supply chain, compromising trusted vendors to gain access to multiple organizations simultaneously. This type of attack can have far-reaching consequences.</p>

      <h3>4. Cloud Security Vulnerabilities</h3>
      <p>As more businesses move to the cloud, misconfigurations and inadequate security controls create opportunities for attackers. Proper cloud security architecture is essential.</p>

      <h3>5. IoT Device Exploitation</h3>
      <p>The proliferation of IoT devices in enterprise environments creates new attack vectors. Many IoT devices lack robust security features, making them easy targets for hackers.</p>

      <h3>Protection Strategies</h3>
      <p>To defend against these threats, organizations should implement:</p>
      <ul>
        <li>Multi-factor authentication across all systems</li>
        <li>Regular security awareness training</li>
        <li>Advanced threat detection and response systems</li>
        <li>Regular security audits and penetration testing</li>
        <li>Incident response plans and disaster recovery procedures</li>
      </ul>

      <p>Staying ahead of cyber threats requires continuous vigilance, investment in security technologies, and a culture of security awareness throughout the organization.</p>
    `,
  },
  'data-analytics-transformation': {
    title: 'How Data Analytics Is Transforming Business Decision Making',
    category: 'Data Analysis',
    author: {
      name: 'Michael Chen',
      role: 'Data Science Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      bio: 'Michael leads data analytics initiatives for Fortune 500 companies, specializing in predictive analytics and business intelligence.',
    },
    date: 'February 5, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Data Analytics', 'Business Intelligence', 'AI'],
    content: `
      <p>In today's data-driven world, businesses that leverage analytics effectively gain a significant competitive advantage. Data analytics has evolved from a nice-to-have capability to a critical business function.</p>

      <h3>The Power of Data-Driven Decisions</h3>
      <p>Organizations that embrace data analytics are seeing remarkable results. Studies show that data-driven companies are 23 times more likely to acquire customers and 6 times more likely to retain them.</p>

      <h3>Key Areas of Impact</h3>
      
      <h4>Customer Insights</h4>
      <p>Advanced analytics enables businesses to understand customer behavior, preferences, and needs at a granular level. This insight drives personalized marketing, improved customer service, and product development.</p>

      <h4>Operational Efficiency</h4>
      <p>Data analytics helps identify bottlenecks, optimize processes, and reduce costs. Real-time analytics can predict equipment failures, optimize supply chains, and improve resource allocation.</p>

      <h4>Risk Management</h4>
      <p>Predictive analytics models can identify potential risks before they materialize, allowing businesses to take proactive measures. This is particularly valuable in financial services, healthcare, and manufacturing.</p>

      <h3>Implementing Analytics Successfully</h3>
      <p>To maximize the value of data analytics, organizations should:</p>
      <ul>
        <li>Establish a clear data strategy aligned with business goals</li>
        <li>Invest in the right tools and technologies</li>
        <li>Build a skilled analytics team</li>
        <li>Foster a data-driven culture</li>
        <li>Ensure data quality and governance</li>
      </ul>

      <h3>The Future of Analytics</h3>
      <p>As AI and machine learning technologies advance, analytics capabilities will become even more powerful. Automated insights, natural language processing, and augmented analytics will make data accessible to everyone in the organization, not just data scientists.</p>

      <p>The businesses that thrive in the coming years will be those that successfully harness the power of data analytics to drive innovation, improve customer experiences, and make smarter decisions.</p>
    `,
  },
};

const relatedPosts = [
  {
    id: 'ai-machine-learning-trends',
    title: 'AI and Machine Learning Trends Shaping 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400',
    date: 'February 12, 2026',
  },
  {
    id: 'devops-best-practices',
    title: 'DevOps Best Practices for Modern Software Development',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=400',
    date: 'February 18, 2026',
  },
  {
    id: 'blockchain-enterprise-adoption',
    title: 'Blockchain Technology: Enterprise Adoption in 2026',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400',
    date: 'February 25, 2026',
  },
];

const NewsDetailPage = () => {
  const { newsId } = useParams();
  const news = newsDetails[newsId];
  const [likes, setLikes] = useState(42);
  const [liked, setLiked] = useState(false);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-primary-dark mb-4">Article Not Found</h1>
          <Link to="/news" className="text-primary-pink font-bold hover:underline">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-[60px] border-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full border-[50px] border-white -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary-pink" />
              <span className="text-primary-pink font-bold uppercase tracking-widest text-sm">
                {news.category}
              </span>
              <div className="h-[2px] w-10 bg-primary-pink" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6 text-center">
              {news.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm font-bold">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary-pink" />
                {news.author.name}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary-pink" />
                {news.date}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary-pink" />
                {news.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full object-cover shadow-2xl"
                  style={{ height: '500px' }}
                />
              </motion.div>

              {/* Article Body */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div 
                  className="text-gray-700 leading-relaxed article-content"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                  }}
                />
              </motion.div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-black text-primary-dark uppercase tracking-wider">Tags:</span>
                  {news.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold text-gray-600 bg-gray-100 px-4 py-2 uppercase tracking-wider hover:bg-primary-pink hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share & Like */}
              <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all ${
                      liked
                        ? 'bg-primary-pink text-white'
                        : 'border-2 border-gray-200 text-gray-600 hover:border-primary-pink hover:text-primary-pink'
                    }`}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    {likes} Likes
                  </button>
                  <button className="flex items-center gap-2 border-2 border-gray-200 text-gray-600 px-6 py-3 font-bold text-sm uppercase tracking-wider hover:border-primary-pink hover:text-primary-pink transition-all">
                    <MessageCircle className="h-4 w-4" />
                    12 Comments
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-primary-dark uppercase tracking-wider">Share:</span>
                  {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="h-10 w-10 border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-pink hover:bg-primary-pink hover:text-white transition-all"
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-[#F5F7F9] p-8">
                <div className="flex gap-6">
                  <img
                    src={news.author.image}
                    alt={news.author.name}
                    className="w-24 h-24 object-cover rounded-full shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-black text-primary-dark mb-1">{news.author.name}</h4>
                    <p className="text-primary-pink text-sm font-bold uppercase tracking-wider mb-3">
                      {news.author.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      {news.author.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-2xl font-black text-primary-dark mb-8 pb-4 border-b border-gray-200 relative">
                  Related Articles
                  <span className="absolute bottom-0 left-0 h-[2px] w-16 bg-primary-pink" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((post, idx) => (
                    <Link
                      key={idx}
                      to={`/news/${post.id}`}
                      className="group"
                    >
                      <div className="relative h-48 overflow-hidden mb-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <h5 className="text-sm font-black text-primary-dark leading-snug mb-2 group-hover:text-primary-pink transition-colors">
                        {post.title}
                      </h5>
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                        {post.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#F5F7F9] p-6"
              >
                <h4 className="text-lg font-black text-primary-dark mb-6 pb-4 border-b border-gray-200 relative">
                  Recent Posts
                  <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-primary-pink" />
                </h4>
                <ul className="space-y-4">
                  {relatedPosts.map((post, idx) => (
                    <li key={idx} className="group">
                      <Link to={`/news/${post.id}`} className="flex gap-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-20 h-20 object-cover shrink-0"
                        />
                        <div>
                          <h5 className="text-sm font-black text-primary-dark leading-snug mb-2 group-hover:text-primary-pink transition-colors line-clamp-2">
                            {post.title}
                          </h5>
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                            {post.date}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-primary-dark p-6 text-white"
              >
                <h4 className="text-lg font-black mb-3">Subscribe Newsletter</h4>
                <p className="text-gray-400 text-sm font-medium mb-4">
                  Get the latest news and updates delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/10 border border-white/20 py-3 px-4 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary-pink transition-colors mb-3"
                />
                <button className="w-full btn-primary justify-center">
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetailPage;
