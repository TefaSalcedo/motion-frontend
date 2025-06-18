import React, { useEffect, useState } from "react";
import FormIcon from "./FormIcon.jsx";
import CrudFormItems from "./crudFormItem.jsx";
import { createMotion } from "../../../api/motionsApi.js";
import { updateMotion } from "../../../api/motionsApi.js";
import { getIdMotion } from "../../../api/motionsApi.js";
import { useStore } from "../store.jsx";
import "./crudForm.css";

const FormContainer = () => {
  const [dataForm, setFormData] = useState({});
  const { selectedId, refreshTable } = useStore();

  const handleCreate = async (dataSend) => {
    try {
      await createMotion(dataSend);
      refreshTable();
    } catch (error) {
    }
  };

  const handleUpdate = async (dataSend) => {
    try {
      await updateMotion(selectedId, dataSend);
      refreshTable();
    } catch (error) {
    }
  };

  const handleGetId = async () => {
    try {
      const data = await getIdMotion(selectedId);
      setFormData(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    if (selectedId !== null) {
      handleGetId();
    } else {
      setFormData({});
    }
  }, [selectedId]);

  return (
    <div className="form-container">
      <FormIcon />
      <CrudFormItems
        dataForm={dataForm}
        setFormData={setFormData}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default FormContainer;
