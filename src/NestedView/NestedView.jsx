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
			<>
				<p>
					This example is a parent component that contains sub-components.
					It demonstrates the one-way flow of data from parent to child via props and the one-way flow of events from child to parent.
				</p>

				<p>
					The parent component is called HistoricDateRange, and it contains two HistoricYear child components,
					one for the 'from' year of the date range and the other for the 'to' year. <br />
					When HistoricDateRange has a 'to' year that is earlier than the 'from' year it displays a warning.
				</p>

				<p>
					HistoricDateRange has an onChange event prop which passes a newly input historic date range as an object containing a from year and a to year.
				</p>

				<div>
					<HistoricDateRange fromYear={-1000} toYear={-500} onChange={this.changeHandler}></HistoricDateRange>
				</div>

				<br />

				<div>
					The range passed by the most recent onChange event from the component above was:
					{this.state.range === null ? null : this.rangeToString()}
				</div>

			</>
		);
	}
}

export default NestedView;