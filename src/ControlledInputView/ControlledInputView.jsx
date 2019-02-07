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
				<p>
					This example is a component called HistoricYear.
					HistoricYear accepts a single AD or BC year, defined as a whole number of years value and "AD" or "BC" value, via a pair of controlled html inputs.
					HistoricYear has an onChange event prop which passes a newly input historic year as a signed integer, positive for an AD year and negative for a BC year.
				</p>

				<p>
					The controlled html inputs allow the historic period a year falls within to be immediately displayed for a newly entered year.
                    e.g. 1000BC is in the Iron Age period, 1248AD is in the Medieval period <br />
				</p>

				<fieldset>
					<legend>HistoricYear component</legend>
					<HistoricYear onChange={this.changeHandler}></HistoricYear>
				</fieldset>

				<br />

				<div>
					Year passed via onChange event of HistoricYear component is: {this.state.year === undefined ? null : this.state.year}
				</div>
			</>
		);
	}
}

export default ControlledInputView;