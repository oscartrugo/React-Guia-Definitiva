import logo from './logo.svg';
import './App.css';
import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'

function App() {
  const [formulario, handleChange] = useFormulario({ name: '', lastName: '' }) //Valores iniciales
  console.log(formulario)
  return (
    <Card>
      <form>
        <Input
          label='Nombre'
          name='name'
          value={formulario.name}
          onChange={handleChange} />
        <Input
          label='Apellido'
          name='lastName'
          value={formulario.lastName}
          onChange={handleChange} />

      </form>
    </Card>
  )
}

export default App;
