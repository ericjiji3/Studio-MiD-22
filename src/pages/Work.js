import WorkTab from '../components/WorkTab.js';

export default function Work(){
    const utility = [
        '/../public/images/creative/utility-1.jpg'
    ]

    return(
        <div className='work'>
            <h2>work</h2>
                <WorkTab projectName="Utility Poles" projectDetails="Mingjian Dan, March 2023" image='/../public/images/creative/utility-1.jpg'/>
                <WorkTab projectName="Shadow Studies" projectDetails="Mingjian Dan, August 2020" image='/../public/images/creative/utility-2.jpg'/>
            
            {/* <WorkTab projectName="Plastic Identity" projectDetails="Mingjian Dan, July 2020"/> */}
        </div>
    )
}