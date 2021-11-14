import { Component } from "react";
import { Button } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BubbleAlert from "./bubble-alert";
import CartDetails from "./cart-details";

class Cart extends Component {
    state = {
        showCart: false
    }
    showTheCart = () => {
        this.setState({
            showCart: !this.state.showCart
        })
    }
    render() {
        const { cart, addToCart, subtractToCart, cleanCart } = this.props;
        //Acumulando la cantidad de todos los productos
        const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);
        return (
            <div className="cart-container">
                {cart.length > 0 &&
                    <span className="bubble-alert">
                        <BubbleAlert value={quantity} />
                    </span>
                }
                <Button variant="success" onClick={this.showTheCart}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Button>
                {this.state.showCart && cart.length > 0 &&
                    <CartDetails
                        cart={cart}
                        addToCart={addToCart}
                        subtractToCart={subtractToCart}
                        cleanCart={cleanCart}
                    />
                }
            </div>
        )
    }
}

export default Cart;