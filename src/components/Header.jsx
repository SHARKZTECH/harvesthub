import React from 'react'



// styles
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg="green" data-bs-theme="light">
        <Container>
          <LinkContainer to={"/"}>
              <Navbar.Brand href="#home">HarvestHub</Navbar.Brand>
          </LinkContainer>
          
          <Nav className="me-auto">
            <LinkContainer to={"/market"}>
              <Nav.Link>Market</Nav.Link>
            </LinkContainer>
            

            <LinkContainer to={"/generalinformation"}>
              <Nav.Link href="#features">General Information</Nav.Link>
            </LinkContainer>


            <LinkContainer to={"/schedule"}>
              <Nav.Link href="#features">Schedule</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to={"/profile"}>
              <Nav.Link href="#pricing">Profile</Nav.Link>
            </LinkContainer>
            
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}

export default Header