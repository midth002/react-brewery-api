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
            <div>
                <h5>{weatherData.current.temp} °F</h5>
                <p>{weatherData.current.weather[0].description}</p>
                <p>{weatherData.current.wind_speed} MPH</p>
            </div>
            <div>
              <p>{weatherData.daily[1].temp.max}</p>
            </div>
        </Card>
            
       
    </Container>
  )
}

export default Weather