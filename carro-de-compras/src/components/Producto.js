import { Component } from "react";
import Button from './Button'

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
    },
    img: {
        width: '100%'
    }
}

class Producto extends Component{
    render(){
        console.log(this.props) //Imprimimos las propiedades para verificar que estén llegando
        const {producto, agregarAlCarro} = this.props //Pasamos las props al objeto "producto" haciendo destructuring
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img}/> {/** Imprimimos la imagen del producto */}
                <h3>{producto.name}</h3> {/**Imprimimos el nombre del producto */}
                <p>{producto.price}</p> {/**Imprimimos el precio del producto */}
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto