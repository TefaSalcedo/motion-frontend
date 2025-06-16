import React from 'react';

const Buttons = () => {

    const actions = [
        { 
            name: "cancelar", 
            // onClick: handleCancel 
        },
        {   name: "crear", 
            // onClick: handleCreate 
        }
    ]

    return (
        <>
            {actions.map((action, index) => (
                <button 
                    key={index} 
                    // onClick={action.onClick}
                    >
                    {action.name}
                </button>
            ))}
        </>
    );
}

export default Buttons;
