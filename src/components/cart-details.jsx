import { Component } from "react";
import AmountPayable from "./amount-payable";
import { faTrashAlt, faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CartDetails extends Component {
    render() {
        const { cart, addToCart, subtractToCart, cleanCart } = this.props;
        return (
            <div className="cart-details-container shadow">
                {cart.map((product, i) => {
                    return (
                        <div className="card" key={i}>
                            <div className="card-body bg-dark p-2">
                                <div className="row w-100 m-0">
                                    <div className="p-0 col-11">
                                        <p className="mb-0 text-white">
                                            <img src={product.img} alt={product.name} className="cart-img-product mr-2" />
                                            {product.name}
                                            <span className="badge badge-success ml-1">
                                                {product.quantity}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="p-0 col-1 text-center">
                                        {product.quantity > 1 ?
                                            <FontAwesomeIcon
                                                icon={faMinusCircle}
                                                className="text-danger cart-button-product"
                                                onClick={() => subtractToCart(product, i)}
                                            /> :
                                            <FontAwesomeIcon
                                                icon={faTrashAlt}
                                                className="text-danger cart-button-product"
                                                onClick={() => subtractToCart(product, i)}
                                            />
                                        }
                                        <FontAwesomeIcon
                                            icon={faPlusCircle}
                                            className="text-success cart-button-product"
                                            onClick={() => addToCart(product)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <AmountPayable
                    cart={cart}
                    cleanCart={cleanCart}
                />
            </div>
        )
    }
}

export default CartDetails;