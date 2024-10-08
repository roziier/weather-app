import {FaThermometerEmpty} from 'react-icons/fa'
import {BiSolidDropletHalf} from 'react-icons/bi'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import {FiWind} from 'react-icons/fi'
import {GiSunrise, GiSunset} from 'react-icons/gi'
import { MdCompress } from "react-icons/md";

export default function SecondaryDetails({weather}) {
  return (
    <div className='p-5 min-[0px]:w-full md:w-2/4 flex justify-center items-start'>
      <div className="w-2/4 flex flex-col justify-center items-start">
          <div className='flex flex-row justify-around items-center my-3'>
            <FaThermometerEmpty size={25} className='mr-2'/>
            <div className='font-light text-sm'>Real Feel: {weather.feels_like.toFixed(0)}°</div>
          </div>
          <div className='flex flex-row justify-around items-center my-3'>
            <FiWind size={25} className='mr-2'/>
            <div className='font-light text-sm'>Wind: {weather.speed}</div>
          </div>
          <div className='flex flex-row justify-around items-center my-3'>
            <BiSolidDropletHalf size={25} className='mr-2'/>
            <div className='font-light text-sm'>Humidity: {weather.humidity}%</div>
          </div>
          <div className='flex flex-row justify-around items-center my-3'>
            <MdCompress size={25} className='mr-2'/>
            <div className='font-light text-sm'>Pressure: {weather.pressure}</div>
          </div>
      </div>

      <div className="w-2/4 flex flex-col justify-center items-start">
      <div className='flex flex-row justify-around items-center my-3'>
          <MdKeyboardArrowUp size={25} className='mr-2'/>
          <div className='font-light text-sm'>High: {weather.temp_max.toFixed(0)}°</div>
        </div>
        <div className='flex flex-row justify-around items-center my-3'>
          <MdKeyboardArrowDown size={25} className='mr-2'/>
          <div className='font-light text-sm'>Low: {weather.temp_min.toFixed(0)}°</div>
        </div>
        <div className='flex flex-row justify-around items-center my-3'>
          <GiSunrise size={25} className='mr-2'/>
          <div className='font-light text-sm'>Sunrise: {weather.sunrise}</div>
        </div>
        <div className='flex flex-row justify-around items-center my-3'>
          <GiSunset size={25} className='mr-2'/>
          <div className='font-light text-sm'>Sunset: {weather.sunset}</div>
        </div>
      </div>    
    </div>
  )
}
