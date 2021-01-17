import React from "react";
import { Link } from "react-router-dom";
import "/workspace/LetsHangApp/src/styles/landing.scss";
import "/workspace/LetsHangApp/src/styles/bootstrap-social.css";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export const Landing = () => {
	return (
		<div className="container bg-dark align-box">
			<div className="row">
				<div className="col bg-danger padding-col">
					<div className="mt-5 row justify-content-center">
						<strong>
							<h1 className="text-center display-1">{"Let's"}</h1>
							<br />
							<h1 className="text-center display-1">{"Hang"}</h1>
						</strong>
					</div>
				</div>
				<div className="col bg-white padding-col border border-secondary">
					<div className="border border-secondary">
						<div className="container">
							<div className="display-inblock">
								<h1> Log in </h1>
								<p className="small bold">
									Not registered with us yet? <a href="#">Sign up </a>
								</p>
							</div>
							<div className="row justify-content-center">
								<Form className="w-75">
									<Form.Group controlId="formBasicEmail">
										<Form.Control className="w-100" type="email" placeholder="Enter email" />
										{/* <Form.Text className="text-muted">
								{"We'll never share your email with anyone else."}
							</Form.Text> */}
									</Form.Group>

									<Form.Group controlId="formBasicPassword">
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>
									<Link to="/dash">
										<Button className="form-control" variant="primary" type="submit">
											Submit
										</Button>
									</Link>
								</Form>
							</div>
							<div className="row" /> <strong>OR</strong>{" "}
							<div className="row justify-content-center social-box">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
