import React from 'react'
import { Card, Container } from 'react-bulma-components';
import './weather.css';

   
// <p>{weatherData.daily[0].weather[0].description}</p>
// <p>{weatherData.daily[0].temp.max} °F</p>
// <p>{weatherData.daily[0].temp.min} °F</p>
const Weather = ({weatherData}) => {
  return (
    <Container className="columns pt-5 parent-container">
        <Card className="column is-half current">
            <div className="columns">
                <h5>{weatherData.current.temp} °F</h5>
                <p>{weatherData.current.weather[0].description}</p>
                <p>{weatherData.current.wind_speed} MPH</p>
            </div>
           
            <div className="columns">
            {weatherData.daily.map((daily) => (
              <Card className='column forecast is-flex-wrap-nowrap'>
                <h5>{daily.temp.max}°F</h5>
                <p>{daily.weather[0].description}</p>
                </Card>
            ))}
               
            </div>
        </Card>
            
       
    </Container>
  )
}

export default Weather