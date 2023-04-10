import '@/styles/globals.css';
import Header from '../components/Header';
import '@/styles/home.css';
import '@/styles/header.css';
import '@/styles/contact.css';
import '@/styles/carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
