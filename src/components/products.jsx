import { Component, Fragment } from "react";
import Product from "./templates/product";

class Products extends Component {
    render() {
        const { products, addToCart } = this.props;
        return (
            <Fragment>
                {products.map((product, i) =>
                    <Product
                        key={i}
                        addToCart={addToCart}
                        product={product}
                    />)}
            </Fragment>
        )
    }
}

export default Products;