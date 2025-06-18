import React, { useState, useEffect } from "react";
import TableButtons from "./TableButtons.jsx";
import { getAllMotions } from "../../../api/motionsApi.js";
import { useStore } from "../store.jsx";
import "./crudRow.css";

const CrudRow = () => {
  const [motions, setMotions] = useState([]);

  const { setRefreshTable, setLoading } = useStore();

  const getMotionsData = async () => {
    try {
      const data = await getAllMotions();
      setMotions(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMotionsData();
    setRefreshTable(() => getMotionsData);
  }, []);

  return (
    <>
      {motions.map((motion, index) => (
        <tr key={index}>
          <td className="td-marca">{motion.marca}</td>
          <td className="td-sucursal">{motion.sucursal}</td>
          <td className="td-aspirante">
            <div className="aspirante-container">
              <span> {motion.aspirante}</span>
              <TableButtons id={motion._id} />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CrudRow;
