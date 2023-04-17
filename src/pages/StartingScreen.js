import Image from 'next/image';
import op1 from '../../public/images/opening/opening-01.jpg';
import op2 from '../../public/images/opening/opening-02.jpg';
import op3 from '../../public/images/opening/opening-03.jpg';
import op4 from '../../public/images/opening/opening-04.jpg';
import op5 from '../../public/images/opening/opening-05.jpg';
import Logo from '../../public/mid21.png';
import {useRef, useState, useEffect} from 'react';

export default function StartingScreen(){
    const [activeIndex, setActiveIndex] = useState(0);
    const [images, setImages] = useState([
            op1,
            op2,
            op3,
            op4
    ]
    );
    function switchImage(){
        if(activeIndex < images.length){
            setActiveIndex(activeIndex + 1);
        }else{
            setActiveIndex(0);
        }
        return activeIndex;
    }
    useEffect(()=>{

        const timer = setInterval(switchImage, 1000);
        return ()=>{
            clearInterval(timer);
        }
    }, [])

    
    return(
        <div className="starting-screen">
            <Image
                src={Logo}
                width={30}
                className="logo"
            />
            <div className="covers-container">
                <Image
                    src={images[activeIndex]}
                    className='cover'
                    alt='err'
                />
            </div>
        </div>
    )
}