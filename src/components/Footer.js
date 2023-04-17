import Image from 'next/image';
import instagram from '../../public/images/logos/instagram.png';
import jiji from '../../public/images/logos/jiji.png';
import podcast from '../../public/images/logos/mid22.png';
import { Podkova } from 'next/font/google';

export default function Footer(){
    return(
        <div className="footer">
            <div className="logos">
                <a href="https://www.instagram.com/studiomid22/">
                    <Image
                        src={instagram}
                        width={25}
                        height={25}
                    />
                </a>
                <a href="https://www.instagram.com/v3ganghouse/">
                    <Image
                        src={podcast}
                        width={25}
                        height={25}
                    />
                </a>
                <a href="https://jiji.lol/">
                    <Image
                        src={jiji}
                        width={25}
                        height={25}
                    />
                </a>

            </div>
            <div className="info">
                <span>© 2023, Studio MiD</span>
            </div>
        </div>
    )
}