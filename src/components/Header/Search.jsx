import React from 'react'
import { UserRoundKey , BaggageClaim , Send} from 'lucide-react';
import Hero from './Hero'

const Search = () => {
  
  return (
    <div>
      <div className='flex justify-between '>
        <span className='text-lg bold mt-8 mr-10 ml-2 mb-10 text-[#226192] p-3 rounded-full'>
        <UserRoundKey strokeWidth={1.25} color='#000000' />
      </span>
      

        <div className='text-3xl font-bold text-left ml-8 mt-10 mb-10'>
          Cartiva 
        </div>
        
        <div className='flex justify-between '>
        <input className=' w-150 text-lg bold mt-8 ml-40 mb-10 text-[#226192] bg-[#e6d9bf]/80 p-3 rounded-full' placeholder='search' />
       <button className='ml-3'> <Send strokeWidth={1.25} /></button> 
      </div>

      <div className='flex gap-10 text-lg bold mt-8 cursor-pointer mb-10 text-[#226192] p-3 rounded-full '>
        <span className='hover:text-[#a71e2e]/70 transition-colors duration-300'>Return</span>
         <span
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
            className="hover:text-[#a71e2e]/70 transition-colors duration-300"
          >
            About us
          </span>
        <span className='hover:text-[#a71e2e]/70 transition-colors duration-300'>Category</span>
        <span className='hover:text-[#a71e2e]/70 transition-colors duration-300'>Contact us</span>
      </div>
      

      <span className='text-lg bold mt-8 mr-10 mb-10 text-[#226192] p-3 rounded-full'>
      <BaggageClaim strokeWidth={1.25} />
      </span>
      </div>

      <Hero />
      
    </div>
  )
}

export default Search
