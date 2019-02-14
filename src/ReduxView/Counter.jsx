import React, { PureComponent } from "react";

class Counter extends PureComponent {
	render() {
		return (
			<div className="input-group col-md-4">
				<div className="input-group-prepend">
					<button id="decrease" className="btn btn-outline-secondary" type="button" onClick={() => this.props.onDecrease(this.props.step)}>
						-{this.props.step}
					</button>
				</div>
				<input type="text" className="form-control" value={this.props.countValue} disabled></input>
				<div className="input-group-append">
					<button id="increase" className="btn btn-outline-secondary" type="button" onClick={() => this.props.onIncrease(this.props.step)}>
						+{this.props.step}
					</button>
				</div>
			</div>
		);
	}
}

export default Counter;