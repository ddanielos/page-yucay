import React from 'react';
import useFetchBeers from '../hooks/useFetchBeers';
import useFetchBlogs from '../hooks/useFetchBlogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Beers from '../containers/Beers';
import Blogs from '../containers/Blogs';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';


const API = process.env.API_URL;
const API_BLOGS = process.env.API_BLOG;

const App = () => {
   const beers = useFetchBeers(API);
   const blogs = useFetchBlogs(API_BLOGS);
   return(
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home {...blogs}/>} />
               <Route path="/blogs" element={<Blogs {...blogs}/>} />
               <Route path="/beers" element={<Beers {...beers}/>} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
};

export default App;