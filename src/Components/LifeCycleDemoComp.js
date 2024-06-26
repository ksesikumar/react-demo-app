import React, { Component } from "react";

class LifeCycleDemoClassComp extends Component{
    
    // Mounting Phase Lifecycle methods

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log('Constructor');
    }
    static getDirivedStateFromProps(nextProps, prevState) {
        console.log('getDirivedStateFromProps');
        return null; // No state update needed
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    // Update Phase Lifecycle Methods

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdat');
        return true; // Allow re-render
    }

    getSnapshotBeforeUpdate(prevprops, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null; // no snapshot value needed
    }

    componentDidUpdate(prevprops, prevState) {
        console.log('componentDitUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={
                    () =>this.setState({count:this.state.count+1})
                }>
                    Increment
                </button>
            </div>
        );
    }
}

export default LifeCycleDemoClassComp;