import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Event_card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="card float-left" style={{ width: "30rem" }}>
				<img
					src="https://media.architecturaldigest.com/photos/5820f27652e72b09473c2e82/master/w_1600%2Cc_limit/miami-restaurants-01.JPG"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h4 className="card-title">{props.eventname}</h4>
					<p className="card-text">Created by Username</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{props.eventdescription}</li>
					<li className="list-group-item">
						<h5>Event Details</h5>
						<p>Addresss: {props.eventstreetaddress}</p>
					</li>
					<li className="list-group-item">Who is going</li>
					<li className="list-group-item">Invited list</li>
				</ul>
				<div className="card-body">
					<a href="#" className="card-link">
						Back to Map
					</a>
					<a href="#" className="card-link">
						Delete Invite
					</a>
				</div>
			</div>
		</div>
	);
};

Event_card.propTypes = {
	eventname: PropTypes.string,
	eventstreetaddress: PropTypes.string,
	eventdescription: PropTypes.string,
	invitees: PropTypes.object,
	id: PropTypes.number
};

export default Event_card;
