import React, { Component } from "react";
import ConnectedCounter from './ConnectedCounter';

class ReduxView extends Component {
	render() {
		return (
			<div>
				<div className="card bg-light p-2">
					<h5> An example of two React components using a Redux store. </h5>
					<p className="card-text p-2">
						The two counter components below are connected to a shared value held in a Redux store.
						The buttons on each counter dispatch actions to update this shared value.
						You will notice that the two counters always display the same value as each other.
					</p>
					<p className="card-text p-2">
						There are separate unit tests for the actions and the reducer.
					</p>
				</div>
				<br />
				<div>
					<ConnectedCounter step={1}></ConnectedCounter>
				</div>
				<br />
				<div>
					<ConnectedCounter step={2}></ConnectedCounter>
				</div>
			</div>
		);
	}
}

export default ReduxView;