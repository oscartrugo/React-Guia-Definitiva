import { useState } from "react"

const App = () => {
    const [value, setValue] = useState({ 
        normal: 'Por defecto', 
        texto: 'Valor inicial', 
        select: '', 
        check: false,
        estado: 'feliz'
    }) //...Actualizamos este objeto
    const handleChange = ({ target }) => {
        setValue((state) => ({
            ...state,
            [target.name]: target.type === 'checkbox'
                ? target.checked
                : target.value
        }))
        // setValue({
        //     ...value, //Generamos una copia de todo el valor
        //     [e.target.name]: e.target.value}) //La propiedad va a tener el valor del campo que estemos modificando, con ello ...
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>longitud minima de 5</span> : null}
            <input type='text' name='normal' value={value.normal} onChange={handleChange} /> {/**Un controlled component necesitamos pasarle el valor que va a mostrar */}
            <textarea name='texto' onChange={handleChange} value={value.texto} /> {/**Le asignamos elt exto en value */}

            <select vqlaue={value.select} name='select' onChange={handleChange}>
                <option value=''>-- Seleccione --</option>
                <option value='chanchofeliz'>Chancho feliz</option>
                <option value='chanchitofeliz'>Chanchito feliz</option>
                <option value='chanchitotriste'>Chanchito triste</option>
                <option value='felipe'>Felipe</option>
            </select>

            <input
                type='checkbox'
                name='check'
                onChange={handleChange}
                checked={value.check}
            />

            <div> {/**Obtenemos el valor del radio por la etiqueta padre */}
                <label>Chancho</label>
                <input
                    onChange={handleChange}
                    type='radio'
                    value='feliz'
                    name="estado"
                    checked={value.estado === 'feliz'}
                /> Feliz
                <input
                    onChange={handleChange}
                    type='radio'
                    value='triste'
                    name="estado"
                    checked={value.estado === 'triste'}
                /> Triste
                <input
                    onChange={handleChange}
                    type='radio'
                    value='felipe'
                    name="estado" 
                    checked={value.estado === 'felipe'}
                    /> Felipe
            </div>
        </div>
    )
}

export default App