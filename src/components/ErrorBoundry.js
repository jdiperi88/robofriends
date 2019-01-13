import React, { Component } from "react";

class ErrorBoundry extends Component {
	state = {
		hasError: false
	};
	componentDidCatch(error, info) {
		this.setState({
			hasError: true
		});
	}
	render() {
		if (this.state.hasError) {
			return <h1>Oops, we have an error sir</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundry;
