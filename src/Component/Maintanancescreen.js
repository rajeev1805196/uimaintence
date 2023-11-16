import * as React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PageHeader from "./pageHeader";
import HeaderUrl from "./headerUrl";
import PageParam from "./pageParam";
import PageColumn from "./pageColumn";

const Maintanancescreen = () => {
  const [page, setPage] = React.useState(1)

  return (
    <div className="content-Wrapper">
      <Navbar 
      className="screenNav"
      expand="lg"
      bg="dark"
      variant="dark"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=> setPage(1)} className={page==1 && "active"}>Page Header</Nav.Link>
              <Nav.Link onClick={()=> setPage(2)} className={page==2 && "active"}>Page Column Info</Nav.Link>
              <Nav.Link onClick={()=> setPage(3)} className={page==3 && "active"}>Page Header URL</Nav.Link>
              <Nav.Link onClick={()=> setPage(4)} className={page==4 && "active"}>Page Param</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {page == 1 && <PageHeader setPage={setPage}  />}
      {page == 2 && <PageColumn setPage={setPage} />}
      {page == 3 && <HeaderUrl setPage={setPage}  />}
      {page == 4 && <PageParam setPage={setPage}  />}
    </div>
  );
};


export default Maintanancescreen;
