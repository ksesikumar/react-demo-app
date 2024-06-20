import React from "react";

// 1. JSXBasic Syntax

export const element1 = <h1>Hello, Anil Sir!</h1>;

// 2. Embedding Expression in JSX

const name = 'This Is Sesi Kumar';
export const element2 = <h1> Hello, {name}</h1>;

// 3.JSX Attributes

const param = {
    url: 'https://mrvtech.com/image.jpg',
    name: 'MRV Image'
};
export const element3 = <img src={param.url} alt={param.name} />;

// 5. JSX Children

export const element4 = (
    <div>
        <h1>Hello Team!</h1>
        <h2>Good To See You.</h2>
    </div>
);
