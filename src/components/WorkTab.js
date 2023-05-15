import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';
import Works from "./Works.js";

export default function WorkTab(props){
    const [activeImage, setActiveImage] = useState(false);
    const imageRef = useRef();
    const tab = useRef();
    
    function handleHover(e){
        setActiveImage(true);
    }
    function handleLeave(e){
        setActiveImage(false); 
    }
    function handleFollow(e){
        e.preventDefault();
        if(activeImage){
            const image = imageRef.current;
            const localX = e.clientX - tab.current.offsetLeft - image.clientWidth/2;
            const localY = e.clientY - tab.current.offsetTop;
            const x = localX + 30;
            const y = localY - image.clientHeight/2;
            image.animate({
                left: x + 'px',
                top: y + 'px'
            },{duration: 3000, fill: 'forwards'})
            // image.style.left = localX + 30 + 'px';
            // image.style.top = localY - image.clientHeight/2 + 'px';
            // const imagePos = e.clientY  + image.clientHeight/2;
            // image.style.transform = 'translateY(-' + image.clientHeight + 'px)';
        }
    }
    // useEffect(() => {
    //         const image = imageRef.current;
    //         if(activeImage){
    //             console.log('huh: ' + position.x + ' ' + position.y);
    //         }
            
    //     }, [])

    return(
        <div className={activeImage ? 'work-tab active' : 'work-tab'} onMouseMove={handleFollow} onMouseOver={handleHover} onMouseLeave={handleLeave} ref={tab}>

                <div className="tab-info">
                    <h2>{props.projectName}</h2>
                    <span>{props.projectDetails}</span>
                </div>
                <div className={activeImage ? 'image-container active' : 'image-container'} ref={imageRef}>
                    
                        <Image
                            src={props.image}
                            width={200}
                            height={300}
                            alt="oops"
                        />
                    
                </div>
                <div className="triangle"></div>
        </div>
    )
}