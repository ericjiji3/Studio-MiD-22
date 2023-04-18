import Image from 'next/image';
import Ming from '../../public/images/about/ming.jpg';
import Michelle from '../../public/images/about/michelle.jpg';

export default function About(){
    return(
        <div className="about">
            <div className="profile ming">
                <div className="image-container">
                    <Image src={Ming} width={700} height={500}/>
                </div>
                
                <div className="text-container">
                    <h2>Mingjian Dan</h2>
                    <span>Photographer</span>
                    <div className="content">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum posuere. Cras sed felis eget velit aliquet sagittis id.</span>
                    </div>
                </div>
            </div>
            <div className="profile michelle">
                <div className="image-container">
                    <Image src={Michelle} width={700} height={500}/>
                </div>
                
                <div className="text-container">
                    <h2>Michelle Ngo</h2>
                    <span>Marketing</span>
                    <div className="content">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum posuere. Cras sed felis eget velit aliquet sagittis id.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}