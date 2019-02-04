import React, { Component } from "react";

class OneWayView extends Component {
	render() {
		return (
			<>
				<p>
					This example is a component that contains sub-components.
					It demonstrates the one-way flow of data down from parent component to child components via props
					and the one-way flow of events up from child components to parent component.
				</p>

				<p>
					The parent component is called HistoricDateRange, and it contains two YearInput components,
					one for the start year of the date range and one for the end year.
				</p>

				<p>
					The YearInput child component inputs a single AD or BC year.
                    YearInput contains two Controlled Inputs, an input for number of years, and a select with options 'AD' and 'BC' for the epoch.
				</p>

				<p>
					When a year is defined YearInput displays the historic period the year falls within
                    e.g. 1000BC is in the Iron Age period, 1248AD is in the Medieval period
				</p>

				<p>
					The earliest year that should be accepted is the start of the Bronze Age period, the most recent that can be accepted is the end of the Post Medieval period.
				</p>
			</>
		);
	}
}

export default OneWayView;