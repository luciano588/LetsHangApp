import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/workspace/LetsHangApp/src/img/logo.png";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
							<Link className="nav-link" to="/eventmain">
								Find your events
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/userprofile">
								Profile
							</Link>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link" aria-current="page" href="/event">
								New Event
							</a>
						</li> */}
						{store.token != null ? (
							<li className="nav-item" onClick={() => actions.logout()}>
								<Link className="nav-link" to="/">
									Logout
								</Link>
							</li>
						) : (
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Login
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
