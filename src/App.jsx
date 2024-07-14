import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Jobcard from './components/Jobcard'


import { collection, query, getDocs, orderBy,where } from "firebase/firestore";
import { db } from  './firebase.config'

function App() {

  const [jobs,setJobs]=useState([]);
  const fetchJobs=async()=>{
    const jobsRef = query(collection(db, 'jobs'));
    const q = query(jobsRef,orderBy("postedOn","desc"));

    const querySnapshot = await getDocs(q);
    const tempJobs = [];
     querySnapshot.forEach((jobs) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(jobs.id, " => ", jobs.data());
    tempJobs.push({
      ...jobs.data(),
      id:jobs.id,
      postedOn:jobs.data().postedOn.toDate()
        })
});
    setJobs(tempJobs);

  }


  const fetchJobsCustom=async(jobCriteria)=>{
    const jobsRef = query(collection(db, 'jobs'));
    const q = query(jobsRef,where("type","==",jobCriteria.type),where("experience","==",jobCriteria.experience),where("location","==",jobCriteria.location),where("title","==",jobCriteria.title), orderBy("postedOn","desc"));

    const querySnapshot = await getDocs(q);
    const tempJobs = [];
     querySnapshot.forEach((jobs) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(jobs.id, " => ", jobs.data());
    tempJobs.push({
      ...jobs.data(),
      id:jobs.id,
      postedOn:jobs.data().postedOn.toDate()
        })
});
    setJobs(tempJobs);

  }

  useEffect(()=>{
    fetchJobs();
  },[])   

  return (
    
    <div className='bg-gradient-to-tl from-gray-900 via-purple-900 to-violet-600 w-full min-h-screen mb-8'>
     
     <Navbar/>
     <Header/>
     <Searchbar fetchJobsCustom={fetchJobsCustom}/>
     {
      jobs.map((job)=>(
        <Jobcard key={job.id} {...job}/>
      ))
     }



    </div>
   

      
  )
}

export default App
