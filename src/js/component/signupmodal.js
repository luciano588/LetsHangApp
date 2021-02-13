import React, { useState, useEffect, useContext } from "react";
import "/workspace/LetsHangApp/src/styles/signupmodal.scss";
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
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";

export const Signupmodal = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [show, setShow] = useState(false);
	const [year, setYear] = useState(null);
	const [day, setDay] = useState(null);
	const [month, setMonth] = useState(null);

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
						<Form.Label className="birthday-wrapper">Birthday</Form.Label>
						<Form.Group>
							<Form.Row>
								<Col>
									<Form.Control as="select" defaultValue="Jan">
										<option />
									</Form.Control>
								</Col>

								<Col>
									<Form.Control as="select" defaultValue="Jan">
										<option>
											<DayPicker
												year={year}
												month={month}
												value={day}
												onChange={day => {
													// mandatory
													this.setState({ day });
													console.log(day);
												}}
												id={"day"}
												name={"day"}
												classes={"classes"}
												optionClasses={"option classes"}
											/>
										</option>
									</Form.Control>
								</Col>
								<Col>
									<Form.Control as="select" defaultValue="Jan">
										<option>Choose...</option>
										<option>...</option>
									</Form.Control>
								</Col>
							</Form.Row>
						</Form.Group>
						<Form.Label>Gender</Form.Label>
						<Form.Group>
							<Form.Row>
								<Col>
									<Form.Check
										className="border-wrapper border"
										type="radio"
										label="Male"
										name="formHorizontalRadios"
										id="formHorizontalRadios1"
									/>
								</Col>
								<Col>
									<Form.Check
										className="border-wrapper border"
										type="radio"
										label="Female"
										name="formHorizontalRadios"
										id="formHorizontalRadios2"
									/>
								</Col>
								<Col>
									<Form.Check
										className="border-wrapper border"
										type="radio"
										label="Custom"
										name="formHorizontalRadios"
										id="formHorizontalRadios3"
									/>
								</Col>
							</Form.Row>
						</Form.Group>
						<Form.Label className="font-wrapper">
							By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy.{" "}
						</Form.Label>
					</Form>
				</Modal.Body>
				<Modal.Footer className="justify-content-center">
					<Button
						className="w-50 justify-content-center"
						variant="success"
						size="lg"
						onClick={() => {
							actions.deleteContact(props.contactID);
							setShow(false);
						}}>
						<strong>Sign Up</strong>
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
