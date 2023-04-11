import '@/styles/globals.css';
import Header from '../components/Header';
import '@/styles/home.css';
import '@/styles/header.css';
import '@/styles/contact.css';
import '@/styles/carousel.css';
import '@/styles/about.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect} from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
}, []);
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
