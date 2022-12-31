import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Blog from '../containers/Blog';
import Beers from '../containers/Beers';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import useInitialState from '../hooks/useInitialState';

//const API = 'https://d5ma95tc10.execute-api.sa-east-1.amazonaws.com/beers'
const API = process.env.API_URL;

const App = () => {
   const initialState = useInitialState(API);
   return(
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/beers" element={<Beers {...initialState}/>} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
};

export default App;