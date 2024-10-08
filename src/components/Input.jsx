import React from 'react'

export default function Input() {
  return (
    <div className='p-5 flex flex-wrap justify-center items-center '>
      <div className="min-[0px]:w-full md:w-2/4 lg:w-2/4">
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" placeholder="Search City..."/>
      </div>
      <div className="min-[0px]:w-full md:w-2/4 lg:w-2/4 flex justify-between items-center p-2">
        <h2>HELLO</h2>
        <h2>HELLO</h2>
      </div>
    </div>
  )
}
