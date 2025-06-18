import React, { useState, useEffect } from 'react';
import FormContainer from './crud-form/crudForm';
import Tabla from './crud-table/crudTable';
import CrudMotion from "./crud-motion/crudmotion"
import "./crudPage.css"

const CrudPage = () => {
    return (
        <div className="crudPage">
            <div className="crudPage-container">
                <FormContainer/>
                <Tabla/>
            </div>
            <div className="crudPage-logo"> 
                <CrudMotion/>
            </div>
        </div>
    );
}

export default CrudPage;
   