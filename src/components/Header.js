import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/mid21.png';
import { useRouter } from 'next/router';
import {useState, useEffect, useRef} from 'react';

export default function Header(props) {
  const router = useRouter();
  const [burger, setBurger] = useState(false);
  const [style, setStyle] = useState();
  const [gradient, setGradient] = useState(false);
  const toggleDark = useRef();

  const handleCheck = () =>{
    if(toggleDark.current.checked){
      props.toggleMode('light');
    } else{
      props.toggleMode('dark');
    }
  }

  useEffect(()=>{
    const handleScroll = (event) =>{
      console.log(window.scrollY);
      if(window.scrollY > 10){
        setGradient(true);
      } else{
        setGradient(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
      <nav className={gradient ? "navBar active" : "navBar"}>
        <div className="logo">
          <Link href="/">
            <Image
              src={Logo}
              width= {30}
              alt="oops"
            />
          </Link>
        </div>
        <div className={burger ? 'nav-container active' : 'nav-container'} style={style}>
          <ul>
            <li>
              <Link href="/" onClick={()=>setBurger(!burger)}>
                <h2 className={router.pathname === '/' ? 'active' : ''}>Studio MiD 22</h2>
              </Link>
            </li>
            <li>
              <Link href="/Work" onClick={()=>setBurger(!burger)}>
                <h2 className={router.pathname === '/Work' ? 'active' : ''}>Work</h2>
              </Link>
            </li>
            <li>
              <Link href="/Contact" onClick={()=>setBurger(!burger)}>
                <h2 className={router.pathname === '/Contact' ? 'active' : ''}>Contact</h2>
              </Link>
            </li>
            <li>
              <Link href="/About" onClick={()=>setBurger(!burger)}>
                <h2 className={router.pathname === '/About' ? 'active' : ''}>About Us</h2>
              </Link>
            </li>
            <li>
              <input type="checkbox" id="darkmode-toggle" ref={toggleDark} onChange={handleCheck}/>
              <label for="darkmode-toggle"></label>
            </li>
          </ul>
        </div>
        
        <div className={burger ? "burger-mobile active" : "burger-mobile" } onClick={()=>setBurger(!burger)} >
          <div className="burger"></div>
        </div>
      </nav>
  )
}
