import React, {useEffect} from 'react';
import IconCreate from "../../../assets/Icon_crear.svg";
import { useStore } from "../store.jsx";


const FormIcon=()=>{
    console.log("FormIcon component rendered");
    const {setShowActions,setSelectedId,refreshTable, setActivate} = useStore();

    const handleCreate = () => {
        console.log("Create cosito");
        setShowActions(true);
        // refreshTable();
        setSelectedId(null);
        setActivate(true);
        // Aquí puedes agregar la lógica para manejar la creación de un nuevo registro
    }
    
 
    

    return (
        <>
            <button onClick={handleCreate} className="create-button">
                <img src={IconCreate} alt="Create Icon" />
            </button>
        </>
    );
}

export default FormIcon;