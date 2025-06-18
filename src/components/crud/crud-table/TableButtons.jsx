import React, { useState, useEffect } from "react";
import EditarOption from "../../../assets/Icon_editar1.svg";
import EditarApagado from "../../../assets/Icon_editar.svg";
import EliminarOption from "../../../assets/Icon_eliminar1.svg";
import EliminarApagado from "../../../assets/Icon_eliminar.svg";
import { deleteMotion } from "../../../api/motionsApi.js";
import { useStore } from "../store.jsx";
import "./TableButtons.css";
const TableButtons = ({ id }) => {
  const {
    selectedId,
    setSelectedId,
    setShowActions,
    refreshTable,
    setActivate,
  } = useStore();

  const [buttonsAction, setButtons] = useState(true);

  const handleDelete = async () => {
    try {
      await deleteMotion(id);
      refreshTable();
    } catch (error) {}
  };

  const handleEdit = () => {
    setSelectedId(id);
    setShowActions(true);
    setActivate(true);
  };

  const handleButtonActions = () => {
    if (selectedId === id && selectedId !== null) {
      setButtons(true);
    } else if (selectedId !== null) {
      setButtons(false);
    } else {
      setButtons(true);
    }
  };
  useEffect(() => {
    handleButtonActions();
  }, [selectedId, id]);

  return (
    <div className="acciones-container">
      <button onClick={handleEdit}>
        <img src={buttonsAction ? EditarOption : EditarApagado} alt="Editar" />
      </button>
      <button onClick={handleDelete}>
        <img
          src={buttonsAction ? EliminarOption : EliminarApagado}
          alt="Eliminar"
        />
      </button>
    </div>
  );
};
export default TableButtons;
