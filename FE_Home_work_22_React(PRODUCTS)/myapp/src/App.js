import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import AboutPage from './pages/AboutPage/AboutPage';
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<AboutPage/>}></Route>
          <Route path='/:id' element={<ProductInfoPage/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
