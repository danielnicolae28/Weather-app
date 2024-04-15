import React from 'react'

import {weatherTypes} from './types'

const Card = ({weatherData}:weatherTypes) => {
  return (
    <>

<div className='bg-slate-400 rounded-xl  w-2/4  h-64 relative'>

<div className='flex w-full justify-around '>

<img src={weatherData.current.condition.icon} alt=""  className='w-34 bg-contain '/>
<div className='flex flex-col mt-3'>

<h2 className='text-lg' >{weatherData.current.condition.text}</h2>
<h2 className='text-6xl font-thin'>{weatherData.current.temp_c}°C </h2>
<h2 className='text-lg'>{weatherData.location.name} ,{weatherData.location.country}</h2>
</div>
</div>

<div className=' w-full h-1 bg-white'></div>
<div className=' w-full flex justify-around my-3 text-2xl'>

<div>
    <h2>Humidity</h2>
    <h2>Wind</h2>
    <h2>Pressure</h2>
</div>
<div>
    <h2>{weatherData.current.humidity}</h2>
    <h2>{weatherData.current.wind_kph}</h2>
    <h2>{weatherData.current.pressure_in}</h2>
</div>
</div>

{/* <h2>Humidity {weatherData.current.humidity}</h2>
<h2> Wind {weatherData.current.wind_kph}</h2>
<h2> Pressure {weatherData.current.pressure_in}</h2> */}

</div>
    </>
  )
}

export default Card