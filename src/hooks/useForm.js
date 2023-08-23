import {useState} from 'react' 

const useForm = (inicial) => {
    const [value,setValue] = useState(inicial);

    const handleForm = (e) => {
        setValue((state)=>({
            ...state,
            [e.target.name]:e.target.value
        }))
    }
    return [value,handleForm]
}

export default useForm;