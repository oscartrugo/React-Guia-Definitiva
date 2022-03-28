import Button from "./Button"

const App = () =>{
  const miVariable = true

  if(miVariable){ //Renderiza si la condición se cumple, si no renderiza el siguiente return
    return <p>Mi vaiable dio true</p>
  }
  return (
    <div>
      <h1 onClick={(e) => console.log('click',e)}>Hola mundo</h1> {/** Le pasamos una funcion */}
      <Button onClick={() => console.log('clickeado')}>Enviarrr</Button>
    </div>
  )
}

export default App