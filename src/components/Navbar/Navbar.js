import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Navbar.scss'
const NavBar = () => {
   return  <>
   <Container>
   <Navbar expand="lg">
   <Container>
     <Navbar.Brand href="#home">Webrew!</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="me-auto ps-4">
         <Nav.Link href="#home">Accueil</Nav.Link>
         <Nav.Link href="#link">Trouver un Contrat</Nav.Link>
         <Nav.Link href="#link">Solutions</Nav.Link>
         <Nav.Link href="#link">Nous Contacter</Nav.Link>
       </Nav>
     </Navbar.Collapse>
     <Navbar.Collapse className="justify-content-end">
     <Nav >

       { !localStorage.getItem('token') ?
          <Nav.Link href="#link" className='mt-2'>Inscription</Nav.Link> : <></> 
       }
         <Nav.Link href={ localStorage.getItem('token') ? "profile" : "login" }>
             <Button variant="primary" className='membre' >Espace Membre</Button>
         </Nav.Link>
       </Nav>
    </Navbar.Collapse>
   </Container>
 </Navbar>
   </Container>
 </>
};

export default NavBar;