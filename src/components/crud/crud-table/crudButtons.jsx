import React from "react";
import EditarOption from "../../../assets/Icon_editar.svg";
import EliminarOption from "../../../assets/Icon_eliminar.svg";

const TableButtons=()=>{
    return (
        <>
            <img src={EditarOption}/>
            <img src={EliminarOption}/>
        </>
    )
}
export default TableButtons;