import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '../components/Carousel.js';
import portraits from './portraits.js';
import grads from './grad.js';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const [activeGallery, setActiveGallery] = useState('Portraits');
  const [activeDisplay, setActiveDisplay] = useState('Portraits Portraits Portraits Portraits')
  function selectGallery(name){
    setActiveGallery(name);
    let nameScroll = name + " " + name + " " +name + " " + name;
    setActiveDisplay(nameScroll);
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
          
        </div>
        <div className="carousel-selector">
          <div className="carousel-display">
            <div className="scroll">
                    <h2>{activeDisplay}</h2>
                    <h2>{activeDisplay}</h2>
            </div>
          </div>
          <div className="carousel-select-container">
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
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}
