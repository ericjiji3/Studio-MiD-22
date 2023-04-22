import Link from 'next/link'
import Image from 'next/image';
import Logo from '../../public/mid21.png';
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';

export default function Header(props) {
  const router = useRouter();
  const [burger, setBurger] = useState(false);
  const [style, setStyle] = useState();
  
  useEffect(()=>{
    setTimeout(function(){
      if(!burger){
        setStyle({
          opacity: 0,
          transition: 'opacity 0.9s ease'
        })
      }else{
        setStyle({
          opacity: 1,
          transition: 'opacity 0.9s ease'
        })
      }
      
    }, 1000)
  })
  return (
      <nav className="navBar">
        <div className="logo">
          <Image
            src={Logo}
            width= {30}
          />
        </div>
        <div className={burger ? 'nav-container active' : 'nav-container'} style={style}>
          <ul>
            <li>
              <Link href="/">
                <h2 className={router.pathname === '/' ? 'active' : ''}>Studio MiD 22</h2>
              </Link>
            </li>
            <li>
              <Link href="/Work">
                <h2 className={router.pathname === '/Work' ? 'active' : ''}>Work</h2>
              </Link>
            </li>
            <li>
              <Link href="/Contact">
                <h2 className={router.pathname === '/Contact' ? 'active' : ''}>Contact</h2>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <h2 className={router.pathname === '/About' ? 'active' : ''}>About Us</h2>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className={burger ? "burger-mobile active" : "burger-mobile" } onClick={()=>setBurger(!burger)} >
          <div className="burger"></div>
        </div>
      </nav>
  )
}
