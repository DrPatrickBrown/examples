import React from 'react';
import ReactDOM from 'react-dom';
import ControlledInputView from './ControlledInputView';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render( < ControlledInputView / > , div);
	ReactDOM.unmountComponentAtNode(div);
});