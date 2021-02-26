import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export const Info = props => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	const event = store.event != null && store.event.user;
	console.log(event);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="btn btn-danger btn-sm" onClick={handleShow}>
				See Event
			</Button>

			<Modal show={show} onHide={handleClose}>
				{/* <Modal.Header closeButton>
					<Modal.Title>
						<h4 className="card-title">EVENT NAME</h4>
						<p className="card-text">Created by Username</p>
					</Modal.Title>
				</Modal.Header> */}
				<Modal.Body>
					<div>
						<div className="card float-left" style={{ width: "30rem" }}>
							<img
								src="https://media.architecturaldigest.com/photos/5820f27652e72b09473c2e82/master/w_1600%2Cc_limit/miami-restaurants-01.JPG"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h4 className="card-title">
									{store.party != null && store.party[props.id_for_event].event_name}
									Graduation PARTY!
								</h4>
								<p className="card-text">
									Created by {store.party != null && store.party[props.id_for_event].event_organizer}{" "}
									Armando
								</p>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<h5>About Event</h5>
									{store.party != null && store.party[props.id_for_event].event_description} party for
									graduation
								</li>
								<li className="list-group-item">
									<h5>Event Details</h5>
									<p>
										<strong>Addresss:</strong>{" "}
										{store.party != null && store.party[props.id_for_event].event_address}
										3354 sw 50th st
									</p>
								</li>
								<li className="list-group-item">
									<h5>Invitees</h5> luciano@letshangapp.com
									{store.party != null && store.party[props.id_for_event].invitees}
								</li>
							</ul>
						</div>
					</div>
					{/* <div className="card-body" />
					<ul className="list-group list-group-flush">
						<li className="list-group-item">party</li>
						<li className="list-group-item">
							<h5>Event Details</h5>
							<p>Addresss: 7675 nw</p>
						</li>
						<li className="list-group-item">Who is going</li>
						<li className="list-group-item">Invited list</li>
					</ul> */}
				</Modal.Body>
			</Modal>
		</>
	);
};

Info.propTypes = {
	id_for_event: PropTypes.number
};
