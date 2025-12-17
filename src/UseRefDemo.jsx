import React, { useState, useEffect, useRef } from 'react';

function UseRefDemo () {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    }) 

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Click me!
            </button>
        </>
    );
}

export default UseRefDemo