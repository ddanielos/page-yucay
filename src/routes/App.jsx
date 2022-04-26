import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from '../containers/Blog';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

const App = () => (
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="blog" element={<Blog/>} />
         <Route path="*" element={<NotFound/>} />
      </Routes>
   </BrowserRouter>
);

export default App;