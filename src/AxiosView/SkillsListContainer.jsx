import React, { Component } from "react";
import axios from "axios";
import SkillsListPresenter from "./SkillsListPresenter.jsx";
import Spinner from "./Spinner.jsx";

// On mounting makes an HTTP get request to SharePoint to read all the items in the SharePoint list 'Technologies' within the 
// site collection 'examples'.
// Uses the nested SkillListPresenter to display the list.

class SkillsListContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			skillsList: [],
			error: undefined
		}
	}

	componentDidMount() {
		// for some reason the field kind is only recognised with a lower case k, even though its name has an uppercase K
		const requestUrl = "https://pjbrown.sharepoint.com/sites/examples/_api/web/lists/getbytitle('Technologies')/items?$select=ID,Technology,kind";

		const requestOptions = {
			headers: {
				'Content-type': 'application/json;odata=nometadata',
			}
		}

		axios.get(requestUrl, requestOptions)
			.then((response) => {
				this.setState({
					isLoading: false,
					skillsList: response.data.value,
					error: undefined
				})
			})
			.catch((error) => {
				let errorMessage = "Failed to load data from SharePoint. " + error;
				this.setState({
					isLoading: false,
					skillsList: [],
					error: errorMessage
				});
			});
	}

	render() {
		return (
			<div>
				<h5>Technologies Pat has used</h5>
				{this.state.isLoading ?
					<Spinner></Spinner> : <SkillsListPresenter skills={this.state.skillsList} errorMessage={this.state.error}></SkillsListPresenter>}
			</div>
		);
	}

}

export default SkillsListContainer;