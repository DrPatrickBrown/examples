import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

// A component that inputs a single year defined as a whole number of years and "AD" or "BC" via a pair of controlled html inputs.
// 
// When a year is defined the component displays the historic period the year falls within, 
// e.g. 1000BC is in the Iron Age period, 1248AD is the Medieval period
// A before the start of the Bronze Age period should be displayed as Stone Age, and a date after the Post Medieval period should be dispalyed as Modern.
// onChange passes the value of the year as a signed integer with +ve indicating a AD year and -ve a BC year

class HistoricYear extends PureComponent {
	constructor(props) {
		super(props);

		let years = "";
		let epoch = "AD";
		if (this.props.signedYear === undefined) {
			years = "";  // never set a controlled input value to null or undefined
		} else if (this.props.signedYear < 0) {
			epoch = "BC";
			years = Math.abs(this.props.signedYear);
		} else {
			epoch = "AD";
			years = this.props.signedYear;
		}

		let period = this.lookUpPeriod(years, epoch);
		this.state = {
			years: years,
			epoch: epoch,
			period: period
		}
	}

	lookUpPeriod = (years, epoch) => {
		let yearsInt = parseInt(years);
		// can't assign a period for a non number
		if (isNaN(yearsInt)) {
			return undefined;
		}
		// don't assign a period for a negative number 
		if (yearsInt < 0) {
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

		if ((epoch === 'BC') && (yearsInt > bronzeAgeStart)) {
			return "Stone Age"
		}
		if ((epoch === 'AD') && (yearsInt > postMedievalEnd)) {
			return "Modern or Future"
		}
		if ((epoch === "BC") && (yearsInt <= bronzeAgeStart) && (yearsInt >= bronzeAgeEnd)) {
			return "Bronze Age";
		}
		if ((epoch === "BC") && (yearsInt <= ironAgeStart)) {
			return "Iron Age";
		}
		if ((epoch === "AD") && (yearsInt <= ironAgeEnd)) {
			return "Iron Age";
		}
		if ((epoch === "AD") && (yearsInt >= romanStart) && (yearsInt <= romanEnd)) {
			return "Roman";
		}
		if ((epoch === "AD") && (yearsInt >= earlyMedievalStart) && (yearsInt <= earlyMedievalEnd)) {
			return "Early Medieval";
		}
		if ((epoch === "AD") && (yearsInt >= medievalStart) && (yearsInt <= medievalEnd)) {
			return "Medieval";
		}
		if ((epoch === "AD") && (yearsInt >= postMedievalStart) && (yearsInt <= postMedievalEnd)) {
			return "Post Medieval";
		}
	}

	handleYearsChange = (event) => {
		let newPeriod = this.lookUpPeriod(event.target.value, this.state.epoch)

		this.setState({
			years: event.target.value,
			period: newPeriod
		});

		this.callOnChangeProp(event.target.value, this.state.epoch);  // don't pass state, React may not of reset it yet
	}

	handleEpochChange = (event) => {
		let newPeriod = this.lookUpPeriod(this.state.years, event.target.value);

		this.setState({
			epoch: event.target.value,
			period: newPeriod
		});

		this.callOnChangeProp(this.state.years, event.target.value); // don't pass state, React may not of reset it yet
	}

	// call the change handler provided by the parent 
	// pass the year as a signed integer, with +ve indicating a AD year, and -ve a BC year.  
	callOnChangeProp = (years, epoch) => {
		let signedYear = undefined; // the value to be passed as parameter to the event handler
		let yearsInt = parseInt(years);
		if (isNaN(yearsInt)) {
			// the years input is empty
			signedYear = undefined;
		} else {
			if (epoch === "AD") {
				signedYear = yearsInt;  // +ve indicates AD
			} else {
				signedYear = -yearsInt; // -ve indicates BC
			}
		}
		this.props.onChange(signedYear);
	}

	render() {
		return (
			<span>
				<input type="text" pattern="^\d{1,4}$" title="A whole number up to 4 digits long." maxLength="4" value={this.state.years} onChange={this.handleYearsChange} mandatory={this.props.mandatory} />
				<select value={this.state.epoch} onChange={this.handleEpochChange}>
					<option value="AD">AD</option>
					<option value="BC">BC</option>
				</select>
				{this.state.period ? <span> period: {this.state.period} </span> : null}
			</span>
		);
	}
}

HistoricYear.propTypes = {
	signedYear: PropTypes.number,  // -ve for a BC year, +ve for an AD year
	onChange: PropTypes.func,      // passes the updated signedYear
	mandatory: PropTypes.string
};

HistoricYear.defaultProps = {
	mandatory: "false"
}

export default HistoricYear;