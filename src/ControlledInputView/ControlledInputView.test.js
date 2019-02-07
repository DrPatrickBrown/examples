import React from 'react';
import ReactDOM from 'react-dom';
import ControlledInputView from './HomeView';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render( < ControlledInputView / > , div);
	ReactDOM.unmountComponentAtNode(div);
});