import React, {useState} from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Bar from '../components/Bar';
import Instagram from '../components/Instagram';
import Modal from '../components/Modal';
import About from '../components/About';
import OurBlog from '../components/OurBlog';
import Footer from '../components/Footer';

const Home = (props) => {
   const blogs = props
   const [modalOpen, setModalOpen] = useState(false);
   const [imageInstaURL, setImageInstaURL] = useState(false);
   const [imageInstaCaption, setImageInstaCaption] = useState(false);
   const [typeInsta, setTypeInsta] = useState(false);

   const openModal = (caption, media_url, type) => {
      setImageInstaURL(media_url);
      setImageInstaCaption(caption);
      setTypeInsta(type);
      setModalOpen(true);
      let x = window.scrollX;
      let y = window.scrollY;
      window.onscroll = function(){window.scrollTo(x, y)};
    }

    const closeModal = () => {
      setModalOpen(false);
      window.onscroll = null;
    }

   return(
      <div className="home-container">
         <Header />
         <Hero />
         <Banner />
         <Bar />
         {modalOpen && <Modal imageInstaURL={imageInstaURL} imageInstaCaption={imageInstaCaption} typeInsta={typeInsta} closeModal={closeModal}/>}
         <Instagram openModal={openModal}/>
         <About />
         <OurBlog {...blogs}/>
         <Footer />
      </div>
   )
}

export default Home;