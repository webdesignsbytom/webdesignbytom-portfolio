import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
import WebComponents from './pages/web-components/WebComponents';
import PortfolioItem from './pages/portfolioItem/PortfolioItem';
import Error404 from './pages/errors/Error404';
import Freelance from './pages/freelance/Freelance';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/portfolioItem' element={<PortfolioItem />} />
        <Route path='/components' element={<WebComponents />} />
        <Route path='/freelance-hire' element={<Freelance />} />

        <Route path='/error' element={<Error404 />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
