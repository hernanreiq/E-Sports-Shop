import { Component } from "react";
import Products from "./components/products";

class App extends Component {
  state = {
    products: [
      { name: 'Silla', price: 6000, img: '/products/silla.jpg' },
      { name: 'Audífonos', price: 1500, img: '/products/audifonos.jpg' },
      { name: 'Monitor', price: 13000, img: '/products/monitor.jpg' },
      { name: 'Mouse', price: 350, img: '/products/raton.jpg' },
      { name: 'Teclado', price: 1200, img: '/products/teclado.jpg' }
    ]
  }
  render() {
    return (
      <Products
        addToCart={(text) => console.log(`Has agregado ${text} al carrito`)}
        products={this.state.products}
      />
    )
  }
}

export default App;