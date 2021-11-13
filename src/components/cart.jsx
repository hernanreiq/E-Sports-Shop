import { Component } from "react";
import { Button } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BubbleAlert from "./bubble-alert";

class Cart extends Component {
    render() {
        const { cart } = this.props;
        //Acumulando la cantidad de todos los productos
        const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);
        return (
            <div>
                {cart.length > 0 &&
                    <span className="bubble-alert">
                        <BubbleAlert value={quantity} />
                    </span>
                }
                <Button variant="success" onClick={() => console.log('Show the cart')}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Button>
            </div>
        )
    }
}

export default Cart;