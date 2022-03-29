import { useState } from "react" 

// class App extends Component{
//   state = {contador: 0}
//   incrementar = () =>{
//     this.setState({contador: this.state.contador + 1})
//   }
//   render(){
//     return(
//       <div>
//       Contador: {this.state.contador}
//       <button onClick={this.incrementar}>Incrementar</button>
//     </div>
//     )
//   }
// }
const useContador = (inicial) => { //Definimos un Hook customizado 
  const [contador, setContador] = useState(inicial) //useState recibe el valor inicial de nuestro contador
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}
const App = () => { // [elemento, funcion]
  const [contador, incrementar] = useContador(0) //useState recibe el valor inicial de nuestro contador
  return(
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default App

/**
 * 
 * NO PODEMOS LLAMAR A LOS HOOKS EN COMPONENTES DE CLASES
 * 
 * REGLAS DE LOS HOOKS
 * 
 * 1. Los hooks no se llaman en loops (while, for, if).
 * Necesariamente debe ser al comieno del componente, en el nivel más alto de la función.
 * NO PUEDE estar dentro de nada, debe estar en el nivel más alto.
 * 
 * 2. Sólo se llaman en 2 partes:
 *    -Componentes de React.
 *    -custom hooks
 * 
 * 3. Cuando creemos un custom hook, este siempre tiene que comenzar con el nombre use*
 */