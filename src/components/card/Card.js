import './Card.css'

const CardPrint = ({children}) => {
    return(
         <div className="card">
            {children}
        </div>
    );
}

export default CardPrint;