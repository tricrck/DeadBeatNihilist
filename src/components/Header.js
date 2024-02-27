import React from 'react'
import logo from './logo.jpg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src= {logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
             
          </Navbar.Brand>
          <center><h4 style={{color: 'white', marginRight: "450px"}}>Live Love Burn Die</h4></center>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header