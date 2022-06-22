import React from 'react'
import { Button, Navbar, Container, Columns, Column } from "react-bulma-components";
import "./navbar.css";
// import Nav from "react-bootstrap/Nav";



const NavbarTop = () => {
  
  const queryString = window.location.href;
const splitString = queryString.split('/')
const route = splitString[5];
console.log(route)

  return (
    <Navbar aria-label='main navigation' className='nav-top '>
    <Container className='link-container is-justify-content-center mt-4'>
      <div className='columns link-columns mr-10'>
        <div className="column">
          <a href="/react-brewery-api/#/" className={`${route == '' ? "link-active" : "link"}`}>HOME</a>
        </div>
        <div className="column">
          <a href="/react-brewery-api/#/geolocation" className={`${route == 'geolocation' ? "link-active" : "link"}`}>LOCATION</a>
        </div>
        <div className="column">
          <a href="/react-brewery-api/#/search" className={`${route == 'search' ? "link-active" : "link"}`}>SEARCH</a>
        </div>
      </div>
    </Container>
    </Navbar>
  )
}

export default NavbarTop