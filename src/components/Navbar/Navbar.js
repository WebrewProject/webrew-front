import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

const NavBar = () => {
   return  <>
   <Container>
   <Navbar expand="lg">
   <Container>
     <Navbar.Brand href="#home">Webrew!</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="me-auto">
         <Nav.Link href="#home">Accueil</Nav.Link>
         <Nav.Link href="#link">Trouver un Contrat</Nav.Link>
         <Nav.Link href="#link">Solutions</Nav.Link>
         <Nav.Link href="#link">Nous Contacter</Nav.Link>
       </Nav>
     </Navbar.Collapse>
     <Navbar.Collapse className="justify-content-end">
     <Nav >
         <Nav.Link href="#link" className='mt-2'>Inscription</Nav.Link>
         <Nav.Link href="#home">
             <Button variant="primary" >Espace Membre</Button>
         </Nav.Link>
       </Nav>
    </Navbar.Collapse>
   </Container>
 </Navbar>
   </Container>
 </>
};

export default NavBar;