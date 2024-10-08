import React from 'react' 
import MainDetails from './MainDetails.jsx'
import SecondaryDetails from './SecondaryDetails.jsx'
import ForecastSection from './ForecastSection.jsx'

export default function WeatherSection({weather}) {
  return (
    <section className='p-5 flex flex-wrap justify-center items-center'>
        <MainDetails weather={weather}/>
        <SecondaryDetails weather={weather}/>
        <ForecastSection weather={weather}/>
    </section>
  )
}
