import React from 'react'
import dayjs from 'dayjs';

function Jobcard(props) {

    // const skills=["ReactJs","SpringBoot","MySql"]
    const date1=dayjs(Date.now());
    const diff=date1.diff(props.postedOn,'day');
  return (
    <div className='mx-40 mb-4 mt-10 '>
       <div className=' flex justify-between items-center bg-white px-6 py-4 rounded-md  border-black shadow-lg hover:border-blue-900 hover:translate-y-1 hover:scale-105'>
        <div className='flex flex-col item-start gap-3'>
             <h1 className='text-lg font-semibold'>{props.title}-{props.company}</h1>
             <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
             <div className=' flex item-center gap-2 '>
                {props.skills.map((skill)=>(
                    <p key={skill} className='text-gray-400 py-1 px-2 rounded-md border border-black'>{skill}</p>
                ))}
                </div>
             
        </div>

        <div className=' flex items-center gap-4'>
            <p text-gray-500> {diff >1 ?  `${diff} days ago` : `${diff} day ago`}</p>
            <a href={props.job_link}>
            <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Apply</button></a> 
        </div>
        </div>
    </div>
  )
}

export default Jobcard
