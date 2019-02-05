import React, {
	Component
} from "react";

class HomeView extends Component {
	render() {
		return (
			<>
				<p>
					This React single page app uses React Router to provide navigation between example React components I have written.
				</p>
				<ul>
					<li> The OneWay routed component demonstrates the nesting of Controlled Input components. </li>
					<li> The Axios routed component demonstrates calling a Rest API using the Axios library. </li>
					<li> The Redux routed component demonstrates sharing application state between non-nested components using the Redux library. </li>
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