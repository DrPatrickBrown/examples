import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import SkillsListContainer from './SkillsListContainer';
import SkillsListPresenter from './SkillsListPresenter';

// tell jest to replace axios with __mocks__/axios.js 
const modulePath = 'axios';
jest.mock(modulePath);

test('Makes an axios get call after mounting and populates the SkillsListPresenter with the results', () => {
	const getSpy = jest.spyOn(axios, 'get');
	const wrapper = shallow(< SkillsListContainer />);

	// spy on the axios.get call 
	expect(getSpy).toBeCalled();

	const getPromise = getSpy.mock.results.pop().value;
	return getPromise.then((response) => {
		// check that response was copied to state correctly
		expect(response.data.value.length).toBe(19);
		expect(wrapper.state('skillsList').length).toBe(19);
		expect(wrapper.state('error')).toBeUndefined();
		expect(wrapper.state('isLoading')).toBeFalsy();
		// check that presenter props are correctly set
		const presenter = wrapper.find(SkillsListPresenter);
		expect(presenter.prop('skills').length).toBe(19);
		expect(presenter.prop('errorMessage')).toBeUndefined();
		getSpy.mockClear();
	})
});


