// Formulario.jsx
import React from "react";
import FormIcon from './crudCreate.jsx';
import CrudFormItems from './crudFormItem.jsx';

const FormContainer=() =>{

  return (
    <div className="form-container">
        <FormIcon/>
        <CrudFormItems/>
    </div>
  );
}

export default FormContainer;