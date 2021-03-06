import { Component, Fragment } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { FormatPrice } from "../helpers/functions";

class Product extends Component {
    render() {
        const { product, addToCart } = this.props;
        return (
            <Fragment>
                <div className="col my-3 d-flex align-items-stretch">
                    <Card className="shadow">
                        <Card.Img variant="top" src={product.img} alt={product.name} />
                        <Card.Body className="text-center">
                            <Card.Title className="mb-1">{product.name}</Card.Title>
                        </Card.Body>
                        <Card.Footer className="text-center bg-dark">
                            <h5 className="mb-3">
                                <Badge pill variant="primary">
                                    RD$ {FormatPrice(product.price)}
                                </Badge>
                            </h5>
                            <Button variant="success" onClick={() => addToCart(product)}>
                                Agregar al carrito
                            </Button>
                        </Card.Footer>
                    </Card>
                </div>
            </Fragment>
        )
    }
}

export default Product;