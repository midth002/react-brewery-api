import React from 'react'
import { Container, Card } from 'react-bulma-components';
import Brewery from '../../components/brewery/Brewery';
import WeatherBoard from '../../components/weatherBoard/WeatherBoard';
import './location.css'
const Location = () => {
  return (
    <Container className='is-transparent'>
      <WeatherBoard />
        <Card className='is-transparent location-card'>
            <Brewery />
        </Card>
    </Container>
  )
}

export default Location