import { Component } from "react";
import { FormatPrice, PaymentAccepted } from "./helpers/functions";

class AmountPayable extends Component {
    render() {
        const { cart, cleanCart, showTheCart } = this.props;
        let toPay = 0;
        return (
            <div className="card">
                <div className="card-body text-center bg-dark">
                    <h3 className="text-white">TOTAL</h3>
                    <h5 className="mb-0">
                        <span className="badge badge-primary badge-pill">
                            {cart.map((product) => {
                                toPay += (product.quantity * product.price);
                                return null
                            })}
                            {`RD$ ${FormatPrice(toPay)}`}
                        </span>
                    </h5>
                </div>
                <div className="card-footer bg-secondary">
                    <button
                        className="btn btn-success w-100"
                        onClick={() => {
                            showTheCart();
                            cleanCart();
                            PaymentAccepted(toPay);
                        }}
                    >
                        Pagar
                    </button>
                </div>
            </div>
        )
    }
}

export default AmountPayable;