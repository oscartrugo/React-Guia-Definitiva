import { Link, Route, Routes } from "react-router-dom";
 
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
          <Route path="proyecto-1" element={<h2>Proyecto 1</h2>}></Route>
          <Route path="proyecto-2" element={<h2>Proyecto 2</h2>}></Route>
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
            <Link to="/portafolio/">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/portafolio/*" element={<Portafolio />}></Route>
        </Routes>
      </section>
    </div>
  );
}
 
export default App;


// import { Routes, Route, Link } from 'react-router-dom'

// const Portafolio = () => {
//     return (
//         <div>
//             <h1>Portafolio</h1>
//             <ul>
//                 <li>
//                     <Link to={'/portafolio/proyecto-1'}>Proyecto 1</Link>
//                 </li>
//                 <li>
//                     <Link to={'/portafolio/proyecto-2'}>Proyecto 2</Link>
//                 </li>
//             </ul>
//             <div>
//                 <Routes>
//                     <Route path="/portafolio/proyecto-1" element={<h1>Proyecto 1</h1>} />
//                     <Route path="/portafolio/proyecto-2" element={<h1>Proyecto 2</h1>} />
//                 </Routes>
//             </div>
//         </div>
//     )
// }

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
