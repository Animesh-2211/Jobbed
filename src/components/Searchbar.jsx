
import React from 'react'
import { useEffect, useState } from 'react'

function Searchbar(props) {


    const[jobCriteria,setJobCriteria]=useState({
        title:"",
        location:"",
        type:"",
        experience:""



    })


    console.log(jobCriteria)


    const search =async()=>{
        await props.fetchJobsCustom(jobCriteria);
    }
    return (
        <div className=' mt-10 flex flex-wrap justify-center items-center gap-5'>
            <select  name="title" value={jobCriteria.title} onChange={(e)=>setJobCriteria({...jobCriteria,title:e.target.value})} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected >Job Role</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Data Analyst">Data Analyst</option>
            </select>

            <select  name="type" value={jobCriteria.type} onChange={(e)=>setJobCriteria({...jobCriteria,type:e.target.value})} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected >Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Fresher">Fresher</option>
             
            </select>

           

            <select name="location" value={jobCriteria.location} onChange={(e)=>setJobCriteria({...jobCriteria,location:e.target.value})} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected >Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
              
            </select>

            <select  name="experience" value={jobCriteria.experience} onChange={(e)=>setJobCriteria({...jobCriteria,experience:e.target.value})} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected >Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior level">Senior level</option>
                
            </select>
            <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
            
        </div>
    )
}

export default Searchbar