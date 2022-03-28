import { Component } from "react"

class Button extends Component{
  state={}
  constructor(props){ 
    super(props)
    console.log('constructor', props);
  }

  componentDidMount(){ //Este método se utiliza para poder actualizar el estado de nuestro componente
    console.log("componentDidMount") //Este método es lo último que se ejecuta
  }

  componentDidUpdate(prevProps, prevState){ //Recibe props anteriores y state anterior
    console.log("componentDidUpdate", prevProps, prevState)
  }
  
  render(){ //Método obligatorio, todos los componentes deben llevar su render
    console.log("Ejecutando método render de button")
    return(
      <button onClick={() => this.setState({prop: 1})}>
        Enviar
      </button>
    )
  }
}

class App extends Component{ //Poviene de Component
  state = {//Definimos el estado del componente
    valor: 3 //Definimos una propiedad de estado
  } 
  render(){ //Retorna contenido JSX
    console.log(this.state) //Imprime el estado del componente cada vez que se renderiza
    return(
      <div>
        <p>Hola mundo</p>
        <Button chanchito='feliz'/> {/**Llama a su método render y lo ejecuta sea que sus props hayan cambiado o no */}
        <button className={`${this.state.valor}`} onClick={() => this.setState({ valor: 2})}> {/**cambiamos el state con setState y se ejecuta el método render */}
          Enviar en App
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
 * 
 * El CONSTRUCTOR es la instancia para que podamos setear un estado de los componentes en React,
 * pero eso es una mala práctica. Puede producir errores en la app debido a que las props pueden
 * estar cambiando
 */