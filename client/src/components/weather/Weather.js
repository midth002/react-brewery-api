import React from 'react'
import { Card, Container } from 'react-bulma-components';
import './weather.css';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
   
// <p>{weatherData.daily[0].weather[0].description}</p>
// <p>{weatherData.daily[0].temp.max} °F</p>
// <p>{weatherData.daily[0].temp.min} °F</p>
const Weather = ({weatherData}) => {

  


  return (
    <Container className="columns parent-container">
        <Card className="column is-half current">
            <div className="columns is-align-content-center is-align-items-center">
              <Card className="column is-one-quarter"><p><FontAwesomeIcon icon={faLocationDot}/> Your Location</p></Card>
                
                <h5>{Math.round(weatherData.current.temp)} °F</h5>
                <img src={`http://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`} />
                <p>{Math.round(weatherData.current.wind_speed)} MPH</p>
                
            </div>
           
            <div className="columns">
            {weatherData.daily.map((daily) => (
              <Card className='column forecast is-flex-wrap-nowrap'>
                <h5>{Math.round(daily.temp.max)}°F</h5>
                <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} />
                </Card>
            ))}
               
            </div>
        </Card>
            
       
    </Container>
  )
}

export default Weather