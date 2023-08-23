import PrintUserData from "./PrintUserData";
import useSaveData from "../../../hooks/useSaveData";
import CardPrint from "../../../components/card/Card";
import ContainerPrint from "../../../components/container/Container";
import UserForm from "./UserForm";

const FormUser = () => {

    const [data,getDataForm] = useSaveData();

    return (
        <div style={{marginTop:'15%'}}>
            <ContainerPrint>
                <CardPrint>
                    <div style={{padding:20}}>
                        <UserForm submit={getDataForm}></UserForm>
                    </div>
                </CardPrint>
                <PrintUserData dataForm={data}></PrintUserData>
            </ContainerPrint>
        </div>
    );
}

export default FormUser;