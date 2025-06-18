import React from "react"
import Motion from "../../../assets/Imagologotipo_motion.svg"
import { useNavigate } from "react-router-dom";
import "./crudMotion.css"

const CrudMotion=()=>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return(
        <div className="crudMotion-Logo">
            <img
                src={Motion} 
                alt="motion logo"
                onClick={handleClick}
            ></img>
        </div>
    )
}

export default CrudMotion;