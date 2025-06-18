import React, { useState, useEffect } from 'react';
import FormContainer from './crud-form/crudForm';
import Tabla from './crud-table/crudTable';
import "./crudPage.css"

const CrudPage = () => {
    return (
        <div className="crudPage-container">

            <FormContainer/>
            <Tabla/>
        </div>
    );
}

export default CrudPage;
   