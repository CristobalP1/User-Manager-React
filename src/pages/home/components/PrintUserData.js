const PrintUserData = (props) => {

    const userData = props.dataForm;

     return (
        <div>
            <h1>Datos de usuario</h1>
            <ul>
            {
                userData.map((el,index) =>(
                    <li key={index}>
                    nombre: {el.name}, 
                    Apellido: {el.lastName}, 
                    Edad: {el.year}, 
                    Correo: {el.email}
                    </li>
                )
                )
            }
            </ul>
        </div>
     );
}
 
export default PrintUserData;