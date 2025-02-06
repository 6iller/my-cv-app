import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import MainComponent from './components/Main/MainComponent'
import Layout from './components/Layout/Layout';
import Works from './routes/Works/Works';
import Blog from './routes/Blog/Blog';
import BlogPost from './routes/BlogPost/BlogPost';
import useWindowSize from './components/WindowSize/WindowSize';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

export default function App() {
  const windowSize = useWindowSize();
  return (
    <Router>
      <Layout>
      {windowSize.width < 768 && <BurgerMenu />}
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Layout>
    </Router>
  );
}

