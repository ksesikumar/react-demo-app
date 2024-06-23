import React, { Component } from "react";

class PropsClassDemo extends Component {
    render() {
        return (
        <div>
                <h1>Hello, Sesi Your Roll Number Is: {this.props.rollNumber }</h1>
        </div>
        );
    }
}

export default PropsClassDemo;