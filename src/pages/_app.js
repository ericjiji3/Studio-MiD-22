import '@/styles/globals.css';
import Header from '../components/Header';
import '@/styles/home.css';
import '@/styles/header.css';
import '@/styles/contact.css';
import '@/styles/carousel.css';
import '@/styles/about.css';
import '@/styles/worktab.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect} from 'react';
import Head from 'next/head'

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
      <Head>
        <title>Studio MiD 22</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mid21.png" />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
