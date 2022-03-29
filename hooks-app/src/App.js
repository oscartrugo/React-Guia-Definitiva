import { useState } from "react" 
const App = () => { // [elemento, funcion]
  const [contador, setContador] = useState(0) //useState recibe el valor inicial de nuestro contador
  return(
    <div>
      Contador: {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
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