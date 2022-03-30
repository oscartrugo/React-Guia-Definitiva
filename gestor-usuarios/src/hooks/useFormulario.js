import { useState } from "react"

const useFormulario = (inicial)=>{
    const [formulario, setFormulario] = useState(inicial) //Destructuring de los formularios
    const handleChange = (e) => { //Se encarga de guardar todos los valores
      setFormulario({
        ...formulario, //Le pasamos el formulario existente
        [e.target.name]: e.target.value
      })

    }

    const reset = () => {
      setFormulario(inicial) //Seteamos el formulario con el valor inicial, el objeto que contiene las propiedades vacías
    }

    return [formulario, handleChange, reset] //Exportamos las funciones
}

export default useFormulario