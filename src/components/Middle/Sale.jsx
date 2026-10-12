import React from 'react'

const Sale = () => {
  return (
    <div>
      
      <h3 className='text-center mt-20 text-5xl font-bold text-[#EF8557]'>
        Daily offer</h3>

         <div  className='flex justify-around '>

        <div className='flex flex-col items-center justify-center text-center font-bold bg-[#063558]/50 w-60 h-80 rounded-lg border-4 border-y-2 border-[#d4c8b0] cursor-pointer ml-20 mr-20 mt-10 p-40'>
          <p className='text-5xl text-[#413827]' >under </p>
          <p className='text-3xl text-[#413827]'>Rs.99</p>
        </div>

        <div className='flex flex-col items-center justify-center text-center font-bold bg-[#063558]/50 w-60 h-80 rounded-lg border-4 border-y-2 cursor-pointer text-[#EF8557] border-[#d4c8b0] p-40 ml-20 mr-20 mt-10'>
         <p className='text-5xl text-[#413827]' >under </p>
          <p className='text-3xl text-[#413827]'>Rs.199</p>
        </div>
        
        <div className='flex flex-col items-center justify-center text-center font-bold bg-[#063558]/50 w-60 h-80 rounded-lg border-4 border-y-2 cursor-pointer text-[#EF8557] border-[#d4c8b0] p-40 ml-20 mr-20 mt-10 '>
          <p className='text-5xl text-[#413827]' >under </p>
          <p className='text-3xl text-[#413827]'>Rs.299</p>
        </div>

        </div>

      </div>
  )
}

export default Sale
