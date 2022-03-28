import './Button.css'

const Button = (props) => { //Nuestro componente recibe propiedades desde App.js
    return(
        <button {...props} className="btn"/> //Le asignamos todas las props al button
    )
}

export default Button