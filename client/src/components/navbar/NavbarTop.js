import React from 'react'
import { Button, Navbar, Container, Columns, Column } from "react-bulma-components";
import "./navbar.css";
// import Nav from "react-bootstrap/Nav";
const NavbarTop = () => {
  const queryString = window.location.search;
console.log(queryString);

  return (
    <Navbar aria-label='main navigation' className='nav-top '>
    <Container className='link-container is-justify-content-center mt-4'>
      <div className='columns link-columns mr-10'>
        <div className="column">
          <a href="/" className='link'>HOME</a>
        </div>
        <div className="column">
          <a href="/geolocation" className='link'>LOCATION</a>
        </div>
        <div className="column">
          <a href="/search" className='link'>SEARCH</a>
        </div>
      </div>
    </Container>
    </Navbar>
  )
}

export default NavbarTop