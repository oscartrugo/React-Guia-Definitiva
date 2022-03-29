import { Component } from "react";
import BubbleAlert from './BubbleAlert'

const styles = {
    carro: {
        backgroundColor: '#359a2c',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },

    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
    
}

class Carro extends Component{
    render(){
        const{carro} = this.props //Sacamos nuestro carro de las props del componente
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 //Render condicional: si la cantidad es diferente a cero,
                    ? <BubbleAlert value={cantidad}/> //Mostramos el componente BubbleAlert con el valor de la cantidad
                    : null} {/**Si no es diferente a cero, no renderiza el componente */}
                    
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro