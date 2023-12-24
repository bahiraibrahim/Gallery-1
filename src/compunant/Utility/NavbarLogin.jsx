import { Navbar, Container, FormControl, Nav } from 'react-bootstrap'
import logo from '../../assets/logo.jpg'
import login from '../../assets/login.png'
import cart from '../../assets/cart.png'
import './NavbarLogin.css'

const NavbarLogin = () => {
return (
<Navbar className="sticky-top" variant="dark" expand="sm">
<Container>
<Navbar.Brand>
<a href='/'>
<img src={logo} className='logo' />
</a>
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<FormControl
type="search"
placeholder="ابحث..."
className="me-2 w-100 text-center"
aria-label="Search"
/>
<Nav className="me-auto">
<Nav.Link href='/login'
className="nav-text d-flex mt-3 justify-content-center">
<img src={login} className="login-img h-50" alt="sfvs" />
<p style={{ color: "white" }}>دخول</p>
</Nav.Link>)

<Nav.Link href='/cart'
className="nav-text position-relative d-flex mt-3 justify-content-center"
style={{ color: "white" }}>
<img src={cart} className="login-img h-50" alt="sfvs" />
<p style={{ color: "white" }}>العربه</p>
</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
)
}
export default NavbarLogin;