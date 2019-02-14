import { connect } from "react-redux";
import Counter from "./Counter";

// map Redux state to component props
function mapStateToProps(state) {
	return {
		countValue: state.count
	}
}

export const Actions = {
	INCREASE: 'increase',
	DECREASE: 'decrease'
}

export const createActionIncrease = (step) => ({
	type: Actions.INCREASE,
	amount: step
});

export const createActionDecrease = (step) => ({
	type: Actions.DECREASE,
	amount: step
});

// map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		onIncrease: function (step) {
			return dispatch(createActionIncrease(step));
		},
		onDecrease: function (step) {
			return dispatch(createActionDecrease(step));
		}
	}
}

// connected higher order component
var ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ConnectedCounter;