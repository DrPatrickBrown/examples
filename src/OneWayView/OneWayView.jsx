import React, { Component } from "react";
import HistoricDateRange from "./HistoricDateRange.jsx";

class OneWayView extends Component {


	render() {
		let testToYear = {
			years: 1,
			epoch: "AD"
		}
		let testFromYear = {
			years: 1,
			epoch: "AD"
		}
		let testRange = {
			fromYear: testFromYear,
			toYear: testToYear
		}
		let changeHandler = (value) => {
			console.log(value);
		}
		return (
			<>
				<p>
					This example is a component that contains sub-components.
					It demonstrates the one-way flow of data from parent to child via props and the one-way flow of events from child to parent.
				</p>

				<p>
					The parent component is a Controlled Input called HistoricDateRange, and it contains two HistoricYear components,
					one for the 'from' start year of the date range and one for the 'to' end year. <br />
					When HistoricDateRange has a toYear that occured before the forYear it displays an error message.
				</p>

				<p>
					The HistoricYear child component is a Controlled Input that accepts a single AD or BC year. <br />
					When HistoricYear's value is a valid year it displays the historic period the year falls within
                    e.g. 1000BC is in the Iron Age period, 1248AD is in the Medieval period <br />
					The earliest year that should be accepted is the start of the Bronze Age period, the most recent that can be accepted is the end of the Post Medieval period.
				</p>

				<HistoricDateRange value={testRange} onChange={changeHandler}></HistoricDateRange>
			</>
		);
	}
}

export default OneWayView;