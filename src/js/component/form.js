import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Card } from "../component/friendcard";

export const Invite = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [phone, setPhone] = useState(null);
	const [address, setAddress] = useState(null);

	let profiles = store.profiles[0];
	let userFriends = store.profiles[0].friends;

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
						<h1 className="text-center mt-5">Send Invite</h1>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={e => e.preventDefault()}>
						<div className="form-group">
							<label>Your Name</label>
							<input
								value={name}
								type="text"
								className="form-control"
								placeholder="Full Name"
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								value={phone}
								type="phone"
								className="form-control"
								placeholder="Enter phone"
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Location Name</label>
							<input
								value={location}
								type="location"
								className="form-control"
								placeholder="Enter location"
								onChange={e => setLocation(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Location Address</label>
							<input
								value={address}
								type="text"
								className="form-control"
								placeholder="Enter address"
								onChange={e => setAddress(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Friends</label>

							<div className="col-md-12">
								<div className="list-group">
									{userFriends.map((friend, index) => {
										return (
											<Card
												key={index}
												id={friend.id}
												firstname={friend.firstname}
												lastname={friend.lastname}
												city={friend.city}
												//onDelete={handleDelete(friend.id)}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer className="justify-content-center">
					<Button
						className="w-50 justify-content-center"
						variant="success"
						size="lg"
						onClick={() => {
							setShow(false);
						}}>
						Create event
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
