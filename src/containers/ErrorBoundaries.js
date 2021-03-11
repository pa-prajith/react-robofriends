import React, { Component } from 'react'

export class ErrorBoundaries extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return <h1>OOPS some error, Please try again later!</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundaries;

