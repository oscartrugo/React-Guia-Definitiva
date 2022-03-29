import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = { //Declaramos el estado
    productos: [ //Propiedad "productos" es un arreglo de objetos
      { name: "Tomate", price: 1500, img: '/productos/tomate.jpg' },
      { name: "Arbejas", price: 2500, img: '/productos/arbejas.jpg' },
      { name: "Lechuga", price: 500, img: '/productos/lechuga.jpg' }

    ]
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Layout> {/**Envuelve a los componentes Title y Productos */}
          <Title/>
          <Productos
            agregarAlCarro={() => console.log("No hace nada")} //Le pasamos una función al componente
            productos={this.state.productos} //Le pasamos todos los productos que queremos imprimir
          />
        </Layout>
      </div>
    )
  }
}

export default App;
