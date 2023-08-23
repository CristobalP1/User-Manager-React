import './Container.css'

const ContainerPrint = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
     );
}

export default ContainerPrint;