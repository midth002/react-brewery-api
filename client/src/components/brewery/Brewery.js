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
    const [ page, setPage ] = useState(0);
    

    useEffect(() => {
        const fetchBrewData = async () => {
           navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
              });

              console.log(lat, long)

       
      
              await fetch(`https://api.openbrewerydb.org/breweries?by_dist=44.762058,-93.275772&page=${page}&per_page=8`)
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
    <Container className='is-fluid is-widescreen mt-5 pb-5'>
    <div className='results-title columns is-align-content-center mb-5'>

        <h2 className="column">Results</h2>
        {page > 1 && <div className='column selectPages'><FontAwesomeIcon icon={faCircleChevronLeft}  size="lg"  className="arrow-icon" onClick={previousPage}/></div>

        }
        <div className='column selectPages'><FontAwesomeIcon icon={faCircleChevronRight}  size="lg"  className="arrow-icon" onClick={changePage}/></div>
    </div>
    <div className="columns is-flex-wrap-wrap is-justify-content-center">
   
    
    <BreweryList brewery={brewData} />
   
   
    </div>
    </Container>
  )
}

export default Brewery