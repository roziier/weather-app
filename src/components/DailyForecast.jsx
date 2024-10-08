import React from 'react'

export default function DailyForecast({title}) {
  return (
    <>
        <h1 className='my-6'>{title}</h1>
        <hr className='h-px my-3 border-1 border-black w-full'/>

        <div className='w-full min-[0px]:flex-wrap md:flex-nowrap flex justify-center items-center overflow-visible'>
            
                <div className='py-5 min-[0px]:w-full md:w-36 flex min-[0px]:flex-row md:flex-col min-[0px]:justify-between md:justify-center items-center mx-4'>
                    <h1 className='min-[0px]:text-xs md:text-small lg:text-base lg:font-base'>HELLO</h1>
                    <h1>FFF</h1>
                </div>
            
        </div>
    </>
  )
}