import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Home = () => {
   return(
      <div className="home-container">
         <Header />
         <Hero />
         <Banner />
      </div>
   )
}

export default Home;