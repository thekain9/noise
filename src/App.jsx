import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Loading from './components/Loading';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Highlights = lazy(() => import('./components/Highlights'));
const PreviewModel = lazy(() => import('./components/PreviewModel.jsx')); 
const Model = lazy(() => import('./components/Model'));
const Chip = lazy(() => import('./components/Chip'));
const Footer = lazy(() => import('./components/Footer'));
const Features = lazy(() => import('./components/Features'));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <main id="main-container" className="bg-black">
          <Navbar /> {/* Always include Navbar here */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Highlights />
                  <PreviewModel />
                  <Features />
                  <Footer />
                </>
              }
            />
            <Route
              path="/product"
              element={<Model />}
            />
          </Routes>
        </main>
      </Suspense>
    </Router>
  );
};

export default App;