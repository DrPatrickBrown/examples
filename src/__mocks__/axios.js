export default {
	get: jest.fn(() => Promise.resolve({
		data: mockJSON
	})),
	CancelToken: {
		source: () => {
			return {
				token: "mockToken",
				cancel: () => {}
			}
		}
	}
};

const mockJSON = {
	"value": [{
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
	]
}