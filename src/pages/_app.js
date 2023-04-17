import '@/styles/globals.css';
import '@/styles/app.css';
import '@/styles/starting.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StartingScreen from './StartingScreen';
import '@/styles/home.css';
import '@/styles/header.css';
import '@/styles/contact.css';
import '@/styles/carousel.css';
import '@/styles/about.css';
import '@/styles/worktab.css';
import '@/styles/work.css';
import '@/styles/footer.css';
import {useEffect, useState} from 'react';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const [start, setStart] = useState(false);

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
      <div className={start ? 'start' : 'start active'} onClick={()=>setStart(true)}>
        <StartingScreen/>
      </div>
      
      <div className={start ? 'components active' : 'components'}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>

    </>
  )
}
