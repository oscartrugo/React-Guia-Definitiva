import { useState } from 'react';
import './App.css';
import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({
    name: '', //Valores iniciales
    lastName: '',
    email: ''
  })

  const submit = e => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ])
    reset() //Limpiamos los campos del formulario una vez enviados
  }
  console.log(formulario, usuarios)
  return (
    <div style={{marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label='Nombre'
                name='name'
                value={formulario.name}
                onChange={handleChange} 
                placeholder='Nombre'/>
              <Input
                label='Apellido'
                name='lastName'
                value={formulario.lastName}
                onChange={handleChange} 
                placeholder='Apellido'/>
              <Input
                label='Correo'
                name='email'
                value={formulario.email}
                onChange={handleChange} 
                placeholder='Correo'/>
              <Button>Enviar</Button>

            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(x =>
              <li key={x.email}>{`${x.name} ${x.lastName} ${x.email}`}</li>)}
          </ul>
        </Card>
      </Container>
    </div>

  )
}

export default App;
