import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardDeck } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import Button from "react-bootstrap/Button";

export const Signupmodal = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<span onClick={handleShow}>
				<i className="fas fa-trash-alt ml-5" />
			</span>

			{/* <Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button> */}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete Contact</Modal.Title>
				</Modal.Header>
				<Modal.Body>{"Are you sure want to delete?"}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							actions.deleteContact(props.contactID);
							setShow(false);
						}}>
						Save changes
						{/* <a href="#" onClick={() => { func1(); func2();}}>Test Link</a> */}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

Signupmodal.propTypes = {
	contactID: PropTypes.number
};
