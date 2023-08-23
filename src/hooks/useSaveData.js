import {useState} from 'react'

const useSaveData = (inicial = []) => {

    const [data,setData] = useState(inicial);

    const getDataForm = (value) => {
        setData(prevData =>
            [...prevData,value]
        );
    }

    return [data,getDataForm];
}

export default useSaveData;