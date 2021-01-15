import React from "react";
import { Link } from "react-router-dom";
import "/workspace/LetsHangApp/src/styles/landing.scss";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export const Landing = () => {
	return (
		<div className="container bg-dark">
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
				<div className="col bg-light padding-col">
					<div className="row text-center">
						<h1> Log in </h1>
					</div>
					<div className="row justify-content-center">
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Control type="email" placeholder="Enter email" />
								{/* <Form.Text className="text-muted">
								{"We'll never share your email with anyone else."}
							</Form.Text> */}
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</div>
					<div className="row" /> This is third row
				</div>
			</div>
		</div>
	);
};
