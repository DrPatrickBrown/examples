import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

// A Controlled Input which accepts a single year held as a number of years and "AD" or "BC"
// 
// When a year is defined the component displays the historic period the year falls within, 
// e.g. 1000BC is in the Iron Age period, 1248AD is the Medieval period
// 
// The earliest year that should be accepted is the start of the Bronze Age period, the most recent that can be accepted is the end of the Post Medieval period.
// onChange passes the value of 
//      {
// 			years: undefined,
// 			epoch: "AD"
// 		}
// if its state is not a valid year

class HistoricYear extends PureComponent {
	propTypes = {
		value: PropTypes.shape({
			years: PropTypes.number,
			epoch: PropTypes.oneOf(['AD', 'BC'])
		}),
		onChange: PropTypes.function
	};

	defaultProps = {
		value: {
			years: undefined,
			epoch: "AD"
		}
	}

	constructor(props) {
		super(props);

		let period = this.lookUpPeriod(this.props.value.years, this.props.value.epoch);
		this.state = {
			years: this.props.value.years,
			epoch: this.props.value.epoch,
			period: period
		}
	}

	lookUpPeriod = (years, epoch) => {
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

		if ((epoch === 'BC') && (years > bronzeAgeStart)) {
			return "Too early"
		}
		if ((epoch === 'AD') && (years > postMedievalEnd)) {
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

	handleYearsChange = (e) => {
		let newYears = parseInt(e.target.value);
		let newPeriod = undefined;

		if (isNaN(newYears)) {
			newYears = undefined;
		} else {
			newPeriod = this.lookUpPeriod(newYears, this.state.epoch)
		}

		this.setState({
			years: newYears,
			period: newPeriod
		});

		this.callChangeHandlerProp();
	}

	handleEpochChange = (e) => {
		let newEpoch = e.target.value;
		let newPeriod = this.lookUpPeriod(this.state.years, newEpoch);

		this.setState({
			epoch: newEpoch,
			period: newPeriod
		});

		this.callChangeHandlerProp();
	}

	// call the change handler provided by the parent 
	callChangeHandlerProp = () => {
		let newValue = {
			years: undefined,
			epoch: "AD"
		}
		if (this.state.years && (this.state.period !== "Too early") && (this.state.period !== "Too late")) {
			newValue = {
				years: this.state.years,
				epoch: this.state.epoch
			}
		}
		this.props.onChange(newValue);
	}

	render() {
		return (
			<span>
				<input type="text" pattern="^\d{1,4}$" maxlength="4" value={this.state.years} onChange={this.handleYearsChange} />
				<select value={this.state.epoch} onChange={this.handleEpochChange}>
					<option value="AD">AD</option>
					<option value="BC">BC</option>
				</select>
				{this.state.period ? <div> period: {this.state.period} </div> : null}
			</span>
		);
	}
}

export default HistoricYear;