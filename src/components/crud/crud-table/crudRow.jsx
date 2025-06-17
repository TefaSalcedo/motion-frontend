import React, {useState, useEffect} from "react";
import TableButtons from "./crudButtons.jsx";
import { getAllMotions } from '../../../api/motionsApi.js';
import {useStore} from "../store.jsx";


const CrudRow = () => {
   const [motions, setMotions] = useState([]);
    
   const { setRefreshTable } = useStore();
      
    const getMotionsData = async () => {
            try {
                const data = await getAllMotions();
                setMotions(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

    useEffect(() => {
        getMotionsData();
        setRefreshTable(() => getMotionsData);
    }, []);
 
    

    return(
        <> 
            {motions.map((motion, index) => (
            <tr key={index}>
                <td>{motion.marca }</td>
                <td>{motion.sucursal }</td>
                <td>{motion.aspirante }</td>
                <td className="acciones">
                    <TableButtons 
                        id={motion._id} 
                    />
                </td>
            </tr>
            ))}
        </>
    );
}

export default CrudRow;