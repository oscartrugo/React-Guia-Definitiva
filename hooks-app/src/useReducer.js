import { useReducer, useState } from "react";

//state {contador: 0}
//action siempre va a ser un objeto que va a contener una propiedad de type, y este va a ser un string
//action = {type: string, payload: any}
const inicial = {contador: 0}
const reducer = (state, action) =>{
  switch(action.type){ //Evaluamos el valor de la propiedad type
    case 'incrementar':
      return {contador: state.contador + 1}
    case 'decrementar':
      return {contador: state.contador - 1}
    case 'set': //En lugar de manipular el valor
      return {contador: action.payload} //Le colocamos el valor dentro de la propiedad payload
    default: 
    return state
  }
}

const App = () =>{
  const [state, dispatch] = useReducer(reducer, inicial)//Recibe un estado inicial y el reducer
  const [valor, setValor] = useState(0)
  return(
    <div>
      Contador: {state.contador}
      <input value={valor} onChange={e => setValor(e.target.value)}/>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Más</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Menos</button>
      <button onClick={() => dispatch({ type: 'set', payload: valor })}>Set</button>
    </div>
  )
}

export default useReducer