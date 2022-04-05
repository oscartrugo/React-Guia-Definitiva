import { createContext, useContext } from 'react'

//El valor por defecto se utiliza cuando no se tiene un Provider
const ContextDefault = createContext('valor por defecto')//Recibe un valor por defecto (numero, array, object, string, etc.)
const Context2 = createContext('valor por defecto 2')

const DefaultProvider = ({children}) => {
  return(
    <ContextDefault.Provider value={'mi valor'}> {/**Al Context debemos pasarle un valor para pasar a los hijos mediante el provider */}
      {children}
    </ContextDefault.Provider>
  )
}

const Contenido = () => {
  const ctx = useContext(ContextDefault) //Utilizamos el contexto de Context
  return(
    <div>{ctx}</div>
  )
}

const Contenido2 = () => {
  const ctx = useContext(Context2) //Utilizamos el contexto de Context
  return(
    <div>{ctx}</div>
  )
}

function App() {
  return (
    <DefaultProvider>
      <Contenido/>
      <Contenido2/>
    </DefaultProvider>
  );
}

export default App;
