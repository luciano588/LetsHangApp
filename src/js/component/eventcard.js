import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import partyhat from "/workspace/LetsHangApp/src/img/partyhat.png";

import { Info } from "../component/eventinfo";

export const Party = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const party = store.party != null && store.party;
	console.log(party);

	const handleDelete = friend => {
		setSelectedContact(friend);
		setModal(true);
	};
	return (
		<div>
			<ul className="list-group container">
				{store.party.map((party, index) => {
					return (
						<div className="list-group-item d-flex align-items-center" key={index}>
							<img src={partyhat} alt="partyhat" width="50px" className="rounded-sm ml-n2" />
							<div className="flex-fill pl-3 pr-3">
								<div>
									<span className="text-dark font-weight-600">
										Event Organizer: <span />
										{store.party != null && party.event_organizer}
									</span>
								</div>
								<div className="text-dark fs-13px">
									Event location: <span />
									{store.party != null && party.event_location}
								</div>
							</div>
							<Info className="btn btn-outline-primary" id_for_event={index}>
								{/* onClick={() => props.onDelete()} */}
								See Event
							</Info>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

Party.propTypes = {
	eventname: PropTypes.string,
	lastname: PropTypes.string,
	city: PropTypes.string
};

// Card.defaultProps = {
// 	onDelete: null
// };
