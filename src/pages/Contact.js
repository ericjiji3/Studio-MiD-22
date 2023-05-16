import {useEffect} from 'react';
import Head from 'next/head';
import React from "react";
import { InlineWidget } from "react-calendly";
import cover from '../../public/images/opening/opening-04.jpg';
import Image from 'next/image';
import { motion,AnimatePresence } from "framer-motion";
import formpic from '../../public/images/opening/opening-05.jpg';
import { useState } from "react";
import {DatePicker, Calendar} from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

export default function Contact(){
    const [value, setValue] = useState(new Date());
    return(
        <>
        <Head>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </Head>
        <div className="contact">
            
            <div className="left">
            <motion.div initial={{opacity: 0, x: -1000}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -1000}} transition={{duration: 0.75}}>
                <h2 className="title">Let&apos;s create something cool together.</h2>
                <h2 className="subtitle">Tell us when you&apos;re available and we&apos;ll respond within 24 hours!</h2>
                <form className="form-container">
                    <div className='inputs'>
                        <input className="text-input" autocomplete="name" placeholder="Name" type="text" name="your-name"/>
                        <input className="text-input" autocomplete="name" placeholder="Email Address" type="text" name="your-email"/>
                        <input className="text-input" autocomplete="name" placeholder="Number" type="text" name="your-number"/>
                        <input className="text-input" autocomplete="name" placeholder="Project Type" type="text" name="your-project"/>
                        {/* <input className="text-input" autocomplete="name" placeholder="Availability" type="text" name="your-availability"/> */}
                        {/* <DatePicker value={value} onChange={setValue} multiple={true} /> */}
                        <h2 class='calendar-header'>Availability</h2>
                        <Calendar 
                        className="rmdp-mobile"
                        value={value}
                        onChange={setValue}
                        multiple={true}
                        plugins={[
                            <DatePanel sort="date" />
                          ]}
                        />
                        <button className="submit-button" type="submit">Submit</button>
                    </div>
                    <div className="form-pic-container">
                        <Image src={formpic} 
                            className='form-pic'
                            alt='oops'
                            width={500}
                        />
                    </div>
                    
                </form>
                </motion.div>
            </div>  
            
            
        </div>
        
        </>
        
    )
}