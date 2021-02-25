import React from "react";
import { Link } from "react-router-dom";
import logo from "/workspace/LetsHangApp/src/img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/dash">
					<img className="eventlogo" src={logo} alt="Logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/eventmain">
								<a className="nav-link">Find your events</a>
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/userprofile">
								<a className="nav-link">Profile</a>
							</Link>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link" aria-current="page" href="/event">
								New Event
							</a>
						</li> */}

						<li className="nav-item">
							<Link to="/">
								<a className="nav-link" href="#" aria-disabled="true">
									Logout
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
