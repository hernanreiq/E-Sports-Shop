import { Component, Fragment } from "react";
import Product from "./templates/product";

class Products extends Component {
    render() {
        const { products, addToCart } = this.props;
        return (
            <Fragment>
                <div className="container py-4">
                    <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1">
                        {products.map((product, i) =>
                            <Product
                                key={i}
                                addToCart={addToCart}
                                product={product}
                            />)}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Products;