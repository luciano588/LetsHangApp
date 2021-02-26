import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Card } from "../component/friendcard";

export const Invite = () => {
	const { store, actions } = useContext(Context);
	// const [color, setColor] = useState;
	const [show, setShow] = useState(false);
	const [event_organizer, setEvent_organizer] = useState(null);
	const [event_name, setEvent_name] = useState(null);
	const [event_description, setEvent_description] = useState(null);
	const [event_address, setEvent_address] = useState(null);
	const [event_location, setEvent_location] = useState(null);
	const [invitees, setInvitees] = useState(null);

	let profiles = store.profiles[0];
	let userFriends = store.profiles[0].friends;
	function inputclearing() {
		setEvent_organizer("");
		setEvent_name("");
		setEvent_description("");
		setEvent_address("");
		setEvent_location("");
		setInvitees("");
	}

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="btn btn-success btn-sm" onClick={handleShow}>
				Add Event
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<h1 className="text-center mt-5">Make An Event</h1>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={e => e.preventDefault()}>
						<div className="form-group">
							<label>Event Organizer</label>
							<input
								value={event_organizer}
								type="text"
								className="form-control"
								placeholder="Your Name"
								onChange={e => setEvent_organizer(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Event Name</label>
							<input
								value={event_name}
								type="event name"
								className="form-control"
								placeholder="Event Name"
								onChange={e => setEvent_name(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Event Location</label>
							<input
								value={event_location}
								type="event name"
								className="form-control"
								placeholder="Location Name"
								onChange={e => setEvent_location(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Event Address</label>
							<input
								value={event_address}
								type="event address"
								className="form-control"
								placeholder="Event Address"
								onChange={e => setEvent_address(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Event Description</label>
							<input
								value={event_description}
								type="text"
								className="form-control"
								placeholder="Enter Description"
								onChange={e => setEvent_description(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Invitees</label>
							<input
								value={invitees}
								type="text"
								className="form-control"
								placeholder="Enter Email"
								onChange={e => setInvitees(e.target.value)}
							/>
						</div>
						<div className="form-group">
							{/* <div className="col-md-12">
								<div className="list-group">
									{userFriends.map((friend, index) => {
										return (
											<Card
												key={index}
												id={friend.id}
												firstname={friend.firstname}
												lastname={friend.lastname}
												city={friend.city}
												// style={color === primary}
												// onClick={() => setColor(success)}
												//onDelete={handleDelete(friend.id)}
											/>
										);
									})}
								</div>
							</div> */}
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer className="justify-content-center">
					<Button
						className="w-50 justify-content-center"
						variant="success"
						size="lg"
						onClick={e => {
							actions.addEvent({
								event_organizer: event_organizer,
								event_name: event_name,
								event_description: event_description,
								event_address: event_address,
								event_location: event_location,
								invitees: invitees
							});
							{
								actions.syncData();
							}
							{
								setTimeout(() => {
									handleClose();
								}, 3000);
							}
							{
								actions.syncData();
							}
							{
								inputclearing();
							}
						}}>
						Create Event
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
