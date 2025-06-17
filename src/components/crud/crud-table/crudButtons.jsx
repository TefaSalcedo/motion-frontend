import React, {useState, useEffect}from "react";
import EditarOption from "../../../assets/Icon_editar1.svg";
import EditarApagado from "../../../assets/Icon_editar.svg";
import EliminarOption from "../../../assets/Icon_eliminar1.svg";
import EliminarApagado from "../../../assets/Icon_eliminar.svg";
import { deleteMotion } from '../../../api/motionsApi.js';
import { useStore } from "../store.jsx";

const TableButtons=({id})=>{

    const {selectedId, setSelectedId,  setShowActions, refreshTable } = useStore();
    
    const [buttonsAction, setButtons] = useState(true);

    const handleDelete = async () => {
            try {
                await deleteMotion(id);
                refreshTable();
                console.log(`Registro con ID: ${id} eliminado`);
            } catch (error) {
                console.log(`Error al eliminar el registro con ID: ${id}`, error);
            }
        };

    const handleEdit = () => {
        setSelectedId(id);
        setShowActions(true);
        // Aquí podrías abrir un modal o redirigir a una página de edición
        console.log(`Editar registro con ID: ${id}`);
    }
    // SI selectedId =id  activa el buttonActions y si no lo apago solo si EL selectedId ES DIFERENTE DE NULL
    
    const handleButtonActions = () => {
        if (selectedId === id && selectedId !== null) {
            setButtons(true);
        } else if (selectedId !== null) {
            setButtons(false);
        }else{
            setButtons(true);
        }

    }
    useEffect(() => {
        handleButtonActions();
    }, [selectedId, id]);

    return (
        <>
            <>
                <button onClick={handleEdit} >
                    <img src={buttonsAction?EditarOption:EditarApagado} alt="Editar" />
                </button>
                <button onClick={handleDelete} >
                    <img src={buttonsAction?EliminarOption:EliminarApagado} alt="Eliminar" />
                </button>
            </>
           
        </>
    )
}
export default TableButtons;