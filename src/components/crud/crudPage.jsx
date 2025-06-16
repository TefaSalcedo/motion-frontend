import React, { useState, useEffect } from 'react';
import FormContainer from './crud-form/crudForm';
import Tabla from './crud-table/crudTable';



const CrudPage = () => {

    return (
        <>
            <h1>Gestión de Registros</h1>
            <FormContainer/>
            <Tabla/>
        </>
    );
}

export default CrudPage;
   