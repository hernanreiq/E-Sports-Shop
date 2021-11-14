import { Component, Fragment } from "react";
import Products from "./components/products";
import NavbarCustom from "./components/navbar";
import Layout from "./components/layout";

class App extends Component {
  state = {
    products: [
      { name: 'Silla', price: 6000, img: '/products/silla.jpg' },
      { name: 'Audífonos', price: 1500, img: '/products/audifonos.jpg' },
      { name: 'Monitor', price: 13000, img: '/products/monitor.jpg' },
      { name: 'Mouse', price: 350, img: '/products/raton.jpg' },
      { name: 'Teclado', price: 1200, img: '/products/teclado.jpg' },
      { name: 'Bocina', price: 4200, img: '/products/bocina.jpg' }
    ],
    cart: []
  }

  addToCart = (product) => {
    const { cart } = this.state;
    //Si el producto existe en el carrito se aumenta la cantidad
    if (cart.find(x => x.name === product.name)) {
      const newCart = cart.map(x => x.name === product.name ? ({
        ...x,
        quantity: x.quantity + 1
      }) : x)
      return this.setState({ cart: newCart })
    }
    //Si el producto no existe en el carrito entonces se guarda
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1
      })
    })
  }

  subtractToCart = (product, index) => {
    let { cart } = this.state;
    if (product.quantity > 1) {
      //si el producto existe en el carrito se le resta uno
      if (cart.find(x => x.name === product.name)) {
        const newCart = cart.map(x => x.name === product.name ? ({
          ...x,
          quantity: x.quantity - 1
        }) : x)
        return this.setState({ cart: newCart })
      }
    } else {
      //Si el producto existe en el carrito entonces se elimina
      if (cart.find(x => x.name === product.name)) {
        cart.splice(index, 1);
        return this.setState({ cart: cart })
      }
    }
  }

  cleanCart = () => {
    let { cart } = this.state;
    if(cart.length > 0) {
      this.setState({
        cart: []
      })
    } 
  }

  render() {
    return (
      <Fragment>
        <NavbarCustom
          cart={this.state.cart}
          addToCart={this.addToCart}
          subtractToCart={this.subtractToCart}
          cleanCart={this.cleanCart}
        />
        <Layout>
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </Fragment>
    )
  }
}

export default App;