import { useState } from "react"

const useFormulario = (inicial)=>{
    const [formulario, setFormulario] = useState(inicial) //Destructuring de los formularios
    const handleChange = (e) => { //Se encarga de guardar todos los valores
      setFormulario({
        ...formulario, //Le pasamos el formulario existente
        [e.target.name]: e.target.value
      })
    }

    return [formulario, handleChange]
}

export default useFormulario