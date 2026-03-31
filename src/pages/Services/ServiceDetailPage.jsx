import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  
  // Redirect to specific service pages for the 4 main services
  const serviceRedirects = {
    'website-development': '/services/website-development',
    'mobile-app-development': '/services/mobile-app-development',
    'software-development': '/services/software-development',
    'digital-marketing': '/services/digital-marketing'
  };
  
  if (serviceRedirects[serviceId]) {
    return <Navigate to={serviceRedirects[serviceId]} replace />;
  }
  
  // For any other service ID, show a generic service page or redirect to all services
  return <Navigate to="/services" replace />;
};

export default ServiceDetailPage;
