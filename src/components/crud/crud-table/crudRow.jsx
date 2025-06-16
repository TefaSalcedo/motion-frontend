import React, {useState, useEffect} from "react";
import TableButtons from "./crudButtons.jsx";
import { getAllMotions } from '../../../api/motionsApi.js';



const CrudRow = () => {
   const [motions, setMotions] = useState([]);
      
        useEffect(() => {
            const getMotionsData = async () => {
                try {
                    const data = await getAllMotions();
                    setMotions(data);
                    console.log(data);
                } catch (error) {
                    console.error(error);
                }
            };
            getMotionsData();
            
        }, []);

    return(
        <> 
            {motions.map((motion, index) => (
            <tr key={index}>
                <td>{motion.marca || "Marca"}</td>
                <td>{motion.sucursal || "Localidad"}</td>
                <td>{motion.aspirante || "Nombre Apellido"}</td>
                <td className="acciones">
                    <TableButtons />
                </td>
            </tr>
            ))}
        </>
    );
}

export default CrudRow;