import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import StoryPage from '../pages/StoryPage';
import ContactPage from '../pages/ContactPage';
import ScrollToTop from '../helpers/ScrollToTop';
import '../App.css';

const AppRouter: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRouter;
