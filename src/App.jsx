import DefaultButtons from './components/DefaultButtons.jsx'
import Input from './components/Input.jsx'
import WeatherSection from './components/WeatherSection.jsx'
import getFormattedWeatherData from './services/weatherService.js'
import {useState, useEffect} from 'react'

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
    const data = await getFormattedWeatherData({...query, units})
    setWeatherData(data)
  }

  useEffect(() => {
    getWeather()
  }, [query, units])


  return (
    <div id="container" className='rounded-md shadow-lg bg-gradient-to-r from-sky-200 to-sky-600'>
      <DefaultButtons onQuery={handleQuery}/>
      <Input onUnit={handleUnit}/>
      {!weatherData ? <h1>WAIT FETCHING DATA...</h1> : <WeatherSection weather={weatherData}/>}
      
    </div>
  )
}

export default App
