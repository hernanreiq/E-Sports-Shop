import { Component } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavbarCustom extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand className="text-white">E-Sports Shop</Navbar.Brand>
                    <Button variant="success" onClick={() => console.log('Show the cart')}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Button>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarCustom;