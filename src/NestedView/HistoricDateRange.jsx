import React, { PureComponent } from "react";
import HistoricYear from "../ControlledInputView/HistoricYear.jsx";
import PropTypes from 'prop-types';

// HistoricDateRange is a ControlledInput that accepts a year range, defined as a fromYear and a toYear.
//
// HistoricDateRange displays a warning if toYear is earlier than fromYear.

class HistoricDateRange extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			fromYear: this.props.fromYear,
			toYear: this.props.toYear,
			warning: undefined
		}
	}

	// compare the 'from' year and 'to' year and return a warning message
	// if there is a problem, or undefined if the range is valid 
	getValidationWarning = (fromYear, toYear) => {
		const toBeforeFromError = "'to' year is earlier than 'from' year"

		if (toYear < fromYear) {
			return toBeforeFromError;
		} else {
			return undefined;
		}
	}

	handleFromYearChange = (newValue) => {
		let message = this.getValidationWarning(newValue, this.state.toYear);

		this.setState({
			fromYear: newValue,
			warning: message
		});

		this.callOnChangeProp(newValue, this.state.toYear); // do not pass state, react may not of updated it yet
	}

	handleToYearChange = (newValue) => {
		let message = this.getValidationWarning(this.state.fromYear, newValue);

		this.setState({
			toYear: newValue,
			warning: message
		});

		this.callOnChangeProp(this.state.fromYear, newValue); // do not pass state, react may not of updated it yet
	}

	// call the change handler provided by the parent 
	callOnChangeProp = (fromYear, toYear) => {
		let newRange = {
			fromYear: fromYear,
			toYear: toYear
		}
		this.props.onChange(newRange);
	}

	render() {
		return (
			<fieldset>
				<legend>Historic Date Range</legend>
				<div>
					<label>
						from
						<HistoricYear value={this.state.fromYear} onChange={this.handleFromYearChange}></HistoricYear>
					</label>
				</div>
				<div>
					<label>
						to
					    <HistoricYear value={this.state.toYear} onChange={this.handleToYearChange}></HistoricYear>
					</label>
				</div>
				{this.state.warning ? <div> warning: {this.state.warning} </div> : null}
			</fieldset>
		);
	}
}

HistoricDateRange.propTypes = {
	fromYear: PropTypes.number,  // -ve for a BC year, +ve for an AD year
	toYear: PropTypes.number,  // -ve for a BC year, +ve for an AD year
	onChange: PropTypes.func
};

export default HistoricDateRange;

