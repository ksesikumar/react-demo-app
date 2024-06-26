import React, { Component, useEffect,useState } from "react";


const LifeCycleDemoFunComp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('ComponetDitMount');
        return () => {
            console.log('ComponentWillUnMount');
        };
        
    }, []);
    useEffect(() => {
        console.log('ComponetDitMount');
    });

    console.log('render');

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default LifeCycleDemoFunComp;