import React, { Component } from "react";
import SkillsListContainer from "./SkillsListContainer";

class AxiosView extends Component {
	render() {
		return (
			<>
				<p>
					This example is a container component that uses axios to perfom a GET request on a SharePoint list of technologies.
					It displays the list using a nested functional component.
				</p>

				<p>
					This technologies are those I have during my career, and demonstrate my ability to switch technologies.
				</p>

				<SkillsListContainer></SkillsListContainer>
			</>
		);
	}
}

export default AxiosView;