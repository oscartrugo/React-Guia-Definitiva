import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//const X = () => <p>Hola mundo </p> //COMPONENTE FUNCIONAL = ES UNA FUNCIÓN
// <p>Hola mundo </p>

const Li = ({children, estado, casa, edad}) =>{ 
  console.log(casa, edad);
  return (
    <li>{children} estoy {estado}</li>
  )
}

const X = () =>
<ul>
  <Li 
    estado={"feliz"}
    casa={false}
    edad={24}
  >Chanchito</Li>
  <Li estado={'triste'}>Chanchito</Li>
  <Li estado={'emocionado'}>Felipe</Li>
</ul>

ReactDOM.render( //ReacDOM.render ES EL ENCARGADO DE RENDERIZAR LA APP
 <X/>, document.getElementById('root') //qué queremos renderizar, dónde queremos renderizarlo
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
