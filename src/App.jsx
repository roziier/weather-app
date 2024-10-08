import DefaultButtons from './components/DefaultButtons.jsx'
import Input from './components/Input.jsx'
import WeatherSection from './components/WeatherSection.jsx'
import getFormattedWeatherData from './services/weatherService.js'
import {useState, useEffect} from 'react'

function App() {

  const [weatherData, setWeatherData] = useState(null)

  const getWeather = async () => {
    const data = await getFormattedWeatherData({q: 'cairo'})
    setWeatherData(data)
  }

  useEffect(() => {
    getWeather()
  }, [])

  console.log(weatherData);

  return (
    <div id="container" className='rounded-md shadow-lg bg-gradient-to-r from-sky-200 to-sky-600'>
      <DefaultButtons />
      <Input />
      {!weatherData ? <h1>WAIT FETCHING DATA...</h1> : <WeatherSection weather={weatherData}/>}
      
    </div>
  )
}

export default App
