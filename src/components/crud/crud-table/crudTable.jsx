import React from "react";
import CrudRow from "./crudRow.jsx";


const Tabla=() =>{
    

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Sucursal</th>
          <th>Aspirante</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <CrudRow/>
      </tbody>
    </table>
  );
}

export default Tabla;