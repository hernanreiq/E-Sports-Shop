import { Component } from "react";
import { Button } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BubbleAlert from "./bubble-alert";

class Cart extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div>
                {cart.length > 0 &&
                    <span className="bubble-alert">
                        <BubbleAlert value={10} />
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