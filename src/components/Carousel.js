import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";

export default function Carousel({images}){
    const [imageSize, setImageSize] = useState(1);
    const sliderRef = useRef();

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
                                width={300}
                                height={380}
                                alt="oops"
                                
                            />
                            </div>
                        ))}
                    
                </Slider>

            </div>
        </div>
    )
}