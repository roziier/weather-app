import React from 'react'
import Forecast from './Forecast.jsx'

export default function ForecastSection() {
  return (
    <section className='min-[0px]:px-5 px-16 w-full flex flex-wrap flex-col justify-center items-start'>
        <Forecast title="3 HOURS FORECAST" />
        <Forecast title="DAILY FORECAST" />
    </section>
  )
}
