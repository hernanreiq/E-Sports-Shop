import { Component } from "react";
import Main from "./views/main";

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
      <Main />
    )
  }
}

export default App;