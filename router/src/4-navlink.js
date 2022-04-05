import { Route, Routes, Link, useMatch, useParams, NavLink } from 'react-router-dom';

const Proyecto = () => {
    const match = useMatch('/portafolio/:proyecto_id');
    const params = useParams(); //Hook para saber los parámetros
    const { proyecto_id } = params;
    return <h2>Proyecto: {proyecto_id}</h2>;
};

const Portafolio = () => {
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <NavLink activeClassName="activado" end to="proyecto-1">Proyecto 1</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ fontSize: 20 }} end to="proyecto-2">Proyecto 2</NavLink>
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
                        <NavLink end to="/">Inicio</NavLink> {/** end para el único elemento activo */}
                    </li>
                    <li>
                        <NavLink 
                        className={({ isActive }) => "nav-link" + (isActive ? 
                            (match, location) => {
                            console.log(match, location) } : "")} 
                            end to="/portafolio">Portafolio</NavLink>


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