import React from 'react'
import { Button, Navbar, Container, Columns, Column } from "react-bulma-components";
import "./navbar.css";
// import Nav from "react-bootstrap/Nav";
const NavbarTop = () => {
  return (
    <Navbar  aria-label='main navigation' className='nav'
    brand='UI'>
    <Container className='link-container'>
      <div class='columns'>
        <div class="column">
          <a href="" className='link'>HOME</a>
        </div>
        <div class="column">
          <a href="" className='link'>LOCATION</a>
        </div>
        <div class="column">
          <a href="" className='link'>SEARCH</a>
        </div>
        <div class="column">
          <a href="" className='link'>LOGIN</a>
        </div>
      </div>
    </Container>
    </Navbar>
  )
}

export default NavbarTop