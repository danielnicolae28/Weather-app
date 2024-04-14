
import { ChangeEvent, useEffect,useState } from 'react';
import {weatherTypes} from "./types"
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
  
//   if(search !== weatherData.location.name)return(
//     <>
//     <div><h1>Daniel Weather app</h1>
// <h3>Enter a valid name</h3>

// <input type="text" onChange={searchHandler} />
// <button onClick={()=>{onSubmit}}>Search</button>



//     </div>
//     </>
//   )

  return (
    <>
  <h1>Daniel Weather app</h1>

  <input type="text" onChange={(event:ChangeEvent<HTMLSelectElement>)=>{searchHandler(event)}} />
  <button onClick={()=>{onSubmit();}}>Search</button>
  <div>

  <h2>{weatherData.location.name}</h2>
  <h2>{weatherData.location.country}</h2>
  <img src={weatherData.current.condition.icon} alt="" />
  <h2>Temperature: {weatherData.current.temp_c}</h2>
  <h2>Feels like: {weatherData.current.feelslike_c}</h2>
  <h2>Sky: {weatherData.current.condition.text}</h2>
  <h2>Humidity: {weatherData.current.humidity}</h2>
  </div>
    </>
  )
}

export default App;
