import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div> <Navbar bg="secondary" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img style={{borderRadius:20}}
          alt=""
          src="https://img.freepik.com/premium-vector/restaurant-food-vintage-mascot-icon-logo-vector-symbol-design_629573-31.jpg?w=2000"
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{' '}
       RRAMBBO'_'CAFFE
      </Navbar.Brand>
      
    </Container>
  </Navbar></div>
  )
}

export default Header