import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Navbar className="bg-primary">
                <Navbar.Brand href="/" className="text-white">Hamada Now Takeout's</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="https://github.com/Hamada-rb/now-takeouts" className="text-white">GitHub</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;