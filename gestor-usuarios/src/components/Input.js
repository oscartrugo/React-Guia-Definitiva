import './Input.css'

const Input = ({label, ...rest}) => { //Seleccionamos el lable y el resto de las propiedades
    return (
        <div className='field'>
            <label>{label}</label>
            <input {...rest}/>
        </div>

    )
}

export default Input