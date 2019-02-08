import React from 'react';
import {
	shallow
} from 'enzyme';
import HistoricYear from './HistoricYear';


test('renders default props as an empty year with epoch of AD', () => {
	const wrapper = shallow( < HistoricYear / > );
	wrapper.find('input').expect()
	wrapper.find('select').expect()
});