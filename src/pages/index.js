import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '../components/Carousel.js';
import portraits from '../components/portraits.js';
import grads from '../components/grad.js';
import products from '../components/products.js';
import creatives from '../components/creatives.js';
import albums from '../components/albums.js';
import fashion from '../components/fashion.js';
import headshots from '../components/headshots.js';
import { useRef, useEffect, useState } from 'react';
import { motion,AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeGallery, setActiveGallery] = useState('Portraits');
  const [activeDisplay, setActiveDisplay] = useState('Portraits Portraits Portraits Portraits')
  function selectGallery(name){
    setActiveGallery(name);
    let nameScroll = name + " " + name + " " +name + " " + name;
    setActiveDisplay(nameScroll);
  }
  const variants = {
    open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
  }

  return (
    <>

      <div className="home">
        <div className="carousels">
          {activeGallery === 'Portraits' && (
            <div className={activeGallery ? 'active' : 'inactive'}>
              <Carousel images={portraits} />
            </div>
            
          )}
          {activeGallery === 'Graduation' && (
            <div className={activeGallery ? 'active' : 'inactive'}>
              <Carousel images={grads}/>
            </div>
            
          )}
          {activeGallery === 'Product Shoots' && (
            <div className={activeGallery ? 'active' : 'inactive'}>
              <Carousel images={products}/>
            </div>
            
          )}
          {activeGallery === 'Creative' && (
            <div className={activeGallery ? 'active' : 'inactive'}>
              <Carousel images={creatives}/>
            </div>
            
          )}
          {activeGallery === 'Album Covers' && (
            <div className={activeGallery ? 'active' : 'inactive'}>
              <Carousel images={albums}/>
            </div>
            
          )}
          {activeGallery === 'Fashion' && (
            <div className={activeGallery ? 'active' : 'inactive'}>
              <Carousel images={fashion}/>
            </div>
            
          )}
          {activeGallery === 'Headshots' && (
            <div className={activeGallery ? 'active' : 'inactive'}>
              <Carousel images={headshots}/>
            </div>
            
          )}
        </div>
        <div className="carousel-selector">
          <motion.div style={{margin: 'auto'}} initial={{width: 25}} animate={{ width: '100%'}} transition={{duration: 0.75}}>
            <div className="carousel-display">
            
              <div className="scroll" >
                <AnimatePresence><motion.h2 key={activeDisplay} initial={{opacity: 0, y: -100}} animate={{ opacity: 1, y: 0}} exit={{ opacity: 0, y: 100 }} transition={{duration: 0.75}}>{activeDisplay}</motion.h2></AnimatePresence>
                <AnimatePresence><motion.h2 key={activeDisplay} initial={{opacity: 0, y: -100}} animate={{ opacity: 1, y: 0}} exit={{ opacity: 0, y: 100 }} transition={{duration: 0.75}}>{activeDisplay}</motion.h2></AnimatePresence>
                
                      
              </div>
             
            </div>
          </motion.div>
          
          
          <div className="carousel-select-container">
          <motion.div className="animate" initial={{ height: 5 }} animate={{ height: 'fit-content' }} transition={{duration: 0.75}}>
            <ul>
              <li onClick={() => selectGallery('Creative')}>
                <h2 className={activeGallery==='Creative' ? 'select-text active' : 'select-text'}>Creative</h2>
              </li>
              <li onClick={() => selectGallery('Graduation')}>
                <h2 className={activeGallery==='Graduation' ? 'select-text active' : 'select-text'}>Graduation</h2>
              </li>
              <li onClick={() => selectGallery('Portraits')}>
                <h2 className={activeGallery==='Portraits' ? 'select-text active' : 'select-text'}>Portraits</h2>
              </li>
              <li onClick={() => selectGallery('Product Shoots')}>
                <h2 className={activeGallery==='Product Shoots' ? 'select-text active' : 'select-text'}>Product Shoots</h2>
              </li>
              <li onClick={() => selectGallery('Album Covers')}>
                <h2 className={activeGallery==='Album Covers' ? 'select-text active' : 'select-text'}>Album Covers</h2>
              </li>
              <li onClick={() => selectGallery('Fashion')}>
                <h2 className={activeGallery==='Fashion' ? 'select-text active' : 'select-text'}>Fashion</h2>
              </li>
              <li onClick={() => selectGallery('Headshots')}>
                <h2 className={activeGallery==='Headshots' ? 'select-text active' : 'select-text'}>Headshots</h2>
              </li>
            </ul>
            </motion.div>
          </div>
          
          
        </div>

      </div>
    </>
  )
}
