import { useField } from "formik"

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props) //Utilizamos el hook usefield de formik

    return(
        <div>
            <label className="label">{label}</label>
            <input className="input" {...field} {...props}/>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    )
}

export default TextInput

/**
 * Los componentes customizados que vayamos a crear utilizando Formik van a tener la sig. estructura. 
 * 1. Hacer un object destructuring dentro de las propiedases del objeto (label y agrupar las otras propiedades)
 * 2. Hacer uso de un hook proporcionado por formik el cual devuelve un arreglo que contiene 2 elementos
 */