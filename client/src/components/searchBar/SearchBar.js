import React from 'react'
import './searchbar.css';
const SearchBar = () => {

    



  return (
    <div className="field">
  <div className="control columns is-justify-content-flex-end">
    <input className="input column is-one-quarter m-1 city-value" type="text" placeholder="Search By City" />
    <input type='submit' className="button is-info column is-one-fifth m-1" value="Search Breweries"/>
  </div>
  
</div>
  )
}

export default SearchBar