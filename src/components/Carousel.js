import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import * as ReactDOM from 'react-dom';

export default function Carousel({images}){
    const [imageSize, setImageSize] = useState(1);
    const sliderRef = useRef();
    const imageRef = useRef();
    const pauseClass = 'pause-state-class';

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     const handleWheel = (event) =>{
    //         event.preventDefault();
    //         const scrollAmount = event.deltaY;
    //         if(event.deltaY > 0){
    //             slider.slickPrev();
    //         }else{
    //             slider.slickNext();
    //         }
    //     }

    //     window.addEventListener('mouseover', handleHover);

    //     return() => {
    //         window.removeEventListener('mouseover', handleHover);
    //     };
    // }, [])
    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     const handleMouseEnter = (e) => {
    //         e.preventDefault();
    //         console.log(window.getComputedStyle(slider).getPropertyValue("border-radius"));
    //     }
    //     window.addEventListener('mouseover', handleMouseEnter);

    //     return() => {
    //         window.removeEventListener('mouseover', handleMouseEnter);
    //     };
    // })
    

    // const handleMouseLeave = e =>{
    //     const slider = sliderRef.current;
    //     slider.slickPlay();
    // }

    // const settings = {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 0,
    //     speed: 5000,
    //     arrows: false,
    //     variableWidth: true,
    //     cssEase: 'linear',
    //     dots: false,
    //     pauseOnHover: true
    //   };
    useEffect(() => {
        let styleSheet = document.styleSheets[0];
        const img = imageRef.current;
        const slider = sliderRef.current;
        console.log(images.length);
        slider.style.width = img.clientWidth * images.length + 'px';
        let keyframes =
        `@-webkit-keyframes scroll {
            0% {-webkit-transform:translateX(0)} 
            100% {-webkit-transform:translate(-${(img.clientWidth + 50) * (images.length)}px)}
        }`;
        // let boxKeyframes = 
        // `@-webkit-keyframes scroll {
        //     0% {-webkit-transform:} 
        //     100% {-webkit-transform:translate(-${(img.clientWidth + 50) * (images.length)}px)}
        // }
        // `
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        // styleSheet.insertRule(boxKeyframes, styleSheet.cssRules.length);
    })
    let style = {
        animationName: 'scroll',
        animationTimingFunction: 'linear',
        animationDuration: '80s',
        animationDelay: '0.0s',
        animationIterationCount: 'infinite'
      };
    return(
        <div className="carousel" >
            <div className='gallery' ref={sliderRef} style={style}>
                {/* <Slider {...settings}> */}
                    
                        {images.map((image) => (
                            <div className='image-container'>
                            <Image
                                data-key={image.id}
                                src={image.src}
                                width={250}
                                height={340}
                                alt="oops"
                                ref={imageRef}
                            />
                            </div>
                        ))}
                        {images.map((image) => (
                            <div className='image-container'>
                            <Image
                                data-key={image.id}
                                src={image.src}
                                width={250}
                                height={340}
                                alt="oops"
                                ref={imageRef}
                            />
                            </div>
                        ))}
                    
                {/* </Slider> */}

            </div>
        </div>
    )
}