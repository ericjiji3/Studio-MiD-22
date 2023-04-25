import WorkTab from '../components/WorkTab.js';
import utility from '../../public/images/creative/creative1.jpg';
import shadow from '../../public/images/creative/creative15.jpg';
import plastic from '../../public/images/creative/creative16.jpg';

export default function Work(){

    return(
        <div className='work'>
                <WorkTab projectName="Utility Poles" projectDetails="Mingjian Dan, March 2023" image={utility}/>
                <WorkTab projectName="Shadow Studies" projectDetails="Mingjian Dan, August 2020" image={shadow}/>
                <WorkTab projectName="Plastic Identity" projectDetails="Mingjian Dan, July 2020" image={plastic}/>
        </div>
    )
}