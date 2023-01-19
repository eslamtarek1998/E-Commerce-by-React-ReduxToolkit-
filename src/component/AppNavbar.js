import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

export default function AppNavbar() {
  const cart=useSelector((state)=>state.cart)
  return (
    <Navbar sticky='top'  bg="light" expand="lg" className='mb-10'>
      <Container>
        <Link to='/' className='navbar-brand'>CartApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Products</Link>
            <Link to="/cart" className='nav-link'>cart-{cart.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
