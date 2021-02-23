import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Event = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [phone, setPhone] = useState(null);
	const [address, setAddress] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="btn btn-success btn-sm" onClick={handleShow}>
				Accpet Invite
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<h1 className="text-center mt-5">Event Information</h1>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={e => e.preventDefault()}>
						<div className="form-group">
							<label>Location Name</label>
							<input
								value={name}
								type="text"
								className="form-control"
								placeholder="Full Name"
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Where</label>
							<input
								value={email}
								type="email"
								className="form-control"
								placeholder="Enter location"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>When</label>
							<input
								value={phone}
								type="phone"
								className="form-control"
								placeholder="Enter time"
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>RSVP</label>
							<input
								value={address}
								type="text"
								className="form-control"
								placeholder="Enter people"
								onChange={e => setAddress(e.target.value)}
							/>
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
						Accept Invite
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
