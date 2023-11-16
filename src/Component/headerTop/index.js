import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./headerTop.css"

function HeaderTop() {
  return (
    <Navbar 
      className="topnav"
      fixed="top"
      expand="lg"
      bg="light"
      variant="light"
      >
      <Container fluid>
        {/* <Navbar.Brand href="#home">Logo</Navbar.Brand> */}
        <Navbar.Brand href="">Path Infotech</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div style={{textAlign: "right", padding:"1px", position:"relative"}}>
              <div className='d-flex align-items-center'>
                <div>
                  <h6 className="userDisplayName me-2">
                    <span>Role :</span> CALL CENTER<br/>
                    {/* <span>Last login : 03/11/2023 04:13:27 PM</span> */}
                  </h6>
                </div>
                <div className="userDisplayAvatar">
                  <div className="sb-avatar " >
                    <div className="sb-avatar__text" title="CCEXECUTIVE" >
                      <div>
                        <span>
                          <span>C</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderTop;