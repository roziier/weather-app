import { log } from 'console'
import DefaultButtons from './components/DefaultButtons.jsx'
import Input from './components/Input.jsx'
import WeatherSection from './components/WeatherSection.jsx'
import getFormattedWeatherData from './services/weatherService.js'
import {useState, useEffect} from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({q: "cork"})
  const [units, setUnits] = useState("metric")
  const [weatherData, setWeatherData] = useState(null)

  function handleQuery(city) {
    setQuery({q: city})
  }

  function handleUnit(unit) {
    setUnits(unit)
  }

  const getWeather = async () => {
    const message = query.q ? query.q : 'current location'
    toast.info(`Fetching weather data for ${message.toUpperCase()}`)
    const data = await getFormattedWeatherData({...query, units})
    setWeatherData(data)
    toast.success(`Fetched weather data for ${message.toUpperCase()}`)
  }

  useEffect(() => {
    getWeather()
  }, [query, units])

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords
        setQuery({lat: latitude, lon: longitude})
       })
    }
  }

  let cssClass = 'bg-gradient-to-r from-sky-200 to-sky-600'
  if (units !== "metric") {
    cssClass = 'bg-gradient-to-r from-red-200 to-orange-300'
  }


  return (
    <div id="container" className={`rounded-md shadow-lg ${cssClass}`}>
      <DefaultButtons onQuery={handleQuery}/>
      <Input onLocation={handleLocationClick} onUnit={handleUnit} onQuery={handleQuery}/>
      {!weatherData ? <h1>WAIT FETCHING DATA...</h1> : <WeatherSection weather={weatherData}/>}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored"/>
    </div>
  )
}

export default App
