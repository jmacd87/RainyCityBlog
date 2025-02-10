import React from 'react';
import AppRouter from './routes/Router';
import './App.css';
import { PostsProvider } from './contexts/PostsContext';
import { Analytics } from '@vercel/analytics/next';

const App: React.FC = () => (
  <PostsProvider>
    <AppRouter />
    <Analytics />
  </PostsProvider>
);

export default App;
