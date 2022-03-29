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

    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) =>{ //Agregamos productos al carro
    const {carro} = this.state //Traemos al carro de compras, lo sacamos de this.state
    if(carro.find(x => x.name === producto.name)){//Preguntamos si el elemento agregado contiene el mismo nombre que el producto
      const newCarro = carro.map(x => x.name === producto.name //Definimos un nuevo carro de compras en base al existente
        ? ({ //Si el producto que estamos iterando es el mismo, creamos un objeto literal
          ...x, //Copiamos el elemento que estamos iterando
          cantidad: x.cantidad + 1 //Aumentamos + 1 la cantidad
        })
        : x) //En el caso de que no, devolvemos el mismo elemento 
        return this.setState({carro: newCarro})

    } 
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }) //Toma el arreglo y lo concatena con un nuevo elemento

    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){ //Si el carro no tiene longitud
      return //No hace nada, por tanto, no muestra el carro
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  render() {
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro} /> {/**Le pasamos nuestro carro al navbar */}
        <Layout> {/**Envuelve a los componentes Title y Productos */}
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro} //Le pasamos una función al componente
            productos={this.state.productos} //Le pasamos todos los productos que queremos imprimir
          />
        </Layout>
      </div>
    )
  }
}

export default App;
