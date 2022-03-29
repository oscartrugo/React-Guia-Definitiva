import { useState, useEffect } from "react"

const useContador = (inicial) => { //Definimos un Hook customizado 
  const [contador, setContador] = useState(inicial) //useState recibe el valor inicial de nuestro contador
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
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
    </div>
  )
}

export default App