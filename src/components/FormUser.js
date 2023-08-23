import { useState } from "react";
import PrintUserData from "./PrintUserData";
import useForm from "../hooks/useForm";
import useSaveData from "../hooks/useSaveData";
import Input from "./input/Input";

const FormUser = () => {

    const [value, handleForm] = useForm({
        name:'',
        lastName:'',
        year:'',
        email:'',
    })

    const [data,getDataForm] = useSaveData();

    const dataSave = () => {
        getDataForm(value)
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form>
            <Input label="Nombre" name="name" value={value.name} onChange={handleForm}></Input>
            <Input label="Apellido" name="lastName" value={value.lastName} onChange={handleForm}></Input>
            <Input label="Edad" type="number" name="year" value={value.year} onChange={handleForm}></Input>
            <Input label="Correo" name="email" value={value.email} onChange={handleForm}></Input>
            <input type="button" onClick={dataSave} value="Obtener" />
            </form>
            <PrintUserData dataForm={data}></PrintUserData>
        </div>
    );
} 
 
export default FormUser;