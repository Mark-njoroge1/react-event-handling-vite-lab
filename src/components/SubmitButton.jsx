import React from 'react';


function SubmitButton (){
    const handleMouseEnter = () => {
        console.log("Mouse entered the button area.");
    };
    const handleMouseLeave = () => {
        console.log("Mouse left the button area.");
    };
    return(
        <button
        type="button"
        onMouseEnter={handleMoueEnter}
        onMouseLeave={handleMouseLeave}
        >
            submit password{/* Text must exactly match*/}
        </button>
        
    );
}

export default SubmitButton;