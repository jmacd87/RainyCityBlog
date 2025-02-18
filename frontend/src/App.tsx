import React from 'react';
import AppRouter from './routes/Router';
import './App.css';
import { PostsProvider } from './contexts/PostsContext';

const App: React.FC = () => (
  <PostsProvider>
    <AppRouter />
  </PostsProvider>
);

export default App;
