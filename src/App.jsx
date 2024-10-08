import DefaultButtons from './components/DefaultButtons.jsx'
import Input from './components/Input.jsx'
import WeatherSection from './components/WeatherSection.jsx'
import getFormattedWeatherData from './services/weatherService.js'

function App() {

  const getWeather = async () => {
    const data = await getFormattedWeatherData({q: 'cork'})
    console.log(data);
  }

  getWeather()

  return (
    <div id="container" className='rounded-md shadow-lg bg-gradient-to-r from-sky-200 to-sky-600'>
      <DefaultButtons />
      <Input />
      <WeatherSection />
    </div>
  )
}

export default App
