import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Esta función se ejecuta siempre que creamos nuestro store
const store = createStore((state = 0, action) => { //Es un reducer (acumulador, elemento) | (estado, accion) = state, action
  switch(action.type){
    case 'accion': {
      return action.payload //Payload nos permite cambiar el valor de nuestro estado
    }
  }
  
  //action = { type: 'tipo de accion', payload: any}
  //console.log({state, action}) //state = datos de la aplicación
  return state //Store almacena muchos metodos para interactuar con redux, recibe una funcion
})

//console.log(store.getState()) //getState devuelve siempre el estado completo de la app cuando se llama desde el store
//Todas las acciones que despachemos en redux tienen que tener la propiedad de type
store.dispatch({ type: 'accion', payload: 2 }) //Cada que llamemos al dispatch desde el store, la funcion reducer se vuelve a ejecutar
store.dispatch({ type: 'accionindefinida', payload: 15 }) //Cada que llamemos al dispatch desde el store, la funcion reducer se vuelve a ejecutar
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
