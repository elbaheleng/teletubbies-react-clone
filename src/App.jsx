
import Goingon from './Goingon';
import Meet from './Meet';
import Shop from './Shop';
import Watch from './Watch';
import Follow from './Follow';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css"



function App() {

  return (
    <>
      {['md'].map((expand) => (
        <Navbar id='navbar' key={expand} expand={expand} className="bg-body-transparent z-10 fw-bold p-0">
          <Container fluid>
            <Navbar.Brand href="#"><img className='mt-0' src="/logo_teletubbies.jpg" width={150} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <NavDropdown
                    title={
                      <span className="my-auto">About</span>
                    }
                    id="nav-dropdown"
                  >
                    <NavDropdown.Item>Time for Teletubbies</NavDropdown.Item>
                    <NavDropdown.Item>Meet the Teletubbies</NavDropdown.Item>
                    <NavDropdown.Item>A Joyful Learning Journey</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1" >Watch</Nav.Link>
                  <Nav.Link href="#action2" >Lifestyle</Nav.Link>
                  <Nav.Link href="#action2" >News</Nav.Link>
                </Nav>
                <p className='me-2'>Shop</p>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      ))}

      <video autoPlay muted loop id="myVideo" className=' my-0' src="/banner.mp4" type="video/mp4">
      </video>
      <div id='bannercontent' className='d-flex flex-column mb-0 justify-content-center align-items-center'>
        <h3 className="text-uppercase" style={{color : "yellow"}}>Over the hills and far away… Welcome to</h3>
        <h1 className="text-uppercase" style={{color : "white"}}>Teletubbyland</h1>
        <p style={{color : "white"}}>Say ‘eh-oh’ to the Teletubbies - Tinky Winky, Dipsy, Laa-Laa, and Po - and enter a world of joy, play, creativity and pop culture where everyone is always welcome.</p>
        <Button variant="outline-warning" className='rounded rounded-pill'>Come Play!</Button>
      </div>

      <Goingon />
      <Meet />
      <Shop/>
      <Watch />
      <Follow/>
      <Footer/>

    </>
  )
}

export default App
