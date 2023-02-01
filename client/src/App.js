import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebComponents from './pages/web-components/WebComponents';
import Home from './pages/home/Home';
import ExamplePage from './pages/example/ExamplePage';
import Error404 from './pages/errors/Error404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/example' element={<ExamplePage />} />
        <Route path='/components' element={<WebComponents />} />

        <Route path='/error' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
