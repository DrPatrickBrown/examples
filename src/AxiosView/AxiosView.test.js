import React from 'react';
import ReactDOM from 'react-dom';
import AxiosView from './AxiosView';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render( < AxiosView / > , div);
	ReactDOM.unmountComponentAtNode(div);
});