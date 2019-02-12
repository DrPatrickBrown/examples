import React from 'react';
import { mount } from 'enzyme';
import SkillsListPresenter from './SkillsListPresenter';
import ListCard from './ListCard';

// tell jest to replace axios with __mocks__/axios.js 
const modulePath = 'axios';
jest.mock(modulePath);

const testSkills = [
	{
		"Technology": "JavaScript",
		"kind": "Language",
	},
	{
		"Technology": "React",
		"kind": "Web Framework",
	},
	{
		"Technology": "AngularJS",
		"kind": "Web Framework",
	},
	{
		"Technology": "Vue",
		"kind": "Web Framework",
	},
	{
		"Technology": "Mongo DB",
		"kind": "Database",
	},
	{
		"Technology": "C#",
		"kind": "Language",
	},
	{
		"Technology": ".NET MVC",
		"kind": "Web Framework",
	},
	{
		"Technology": ".NET ASP",
		"kind": "Web Framework",
	},
	{
		"Technology": "SQL-Server",
		"kind": "Database",
	},
	{
		"Technology": "UML",
		"kind": "Design",
	},
	{
		"Technology": ".NET WPF",
		"kind": "GUI Framework",
	},
	{
		"Technology": "Java",
		"kind": "Language",
	},
	{
		"Technology": "J2EE JSP",
		"kind": "Web Framework",
	},
	{
		"Technology": "Oracle",
		"kind": "Database",
	},
	{
		"Technology": "SQL",
		"kind": "Language",
	},
	{
		"Technology": "Pascal",
		"kind": "Language",
	},
	{
		"Technology": "Yourdon",
		"kind": "Design",
	},
	{
		"Technology": "Paradox",
		"kind": "Database",
	},
	{
		"Technology": "Delphi",
		"kind": "GUI Framework",
	}
];


test('SkillsListPresenter renders five cards', () => {
	const wrapper = mount(< SkillsListPresenter skills={testSkills} />);
	const languagesCard = wrapper.find('#LanguagesCard');
	const webCard = wrapper.find('#WebCard');
	const guiCard = wrapper.find('#GuiCard');
	const databasesCard = wrapper.find('#DatabasesCard');
	const diagramsCard = wrapper.find('#DiagramsCard');

	// check that skills get split into families correctly
	expect(wrapper.state("languages").length).toBe(5);
	expect(wrapper.state("webFrameworks").length).toBe(6);
	expect(wrapper.state("guiFrameworks").length).toBe(2);
	expect(wrapper.state("databases").length).toBe(4);
	expect(wrapper.state("designDiagrams").length).toBe(2);

	// check that each of the 5 cards get their names property set correctly
	expect(languagesCard.prop('names')).toMatchObject(['JavaScript', 'C#', 'Java', 'SQL', 'Pascal']);
	expect(webCard.prop('names')).toMatchObject(['React', 'AngularJS', 'Vue', '.NET MVC', '.NET ASP', 'J2EE JSP']);
	expect(guiCard.prop('names')).toMatchObject(['.NET WPF', 'Delphi']);
	expect(databasesCard.prop('names')).toMatchObject(['Mongo DB', 'SQL-Server', 'Oracle', 'Paradox']);
	expect(diagramsCard.prop('names')).toMatchObject(['UML', 'Yourdon']);

	// check that the Design Diagrams card renders
	expect(diagramsCard.containsMatchingElement(<h6 className="card-title p-2">Design Diagrams</h6>)).toBe(true);
	expect(diagramsCard.containsMatchingElement(<li className="list-group-item">UML</li>)).toBe(true);
	expect(diagramsCard.containsMatchingElement(<li className="list-group-item">Yourdon</li>)).toBe(true);

	wrapper.unmount();
});

test('SkillsListPresenter renders a request error', () => {
	const wrapper = mount(< SkillsListPresenter skills="[]" errorMessage="TestError" />);
	expect(wrapper.containsMatchingElement(<h5 className="card-title p-2">Error</h5>)).toBe(true);
	expect(wrapper.containsMatchingElement(<h5 className="card-text p-2">TestError</h5>)).toBe(true);


	wrapper.unmount();
});