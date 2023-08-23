import {useState} from 'react' 

const useForm = (inicial) => {
    const [value,setValue] = useState(inicial);

    const handleForm = (e) => {
        setValue(()=>({
            ...value,
            [e.target.name]:e.target.value
        }))
    }

    const reset = () => {
        setValue(inicial);
    }

    return [value,handleForm,reset]
}

export default useForm;