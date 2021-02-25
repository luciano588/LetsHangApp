import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import partyhat from "/workspace/LetsHangApp/src/img/partyhat.png";

export const Party = props => {
	const handleDelete = friend => {
		setSelectedContact(friend);
		setModal(true);
	};

	return (
		<div className="list-group-item d-flex align-items-center">
			<img src={partyhat} alt="partyhat" width="50px" className="rounded-sm ml-n2" />
			<div className="flex-fill pl-3 pr-3">
				<div>
					<a href="#" className="text-dark font-weight-600">
						{/* {props.eventname} */}
					</a>
				</div>
				<div className="text-muted fs-13px">{/* {props.city} */}</div>
			</div>
			<a className="btn btn-outline-primary">
				{/* onClick={() => props.onDelete()} */}
				See Event
				{/* Card === /userprofile || Card === /eventmain ? "Remove Friend" : "Invite Friend" onClick={() => setInvite ("Remove Invite") }*/}
			</a>
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
