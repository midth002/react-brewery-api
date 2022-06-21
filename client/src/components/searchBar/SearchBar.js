import React, { useState, useEffect } from 'react'
import './searchbar.css';
import BreweryList from '../brewery/BreweryList';
import { faCircleChevronRight, faCircleChevronLeft, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bulma-components";

const SearchBar = () => {

    const [searchCity, setSearchCity ] = useState('');
    const [ brewData, setData ] = useState([]);
    const [ page, setPage ] = useState(1);

        const fetchBrewCityData = async () => {
            await fetch(`https://api.openbrewerydb.org/breweries?by_city=${searchCity}&page=${page}&per_page=16`)
            .then(res => res.json())
            .then(result => {

              setData(result)
              console.log(brewData);
            });
      }

    
      
    
       
        const changePage = () => {
            let pageChange = page + 1;
            setPage(pageChange);
            fetchBrewCityData();
            console.log("changed", page);
          }
    
          const previousPage = () => {
            let pageChange = page - 1;
            setPage(pageChange);
            fetchBrewCityData();
            console.log("previous page", page)
            
          }
        
    
        // console.log("Latitude is:", lat)
        // console.log("Longitude is:", long)
      

    const handlChange = (event) => {
        const city = event.target.value;
        setSearchCity(city);
    }

    const getCity = async (event) => {
        event.preventDefault();
        fetchBrewCityData();
        console.log(searchCity)
    }
    



  return (
    <div>
    <form className="field">
  <div className="control columns is-justify-content-flex-end">
    <input className="input column is-one-quarter m-1 city-value" 
    type="text" placeholder="Search By City" 
    name="city"
    value={searchCity} 
    onChange={handlChange} 
    required 
    />
    <input type='submit' 
    className="button is-info column is-one-fifth m-1" 
    value="Search Breweries" 
    onClick={getCity}
    />
  </div>
</form>
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

    </div>
  )
}

export default SearchBar