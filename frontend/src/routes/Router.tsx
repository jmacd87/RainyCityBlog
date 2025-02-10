import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import ContactPage from '../pages/ContactPage';
import ScrollToTop from '../helpers/ScrollToTop';
import LoadingScreen from '../components/LoadingScreen';
import '../App.css';

const AppRouter: React.FC = () => {
  const HomePage = React.lazy(() => import('../pages/HomePage'));
  const StoryPage = React.lazy(() => import('../pages/StoryPage'));
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story/:id" element={<StoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRouter;
