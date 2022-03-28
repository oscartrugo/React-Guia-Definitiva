import { Component } from "react"

class App extends Component{ //Poviene de Component
  state = {//Definimos el estado del componente
    valor: 3 //Definimos una propiedad de estado
  } 
  render(){ //Retorna contenido JSX
    console.log(this.state) //Imprime el estado del componente cada vez que se renderiza
    return(
      <div>
        <p>Hola mundo</p>
        <button className={`${this.state.valor}`} onClick={() => this.setState({ valor: 2})}> {/**cambiamos el state con setState y se ejecuta el método render */}
          Enviar
        </button>
      </div>
    )
  }
}

export default App

/**
 * 
 * El ESTADO es algo de lo cual tú puedes acceder directamente a los componentes que se han creado con
 * clases.
 * 
 * En los componentes FUNCIONALES puedes acceder a un estado mediante el uso de HOOKS
 * 
 * El método RENDER se ejecuta siempre en dos condiciones:
 * 1. El estado del componente cambió. 
 * 2. Cuando el método render de un componente padre ha sido llamado
 */