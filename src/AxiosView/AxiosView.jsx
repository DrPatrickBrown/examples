import React, { Component } from "react";
import SkillsListContainer from "./SkillsListContainer";

class AxiosView extends Component {
	render() {
		return (
			<>
				<div className="card bg-light p-2">
					<h5 className="card-title"> An example React component that makes a REST API call. </h5>
					<p className="card-text">
						Below is a container component that uses the Axios library to read items from a SharePoint list via the SharePoint REST API.
						The items are technologies I have used.
					</p>
					<p className="card-text">
						The nested presentational component splits the items by technology family, displaying each family as a separate list within a Bootstrap card.
						This use of multiple cards gives me an excuse to implement a fluid layout using the Bootstrap Grid.
						On a phone the cards are stacked vertically, but on a tablet or pc the cards are shown three in a row.
				    </p>
				</div>

				<div>
					<SkillsListContainer></SkillsListContainer>
				</div>
			</>
		);
	}
}

export default AxiosView;