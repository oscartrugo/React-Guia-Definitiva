import { Component } from "react";

const styles = { //Agregando estilos al botón
    button: {
        backgroundColor: '#0a283e',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} /> //Le pasamos todas las propiedades que le pasemos a nuestro botón en Producto.js
        )
    }
}

export default Button