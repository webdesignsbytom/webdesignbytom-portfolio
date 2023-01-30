import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebComponents from './pages/web-components/WebComponents';
import Home from './pages/home/Home';
import ExamplePage from './pages/example/ExamplePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/example' element={<ExamplePage />} />
        <Route path='/components' element={<WebComponents />} />
      </Routes>
    </>
  );
}

export default App;
