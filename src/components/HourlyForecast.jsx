import React from 'react'

export default function HourlyForecast({title, forecast}) {
  return (
    <>
        <h1 className='my-6'>{title}</h1>
        <hr className='h-px my-3 border-1 border-black w-full'/>

        <div className='w-full h-full flex justify-center items-center overflow-auto'>
            {forecast.map((f, index) => 
                <div key={index} className='p-3 w-full flex flex-col justify-center items-center mx-5'>
                    <h1 className='text-sm'>{f.title}</h1>
                    <img src={f.icon} alt="img" />
                    <h1 className='text-xl'>{f.temp.toFixed(0)}</h1>
                </div>
            )}
        </div>
    </>
  )
}
