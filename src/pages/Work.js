import WorkTab from '../components/WorkTab.js';
import utility from '../../public/images/creative/creative1.jpg';
import shadow from '../../public/images/creative/creative16.jpg';
import plastic from '../../public/images/creative/creative15.jpg';
import WorkModal from '../components/Works.js';
import {useState, useEffect, useRef} from 'react';
import { motion,AnimatePresence } from "framer-motion";
import { render } from 'react-dom';

export default function Work(){
    const [activeWork, setActiveWork] = useState('');
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
          }
        },
        exit: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
              }
        }
      }
      
      const item = {
        hidden: { opacity: 0, x: -750 },
        show: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.75
            } 
        },
        exit: {
            opacity: 0, 
            x: 750,
            transition: {
                duration: 0.75
            } 
        }
      }
    
      
    return(
        <div className='work'>
            <motion.div variants={container} initial="hidden" animate="show" exit="exit">
                <motion.div variants={item} onClick={()=>setActiveWork('Utility')}>
                    <WorkTab projectName="Utility Poles" projectDetails="Mingjian Dan, March 2023" image={utility} workId="utlityPoles"/>
                </motion.div>
                <motion.div variants={item} onClick={()=>setActiveWork('PI1')}>
                    <WorkTab projectName="Plastic Identity No.1: Open-mindedness is Dislocation" projectDetails="Mingjian Dan, August 2020" image={shadow}/>
                </motion.div>
                <motion.div variants={item} onClick={()=>setActiveWork('PI')}>
                    <WorkTab projectName="Plastic Identity" projectDetails="Mingjian Dan, July 2020" image={plastic}/>
                </motion.div>   
            </motion.div>
            <WorkModal workName={activeWork}></WorkModal>
        </div>
    )
}