import { Component, Fragment } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { FormatPrice } from "../helpers/functions";

class Product extends Component {
    render() {
        const { product, addToCart } = this.props;
        return (
            <Fragment>
                <div className="col my-3 px-2">
                    <Card className="shadow">
                        <Card.Img variant="top" src={product.img} alt={product.name} />
                        <Card.Body className="text-center">
                            <Card.Title className="mb-1">{product.name}</Card.Title>
                            <h5 className="mb-4">
                                <Badge pill variant="primary">
                                    RD$ {FormatPrice(product.price)}
                                </Badge>
                            </h5>
                            <Button variant="success" onClick={() => addToCart(product)}>
                                Agregar al carrito
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
        )
    }
}

export default Product;