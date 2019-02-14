import React, { Component } from "react";
import HistoricYear from "./HistoricYear.jsx";

class ControlledInputView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			year: undefined
		}
	}

	changeHandler = (signedYear) => {
		console.log("HistoricYear.onChange called with year ", signedYear);
		this.setState({ year: signedYear })
	}

	render() {
		return (
			<>
				<div className="card bg-light p-2">
					<h5 className="card-title"> An example React component that contains controlled html inputs. </h5>
					<p className="card-text">
						Below is a component called HistoricYear.
						HistoricYear accepts a single year, defined as a 1-to-4 digit number of years value and an "AD" or "BC" value.
					</p>
					<p className="card-text">
						The year input element and AD/BC select element are controlled inputs, which allows the historic period a year falls within to be displayed for a newly entered year.
                        e.g. 1000BC is in the Bronze Age period, 1248AD is in the Medieval period.
					</p>
					<p className="card-text">
						HistoricYear has an onChange event prop which passes a newly input historic year as a signed integer, positive for an AD year and negative for a BC year.
				    </p>
				</div>

				<fieldset>
					<legend>HistoricYear component</legend>
					<HistoricYear onChange={this.changeHandler}></HistoricYear>
				</fieldset>

				<br />

				<div>
					The year passed by the most recent onChange event of the component above was: {this.state.year === undefined ? null : this.state.year}
				</div>
			</>
		);
	}
}

export default ControlledInputView;