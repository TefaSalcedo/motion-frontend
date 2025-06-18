import React, { useState, useRef } from "react";
import carIcon from "../../../assets/Icon_vehiculo.svg";
import locationIcon from "../../../assets/Icon_puntoubicacion.svg";
import userIcon from "../../../assets/Icon_persona.svg";
import ConfirmIcon from "./container-buttons/confirmIcon.jsx";
import CancelIcon from "./container-buttons/cancelIcon.jsx";
import carIconActivate from "../../../assets/Icon_vehiculo1.svg";
import locationIconActivate from "../../../assets/Icon_puntoubicacion1.svg";
import userIconActivate from "../../../assets/Icon_persona1.svg";
import "./crud.css";

import { useStore } from "../store.jsx";

const CrudFormItems = ({ dataForm, setFormData, onCreate, onUpdate }) => {
  const inputGroup = [
    {
      icon: carIcon,
      placeholder: "Marca",
      name: "marca",
      activate: carIconActivate,
    },
    {
      icon: locationIcon,
      placeholder: "Localidad",
      name: "sucursal",
      activate: locationIconActivate,
    },
    {
      icon: userIcon,
      placeholder: "Nombre Apellido",
      name: "aspirante",
      activate: userIconActivate,
    },
  ];

  const {
    selectedId,
    setSelectedId,
    showActions,
    setShowActions,
    activate,
    setActivate,
  } = useStore();

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    setFormData(values);
    if (
      values.marca === "" ||
      values.sucursal === "" ||
      values.aspirante === ""
    ) {
      return;
    }

    if (selectedId === null) {
      onCreate(values);
    } else {
      onUpdate(values);
    }

    form.reset();
    setSelectedId(null);
    limpiarFormulario();
    setShowActions(false);
    setActivate(false);
  };

  const limpiarFormulario = () => {
    setSelectedId(null);
    setFormData({ marca: "", sucursal: "", aspirante: "" });
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        {inputGroup.map((item, index) => (
          <div className="input-group" key={index}>
            <div className="icon-container">
              <img src={activate ? item.activate : item.icon} alt={item.name} />
            </div>
            <div>
              <input
                type="text"
                name={item.name}
                value={dataForm[item.name] || ""}
                placeholder={item.placeholder}
                onChange={(e) =>
                  setFormData({ ...dataForm, [item.name]: e.target.value })
                }
                onInput={(e) => {
                  e.target.value = e.target.value.replace(
                    /[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g,
                    ""
                  );
                }}
              />
            </div>
          </div>
        ))}
        {showActions && (
          <div className="button-container">
            {selectedId === null ? (
              <div className="option-container-create">
                <button
                  className="button-cancel"
                  onClick={() => {
                    setShowActions(false);
                    limpiarFormulario();
                    setActivate(false);
                  }}
                >
                  Cancelar
                </button>
                <button className="button-create" type="submit">
                  Crear
                </button>
              </div>
            ) : (
              <div className="option-container-edit">
                <span
                  onClick={() => {
                    limpiarFormulario();
                    setShowActions(false);
                    setActivate(false);
                  }}
                >
                  <CancelIcon />
                </span>
                <button type="submit" className="confirmButton">
                  <ConfirmIcon />
                </button>
              </div>
            )}
          </div>
        )}
      </form>
    </>
  );
};

export default CrudFormItems;
