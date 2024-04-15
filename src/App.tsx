
import { ChangeEvent, useEffect,useState } from 'react';
import {weatherTypes} from "./types"
import Card from './Card';
import './App.css'

function App() {

  const[weatherData,setWeatherData] = useState<weatherTypes>();
  const[loading,setLoading] = useState<boolean>(true);
  const[search,setSearch] = useState('London');
  const[secondSearch,setSecondSearch]=useState('');


  console.log(search)

  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f2ab028663msh36324debed3f59cp19e7e3jsn408de536ee8e',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };




  const fetchData =async ()=>{
    const response =await fetch(url,options);
    const result = await response.json();
   if(weatherData === undefined ){
     setWeatherData(result)
      setLoading(false)
   }
   if(search !== null && search.length > 3){
    setWeatherData(result)
   }

  
  
    console.log(result);
  
  }
console.log(url)

useEffect(()=>{
fetchData();
},[search,url])

const searchHandler = (e:ChangeEvent<HTMLSelectElement>)=>{
  setSecondSearch(e.target.value)
}

const onSubmit =()=>{

  
  fetchData()



  setSearch(secondSearch)
  console.log(weatherData)
  
}

  console.log(weatherData)

  if(loading){
    return <h1>Loading ... </h1>
  }
  


  return (
    <>

    <div className='w-screen h-screen flex flex-col items-center py-10'>

  <h1 className='text-5xl font-semibold text-gray-50  m-4'>Daniel Weather app</h1>
<div className='flex flex-col  justify-center items-center'>

  <input className='m-4 w-72 text-3xl border-2 bg-transparent text-gray-50 outline-none' type="text" onChange={(event:ChangeEvent<HTMLSelectElement>)=>{searchHandler(event)}} />
  <button className='border-2 m-4 text-2xl text-gray-50 cursor-pointer rounded-lg px-3' onClick={()=>{onSubmit();}}>Search</button>
</div>
<Card weatherData={weatherData}/>
    </div>
    </>
  )
}

export default App;
