
import { useEffect,useState } from 'react';
import './App.css'


interface DummyType {
  coord:{
lon:number,
lat:number
  };
  city:string;
 
}


function App() {

   const [data,setData]=useState<DummyType[]>([])


  const url = 'https://open-weather13.p.rapidapi.com/city/landon/%7Blang%7D';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f2ab028663msh36324debed3f59cp19e7e3jsn408de536ee8e',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

      useEffect( async ()=>{
        const response = await fetch(url,options);
        const result = await response.json();

        setData(result)
        console.log(result)
},[])

  return (




    <>
   {
    data.map((data)=>(
      <h1>{data.city}</h1>
    ))
   }
    </>
  )
}

export default App
