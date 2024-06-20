import React from "react";

function Greet({ param }) {
    if (param) {
        return <h1>Hello, {param}</h1>;
    }
    return <h1>Hello, Guest!</h1>;
}
export default Greet;