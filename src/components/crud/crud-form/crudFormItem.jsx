import React, { useState, useRef } from "react";
import carIcon from "../../../assets/Icon_vehiculo.svg";
import locationIcon from "../../../assets/Icon_puntoubicacion.svg";
import userIcon from "../../../assets/Icon_persona.svg";
import ConfirmIcon from "./container-buttons/confirmIcon.jsx";
import CancelIcon from "./container-buttons/cancelIcon.jsx";
import carIconActivate from "../../../assets/Icon_vehiculo1.svg";
import locationIconActivate from "../../../assets/Icon_puntoubicacion1.svg";
import userIconActivate from "../../../assets/Icon_persona1.svg";

import { useStore } from "../store.jsx";

const CrudFormItems = ({ dataForm, setFormData, onCreate, onUpdate }) => {
    const inputGroup = [
        {
            icon: carIcon,
            placeholder: "Mazda",
            name: "marca",
            activate: carIconActivate,
        },
        {
            icon: locationIcon,
            placeholder: "Chapinero",
            name: "sucursal",
            activate: locationIconActivate,
        },
        {
            icon: userIcon,
            placeholder: "David Sandoval",
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
        console.log("Formulario enviado");
        console.log(values);

        if (
            values.marca === "" ||
            values.sucursal === "" ||
            values.aspirante === ""
        ) {
            // alert("Por favor, completa todos los campos.");
            return;
        }

        if (selectedId === null) {
            console.log("Creando nuevo registro");
            onCreate(values);
        } else {
            console.log("Actualizando registro existente");
            onUpdate(values);
        }

        form.reset();
        setSelectedId(null);
    };

    const limpiarFormulario = () => {
        console.log("Limpiando formulario");
        console.log("selectedId antes de limpiar:", selectedId);
        setSelectedId(null);
        console.log("selectedId después de limpiar:", selectedId);
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
                        <div className="icon">
                            <img src={activate ? item.activate : item.icon} alt="" />
                        </div>
                        <input
                            type="text"
                            name={item.name}
                            value={dataForm[item.name] || ""}
                            placeholder={item.placeholder}
                            onChange={(e) =>
                                setFormData({ ...dataForm, [item.name]: e.target.value })
                            }
                        />
                    </div>
                ))}
                {showActions && (
                    <div>
                        {selectedId === null ? (
                            <div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowActions(false);
                                        limpiarFormulario();
                                        setActivate(false);
                                    }}
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => {
                                        limpiarFormulario();
                                        setShowActions(false);
                                        setActivate(false);
                                    }}
                                >
                                    Crear
                                </button>
                            </div>
                        ) : (
                            <div>
                                <ConfirmIcon />
                                <span
                                    onClick={() => {
                                        limpiarFormulario();
                                        setShowActions(false);
                                        setActivate(false);
                                    }}
                                >
                                    <CancelIcon />
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </form>
        </>
    );
};

export default CrudFormItems;
