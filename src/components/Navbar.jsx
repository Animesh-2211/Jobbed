import React from 'react'

function Navbar() {
    const  text="JOBBED.";
    const firstthree=text.slice(0,3);
    const rest=text.slice(3);
    

  return (
    <div className='text-3xl font-bold p-4 flex justify-center items-center shadow-md h-20'>
    <h1>
        <span className='text-red-400'>{firstthree}</span>
        <span className='text-red-200'>{rest}</span>



    </h1>
    </div>
  )
}

export default Navbar