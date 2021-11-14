import { Component } from "react";

class CartDetails extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div className="cart-details-container shadow">
                {cart.map((product, i) => {
                    return (
                        <div className="card" key={i}>
                            <div className="card-header bg-dark p-2">
                                <p className="mb-0 text-white">
                                <img src={product.img} alt={product.name} className="cart-img-product mr-2" />
                                    {product.name}
                                    <span className="badge badge-success ml-1">
                                        {product.quantity}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CartDetails;