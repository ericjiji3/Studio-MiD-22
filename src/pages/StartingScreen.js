import Image from 'next/image';
import op1 from '../../public/images/opening/opening-01.jpg';
import op2 from '../../public/images/opening/opening-02.jpg';
import op3 from '../../public/images/opening/opening-03.jpg';
import op4 from '../../public/images/opening/opening-04.jpg';
import op5 from '../../public/images/opening/opening-05.jpg';
import op6 from '../../public/images/opening/opening-06.jpg';
import op7 from '../../public/images/opening/opening-07.jpg';
import op8 from '../../public/images/opening/opening-08.jpg';
import op11 from '../../public/images/opening/opening-11.jpg';
import op12 from '../../public/images/opening/opening-12.jpg';
import op13 from '../../public/images/opening/mexico-27.jpg';
import Logo from '../../public/mid21.png';
import {useRef, useState, useEffect} from 'react';

export default function StartingScreen(props){
    const [activeIndex, setActiveIndex] = useState(0);
    const [images, setImages] = useState([
            op1,
            op3,
            op4,
            op6,
            op8,
            op7,
            op11,
            op12,
            op13

    ]
    );
    const [time, setTime] = useState(1000);
    const [intervalId, setIntervalId] = useState(null);
    let timer;
    
    useEffect(()=>{
        
        const newTimer = setInterval(switchImage, time);
        timer = newTimer;
        // setIntervalId(timer);
        return ()=>{
            clearInterval(timer);
        }
    }, [switchImage])
    function switchImage(){
        // console.log(activeIndex, images.length);
        if(props.click){
            clearInterval(timer);
            return;
        }
        if(activeIndex < images.length - 1){
            setActiveIndex(activeIndex + 1);
        }else{
            setActiveIndex(0);
        }
        
        return activeIndex;
    }
    // function stopInterval(){
    //     clearInterval(timer);
    // }
    
    return(
        <div className={props.click ? 'starting-screen clicked' : 'starting-screen'}>
            <Image
                src={Logo}
                width={30}
                className="logo"
                alt=""
            />
            <div className="covers-container">
                {/* <Image
                    src={images[activeIndex]}
                    className='cover'
                    alt='err'
                /> */}
                <video autoPlay={true} loop={true} playsInline muted >
                    <source src={require('../../public/images/opening/openingvid.mp4')}/>
                </video>
            </div>
        </div>
    )
}