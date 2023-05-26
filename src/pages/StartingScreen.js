import Image from 'next/image';
import Logo from '../../public/mid21.png';
import tap from '../../public/images/tap.gif';
export default function StartingScreen(props){

    
    return(
        <div className={props.click ? 'starting-screen clicked' : 'starting-screen'}>
            <Image
                src={Logo}
                width={50}
                className="logo"
                alt=""
            />
            <Image
                src={tap}
                width={25}
                alt="oops"
                className="tap"
            />
            <div className="covers-container">
                {/* <Image
                    src={images[activeIndex]}
                    className='cover'
                    alt='err'
                /> */}
                <div className="color-filter"></div>
                <video autoPlay={true} loop={false} playsInline muted >
                    <source src={require('../../public/images/opening/openingvid.mp4')}/>
                </video>
            </div>
        </div>
    )
}