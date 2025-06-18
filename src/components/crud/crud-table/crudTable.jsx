import React from "react";
import CrudRow from "./crudRow.jsx";
import "./crudTable.css"

const Tabla=() =>{
  
  return (
    <div className="table-scroll-container"> 
      <table className="table-container">
        <thead>
          <tr>
            <th className="th-marca">Marca</th>
            <th className="th-sucursal">Sucursal</th>
            <th className="th-aspirante">Aspirante</th>
          </tr>
        </thead>
        <tbody>
          <CrudRow/>
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;