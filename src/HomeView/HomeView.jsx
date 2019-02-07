import React, {
	Component
} from "react";

class HomeView extends Component {
	render() {
		return (
			<>
				<p>
					This React single page app uses React Router to provide URL based navigation between example React components I have written.
				</p>
				<ul>
					<li> 'ControlledInput' demonstrates a component with controlled inputs.</li>
					<li> 'Nested' demonstrates a parent component with child components. </li>
					<li> 'Axios' demonstrates a component which calls the SharePoint REST API using the Axios library. </li>
					<li> 'Redux' demonstrates the sharing of application state between non-nested components using the Redux library. </li>
				</ul>
				<p>
					The source code for these components, including unit and integration tests, is available at:
					<a href="https://github.com/DrPatrickBrown/examples.git"> https://github.com/DrPatrickBrown/examples.git </a>.
				</p>
			</>
		);
	}
}

export default HomeView;