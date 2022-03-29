import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0a283',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        width: '800px'
    }
}

class Layout extends Component{
    render(){
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children} {/**Se imprimen los productos dentro del layout */}
                </div>
            </div>
        )
    }
}

export default Layout