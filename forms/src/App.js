import { useState } from "react"

const App = () => {
    const [value, setValue] = useState({normal: 'Por defecto', texto: 'Valor inicial'}) //...Actualizamos este objeto
    const handleChange = (e) =>{
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
        // setValue({
        //     ...value, //Generamos una copia de todo el valor
        //     [e.target.name]: e.target.value}) //La propiedad va a tener el valor del campo que estemos modificando, con ello ...
    }
    console.log(value)
    return(
        <div>
            {value.length < 5 ? <span>longitud minima de 5</span> : null}
            <input type='text' name='normal' value={value.normal} onChange={handleChange}/> {/**Un controlled component necesitamos pasarle el valor que va a mostrar */}
            <textarea name='texto' onChange={handleChange} value={value.texto}/> {/**Le asignamos elt exto en value */}
        </div>
    )
}

export default App