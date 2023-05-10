import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export const getServerSideprops = (context)=>{
    return{
        props: {
            title: context.query.title
        }
    }
}

export default function WorkPage(props){
    const rotuer = useRouter();
    const workId = router.query.WorkPage;
    return(   
        <div className='work-page'>
            <div className="tab-info">
                <h2>shadow</h2>
                
            </div>
        </div>
    )
}