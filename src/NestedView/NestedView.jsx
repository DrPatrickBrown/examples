import React, { Component } from "react";
import HistoricDateRange from "./HistoricDateRange.jsx";

class NestedView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			range: null
		}
	}

	changeHandler = (range) => {
		this.setState({ range: range })
	}

	rangeToString = () => {
		if (this.state.range.fromYear && this.state.range.toYear) {
			return " " + this.state.range.fromYear + " to " + this.state.range.toYear;
		} else {
			return "";
		}
	}

	render() {
		return (
			<div>
				<div className="card bg-light p-2">
					<h5 className="card-title"> An example React component with child components. </h5>
					<p className="card-text">
						Below is a component called HistoricDateRange that contains two HistoricYear child components,
						one for the 'from' year of the date range and the other for the 'to' year.
					</p>
					<p className="card-text">
						When HistoricDateRange has a 'to' year that is earlier than the 'from' year it displays a warning.
					</p>
					<p className="card-text">
						HistoricDateRange has an onChange event prop which passes a newly input historic date range as an object containing a from year and a to year.
					</p>
				</div>

				<div>
					<HistoricDateRange onChange={this.changeHandler}></HistoricDateRange>
				</div>

				<br />

				<div>
					The range passed by the most recent onChange event from the component above was:
					{this.state.range === null ? null : this.rangeToString()}
				</div>

			</div>
		);
	}
}

export default NestedView;