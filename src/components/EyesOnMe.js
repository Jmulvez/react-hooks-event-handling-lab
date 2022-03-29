import react from "react";

function EyesOnMe() {
    function handleFocus(event) {
        console.log('Good!');
    }
    
    function handleBlur(event) {
        console.log('Hey! Eyes on me!');
    }
    
    return (
        <button onFocus={() => handleFocus}></button>
        <button onBlur={() => handleBlur}></button>
    )
    }
export default EyesOnMe;