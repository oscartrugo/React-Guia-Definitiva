import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Inicio</Link> {/**Captura el efecto de abrir otro link */}
          </li>
          <li>
            <Link to='/portafolio'>Portafolio</Link> {/**Captura el efecto de abrir otro link */}
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path='/' element={<h1>Inicio</h1>} />
          <Route exact path='/portafolio' element={<h1>Portafolio</h1>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
