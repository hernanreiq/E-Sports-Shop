import { Component, Fragment } from "react";
import Product from "./templates/product";
import Layout from "./layout";
import NavbarCustom from "./navbar";

class Products extends Component {
    render() {
        const { products, addToCart } = this.props;
        return (
            <Fragment>
                <NavbarCustom />
                <Layout>
                    {products.map((product, i) =>
                        <Product
                            key={i}
                            addToCart={addToCart}
                            product={product}
                        />)}
                </Layout>
            </Fragment>
        )
    }
}

export default Products;