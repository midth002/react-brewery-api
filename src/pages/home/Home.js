import React from 'react'
import beerGIF from '../../images/beer-67.gif'
import './home.css';
import { Card } from 'react-bulma-components'
const Home = () => {
  return (
    <div className="columns is-justify-content-center">
        
        <Card className="description-home column is-justify-content-center is-half">
        <h2>Welcome to FindMeABrew!</h2>
            <p>This project was inspired by the cold days of winter being over and finding hot spots around your location or any city you would like to get a cold brew. 
               The application uses <a href="https://www.openbrewerydb.org/">openbrewerydb</a> to find breweries around the world. </p>
            <p>Click on <span className="highlight">LOCATION</span> to find breweries in your area. Or click on <span className="highlight">SEARCH</span> to find breweries in a specific city.</p>
        
        <div className='beer-gif'>
            <img src={beerGIF}/>
        </div>
        </Card>
    </div>
  )
}

export default Home