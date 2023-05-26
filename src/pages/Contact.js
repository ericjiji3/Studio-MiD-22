import {useEffect, useRef} from 'react';
import Head from 'next/head';
import React from "react";
import cover from '../../public/images/opening/opening-04.jpg';
import Image from 'next/image';
import { motion,AnimatePresence } from "framer-motion";
import formpic from '../../public/images/opening/opening-04.jpg';
import { useState } from "react";
import {DatePicker, Calendar, DateObject} from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import emailjs from '@emailjs/browser';
import mailIcon from '../../public/images/mail-icon.png';
import phoneIcon from '../../public/images/call-icon.png';

export default function Contact(){
    const date = new DateObject();
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

        var availibility = "";
        console.log(Array.isArray(dates));
        console.log(dates);
        if(Array.isArray(dates)){
            for(const date in dates){
                console.log("weekday: " + dates[date].weekDay.shortName);
                console.log("month: " + dates[date].month.shortName);
                console.log("day: " + dates[date].day);
                console.log("year: " + dates[date].year); 
                var availableDate = `\n ${dates[date].weekDay.shortName} ${dates[date].month.shortName} ${dates[date].day} ${dates[date].year}`;
                availibility += new String(availableDate);
            }
        }else{
            var singleDate = new String(dates);
            console.log(singleDate.substring(0,15));
            availibility += new String(singleDate.substring(0,15));
        }

        var data = {
            'name' : name,
            'project' : project,
            'phone' : phone,
            'email' : email,
            'availibility' : availibility
        }

        console.log(data);
        if(validateFields(data)){
            buttonRef.current.classList.add('loading');
            emailjs.send('service_7gh8q8j', 'template_6oqmh07', data, 'y1Y--zncppiwqV9Le')
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
        <div className="contact">
        <motion.div className="animate" initial={{opacity: 0, y: -400}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -400}} transition={{duration: 0.75}}>
            <div className="left">
            
                <h2 className="title">Let&apos;s create something cool together.</h2>
                <h2 className="subtitle">Tell us when you&apos;re available and we&apos;ll respond within 24 hours!</h2>
                <a href="mailto:studiomid22@gmail.com"><Image src={mailIcon} width={25} alt="oopsie"/><h2 className="linkText">studiomid22@gmail.com</h2></a>
                <a href="tel:281-748-2672"><Image src={phoneIcon} width={25} alt="oopsie"/><h2 className="linkText">281-748-2672</h2></a>
                <form className="form-container" ref={form} onSubmit={sendEmail}>
                    <div className='inputs'>
                        <label className="name-input">
                            <input className="text-input" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} type="text" name="name"/>
                            <span className={nameErr ? 'req-text active' : 'req-text'}>*Required Field</span>
                        </label>
                        <label className="email-input">
                            <input className="text-input" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email"/>
                            <span className={emailErr ? 'req-text active' : 'req-text'}>*Required Field</span>
                        </label>
                        <label className="phone-input">
                            <input className="text-input" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} type="text" name="phone"/>
                            <span className={phoneErr ? 'req-text active' : 'req-text'}>*Required Field</span>
                        </label>
                        <select className="text-input" name="project" onChange={(e) => setProject(e.target.value)} value={project}>
                                <option value="" disabled selected hidden>Project Type</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Creative">Creative</option>
                                <option value="Portrait">Portrait</option>
                                <option value="Headshot">Headshot</option>
                                <option value="Product Shoot">Product Shoot</option>
                                <option value="Album Cover">Album Covers</option>
                                <option value="Fashion">Fashion</option>
                        </select>
                        <button className="submit-button" type="submit" ref={buttonRef}><span class='submit-text'>Submit</span><span className="loading-animation"></span><div class="checkmark"></div></button>
                    </div>
                    <div className="form-pic-container">
                    <div class="calendar-container">
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
                        </div>
                        <Image src={formpic} 
                            className='form-pic'
                            alt='oops'
                            width={500}
                        />
                    </div>
                    
                </form>
                
            </div>  
            </motion.div>
            
        </div>
        
        </>
        
    )
}