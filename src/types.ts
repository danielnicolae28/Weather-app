export  interface weatherTypes {
    weatherData:object 
    location:{
        name:string;
        country:string;
     }
    current:{
        condition:{
            text:string;
            icon:string
        }
        temp_c:number;
        feelslike_c:number;
        humidity:number
    }

}
