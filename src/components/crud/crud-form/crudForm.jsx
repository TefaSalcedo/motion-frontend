// Formulario.jsx
import React, {useEffect, useState}from "react";
import FormIcon from './crudCreate.jsx';
import CrudFormItems from './crudFormItem.jsx';
// import Buttons from "./container-buttons/buttons.jsx";
// import ConfirmIcon from "./container-buttons/confirmIcon.jsx";
// import CancelIcon from "./container-buttons/cancelIcon.jsx";
import { createMotion } from '../../../api/motionsApi.js';
import { updateMotion } from '../../../api/motionsApi.js';
import {getIdMotion} from '../../../api/motionsApi.js';
import {useStore} from "../store.jsx";


const FormContainer=() =>{

    const [dataForm,setFormData] = useState({});
    const {selectedId, refreshTable} = useStore();
    
    console.log(dataForm);

    const handleCreate = async (dataSend) => {
        try {
            await createMotion(dataSend);
            refreshTable(); 
            console.log("Registro creado exitosamente");
    
        } catch (error) {
            console.log("Error al crear el registro");
        }
    };

     const handleUpdate = async (dataSend) => {
        try {
            await updateMotion(selectedId, dataSend);
            refreshTable(); 
            console.log("Registro creado exitosamente");
    
        } catch (error) {
            console.log("Error al crear el registro");
        }
    };

    const handleGetId = async () => {
            try {
                const data = await getIdMotion(selectedId);
                setFormData(data);
                console.log("Registro obtenido exitosamente");
                console.log("Datos obtenidos:", data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }

    useEffect(() => {
        if (selectedId !== null) {
            handleGetId();
        } else {
            setFormData({});
        }
    },[selectedId])



  return (
    <div className="form-container">
        <FormIcon/>
        <CrudFormItems 
            dataForm={dataForm} 
            setFormData={setFormData}
            onCreate={handleCreate}
            onUpdate={handleUpdate}
        />

    </div>
  );
}

export default FormContainer;