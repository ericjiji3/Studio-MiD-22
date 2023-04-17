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
            const localX = e.clientX - e.target.offsetLeft;
            const localY = e.clientY - e.target.offsetTop;
            image.style.left = e.clientX + 'px';
            image.style.top = e.clientY + 'px';
            const imagePos = e.clientY  + image.clientHeight/2;
            image.style.transform = 'translateY(-' + imagePos + 'px)';
        }
    }
    // useEffect(() => {
    //         const image = imageRef.current;
    //         if(activeImage){
    //             console.log('huh: ' + position.x + ' ' + position.y);
    //         }
            
    //     }, [])

    return(
        <div className="work-tab" onMouseMove={handleFollow} onMouseOver={handleHover} onMouseLeave={handleLeave} ref={tab}>

                <div className="tab-info">
                    <h2>{props.projectName}</h2>
                    <span>{props.projectDetails}</span>
                </div>
                <div className={activeImage ? 'image-container active' : 'image-container'} ref={imageRef}>
                    <Image
                        src={props.image}
                        width={200}
                        height={300}
                    />
                </div>
                <div className="triangle">
            </div>
        </div>
    )
}