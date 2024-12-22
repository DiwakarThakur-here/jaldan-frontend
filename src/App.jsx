import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'; // Home page is imported without lazy loading

// Lazy loading for other pages
const Advertise = React.lazy(() => import('./pages/Advertise/Advertise'));
const ContactUs = React.lazy(() => import('./pages/Contact Us/ContactUs'));
const FAQ = React.lazy(() => import('./pages/FAQ/FAQ'));
const Distribute = React.lazy(() => import('./pages/Distribute/Distribute'));
const HallOfFame = React.lazy(() => import('./pages/Hall of Fame/HallOfFame'));

const App = () => {
  return (
    <Router>
      <Header /> {/* Global Header */}
      <Suspense fallback={<div>Loading...</div>}> {/* Suspense for lazy-loaded components */}
        <Routes>
          <Route path="/" element={<Home key="home" />} /> {/* Home without lazy loading */}
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/distribute" element={<Distribute />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
        </Routes>
      </Suspense>
      <Footer /> {/* Global Footer */}
    </Router>
  );
};

export default App;
