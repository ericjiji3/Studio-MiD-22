import {useEffect} from 'react';
import Head from 'next/head';
import React from "react";
import { InlineWidget } from "react-calendly";
import cover from '../../public/images/opening/opening-04.jpg';
import Image from 'next/image';
import { motion,AnimatePresence } from "framer-motion";

export default function Contact(){

    return(
        <>
        <Head>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </Head>
        <div className="contact">
            
            <div className="left">
            <motion.div initial={{opacity: 0, x: -1000}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -1000}} transition={{duration: 0.75}}>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <form className="form-container">
                    <input className="text-input" autocomplete="name" placeholder="Name" type="text" name="your-name"/>
                    <input className="text-input" autocomplete="name" placeholder="Email Address" type="text" name="your-email"/>
                    <input className="text-input" autocomplete="name" placeholder="Number" type="text" name="your-number"/>
                    <input className="text-input" autocomplete="name" placeholder="Project Type" type="text" name="your-project"/>
                    <input className="text-input" autocomplete="name" placeholder="Availability" type="text" name="your-availability"/>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
                </motion.div>
            </div>  
        
        
            <div className="right">
            <motion.div initial={{opacity: 0, x: 1000}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 1000}} transition={{duration: 0.75}}>
            <div className="calender-cover">
                <Image src={cover} width={500} height={150} alt="oops"/>
                <h2>April</h2>
            </div>
            <InlineWidget url="https://calendly.com/studiomid22/gradshoot?hide_event_type_details=1&hide_gdpr_banner=1&background_color=faf9f6&primary_color=1a1a1a"/>
            </motion.div>
            </div>
            
            
        </div>
        
        </>
        
    )
}