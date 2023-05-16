import {useEffect, useRef} from 'react';
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
import emailjs from '@emailjs/browser';

export default function Contact(){
    const [dates, setDates] = useState(new Date());

    const buttonRef = useRef(null);

    const [name, setName] = useState("");
    const [project, setProject] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);

    
    const form = useRef();

    function validateFields(data){
        var validate = true;
        Object.keys(data).forEach(function(field, index){
            console.log(data[field])
            if(field === 'email'){
                var email = data[field];
                email.toLowerCase();
                if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || !email){
                    validate = false;
                    setEmailErr(true);
                }
            }
            if(field === 'name'){
                if(!data[field]){
                    validate = false;
                    setNameErr(true);
                }
            }
            if(field === 'phone'){
                if(!data[field]){
                    validate = false;
                    setPhoneErr(true);
                }
            }
        })
        return validate;
    }
    function sendEmail(e){
        e.preventDefault();
        setNameErr(false);
        setEmailErr(false);
        setPhoneErr(false);

        var data = {
            'name' : name,
            'project' : project,
            'phone' : phone,
            'email' : email,
            'availibility' : dates
        }
        for(const date in data['availibility']){
            console.log(date.year);
        }
        
        if(validateFields(data)){
            buttonRef.current.classList.add('loading');
            emailjs.sendForm('service_7gh8q8j', 'template_6oqmh07', e.target, 'y1Y--zncppiwqV9Le')
            .then((result) => {
                buttonRef.current.classList.remove('loading');
                buttonRef.current.classList.add('success');
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                buttonRef.current.classList.remove('loading');
                buttonRef.current.classList.add('error');
                console.log(error.text);
                e.target.reset();
            });
        } else{
            buttonRef.current.classList.remove('loading');
            buttonRef.current.classList.add('error');
            e.target.reset();
        }
        
    }
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
                <form className="form-container" ref={form} onSubmit={sendEmail}>
                    <div className='inputs'>
                        <input className="text-input" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} type="text" name="name"/>
                        <input className="text-input" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email"/>
                        <input className="text-input" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} type="text" name="phone"/>
                        <input className="text-input" placeholder="Project Type" value={project} type="text" name="projectdfd"/>
                        <select className="text-input" name="project" onChange={(e) => setProject(e.target.value)}>
                            <option value="" disabled selected hidden>Project Type</option>
                            <option value="Graduation">Graduation</option>
                            <option value="Creative">Creative</option>
                            <option value="Portrait">Portrait</option>
                            <option value="Headshot">Headshot</option>
                            <option value="Product Shoot">Product Shoot</option>
                            <option value="Album Cover">Album Covers</option>
                            <option value="Fashion">Fashion</option>
                        </select>
                        {/* <input className="text-input" autocomplete="name" placeholder="Availability" type="text" name="your-availability"/> */}
                        {/* <DatePicker value={value} onChange={setValue} multiple={true} /> */}
                        <h2 class='calendar-header'>Availability</h2>
                        <Calendar 
                        className="rmdp-mobile"
                        value={dates}
                        onChange={setDates}
                        multiple={true}
                        plugins={[
                            <DatePanel sort="date" key={1}/>
                          ]}
                        />
                        <button className="submit-button" type="submit" ref={buttonRef}>Submit</button>
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