import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navbar className="menu md-2" collapseOnSelect expand="lg md-2" bg="dark" variant="dark">
          <Navbar.Brand >TIME CARD APPLICATION</Navbar.Brand>
          <Nav>
            <Nav.Link href="/Home">HOME</Nav.Link>
            </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                  
                  <NavDropdown.Item href="/employeeDashboard">Employee Service</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/managerDashboard">Manager Service</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/timecardDashboard">Time Card Entry Service</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#">SIGN UP</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">SIGN IN</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">SIGN OUT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    )
  }
}

export default HeaderComponent;