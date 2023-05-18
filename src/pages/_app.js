import '@/styles/globals.css';
import '@/styles/app.css';
import '@/styles/starting.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StartingScreen from './StartingScreen';
import '@/styles/home.css';
import '@/styles/header.css';
import '@/styles/works.css';
import '@/styles/contact.css';
import '@/styles/carousel.css';
import '@/styles/about.css';
import '@/styles/worktab.css';
import '@/styles/work.css';
import '@/styles/footer.css';
import {useEffect, useState} from 'react';
import Head from 'next/head'
import Script from 'next/script';
import { motion,AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router}) {
  const [startStyle, setStartStyle] = useState({display: 'block'});
  const [homeStyle, setHomeStyle] = useState({display: 'none'});
  const [start, setStart] = useState(false);
  
  const finishStart = () =>{
    setStart(true);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
    if(start){
      setTimeout(function(){
        setStartStyle({ display: 'none' });
      }, 2010);
      setTimeout(function(){
        setHomeStyle({ display: 'unset', opacity: 0 });
      }, 1500);
      setTimeout(function(){
        setHomeStyle({ opacity: 1, transition: 'opacity 1.5s ease-in'});
      }, 1800);
    }
}, [start]);

  return (
    <>
      <Head>
        <title>Studio MiD 22</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mid21.png" />
        
      </Head>
      <Script src="https://assets.calendly.com/assets/external/widget.js"></Script>
      <div className="start" onClick={finishStart} style={startStyle}>
        <StartingScreen click={start}/>
      </div>
      
      <div className="components" style={homeStyle}>
        <Header/>
        <AnimatePresence mode="wait" initial={false}>
        
          <Component {...pageProps} key={router.asPath}/>

        </AnimatePresence>
        <AnimatePresence mode="wait" initial={false}>
        
        <Footer key={router.asPath}/>
        </AnimatePresence>
        
      </div>

    </>
  )
}
