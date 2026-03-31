import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AllServicesPage from './pages/Services/AllServicesPage';
import ServiceDetailPage from './pages/Services/ServiceDetailPage';
import AllCaseStudiesPage from './pages/CaseStudies/AllCaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudies/CaseStudyDetailPage';
import DataInfrastructurePage from './pages/CaseStudies/DataInfrastructurePage';
import CyberSecurityPage from './pages/CaseStudies/CyberSecurityPage';
import ProductEngineeringPage from './pages/CaseStudies/ProductEngineeringPage';
import AllNewsPage from './pages/News/AllNewsPage';
import NewsDetailPage from './pages/News/NewsDetailPage';
import ContactPage from './pages/Contact/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import WebsiteDevelopmentPage from './pages/Services/WebsiteDevelopmentPage';
import MobileAppDevelopmentPage from './pages/Services/MobileAppDevelopmentPage';
import SoftwareDevelopmentPage from './pages/Services/SoftwareDevelopmentPage';
import DigitalMarketingPage from './pages/Services/DigitalMarketingPage';
import ClientsPage from './pages/ClientsPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<AllServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/case-studies" element={<AllCaseStudiesPage />} />
            <Route path="/case-studies/data-infrastructure" element={<DataInfrastructurePage />} />
            <Route path="/case-studies/cyber-security" element={<CyberSecurityPage />} />
            <Route path="/case-studies/product-engineering" element={<ProductEngineeringPage />} />
            <Route path="/case-studies/:caseId" element={<CaseStudyDetailPage />} />
            <Route path="/news" element={<AllNewsPage />} />
            <Route path="/news/:newsId" element={<NewsDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
