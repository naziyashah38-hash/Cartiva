import React from 'react'
import { UserRoundKey } from 'lucide-react';
import Hero from './Hero'

const Search = () => {
  return (
    <div>
      <div className='flex justify-between '>
        <div className='text-3xl font-bold text-left ml-20 mt-10 mb-10'>
          Cartiva 
        </div>
        <input className='w-150 text-lg bold mt-8 ml-70 mb-10 text-[#226192] bg-[#e6d9bf] p-3 rounded-full' placeholder='search' />
      
      <div className='flex gap-10 text-lg bold mt-8 cursor-pointer mb-10 text-[#226192] p-3 rounded-full'>
        <span>Home</span>
        <span>About us</span>
        <span>Category</span>
        <span>Contact us</span>
      </div>
      <span className='text-lg bold mt-8 mr-10 mb-10 text-[#226192] p-3 rounded-full'>
        <UserRoundKey strokeWidth={1.25} color='#000000' />
      </span>
      </div>

      <Hero />
      
    </div>
  )
}

export default Search
