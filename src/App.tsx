import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import FloatingSchoolItems from './components/FloatingSchoolItems';
import RatingModal from './components/RatingModal';
import LiveReviews from './components/LiveReviews';
import InstallPrompt from './components/InstallPrompt';
import PWAFeatures from './components/PWAFeatures';
import { usePWA } from './hooks/usePWA';

function App() {
  const { isInstalled } = usePWA();

  useEffect(() => {
    // تسجيل Service Worker عند تحميل التطبيق
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/*" element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
              <WhatsAppFloat />
              <FloatingSchoolItems />
              <RatingModal />
              <LiveReviews />
              <InstallPrompt />
              {isInstalled && <PWAFeatures />}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;