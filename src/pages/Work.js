import WorkTab from '../components/WorkTab.js';
import utility from '../../public/images/creative/creative1.jpg';
import shadow1 from '../../public/images/works/shadow1/shadow-11.jpg';
import shadow2 from '../../public/images/works/shadow2/rachelshadow1.jpg';
import shadow3 from '../../public/images/works/shadow3/1.png';
import plastic from '../../public/images/creative/creative15.jpg';
import plastic2 from '../../public/images/works/plasticIdentity2/pi1.jpg';
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
            staggerChildren: 0.25,
          }
        },
        exit: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
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

    const closeModal = (modalData) => {
        setActiveWork(modalData);
    }

    return(
        <div className='work'>
            <motion.div variants={container} initial="hidden" animate="show" exit="exit">
                <motion.div variants={item} onClick={()=>setActiveWork('Utility')}>
                    <WorkTab projectName="Utility Poles" projectDetails="Mingjian Dan, March 2023" image={utility} workId="utlityPoles"/>
                </motion.div>
                <motion.div variants={item} onClick={()=>setActiveWork('SS1')}>
                    <WorkTab projectName="Shadow Study #1" projectDetails="Mingjian Dan, August 2020" image={shadow1}/>
                </motion.div>
                <motion.div variants={item} onClick={()=>setActiveWork('SS2')}>
                    <WorkTab projectName="Shadow Study #2" projectDetails="Mingjian Dan, February 2022" image={shadow2}/>
                </motion.div>
                <motion.div variants={item} onClick={()=>setActiveWork('SS3')}>
                    <WorkTab projectName="Shadow Study #3" projectDetails="Mingjian Dan, May 2023" image={shadow3}/>
                </motion.div>
                <motion.div variants={item} onClick={()=>setActiveWork('PI1')}>
                    <WorkTab projectName="Plastic Identity No.1: Open-mindedness is Dislocation" projectDetails="Mingjian Dan, July 2020" image={plastic}/>
                </motion.div>      
                <motion.div variants={item} onClick={()=>setActiveWork('PI2')}>
                    <WorkTab projectName="Plastic Identity No. 2: Preservation = Suffocation" projectDetails="Mingjian Dan, April 2023" image={plastic2}/>
                </motion.div>      
            </motion.div>
            <WorkModal workName={activeWork} closeModal={closeModal}></WorkModal>
        </div>
    )
}