import React from 'react';
import Navbar from 'react-bootstrap/NavBar';

class Header extends React.Component {
    render() {
        return (
            <Navbar className="bg-primary">
                <Navbar.Brand href="/" className="text-white">Hamada Now Takeout's</Navbar.Brand>
            </Navbar>
        );
    }
}

export default Header;