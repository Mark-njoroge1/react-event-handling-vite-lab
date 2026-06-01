import React from 'react';


function SubmitButton (){
    const handleEnter = () => {
        console.log("Mouse entering");
    };
    const handleLeave = () => {
        console.log("Mouse exiting");
    };
    return(
        <button
        type="button"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        >
            submit password{/* Text must exactly match*/}
        </button>
        
    );
}

export default SubmitButton;