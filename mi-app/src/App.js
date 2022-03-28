import Button from "./Button"

const arr = [
  'chanchito feliz',
  'chanchito triste',
  'chanchito emocionado'
]

const App = () =>{
  const miVariable = false

  if(miVariable){ //Renderiza si la condición se cumple, si no renderiza el siguiente return
    return <p>Mi vaiable dio true</p>
  }
  return (
    <div>
      <h1 onClick={(e) => console.log('click',e)}>Hola mundo</h1> {/** Le pasamos una funcion */}
      {arr.map(el => <p key={el}>{el}</p>)} {/**Imprime los elementos del arreglo en una etiqueta <p></p> */}
      <Button onClick={() => console.log('clickeado')}>Enviarrr</Button>
    </div>
  )
}

export default App