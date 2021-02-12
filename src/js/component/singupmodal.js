import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardDeck } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import FormFile from "react-bootstrap/FormFile";
import { Jumbotron, Col, Grid, Panel, FormGroup } from "react-bootstrap";

export const Signupmodal = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<span onClick={handleShow}>Sign up</span>

			{/* <Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button> */}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<h4>{"Sign up"}</h4>
						<h6>{"It's quick and easy"}</h6>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Row>
							<Col>
								<Form.Control placeholder="First name" />
							</Col>
							<Col>
								<Form.Control placeholder="Last name" />
							</Col>
						</Form.Row>
						<Form.Group controlId="formGridAddress1">
							<br />
							<Form.Control placeholder="Email or Mobile number" />
							<br />
							<Form.Control placeholder="New password" />
						</Form.Group>
						<Form.Label>Birthday</Form.Label>
						<Form.Row>
							<Col>
								<Form.Control as="select" defaultValue="Jan">
									<option>Choose...</option>
									<option>...</option>
								</Form.Control>
							</Col>

							<Col>
								<Form.Control as="select" defaultValue="Jan">
									<option>x</option>
									<option>2..</option>
								</Form.Control>
							</Col>
							<Col>
								<Form.Control as="select" defaultValue="Jan">
									<option>Choose...</option>
									<option>...</option>
								</Form.Control>
							</Col>
						</Form.Row>
					</Form>
				</Modal.Body>
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
