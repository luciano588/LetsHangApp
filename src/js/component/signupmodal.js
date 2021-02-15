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
	const birthdayMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const listMonth = birthdayMonth.map((birthdayMonth, index) => <option key={index}>{birthdayMonth}</option>);
	const birthdayDay = [];
	for (var i = 1; i <= 31; i++) {
		birthdayDay.push(i);
	}
	const listDays = birthdayDay.map((birthdayDay, index) => <option key={index}>{birthdayDay}</option>);
	const birthdayYear = [];
	for (var i = 2021; i >= 1905; i--) {
		birthdayYear.push(i);
	}
	const listYears = birthdayYear.map((birthdayYear, index) => <option key={index}>{birthdayYear}</option>);
	// const userState = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri', "Montana" ,"Nebraska",'Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	// const listStates = userState.map((userState,index) => <option key={index}>{userState}</option>  );
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
						<Form.Group className="" controlId="formGridAddress1">
							<br />
							<Form.Control type="email" placeholder="Email or Mobile number" />
							<br />
							<Form.Control placeholder="User ID" />
							<br />
							<Form.Control type="password" placeholder="New password" />
							<br />
							<Form.Control placeholder="Street address" />
							<br />
							<Form.Control placeholder="Apt, unit, building, floor, etc" />
						</Form.Group>
						<Form.Row>
							<Col>
								<Form.Control placeholder="City" />
							</Col>
							<Col>
								<Form.Control as="select" placeholder="State" />
							</Col>
							<Col>
								<Form.Control placeholder="Zip Code" />
							</Col>
						</Form.Row>

						<Form.Label className="heading-wrapper">Birthday</Form.Label>
						<Form.Group>
							<Form.Row>
								<Col>
									<Form.Control as="select" defaultValue="Month">
										{listMonth}
									</Form.Control>
								</Col>

								<Col>
									<Form.Control as="select" defaultValue="Day">
										{listDays}
									</Form.Control>
								</Col>
								<Col>
									<Form.Control as="select" defaultValue="Year">
										{listYears}
									</Form.Control>
								</Col>
							</Form.Row>
						</Form.Group>
						<Form.Label className="heading-wrapper">Gender</Form.Label>
						<Form.Group>
							<Form.Row>
								<Col>
									<div className="border-wrapper border">
										<label className="ml-3 mt-1" htmlFor="formHorizontalRadios1">
											Female
										</label>
										<Form.Check
											className="mr-2 mt-1 float-right"
											type="radio"
											name="formHorizontalRadios"
											id="formHorizontalRadios1"
										/>
									</div>
								</Col>
								<Col>
									<div className="border-wrapper border">
										<label className="ml-3 mt-1" htmlFor="formHorizontalRadios1">
											Male
										</label>
										<Form.Check
											className="mr-2 mt-1 float-right"
											type="radio"
											name="formHorizontalRadios"
											id="formHorizontalRadios1"
										/>
									</div>
								</Col>
								<Col>
									<div className="border-wrapper border">
										<label className="ml-3 mt-1" htmlFor="formHorizontalRadios1">
											Custom
										</label>
										<Form.Check
											className="mr-2 mt-1 float-right"
											type="radio"
											name="formHorizontalRadios"
											id="formHorizontalRadios1"
										/>
									</div>
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
