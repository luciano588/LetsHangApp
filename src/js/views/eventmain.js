import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import GoogleMapEvent from "../component/googleMapEvent";

import "../../styles/eventmain.scss";
import { Invite } from "../component/form";
import { Card } from "../component/friendcard";
import { Party } from "../component/eventcard";
import { Navbar } from "../component/navbar";
import logo from "/workspace/LetsHangApp/src/img/logo.png";

export const Eventmain = props => {
	const { store, actions } = useContext(Context);
	let profiles = store.profiles[0];
	let userFriends = store.profiles[0].friends;

	return (
		<>
			<Navbar />
			<div className="bg-white">
				<div className="container">
					<div className="d-flex justify-content-between align-items-center py-4">
						<div>
							{/* potential spot for logo??? */}
							{/* <Link to="/dash">
								<img className="eventlogo" src={logo} alt="Logo" />
							</Link> */}
						</div>
						<div>
							<Invite />
						</div>
					</div>
				</div>
				<hr className="m-0" />

				<div className="container">
					<div className="text-center py-5">
						<div>
							<div>
								<GoogleMapEvent
									location={store.location}
									events={store.events}
									markers={store.markers}
								/>
							</div>
						</div>

						<div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto" />
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
								<i className="icon-user" /> <span className="hidden-xs">Events</span>
							</a>
						</li>
						{/* <li className="nav-item">
						<a href="javascript:void();" data-target="#messages" data-toggle="pill" className="nav-link">
							<i className="icon-envelope-open" /> <span className="hidden-xs">Messages</span>
						</a>
					</li> */}
						{/* <li className="nav-item">
						<a href="javascript:void();" data-target="#edit" data-toggle="pill" className="nav-link">
							<i className="icon-note" /> <span className="hidden-xs">Events</span>
						</a>
					</li> */}
					</ul>
					<div className="tab-content p-3">
						<div className="tab-pane active show" id="profile">
							<div className="row">
								<div className="col-md-6" />

								{/* FRIEND LIST */}

								<div className="col-md-6 justify-center">
									<div className="list-group justify-center">
										{userFriends.map((friend, index) => {
											return (
												<Party
													key={index}
													id={friend.id}
													eventname={friend.eventname}
													city={friend.city}
													//onDelete={handleDelete(friend.id)}
												/>
											);
										})}
									</div>
								</div>
							</div>
							{/* <!--/row--> */}
						</div>
						{/* <div className="tab-pane" id="messages">
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
					</div> */}

						{/* EVENT LIST */}
						{/* <div className="tab-pane" id="edit">
						<h5 className="mt-2 mb-3">
							<div className="col-md-12">
								<div className="list-group">
									{userFriends.map((friend, index) => {
										return (
											<Party
												key={index}
												id={friend.id}
												// firstname={friend.firstname}
												// lastname={friend.lastname}
												// city={friend.city}
												//onDelete={handleDelete(friend.id)}
											/>
										);
									})}
								</div>
							</div>
						</h5>
					</div> */}
					</div>
				</div>
			</div>
		</>
	);
};
