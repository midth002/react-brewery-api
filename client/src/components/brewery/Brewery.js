import { useState, useEffect } from "react";
import BreweryList from "./BreweryList";
import { Container } from "react-bulma-components";
import './brewery.css';
import { faCircleChevronRight, faCircleChevronLeft, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Brewery = () => {

    const [ lat, setLat ] = useState([]);
    const [ long, setLong ] = useState([]);
    const [ brewData, setData ] = useState([]);

    

    useEffect(() => {
        const fetchBrewData = async () => {
            await navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
              });

              console.log(lat, long)

       
      
              await fetch(`https://api.openbrewerydb.org/breweries?by_dist=44.762058,-93.275772&per_page=20`)
              .then(res => res.json())
              .then(result => {

                setData(result)
                console.log(result);
              });
        }
        
        fetchBrewData();
    
        // console.log("Latitude is:", lat)
        // console.log("Longitude is:", long)
      }, []);
      
    

  return (
    <Container className='is-fluid is-widescreen mt-5 pb-5'>
    <div className='results-title columns is-align-content-center mb-5'>

        <h2 className="column">Results</h2>

    </div>
    <div className="columns is-flex-wrap-wrap is-justify-content-center">
    {/* <div className='column'><FontAwesomeIcon icon={faCircleChevronLeft}  size="lg" className="arrow-icon"/></div> */}
    
    <BreweryList brewery={brewData} />
    <div className='columns is-full icon-div'> <FontAwesomeIcon icon={faCircleArrowDown}  size="lg" className="arrow-icon column"/></div>
   
    </div>
    </Container>
  )
}

export default Brewery