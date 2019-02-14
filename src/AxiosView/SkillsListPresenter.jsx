import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import ListCard from './ListCard.jsx'

// A display only component for a list of Technologies. 
//
// The technologies are provided by the prop skills which is an array of objects, where each object has two fields, called Technology and kind.
//
// Each kind of technology is displayed in a separate list using the ListCard component.

class SkillsListPresenter extends PureComponent {

	constructor(props) {
		super(props);

		let languages = [];
		let databases = [];
		let webFrameworks = [];
		let guiFrameworks = [];
		let designDiagrams = [];
		for (let i = 0; i < this.props.skills.length; i++) {
			switch (this.props.skills[i].kind) {
				case 'Language': languages.push(props.skills[i].Technology); break;
				case 'Database': databases.push(props.skills[i].Technology); break;
				case 'Web Framework': webFrameworks.push(props.skills[i].Technology); break;
				case 'GUI Framework': guiFrameworks.push(props.skills[i].Technology); break;
				case 'Design': designDiagrams.push(props.skills[i].Technology); break;
				default: ;
			}
		}

		this.state = {
			languages: languages,
			databases: databases,
			webFrameworks: webFrameworks,
			guiFrameworks: guiFrameworks,
			designDiagrams: designDiagrams
		}
	}

	render() {
		if (this.props.errorMessage) {
			return (
				<div className="card text-white bg-danger" >
					<h5 className="card-title p-2">Error</h5>
					<h5 className="card-text p-2">{this.props.errorMessage}</h5>
				</div>
			);
		} else {
			return (
				<>
					<div className="row card-deck">
						<ListCard id="LanguagesCard" title="Languages" names={this.state.languages}></ListCard>
						<ListCard id="WebCard" title="Web Frameworks" names={this.state.webFrameworks}></ListCard>
						<ListCard id="GuiCard" title="GUI Frameworks" names={this.state.guiFrameworks}></ListCard>
					</div>
					<div className="row card-deck">
						<ListCard id="DatabasesCard" title="Databases" names={this.state.databases}></ListCard>
						<ListCard id="DiagramsCard" title="Design Diagrams" names={this.state.designDiagrams}></ListCard>
					</div>
				</>
			)
		}
	}
}

SkillsListPresenter.propTypes = {
	skills: PropTypes.array,
	errorMessage: PropTypes.string
}

export default SkillsListPresenter;