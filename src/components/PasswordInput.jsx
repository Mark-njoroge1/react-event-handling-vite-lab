import React, { useState } from 'react';

function PasswordInput (){
    const [password, setPassword] = useState('');
    const handleInputChange = (e) => {
        setPassword(e.target.value);
        console.log("User is typing...");
    };
    return(
        <input
           type="password"
           value={password}
           onChange={handleInputChange}
           placeholder="Enter your password"
        />
    );
}
export default PasswordInput;