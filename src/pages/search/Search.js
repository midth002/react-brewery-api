import React from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import WeatherBoard from '../../components/weatherBoard/WeatherBoard';
import { Container } from 'react-bulma-components';
const Search = () => {
  return (
    <Container>
        <WeatherBoard />
        <SearchBar />
    </Container>

    
  )
}

export default Search