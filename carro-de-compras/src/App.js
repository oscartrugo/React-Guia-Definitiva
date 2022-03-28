import { Component } from 'react';
import Productos from './components/Productos'

class App extends Component{
  state = { //Declaramos el estado
    productos: [ //Propiedad "productos" es un arreglo de objetos
      {name: "Tomate", price: 1500, img: '/productos/tomate.jpg'},
      {name: "Arbejas", price: 2500, img: '/productos/arbejas.jpg'},
      {name: "Lechuga", price: 500, img: '/productos/lechuga.jpg'}

    ]
  }
  render(){
    return(
      <div>
        <Productos
        agregarAlCarro={() =>  console.log("No hace nada")} //Le pasamos una función al componente
        productos={this.state.productos} //Le pasamos todos los productos que queremos imprimir
        />
      </div>
    )
  }
}

export default App;