import React, { useState, useEffect } from 'react'
import './searchbar.css';
import BreweryList from '../brewery/BreweryList';
import { faCircleChevronRight, faCircleChevronLeft, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bulma-components";
import "./searchbar.css";
const SearchBar = () => {

    const [searchCity, setSearchCity ] = useState('');
    const [ brewData, setData ] = useState([]);
    const [ page, setPage ] = useState(0);

    const fetchBrewCityData = async () => {
        await fetch(`https://api.openbrewerydb.org/breweries?by_city=${searchCity}&page=${page}&per_page=12`)
        .then(res => res.json())
        .then(result => {

          setData(result)
          console.log(brewData);
        });
  }

        useEffect(() => {

      fetchBrewCityData();

    }, [page]);
    
      
    
       
        const changePage = () => {
            const newPage = page + 1
            setPage(newPage);
           
            console.log("changed", newPage);
          }
    
          const previousPage = () => {
            let pageChange = page - 1;
            setPage(pageChange);
           
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
        setPage(1);
        fetchBrewCityData();
        console.log(searchCity)
    }
    



  return (
    <div>
 
    <Container className='is-fluid is-widescreen mt-5 pb-5'>
    <div className='results-title columns is-align-items-center mb-5'>

        <h2 className="column is-one-quarter is-align-items-start">Results: Page {page}</h2>
    <form className="field column is-half">
  <div className="control columns is-align-items-start">
    <input className="input column is-three-quarters m-1 city-value" 
    type="text" placeholder="Search By City" 
    name="city"
    value={searchCity} 
    onChange={handlChange} 
    required 
    />
    <input type='submit' 
    className="button is-info column m-1 city-btn" 
    value="Search" 
    onClick={getCity}
    />
  </div>
</form>
    <div className='columns selectPages m-4'>
        {page > 1 && <button onClick={previousPage}>Prev<span><FontAwesomeIcon icon={faCircleChevronLeft}  size="md"  className="arrow-icon column" /></span></button>

        }
        <button onClick={changePage}>Next<FontAwesomeIcon icon={faCircleChevronRight}  size="md"  className="arrow-icon column" /></button></div>
    </div>
    <div className="columns is-flex-wrap-wrap is-justify-content-center">
   
    
    <BreweryList brewery={brewData} />
   
   
    </div>
    </Container>

    </div>
  )
}

export default SearchBar