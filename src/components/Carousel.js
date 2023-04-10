import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";

export default function Carousel({images}){
    const [imageSize, setImageSize] = useState(1);
    const sliderRef = useRef();

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     // console.log(slider.style.height);


    //     slider.style.height = slider.childNodes[0].height * 1.15 + 'px';
    //     const handleWheel = (event) =>{
    //         event.preventDefault();
            // const scrollAmount =  event.deltaY > 0 ? event.deltaY - 99 : event.deltaY + 99;
            // console.log(scrollAmount);
            // const center = slider.getBoundingClientRect().x + slider.offsetWidth/2;
            // const images = slider.childNodes;
            // images.forEach((image) => {
            //     const imagePosition = image.getBoundingClientRect().x + image.getBoundingClientRect().width/2;
            //     const scalingFactor = 1/(2 + (Math.pow((center - imagePosition), 2))) + 1;
            //     if(imagePosition < center){
                    
            //         console.log('image ' + image.dataset.key + ': ' + scalingFactor);
            //         image.style.scale = scalingFactor;
                
            //     }
            // })
            
            // slider.scrollTo({
            //     left: slider.scrollLeft + event.deltaY,
            //     behavior: 'smooth'
            // });
            
            // slider.scrollLeft += scrollAmount;
    //     };

    //     window.addEventListener('wheel', handleWheel);

    //     return() => {
    //         window.removeEventListener('wheel', handleWheel);
    //     };
    // }, []);

    useEffect(() => {
        const slider = sliderRef.current;
        const handleWheel = (event) =>{
            event.preventDefault();
            const scrollAmount = event.deltaY;
            if(event.deltaY > 0){
                slider.slickPrev();
            }else{
                slider.slickNext();
            }
        }

        window.addEventListener('wheel', handleWheel);

        return() => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [])

    const settings = {
        arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true
      };

    return(
        <div className="carousel" >
            <div className='gallery'>
                <Slider {...settings} ref={sliderRef}>
                    
                        {images.map((image) => (
                            <div className='image-container'>
                            <Image
                                data-key={image.id}
                                src={image.src}
                                width={450}
                                height={500}
                                alt="oops"
                                
                            />
                            </div>
                        ))}
                    
                </Slider>

            </div>
        </div>
    )
}