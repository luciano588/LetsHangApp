import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/eventmain.scss";
import { Invite } from "./component/form";

export const Eventmain = props => {
	return (
		<div className="bg-white">
			<div className="container">
				<div className="d-flex justify-content-between align-items-center py-4">
					<div>
						{/* potential spot for logo??? */}
						<a href="#" className="d-inline-block text-dark">
							<strong>234</strong>
							<span className="text-muted">followers</span>
						</a>
					</div>
					<div>
						<Link to="./component/form">
							<a href="#" className="btn btn-success btn-sm">
								Add Event
							</a>
							<a href="#" className="btn btn-default icon-btn md-btn-flat btn-sm ml-1" />
						</Link>
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

			<div className="card-body">
				<ul className="nav nav-pills nav-pills-primary nav-justified">
					{/* Pills */}
					<li className="nav-item">
						<a
							href="javascript:void();"
							data-target="#profile"
							data-toggle="pill"
							className="nav-link active show">
							<i className="icon-user" /> <span className="hidden-xs">Friends</span>
						</a>
					</li>
					<li className="nav-item">
						<a href="javascript:void();" data-target="#messages" data-toggle="pill" className="nav-link">
							<i className="icon-envelope-open" /> <span className="hidden-xs">Messages</span>
						</a>
					</li>
					<li className="nav-item">
						<a href="javascript:void();" data-target="#edit" data-toggle="pill" className="nav-link">
							<i className="icon-note" /> <span className="hidden-xs">Events</span>
						</a>
					</li>
				</ul>
				<div className="tab-content p-3">
					<div className="tab-pane active show" id="profile">
						<div className="row">
							<div className="col-md-6" />
							<div className="col-md-12">
								<table className="table table-hover table-striped">
									<tbody>
										<tr>
											<td>
												<strong>Abby</strong> joined ACME Project Team in{" "}
												<strong>`Collaboration`</strong>
											</td>
										</tr>
										<tr>
											<td>
												<strong>Gary</strong> deleted My Board1 in{" "}
												<strong>`Discussions`</strong>
											</td>
										</tr>
										<tr>
											<td>
												<strong>Kensington</strong> deleted MyBoard3 in{" "}
												<strong>`Discussions`</strong>
											</td>
										</tr>
										<tr>
											<td>
												<strong>John</strong> deleted My Board1 in{" "}
												<strong>`Discussions`</strong>
											</td>
										</tr>
										<tr>
											<td>
												<strong>Skell</strong> deleted his post Look at Why this is.. in{" "}
												<strong>`Discussions`</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						{/* <!--/row--> */}
					</div>
					<div className="tab-pane" id="messages">
						<div className="alert alert-info alert-dismissible" role="alert">
							<button type="button" className="close" data-dismiss="alert">
								×
							</button>
							<div className="alert-icon">
								<i className="icon-info" />
							</div>
							<div className="alert-message">
								<span>
									<strong>Info!</strong> Lorem Ipsum is simply dummy text.
								</span>
							</div>
						</div>
						<table className="table table-hover table-striped">
							<tbody>
								<tr>
									<td>
										<span className="float-right font-weight-bold">3 hrs ago</span> Here is your a
										link to the latest summary report from the..
									</td>
								</tr>
								<tr>
									<td>
										<span className="float-right font-weight-bold">Yesterday</span> There has been a
										request on your account since that was..
									</td>
								</tr>
								<tr>
									<td>
										<span className="float-right font-weight-bold">9/10</span> Porttitor vitae
										ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
									</td>
								</tr>
								<tr>
									<td>
										<span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt
										ullamcorper eros eget luctus.
									</td>
								</tr>
								<tr>
									<td>
										<span className="float-right font-weight-bold">9/4</span> Maxamillion ais the
										fix for tibulum tincidunt ullamcorper eros.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="tab-pane" id="edit">
						<h5 className="mt-2 mb-3">
							<span className="fa fa-clock-o ion-clock float-right" /> Here goes a list of events
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
