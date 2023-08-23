import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import useForm from "../../../hooks/useForm";


const UserForm = ({submit}) => {

    const [value, handleForm,reset] = useForm({
        name:'',
        lastName:'',
        year:'',
        email:'',
    })

    const dataSave = (e) => {
        e.preventDefault()
        submit(value);
        reset();
    }

    return (
        <div>
        <h2>Formulario</h2>
        <form onSubmit={dataSave}>
            <Input label="Nombre" name="name" value={value.name} onChange={handleForm}></Input>
            <Input label="Apellido" name="lastName" value={value.lastName} onChange={handleForm}></Input>
            <Input label="Edad" type="number" name="year" value={value.year} onChange={handleForm}></Input>
            <Input label="Correo" name="email" value={value.email} onChange={handleForm}></Input>
            <Button>Enviar</Button>
        </form>
        </div>
     );
}
 
export default UserForm;