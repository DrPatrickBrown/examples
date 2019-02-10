import React from "react";
import PropTypes from 'prop-types';

// A display only component for a list of Technologies 
//
// The technolgies are provided by the prop skills which is an array of objects, where each object has two fields, called Technology and kind
//
// The technolgies of each kind are shown in a separate list

function SkillsListPresenter(props) {
	if (props.errorMessage) {
		return (
			<p>
				{props.errorMessage}
			</p>
		);
	} else {
		const listItems = props.skills.map((skill) =>
			<li> {skill.Technology} </li>
		)
		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}

SkillsListPresenter.propTypes = {
	skills: PropTypes.array.isRequired,
	errorMessage: PropTypes.string
}

export default SkillsListPresenter;