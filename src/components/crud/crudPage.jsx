import React, { useState, useEffect } from "react";
import FormContainer from "./crud-form/crudForm";
import Tabla from "./crud-table/crudTable";
import CrudMotion from "./crud-motion/crudmotion";
import Loading from "../crud/crud-loading/crudLoading";
import "./crudPage.css";
import { useStore } from "./store";

const CrudPage = () => {
  const { loading } = useStore();

  return (
    <div className="crudPage">
      <div className="crudPage-container">
        <FormContainer />
        <Tabla />
        {loading && <Loading />}
      </div>
      <div className="crudPage-logo">
        <CrudMotion />
      </div>
    </div>
  );
};

export default CrudPage;
