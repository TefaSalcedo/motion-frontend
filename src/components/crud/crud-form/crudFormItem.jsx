import React from 'react';
import carIcon from '../../../assets/Icon_vehiculo.svg';
import locationIcon from '../../../assets/Icon_puntoubicacion.svg';
import userIcon from '../../../assets/Icon_persona.svg';

const CrudFormItems = ({marca, sucursal, aspirante}) => {
    const inputGroup = [
        { icon: carIcon, placeholder: 'Mazda'},
        { icon: locationIcon, placeholder: 'Chapinero' },
        { icon: userIcon, placeholder: 'David Sandoval' }
    ]
    console.log("CrudFormItems component rendered");
    return (
        <>
            {inputGroup.map((item, index) => (
                <div className="input-group" key={index}>
                    <div className="icon">
                        <img src={item.icon} alt="" />
                    </div>
                        <input type="text" placeholder={item.placeholder} />
                </div>
            ))}
        </>
    );
}

export default CrudFormItems;