import { useRef } from "react"
//Método alternativo sobre crear forms uncontrolled component
const uncotrolledwithfiles = () =>{
    const input = useRef() //Accedemos a los valores del campo 'input' mediante el ref
    const file = useRef() //Accedemos a los valores del campo 'file' mediante el ref
    const submit = () =>{
        console.log(input.current.value) //Imprime en la consola el valor del input
        console.log(file.current.files[0]) //Nos devuelve un arreglo de files en la primer posición del array
        const form = new FormData() //Creamos un nuevo formulario
        form.append('archivo', file.current.files[0]) //Le agregamos el campo 'archivo' al nuevo formulario 
        form.append('campo', input.current.value) //Agregamos el valor del campo al formulario
        fetch('/lala', {method: 'POST', body: form})//Lo enviamos a la ruta /lala, seteamos el método post con cuerpo form
    }
    return(
        <div>
            <div>
                <span>Lala</span>
                <input type='text' name="campo" ref={input}></input>
                <input type='file' ref={file}></input>
            </div>
            <input type='submit' value='Enviar' onClick={submit}></input>
        </div>
    )
}

export default uncotrolledwithfiles