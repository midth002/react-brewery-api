import React from 'react'
import { Card } from 'react-bulma-components';
import { faGlobe, faCompass } from '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BreweryList = ({brewery}) => {



  return (
    <>
    {brewery.map((brew) => {
        return (
            <Card className="column is-one-fifth m-2 single-brew-card" key={brew.id}>
            <h3>{brew.name}</h3>
            <p>{brew.brewery_type}</p>
            <p>{brew.city}, {brew.state}</p>
            <a href={brew.website_url}><FontAwesomeIcon icon={faGlobe} /></a>
            <a href='https://www.google.com/maps'><FontAwesomeIcon icon={faCompass} className='compass' /></a>
        </Card>
        )
        
    }
      
    )
    }
    </>)
}

export default BreweryList