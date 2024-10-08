import React from 'react'

export default function DefaultButtons({onQuery}) {
    const DEFAULT = [
        {id: 1, city: 'Brescia'},
        {id: 2, city: 'Cork'},
        {id: 3, city: 'Osaka'},
        {id: 4, city: 'Perth'},
        {id: 5, city: 'Miami'}
    ]

  return (
    <div className='flex flex-wrap justify-between items-center p-4'>
      {DEFAULT.map((d) => 
        <button onClick={() => onQuery(d.city)} className="text-black p-3 hover:text-zinc-600" key={d.id}>{d.city}</button>
      ) }
    </div>
  )
}
