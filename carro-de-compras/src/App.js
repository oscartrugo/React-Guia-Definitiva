import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <p>Hola mundo</p>
      </div>
    )
  }
}

export default App;
