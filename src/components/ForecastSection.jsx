import React from 'react'
import HourlyForecast from './HourlyForecast.jsx'
import DailyForecast from './DailyForecast.jsx'

export default function ForecastSection({weather}) {
  return (
    <section className='min-[0px]:px-5 px-16 w-full flex flex-wrap flex-col justify-center items-start'>
        <HourlyForecast forecast={weather.hourly} title="3 HOURS FORECAST" />
        <DailyForecast title="5 DAYS FORECAST"/>
    </section>
  )
}
