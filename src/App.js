import React,{useEffect} from "react";
import Card from "./components/card";
import Input from "./components/input";
import Button from "./components/button"
import { useWeather } from "./context/weather";
import "./App.css";


const App = () =>{
    const weather = useWeather();

    useEffect(()=>{
        weather.fetchCurrentUserLocationData();
    },[])

return (
    <div className="App">
        <h1>Weather Forecast</h1>
        <Input/>
        <Button onClick={weather.fetchData} value = "Search"/>
   <Card/>
   <Button value= "Refresh"/>
    </div>
);
  


}

export default App;
