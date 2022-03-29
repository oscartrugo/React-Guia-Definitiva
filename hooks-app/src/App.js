import { useState, useEffect, Component } from "react"

const useContador = (inicial) => { //Definimos un Hook customizado 
  const [contador, setContador] = useState(inicial) //useState recibe el valor inicial de nuestro contador
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

// const Interval = ({contador}) => {
//   useEffect(() => {
//     const i = setInterval(() => console.log(contador), 1000)
//     return () => clearInterval(i) //Cada que se ejecute el componente, desuscribimos el intervalor
//   }, [contador])
//   return (
//     <p>Intervalo</p>
//   )
// }
class Interval extends Component{
  intervalo = ''
  componentDidMount(){
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.intervalo)
  }
  render(){
    return(
      <p>Intervalo</p>
    )
  }
}
const App = () => { // [elemento, funcion]
  const [contador, incrementar] = useContador(0) //useState recibe el valor inicial de nuestro contador
  useEffect(() => {
    document.title=contador
  }, [contador]) //Todo lo de dentro del hook no tiene dependencias
  return(
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador={contador}/>
    </div>
  )
}

export default App