import React from 'react'

export default function Header() {
    const text="Your Dream Job Search Ends Here"
    const firstthree=text.slice(0,14);
    const next=text.slice(14);
  return (
    <div className='mt-20 flex flex-col gap-5 items-center justify-center cursor-default'>

        <h1 className='cursor-default lg:text-4xl font-bold md:text-3xl sm:text-2xl'>
            <span className='text-gray-900'>{firstthree}</span>
            <span className='text-gray-100'>{next}</span>
        </h1>



        <p className=' lg:text-xl sm:text-l  font-semi-bold text-gray-100'>Get latest job openings that best suits you!</p>
    </div>
  )
}



