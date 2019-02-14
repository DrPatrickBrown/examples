import React, { Component } from "react";

// A Bootstrap spinner

class Spinner extends Component {

	render() {
		return (
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		)
	}
}

export default Spinner;