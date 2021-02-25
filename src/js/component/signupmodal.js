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

export const Signupmodal = props => {
	const [firstname, setFirstName] = useState(null);
	const [lastname, setLastName] = useState(null);
	const [email, setEmail] = useState(null);
	const [nickname, setNickName] = useState(null);
	const [password, setPassword] = useState(null);
	const [phone, setPhone] = useState(null);
	const [streetaddress, setStreetAddress] = useState(null);
	const [unitno, setUnitNo] = useState(null);
	const [city, setCity] = useState(null);
	const [state, setState] = useState(null);
	const [zipcode, setZipCode] = useState(null);
	const [gender, setGender] = useState(null);
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
	//
	const userState = [
		"Alabama",
		"Alaska",
		"American Samoa",
		"Arizona",
		"Arkansas",
		"California",
		"Colorado",
		"Connecticut",
		"Delaware",
		"District of Columbia",
		"Federated States of Micronesia",
		"Florida",
		"Georgia",
		"Guam",
		"Hawaii",
		"Idaho",
		"Illinois",
		"Indiana",
		"Iowa",
		"Kansas",
		"Kentucky",
		"Louisiana",
		"Maine",
		"Marshall Islands",
		"Maryland",
		"Massachusetts",
		"Michigan",
		"Minnesota",
		"Mississippi",
		"Missouri",
		"Montana",
		"North Carolina",
		" North Dakota",
		"Nebraska",
		"New Hampshire",
		"New Jersey",
		"New Mexico",
		"Nevada",
		"New York",
		"Ohio",
		"Oklahoma",
		"Oregon",
		"Pennsylvania",
		"Puerto Rico",
		"Rhode Island",
		"South Carolina",
		"South Dakota",
		"Tennessee",
		"Texas",
		"Utah",
		"Virginia",
		"Virgin Islands",
		"Vermont",
		"Washington",
		"Wisconsin",
		"West Virginia",
		"Wyoming"
	];
	const listStates = userState.map((userState, index) => <option key={index}>{userState}</option>);
	var dateofbirth = [];
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
								<Form.Control
									placeholder="First name"
									type="firstname"
									onChange={e => setFirstName(e.target.value)}
								/>
							</Col>
							<Col>
								<Form.Control
									placeholder="Last name"
									type="lastname"
									onChange={e => setLastName(e.target.value)}
								/>
							</Col>
						</Form.Row>
						<Form.Group className="" controlId="formGridAddress1">
							<br />
							<Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
							<br />
							<Form.Control
								placeholder="Nick name"
								type="nickname"
								onChange={e => setNickName(e.target.value)}
							/>
							<br />
							<Form.Control
								type="password"
								placeholder="New password"
								onChange={e => setPassword(e.target.value)}
							/>
							<br />
							<Form.Control
								type="address"
								placeholder="Street address"
								onChange={e => setStreetAddress(e.target.value)}
							/>
							<br />
							<Form.Control
								type="unitno"
								placeholder="Apt, unit, building, floor, etc"
								onChange={e => setUnitNo(e.target.value)}
							/>
						</Form.Group>
						<Form.Row>
							<Col>
								<Form.Control type="city" placeholder="City" onChange={e => setCity(e.target.value)} />
							</Col>
							<Col>
								<Form.Control
									type="state"
									as="select"
									placeholder="State"
									onChange={e => setState(e.target.value)}>
									{listStates}
								</Form.Control>
							</Col>
							<Col>
								<Form.Control
									type="zipcode"
									placeholder="Zip Code"
									onChange={e => setZipCode(e.target.value)}
								/>
							</Col>
						</Form.Row>

						<Form.Label className="heading-wrapper">Birthday</Form.Label>
						<Form.Group>
							<Form.Row>
								<Col>
									<Form.Control
										type="month"
										as="select"
										defaultValue="Month"
										onChange={e => setMonth(e.target.value)}>
										{listMonth}
									</Form.Control>
								</Col>

								<Col>
									<Form.Control
										type="day"
										as="select"
										defaultValue="Day"
										onChange={e => setDay(e.target.value)}>
										{listDays}
									</Form.Control>
								</Col>
								<Col>
									<Form.Control
										type="year"
										as="select"
										defaultValue="Year"
										onChange={e => setYear(e.target.value)}>
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
											onChange={e => setGender("Female")}
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
											onChange={e => setGender("Male")}
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
											onChange={e => setGender("Custom")}
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
						onClick={e => {
							actions.addProfile({
								email: email,
								password: password,
								nick_name: nickname,
								first_name: firstname,
								last_name: lastname,
								address: streetaddress,
								city: city,
								state: state,
								gender: gender,
								zipcode: zipcode,
								birthday: "01201986"
							});
							{
								handleClose();
							}
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
