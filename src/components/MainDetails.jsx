import React from 'react'

export default function MainDetails({weather}) {
  return (
    <div className='p-5 min-[0px]:w-full md:w-2/4 flex flex-col justify-center items-center'>
        <h5 className='font-extralight text-sm pt-4'>{weather.formattedLocalTime}</h5>
        <h5 className='text-xl pt-4'>{weather.name}</h5>
        <h1 className='font-semibold text-5xl pt-4'>{weather.temp.toFixed(0)}°</h1>
        <img src={weather.icon} alt="icon" />
    </div>
  )
}
