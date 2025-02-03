import { Fragment } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import './App.css'
import Button from './components/Button/Button'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'
import MainComponent from './components/Main/MainComponent'
import Layout from './components/Layout/Layout';
import PortfolioPage from './routes/PortfolioPage/PortfolioPage';

export default function App() {

  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/portfolio" element={<PortfolioPage />} /> {/* Маршрут для Portfolio */}
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

