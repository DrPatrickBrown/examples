import React, { PureComponent } from "react";
import HistoricYear from "./HistoricYear.jsx";
import PropTypes from 'prop-types';

// HistoricDateRange is a ControlledInput that accepts a year range
// value is an objects with  
//    * a field called toYears to hold the start year of the date range 
//    * a field called fromYears to hold the end year of the date range
// 
// HistoricDateRange validates that fromYear was before or equal to toYear.
// onChange is passed a value of null if the component's state is not a valid range

class HistoricDateRange extends PureComponent {
	propTypes = {
		value: PropTypes.shape({
			fromYear: PropTypes.shape({
				years: PropTypes.number,
				epoch: PropTypes.oneOf(['AD', 'BC'])
			}),
			toYear: PropTypes.shape({
				years: PropTypes.number,
				epoch: PropTypes.oneOf(['AD', 'BC'])
			})
		}),
		onChange: PropTypes.function
	};

	defaultProps = {
		value: {
			fromYear: {
				years: undefined,
				epoch: "AD"
			},
			toYear: {
				years: undefined,
				epoch: "AD"
			}
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			fromYear: this.props.value.fromYear,
			toYear: this.props.value.toYear,
			error: undefined
		}
	}

	isFromYearBeforeToYear = (fromYear, toYear) => {
		if (!fromYear.years || !toYear.years) {
			return false;
		}

		if ((fromYear.epoch === "BC") && (toYear.epoch === "AD")) {
			return true;
		}

		if ((fromYear.epoch === "AD") && (toYear.epoch === "BC")) {
			return false;
		}

		if ((fromYear.epoch === "BC") && (toYear.epoch === "BC")) {
			return fromYear.years >= toYear.years;
		}

		if ((fromYear.epoch === "AD") && (toYear.epoch === "AD")) {
			return fromYear.years <= toYear.years;
		}
	}

	handleFromYearChange = (newValue) => {
		let err = undefined;
		if (!this.isFromYearBeforeToYear(newValue, this.state.toYear)) {
			err = "fromYear after toYear";
		}

		this.setState({
			fromYear: newValue,
			error: err
		});

		this.callChangeHandlerProp();
	}

	handleToYearChange = (newValue) => {
		let err = undefined;
		if (!this.isFromYearBeforeToYear(this.state.fromYear, newValue)) {
			err = "fromYear after toYear";
		}

		this.setState({
			toYear: newValue,
			error: err
		});

		this.callChangeHandlerProp();
	}

	// call the change handler provided by the parent 
	callChangeHandlerProp = () => {
		let newValue = this.defaultProps;
		if (this.state.toYear && this.state.fromYear && !this.state.error) {
			newValue = {
				fromYear: {
					years: this.state.fromYear.years,
					epoch: this.state.fromYear.epoch
				},
				toYear: {
					years: this.state.toYear.years,
					epoch: this.state.toYear.epoch
				}
			}
		}

		this.props.onChange(newValue);
	}

	render() {
		return (
			<fieldset>
				<legend>Date Range</legend>
				<div>
					<label>
						from
						<HistoricYear value={this.state.toYear} onChange={this.handleFromYearChange}></HistoricYear>
					</label>
				</div>
				<div>
					<label>
						to
					    <HistoricYear value={this.state.toYear} onChange={this.handleToYearChange}></HistoricYear>
					</label>
				</div>
				{this.state.error ? <div> error: {this.state.error} </div> : null}
			</fieldset>
		);
	}
}

export default HistoricDateRange;

