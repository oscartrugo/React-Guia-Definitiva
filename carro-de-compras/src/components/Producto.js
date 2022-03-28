import { Component } from "react";

class Producto extends Component{
    render(){
        console.log(this.props) //Imprimimos las propiedades para verificar que estén llegando
        const {producto} = this.props //Pasamos las props al objeto "producto" haciendo destructuring
        return (
            <div>
                <img alt={producto.name} src={producto.img}/> {/** Imprimimos la imagen del producto */}
                <h3>{producto.name}</h3> {/**Imprimimos el nombre del producto */}
                <p>{producto.price}</p> {/**Imprimimos el precio del producto */}
            </div>
        )
    }
}

export default Producto