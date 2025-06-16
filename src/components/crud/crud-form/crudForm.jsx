// Formulario.jsx
import React from "react";
import FormIcon from './crudCreate.jsx';
import CrudFormItems from './crudFormItem.jsx';
import Buttons from "./container-buttons/buttons.jsx";
import ConfirmIcon from "./container-buttons/confirmIcon.jsx";
import CancelIcon from "./container-buttons/cancelIcon.jsx";

const FormContainer=() =>{

  return (
    <div className="form-container">
        <FormIcon/>
        <CrudFormItems/>
        <>
        <Buttons/>
        <ConfirmIcon/>
        <CancelIcon/>
        </>
    </div>
  );
}

export default FormContainer;