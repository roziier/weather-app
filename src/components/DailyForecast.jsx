import React from 'react'

export default function DailyForecast({title, forecast}) {
  return (
    <>
        <h1 className='my-6'>{title}</h1>
        <hr className='h-px my-3 border-1 border-black w-full'/>

        <div className='w-full min-[0px]:flex-wrap md:flex-nowrap flex justify-center items-center overflow-visible'>

        {forecast.map((f, index) => 
                <div key={index} className='min-[0px]:w-full md:w-36 flex min-[0px]:flex-row md:flex-col min-[0px]:justify-between md:justify-center items-center mx-5'>
                    <h1 className='min-[0px]:text-xs md:text-small lg:text-base lg:font-base'>{f.title}</h1>
                    <img src={f.icon} alt="img" />
                    <h1 >{f.temp.toFixed(0)}</h1>
                </div>
            )}
            
            
        </div>
    </>
  )
}