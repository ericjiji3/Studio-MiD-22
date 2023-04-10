import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '../components/Carousel.js';
import portraits from './portraits.js';
import grads from './grad.js';
import { useRef, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [activeGallery, setActiveGallery] = useState('portraits');
  function selectGallery(name){
    setActiveGallery(name);
  }


  return (
    <>
      <Head>
        <title>Studio MiD 22</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mid21.png" />
      </Head>
      <div className="home">
        <div className="carousels">
          {activeGallery === 'portraits' && (
            <Carousel images={portraits} className={activeGallery ? 'active' : ''}/>
          )}
          {activeGallery === 'grads' && (
            <Carousel images={grads} className={activeGallery ? 'active' : ''}/>
          )}
          
        </div>
        <div className="carousel-selector">
          <div className="carousel-display">
              <h2>Portraits</h2>
          </div>
          <div className="carousel-select-container">
            <ul>
              <li onClick={() => selectGallery('creative')}>
                <h2>Creative</h2>
              </li>
              <li onClick={() => selectGallery('grads')}>
                <h2>Graduation</h2>
              </li>
              <li onClick={() => selectGallery('portraits')}>
                <h2>Portraits</h2>
              </li>
              <li onClick={() => selectGallery('products')}>
                <h2>Product Shoots</h2>
              </li>
              <li onClick={() => selectGallery('albums')}>
                <h2>Album Covers</h2>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}
