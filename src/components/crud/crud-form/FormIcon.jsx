import React, {useEffect} from 'react';
import IconCreate from "../../../assets/Icon_crear.svg";
import { useStore } from "../store.jsx";
import "./FormIcon.css"

const FormIcon=()=>{
    const {setShowActions,setSelectedId,refreshTable, setActivate} = useStore();
    const handleCreate = () => {
        setShowActions(true);
        setSelectedId(null);
        setActivate(true);
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