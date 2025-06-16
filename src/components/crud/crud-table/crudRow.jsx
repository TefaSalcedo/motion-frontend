import React from "react";
import TableButtons from "./crudButtons.jsx";

const CrudRow = () => {
     const datos = [
    "Mercedes", "Ford", "Renault", "Chevrolet", "Volskwagen",
    "Susuki", "KIA", "Hyunday", "Honda", "Volvo"
  ];

    return(
        <> 
            {datos.map((marca, index) => (
            <tr key={index}>
                <td>{marca}</td>
                <td>Localidad</td>
                <td>Nombre Apellido</td>
                <td className="acciones">
                <TableButtons />
                </td>
            </tr>
            ))}
        </>
    );
}

export default CrudRow;