import Link from 'next/link'
import Image from 'next/image';
import Logo from '../../public/mid21.png';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
      <nav className="navBar">
        <ul>
          <li>
              <Image
                src={Logo}
                width= {30}
              />
          </li>
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
      </nav>
  )
}
