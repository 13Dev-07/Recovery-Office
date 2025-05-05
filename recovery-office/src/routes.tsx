import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FadeIn } from './animation';

// Import pages
import { 
  Home, 
  Services, 
  About, 
  Contact, 
  Blog, 
  FAQ, 
  Booking, 
  NotFound,
  Privacy,
  Terms,
  HIPAA,
  Accessibility
} from './pages';

// Loading component
const Loading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    Loading...
  </div>
);

const AppRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <React.Suspense fallback={<Loading />}>
      <FadeIn key={location.pathname}>
        <Routes location={location}>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/booking" element={<Booking />} />
          
          {/* Legal routes */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/hipaa" element={<HIPAA />} />
          <Route path="/accessibility" element={<Accessibility />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FadeIn>
    </React.Suspense>
  );
};

export default AppRoutes; 





