import React from "react";
import { Link } from "react-router-dom";
import "/workspace/LetsHangApp/src/styles/landing.scss";
import "/workspace/LetsHangApp/src/styles/bootstrap-social.css";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import logo from "/workspace/LetsHangApp/src/img/logo.png";
import { signupmodal, Signupmodal } from "./signupmodal.js";
import { Demo } from "./demo.js";
import { Card } from "./logocard.js";
import { Loginbutton } from "./loginbutton.js";
export const Landing = () => {
	return (
		<div className="container-fluid bg-dark align-box">
			<div className="row">
				<div className="col bg-light padding-col">
					<div className="row d-flex justify-content-center">
						<Card />
					</div>
				</div>
				<div className="col bg-coral padding-col border border-secondary">
					<div className="mt-5 containerd">
						<div className="container">
							<div className="display-inblock text-center">
								<h1> Log in </h1>
								<p className="small bold ml-1">
									Not registered with us yet?{" "}
									<a href="#">
										<Signupmodal />{" "}
									</a>
								</p>
							</div>
							<div className="row justify-content-center">
								<Form className="w-75">
									<Form.Group controlId="formBasicEmail">
										<Form.Control className="w-100" type="email" placeholder="Enter email" />
									</Form.Group>

									<Form.Group controlId="formBasicPassword">
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>
									<Link to="/dash">
										<Loginbutton />
									</Link>
								</Form>
							</div>
							<div className="row justify-content-center mt-2">
								<p className="small bold text-center">
									<a href="#">Forgot password?</a>
								</p>{" "}
							</div>
							{/* <div className="row justify-content-center mt-2">
								{" "}
								<strong>OR</strong>{" "}
							</div>
							<div className="row justify-content-center">
								<div className="w-75">
									<a className="btn btn-block btn-social btn-twitter mt-4">
										<i className="fab fa-twitter-square" />
										Sign in with Twitter
									</a>
									<a className="btn btn-block btn-social btn-facebook">
										<i className="fab fa-facebook" />
										Sign in with facebook
									</a>
									<a className="btn btn-block btn-social btn-google mb-4">
										<i className="fab fa-google" />
										Sign in with google
									</a>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
