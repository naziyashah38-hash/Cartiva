import React from 'react'
import { UserRoundKey , BaggageClaim , SearchCheck} from 'lucide-react';
import Hero from './Hero'


const Search = () => {
  return (
    <div >

      <div className='flex justify-between'>
          
          <div className='flex gap-18 text-lg bold mt-3 ml-15 cursor-pointer mb-10 text-[#722F37] p-3 rounded-full '>
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
        <span className='hover:text-[#a71e2e]/70 transition-colors duration-300'>Collections</span>
        <span className='hover:text-[#a71e2e]/70 transition-colors duration-300'>Gifts</span>
      </div>

            <div className='flex justify-between '>
              <div className='text-3xl font-bold text-center mr-115  mt-5 mb-10'>
           Cartiva 
        </div>

              <div className='flex justify-between text-[#722F37]'>
                <p className='p-3 mt-2 flex text-bold mr-10 '><SearchCheck strokeWidth={1.25} /></p>
              <span className='p-3 mt-2 text-bold mr-10 '><UserRoundKey strokeWidth={1.25} color='#722F37' /></span>
              <span className='p-3 mt-2 text-bold mr-10 '> <BaggageClaim strokeWidth={1.25} /></span>
           </div>
            </div>

      </div>
       <Hero />
    </div>
  )
}

export default Search

