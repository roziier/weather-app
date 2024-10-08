import {BiSearch, BiCurrentLocation} from 'react-icons/bi'

export default function Input({onUnit}) {

  
  return (
    <div className='p-5 flex flex-wrap justify-center items-center '>
      <div className="min-[0px]:w-full md:w-2/4 lg:w-2/4">
        <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" placeholder="Search City..."/>
      </div>
      <div className="min-[0px]:w-full md:w-2/4 lg:w-2/4 flex justify-between items-center p-2">
        <div className='flex flex-row justify-start items-center'>
          <BiSearch size={20} className='cursor-pointer transition ease-out hover:scale-125 mr-3 hover:text-zinc-600' />
          <BiCurrentLocation size={20} className='cursor-pointer transition ease-out hover:scale-125 hover:text-zinc-600' />
        </div>
        <div className='flex flex-row justify-start items-center'>
          <button onClick={() => onUnit("metric")} className='cursor-pointer transition ease-out hover:scale-125 mr-3 hover:text-zinc-600'>°C</button>
          |
          <button onClick={() => onUnit("imperial")} className='cursor-pointer transition ease-out hover:scale-125 ml-3 hover:text-zinc-600'>°F</button>

        </div>
      </div>
    </div>
  )
}
