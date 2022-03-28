import logo from './logo.svg';
import './App.css';

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}

const estilo = ({bg = '#222'}) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})

//const App = () => { es otra forma de declarar un componente
const Li = ({children}) =>{
  return(
    <li style={{...estilo2, ...estilo({bg: '#333'}) }} className='clase-li'>{children}</li>
  )
}

function App() {
  const valor = 'triste'
  return (
    <ul style={estilo({bg: '#750'})} className='clase-css'>
      <Li estado='feliz'>Valor de li children</Li> {/** Todo lo que vaya entre etiquetas pasa a ser el valor de children */}
    </ul> //className sirven para asignar clases de css
  );
}

export default App;
