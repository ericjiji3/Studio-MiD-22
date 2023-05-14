import Image from 'next/image';
import Ming from '../../public/images/about/ming.jpg';
import Michelle from '../../public/images/about/michelle.jpg';
import { motion,AnimatePresence } from "framer-motion";

export default function About(){
    return(
        <div className="about">
            <motion.div
    initial={{ y: 300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
            <div className="profile ming">
                <div className="image-container">
                    <Image src={Ming} width={700} height={500} alt="oops"/>
                </div>
                
                <div className="text-container">
                    <h2>Mingjian Dan</h2>
                    <span>Co-Owner</span>
                    <div className="content">
                        <span>Mingjian Dan, our Head Photographer, is passionate about conveying stories and abstract concepts through his lens. With a great interest in the arts from a young age, his creative journey started with his love of drawing and writing as a child. Those initial interests of visual arts and storytelling began to combine and develop into filmmaking and photography. He continued honing in on his skills as he completed his Bachelor’s in Film at the University of Texas. Postgrad, he took a detour in his career and life path to pursue the “safe” route, but felt drained. Through these experiences, he realized that pursuing his creativity was really the only way he could live. With this newfound mindset and the start up of Mid22 with his childhood friend, he has set out to bring his creative visions to life and to grow our platform to better serve and support the artist community around him.</span>
                    </div>
                </div>
            </div>
            <div className="profile michelle">
                <div className="image-container">
                    <Image src={Michelle} width={700} height={500} alt="oops"/>
                </div>
                
                <div className="text-container">
                    <h2>Michelle Ngo</h2>
                    <span>Co-Owner</span>
                    <div className="content">
                        <span>Known as a jack of all trades as a child, Michelle Ngo, our Founder was always busy entertaining her never-ending interests from tennis, dance, and swim to piano, theatre, and sewing. However, through it all, her deepest passions remained in creating art and music. She went on to earn her Bachelor’s in Early Childhood Special Education at Texas Christian University, but has always said her real learning began after that. Postgrad, she moved abroad to Spain, where she got the chance to learn about the world and do some soul-searching first hand through her travels. These experiences inspired her to live a life that would set her free, which led her to pursue her music career as “Thuy Vi” a Singer-Songwriter and to the startup of her first business with her best friend, Ming. Through Mid22, she aims to connect with like-minded artists to foster a loving, supportive, & collaborative community, while maintaining a personal goal of continually developing her creativity every day.</span>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}