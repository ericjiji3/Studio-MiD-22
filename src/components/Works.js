import shadows1 from './creativeWorks/shadow.js';
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';

export default function Works(props){
    const [index, setIndex] = useState(0);

    function prev(imageList){
        if(index == 0){
            setIndex(imageList.length);
        }else{
            setIndex(index-1);
        }
    }

    function next(imageList){
        if(index == imageList.length){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }
    if(props.workName == "Plastic Identity No.1: Open-mindedness is Dislocation"){
        return(
            <div className="works">
                <div className="buttons">
                    <span onClick={()=>{prev(shadows1)}}>left</span>
                    <span>right</span>
                </div>
                {/* <h2>{props.workName}</h2> */}
                {
                    shadows1.map((work, key) => {
                        console.log(work);
                        return(
                            <div className={index==key ? 'work-container active' : 'work-container'} data-key={key}>
                                <Image 
                                    src={work.src}
                                    width={300}
                                    height={500}
                                    alt="oops"
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    
}