import './Card.css'

const Card = ({children}) => { //Recibimos el children
    return(
        <div className='card'>
            {children}
        </div>
    )
}

export default Card