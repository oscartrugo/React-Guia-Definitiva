import { Route, Routes, Link, useMatch, useParams } from 'react-router-dom';
 
const Proyecto = () => {
  const match = useMatch('/portafolio/:proyecto_id');
  const params = useParams(); //Hook para saber los parámetros
  const { proyecto_id } = params;
  console.log({ match, params });
  return <h2>Proyecto: {proyecto_id}</h2>;
};
 
const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to="proyecto-1">Proyecto 1</Link>
        </li>
        <li>
          <Link to="proyecto-2">Proyecto 2</Link>
        </li>
      </ul>
      <section>
        <Routes>
          <Route path=":proyecto_id" element={<Proyecto />}></Route>
        </Routes>
      </section>
    </div>
  );
};
 
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="portafolio/*" element={<Portafolio />}></Route>
        </Routes>
      </section>
    </div>
  );
}
 
export default App;

// function App() {
//     return (
//         <div>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to='/'>Inicio</Link> {/**Captura el efecto de abrir otro link */}
//                     </li>
//                     <li>
//                         <Link to='/portafolio'>Portafolio</Link> {/**Captura el efecto de abrir otro link */}
//                     </li>
//                 </ul>
//             </nav>
//             <section>
//                 <Routes>
//                     <Route path='/' element={<h1>Inicio</h1>} />
//                     <Route path='/portafolio/*' element={<Portafolio />} />
//                 </Routes>
//             </section>
//         </div>
//     );
// }

// export default App;
