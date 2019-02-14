import React, {
	Component
} from "react";

class HomeView extends Component {
	render() {
		return (
			<div className="card bg-light" >
				<h5 className="card-title p-2"> Example React components. </h5>
				<p className="card-text p-2">
					This React single page app uses React Router to provide URL based navigation between example React components I have written.
				</p>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"> Controlled-Input demonstrates a component with controlled inputs.</li>
					<li className="list-group-item"> Nested demonstrates a parent component with child components. </li>
					<li className="list-group-item"> Axios demonstrates a component which calls the SharePoint REST API using the Axios library. </li>
					<li className="list-group-item"> Redux demonstrates the sharing of application state between non-nested components using the Redux library. </li>
				</ul>
				<p className="card-text p-2">
					The source code and tests for these components are available at {" "}
					<a href="https://github.com/DrPatrickBrown/examples.git">my github repository</a>.
				</p>
				<p className="card-text p-2">
					The tests are written with Jest, Enzyme and Redux-Mock-Store. They include shallow and fully rendered component tests, REST API mocking, and Redux mocking.
				</p>
				<p className="card-text p-2">
					Styling is with Bootstrap 4. The Axios example has a responsive layout based on the Bootstrap grid.
				</p>
			</div>
		);
	}
}

export default HomeView;