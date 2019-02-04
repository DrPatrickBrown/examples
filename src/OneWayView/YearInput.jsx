import React, { PureComponent } from "react";

// <YearInput years="..." epoch=" " handleChange="...(years, epoch)">
//
// The YearInput component inputs a single AD or BC year.
// YearInput contains two Controlled Inputs, an input for number of years, and a select with options 'AD' and 'BC' for the epoch.
// When a year is defined the component displays the historic period the year falls within, 
// e.g. 1000BC is in the Iron Age period, 1248AD is the Medieval period
// 
// The earliest year that should be accepted is the start of the Bronze Age period, the most recent that can be accepted is the end of the Post Medieval period.

class YearInput extends PureComponent {
	constructor(props) {
		super(props);

		this.lookUpPeriod = this.lookUpPeriod.bind(this);
		this.handleYearChange = this.handleYearChange.bind(this);
		this.handleEpochChange = this.handleEpochChange.bind(this);

		let initialPeriod = this.lookUpPeriod(this.props.years, this.props.epoch);
		this.state = {
			years: this.props.years,
			epoch: this.props.epoch,
			period: initialPeriod
		}
	}

	lookUpPeriod(years, epoch) {
		if (!epoch || !years) {
			return undefined;
		}

		// BC period years
		const bronzeAgeStart = 2500;
		const bronzeAgeEnd = 701;
		const ironAgeStart = 700;
		// AD period years
		const ironAgeEnd = 42;
		const romanStart = 43;
		const romanEnd = 409;
		const earlyMedievalStart = 410;
		const earlyMedievalEnd = 1065;
		const medievalStart = 1066;
		const medievalEnd = 1499;
		const postMedievalStart = 1500;
		const postMedievalEnd = 1799;

		if ((this.state.epoch === 'BC') && (years > bronzeAgeStart)) {
			return "Too early"
		}
		if ((this.state.epoch === 'AD') && (years > postMedievalEnd)) {
			return "Too late"
		}
		if ((epoch === "BC") && (years <= bronzeAgeStart) && (years >= bronzeAgeEnd)) {
			return "Bronze Age";
		}
		if ((epoch === "BC") && (years <= ironAgeStart) && (years >= 0)) {
			return "Iron Age";
		}
		if ((epoch === "AD") && (years <= ironAgeEnd)) {
			return "Iron Age";
		}
		if ((epoch === "AD") && (years >= romanStart) && (years <= romanEnd)) {
			return "Roman";
		}
		if ((epoch === "AD") && (years >= earlyMedievalStart) && (years <= earlyMedievalEnd)) {
			return "Early Medieval";
		}
		if ((epoch === "AD") && (years >= medievalStart) && (years <= medievalEnd)) {
			return "Medieval";
		}
		if ((epoch === "AD") && (years >= postMedievalStart) && (years <= postMedievalEnd)) {
			return "Post Medieval";
		}
	}

	handleYearsChange(e) {
		let newYears = parseInt(e.target.value);
		let newPeriod = this.lookUpPeriod(newYears, this.state.epoch)

		this.setState({
			years: newYears,
			period: newPeriod
		});

		if (this.props.handleChange) {
			// call the change handler passed by the parent 
			this.props.handleChange(this.state.years, this.state.epoch);
		}
	}

	handleEpochChange(e) {
		let newEpoch = e.target.value;
		let newPeriod = this.lookUpPeriod(this.state.years, newEpoch);

		this.setState({
			epoch: newEpoch,
			period: newPeriod
		});

		if (this.props.handleChange) {
			// call an handler on the parent
			this.props.handleChange(this.state.years, this.state.epoch);
		}
	}

	render() {
		return (
			<span>
				<input type="text" pattern="^\d{1,4}$" value={this.state.years} onchange="handleYearsChange(e)" />
				<select value={this.state.epoch} onchange="handleEpochChange(e)">
					<option value="AD">AD</option>
					<option value="BC">BC</option>
				</select>
				{this.state.period}
			</span>
		);
	}
}

export default YearInput;