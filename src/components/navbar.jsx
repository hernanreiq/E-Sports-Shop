import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import Cart from "./cart";

class NavbarCustom extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand className="text-white">E-Sports Shop</Navbar.Brand>
                    <Cart />
                </Container>
            </Navbar>
        )
    }
}

export default NavbarCustom;