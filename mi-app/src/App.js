import Button from "./Button"

const App = () =>{
  return (
    <div>
      <h1 onClick={(e) => console.log('click',e)}>Hola mundo</h1> {/** Le pasamos una funcion */}
      <Button onClick={() => console.log('clickeado')}>Enviarrr</Button>
    </div>
  )
}

export default App