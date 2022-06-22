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
    const [ page, setPage ] = useState(1);
    

    useEffect(() => {
        const fetchBrewData = async () => {
           navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
              });

              console.log(lat, long)

       
      
              await fetch(`https://api.openbrewerydb.org/breweries?by_dist=44.762058,-93.275772&page=${page}&per_page=12`)
              .then(res => res.json())
              .then(result => {

                setData(result)
                console.log(result);
              });
        }

    
       
        fetchBrewData();
        
    
        // console.log("Latitude is:", lat)
        // console.log("Longitude is:", long)
      }, [page]);


      const changePage = () => {
        let pageChange = page + 1;
        setPage(pageChange);
        console.log("changed", page)
        
      }

      const previousPage = () => {
        let pageChange = page - 1;
        setPage(pageChange);
        console.log("previous page", page)
        
      }
      
      
    

  return (
    <Container className='is-fluid is-widescreen pb-5'>
    <div className='results-title columns is-align-content-center mb-5'>

        <h2 className="column is-one-quarter">Results: Page {page}</h2>
        <div className='columns selectPages is-half is-justify-content-end mb-1'>
        {page > 1 && <button onClick={previousPage}>Prev<span><FontAwesomeIcon icon={faCircleChevronLeft}  size="md"  className="arrow-icon column" /></span></button>

        }
        <button onClick={changePage}>Next<FontAwesomeIcon icon={faCircleChevronRight}  size="md"  className="arrow-icon column" /></button></div>
    </div>
    
    <div className="columns is-flex-wrap-wrap is-justify-content-center">
   
    
    <BreweryList brewery={brewData} />
   
   
    </div>
    </Container>
  )
}

export default Brewery