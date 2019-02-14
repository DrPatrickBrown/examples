import React from "react";
import PropTypes from 'prop-types';

// A Stateless Functional component that displays a list of names within a card.
//
// When a row of 3 cards is displayed within a Bootstrap Grid container:
//    * on a phone, each card is full width and the 3 cards are stacked vertically
//    * on a tablet or larger, the 3 cards are shown in the same row  

function ListCard(props) {
	const listItems = props.names.map((name) =>
		<li className="list-group-item">{name}</li>
	)
	return (
		<div className="col-md-4">
			<div className="card bg-light mb-2">
				<h6 className="card-title p-2">{props.title}</h6>
				<ul className="list-group list-group-flush">
					{listItems}
				</ul>
			</div>
		</div>
	);
}

ListCard.propTypes = {
	title: PropTypes.string.isRequired,
	names: PropTypes.array.isRequired
}

export default ListCard;