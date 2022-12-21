import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../All.css'


const Header = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
    setShow(!show);
    }
    const hideDropdown = e => {
    setShow(false);
    }

    const [show1, setShow1] = useState(false);
    const showDropdown1 = (e)=>{
    setShow1(!show1);
    }
    const hideDropdown1 = e => {
    setShow1(false);
    }
    
    return (
        <div className='navbar-to'>
            <Navbar collapseOnSelect className=''  expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='nav-name' to='/'>Buttistore</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-container' to='/paint1'>Shop</Link>  
                            <NavDropdown className='nav-container'  title="Personalized Gifts" id="collasible-nav-dropdown"show={show}onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                
                                <div className='nav-break'>
                                    
                                        <Link className='nav-container' to='/paint1'>One Person Digi Painting</Link>  
                                        <Link className='nav-container' to='/blog'>Couple Digi Painting</Link> 
                                        <Link className='nav-container' to='/paint1'>Family Digi Painting</Link>  
                                        <Link className='nav-container' to='/blog'>Family Digi Painting</Link> 
                                        <Link className='nav-container' to='/'>One Person Handmade Painting</Link>  
                                        <Link className='nav-container' to='/blog'>Couple Handmade Painting</Link> 
                                        <Link className='nav-container' to='/'>Family Handmade Painting</Link>  
                                        <Link className='nav-container' to='/blog'>Handmade Pencil Sketch</Link>   
                                </div>
                               
                            </NavDropdown>
                            
                            <NavDropdown className='nav-container'  title="Specials" id="collasible-nav-dropdown"show={show1}onMouseEnter={showDropdown1} onMouseLeave={hideDropdown1}>
                            <div className='nav-break'>
                                <Link className='nav-container' to='/'>Black & White to Colorful Painting</Link>  
                                <Link className='nav-container' to='/blog'>Merge Different Pictures in a Painting</Link> 
                                </div>
                            </NavDropdown>
                        
                        
                        <Link className='nav-container' to='/blog'>Bulk Order</Link> 
                        <Link className='nav-container' to='/blog'>Blog</Link> 
                    </Nav>
                    <br />   
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;