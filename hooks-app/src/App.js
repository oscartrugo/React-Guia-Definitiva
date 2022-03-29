const impura = () => new Date().toLocaleString()
console.log(impura())
//Función pura NUNCA cambia su valor de retorno
const MiComponente = ({miProp}) => {
  return(
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () =>{
  return(
    <MiComponente miProp={'Chanchito feliz'}/>
  )
}

export default App;

//Un componente funcional es una const a la cual le asignamos una fat arrow function
//Todos los componentes funcionales son funciones puras
//Cada vez que llamemos a una funcion impura nos retorna valores distintos, no el mismo
//Otro ejemplo de funciones impuras son los llamados a la API o a una base de datos.

