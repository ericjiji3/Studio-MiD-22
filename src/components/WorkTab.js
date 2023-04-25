import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';

export default function WorkTab(props){
    const [activeImage, setActiveImage] = useState(false);
    const [position, setPosition] = useState({x: 0,y: 0})
    const imageRef = useRef();
    const tab = useRef();
    
    function handleHover(e){
        setActiveImage(true);
    }
    function handleLeave(e){
        setActiveImage(false); 
    }
    function handleFollow(e){
        if(activeImage){
            console.log(e.clientX, e.clientY);
            console.log("tab: " + tab.current.offsetTop);
            const image = imageRef.current;
            const localX = e.clientX - tab.current.offsetLeft + 20;
            const localY = e.clientY - tab.current.offsetTop;
            image.style.left = localX + 'px';
            image.style.top = localY - image.clientHeight/6 + 'px';
            const imagePos = e.clientY  + image.clientHeight/2;
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
                <div className="triangle">
            </div>
        </div>
    )
}