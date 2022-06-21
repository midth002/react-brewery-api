import { useState, useEffect } from "react"
import Weather from "../weather/Weather";

const WeatherBoard = () => {
    const [ lat, setLat ] = useState([]);
    const [ long, setLong ] = useState([]);
    const [ data, setData ] = useState([]);
    const apiKey = process.env.WEATHER_API_KEY;

    useEffect(() => {
        const fetchWeatherData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
              });

                //
              console.log(apiKey)
      
              await fetch(` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=385e58697effddc1169cee4d7d6e5489`)
              .then(res => res.json())
              .then(result => {
                setData(result)
                console.log(result);
              });
        }
        
        fetchWeatherData();
    
        // console.log("Latitude is:", lat)
        // console.log("Longitude is:", long)
      }, [lat, long]);

  return (
    <div className="is-widescreen weather-div">
            {(typeof data.current != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
    </div>
  )
}

export default WeatherBoard