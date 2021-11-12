import { Component, Fragment } from "react";

class Product extends Component {
    render() {
        const { product, addToCart } = this.props;
        return (
            <Fragment>
                <img src={product.img} alt={product.name} />
                <p>{product.name} {product.price}</p>
                <button onClick={() => addToCart(product.name)} className="btn btn-success">Add to cart</button>
            </Fragment>
        )
    }
}

export default Product;