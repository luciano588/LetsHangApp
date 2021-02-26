import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import partyhat from "/workspace/LetsHangApp/src/img/partyhat.png";

import { Info } from "../component/eventinfo";

export const Party = props => {
	const { store, actions } = useContext(Context);
	const party = store.party != null && store.party;
	console.log(party);

	const handleDelete = friend => {
		setSelectedContact(friend);
		setModal(true);
	};

	return (
		<div className="list-group-item d-flex align-items-center">
			<img src={partyhat} alt="partyhat" width="50px" className="rounded-sm ml-n2" />
			<div className="flex-fill pl-3 pr-3">
				<div>
					<span className="text-dark font-weight-600">
						{store.party != null && store.party.event_organizer}
					</span>
				</div>
				<div className="text-muted fs-13px">{store.party != null && store.party.event_location}</div>
			</div>
			<Info className="btn btn-outline-primary">
				{/* onClick={() => props.onDelete()} */}
				See Event
			</Info>
		</div>
	);
};

// Card.propTypes = {
// 	history: PropTypes.object,
// 	onDelete: PropTypes.func,
// 	eventname: PropTypes.string,
// 	lastname: PropTypes.string,
// 	city: PropTypes.string
// };

// Card.defaultProps = {
// 	onDelete: null
// };
