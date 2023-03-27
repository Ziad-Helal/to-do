import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error: error };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            switch (this.state.error.message) {
                case "No tasks available!":
                    console.log(this.state.error.message);
                    return <h1>{this.state.error.message}</h1>;

                default:
                    return <h1>Something went wrong.</h1>;
            }
        } else return this.props.children;
    }
}
