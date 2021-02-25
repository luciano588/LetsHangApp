import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/dash">
					<img src="https://i.imgur.com/8dWJ7Tv.png" />
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
							<a className="nav-link active" href="/dash">
								Find your friends
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="/eventmap">
								Find your events
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link active" href="/userprofile">
								Edit Profile
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/event">
								New Event
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link disabled" href="#" aria-disabled="true">
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
