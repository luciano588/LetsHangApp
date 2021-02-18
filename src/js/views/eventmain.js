import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/eventmain.scss";

export const Eventmain = props => {
	return (
		<div className="bg-white">
			<div className="container">
				<div className="d-flex justify-content-between align-items-center py-4">
					<div>
						<a href="#" className="d-inline-block text-dark">
							<strong>234</strong>
							<span className="text-muted">followers</span>
						</a>
						<a href="#" className="d-inline-block text-dark ml-3">
							<strong>111</strong>
							<span className="text-muted">following</span>
						</a>
					</div>
					<div>
						<a href="#" className="btn btn-success btn-sm">
							Add Event
						</a>
						<a href="#" className="btn btn-default icon-btn md-btn-flat btn-sm ml-1">
							<i className="ion ion-md-mail" />
						</a>
					</div>
				</div>
			</div>
			<hr className="m-0" />

			<div className="container">
				<div className="text-center py-5">
					<img
						src="https://bootdey.com/img/Content/avatar/avatar6.png"
						alt
						className="ui-w-100 rounded-circle"
					/>

					<div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
						<h4 className="font-weight-bold my-4">Mike Greene</h4>

						<div className="text-muted mb-4">
							Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo,
							porro principes ei has.
						</div>
					</div>

					<div className="text-center">
						<a href="#" className="btn icon-btn borderless btn-outline-twitter btn-lg btn-round">
							<span className="ion ion-logo-twitter" />
						</a>
						<a href="#" className="btn icon-btn borderless btn-outline-facebook btn-lg btn-round">
							<span className="ion ion-logo-facebook" />
						</a>
						<a href="#" className="btn icon-btn borderless btn-outline-instagram btn-lg btn-round">
							<span className="ion ion-logo-instagram" />
						</a>
					</div>
				</div>
			</div>
			<hr className="m-0" />

			<ul className="nav nav-tabs tabs-alt justify-content-center">
				<li className="nav-item">
					<a className="nav-link py-4 active" href="#">
						Posts
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link py-4" href="#">
						Likes
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link py-4" href="#">
						Followers
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link py-4" href="#">
						Following
					</a>
				</li>
			</ul>
		</div>
	);
};
