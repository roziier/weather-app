import React from 'react'

export default function Input() {
  return (
    <div className='p-5 flex flex-wrap justify-center items-center '>
      <div className="min-[0px]:w-full md:w-2/4 lg:w-2/4 border-2 border-black">
        <input type="text" className="w-full"/>
      </div>
      <div className="min-[0px]:w-full md:w-2/4 lg:w-2/4 flex justify-between items-center p-2">
        <h2>HELLO</h2>
        <h2>HELLO</h2>
      </div>
    </div>
  )
}
