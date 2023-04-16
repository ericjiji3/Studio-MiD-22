import Image from 'next/image';
import {useState} from 'react';

export default function WorkTab(props){
    const [activeImage, setActiveImage] = useState(false);
    return(
        <div className="work-tab" onMouseEnter={()=>setActiveImage(true)} onMouseLeave={()=>setActiveImage(false)}>
            <div className="tab-info">
                <h2>{props.projectName}</h2>
                <span>{props.projectDetails}</span>
            </div>
            <div className={activeImage ? 'image-container active' : 'image-container'}>
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