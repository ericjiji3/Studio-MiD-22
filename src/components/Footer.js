import Image from 'next/image';
import instagram from '../../public/images/logos/instagram.png';
import jiji from '../../public/images/logos/jiji.png';
import podcast from '../../public/images/logos/mid22.png';
import { Podkova } from 'next/font/google';
import { motion,AnimatePresence } from "framer-motion";

export default function Footer(){
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition:{duration: 0.2}}} transition={{duration: 0.5, delay: 2}}>
        <div className="footer">
            

            
            <div className="logos">
                <a href="https://www.instagram.com/studiomid22/">
                    <Image
                        src={instagram}
                        width={25}
                        height={25}
                        alt="oops"
                    />
                </a>
                <a href="https://www.youtube.com/@MiD22Podcast">
                    <Image
                        src={podcast}
                        width={25}
                        height={25}
                        alt="oops"
                    />
                </a>
                <a href="https://jiji.lol/">
                    <Image
                        src={jiji}
                        width={25}
                        height={25}
                        alt="oops"
                    />
                </a>

            </div>
            <div className="info">
                <span>© 2023, Studio MiD</span>
            </div>
            
        </div>
        </motion.div>
    )
}