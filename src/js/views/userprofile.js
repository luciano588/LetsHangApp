import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/userprofile.scss";
import { Friend } from "../component/friendinvite";
import { Card } from "../component/friendcard";

export const Userprofile = props => {
	let params = useParams();
	const { store, actions } = useContext(Context);
	let profiles = store.profiles[0];
	let userFriends = store.profiles[0].friends;

	const [modal, setModal] = useState(false);
	const [selectedContact, setSelectedContact] = useState(null);
	const [username, setUsername] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [state, setState] = useState("");

	useEffect(
		() => {
			for (let profile of store.profiles) {
				if (params.profileId == profile.id) {
					setAddress(profiles.address);
					setFirstname(profiles.firstname);
					setLastname(profiles.lastname);
					setEmail(profiles.email);
					setUsername(profiles.username);
					setPhone(profiles.phone);
					setCity(profiles.city);
					setZipcode(profiles.zipcode);
					setState(profiles.state);
				}
			}
		},
		[store.profiles, params.profileId]
	);

	const handleDelete = id => {
		actions.deleteFriend(id);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-4">
					<div className="profile-card-4 z-depth-3">
						<div className="card">
							<div className="card-body text-center bg-primary rounded-top">
								<div className="user-box">
									<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar" />
								</div>
								<h5 className="mb-1 text-white">{profiles.firstname + " " + profiles.lastname}</h5>
							</div>
							<div className="card-body">
								<ul className="list-group shadow-none">
									<li className="list-group-item">
										<div className="list-icon">
											<i className="fa fa-phone-square" />
										</div>
										<div className="list-details">
											<span>{profiles.phone}</span>
											<small>Mobile Number</small>
										</div>
									</li>
									<li className="list-group-item">
										<div className="list-icon">
											<i className="fa fa-envelope" />
										</div>
										<div className="list-details">
											<span>{profiles.email}</span>
											<small>Email Address</small>
										</div>
									</li>
									<li className="list-group-item">
										<div className="list-icon">
											<i className="fa fa-globe" />
										</div>
										<div className="list-details">
											<span>{profiles.username}</span>
											<small>User Name</small>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-8">
					<div className="card z-depth-3">
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
									<a
										href="javascript:void();"
										data-target="#messages"
										data-toggle="pill"
										className="nav-link">
										<i className="icon-envelope-open" /> <span className="hidden-xs">Messages</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										href="javascript:void();"
										data-target="#edit"
										data-toggle="pill"
										className="nav-link">
										<i className="icon-note" /> <span className="hidden-xs">Edit</span>
									</a>
								</li>
							</ul>
							<div className="tab-content p-3">
								<div className="tab-pane active show" id="profile">
									<div className="row">
										<div className="col-md-6">
											<Friend />
											{/* <h6>About</h6>
											<p>Web Designer, UI/UX Engineer</p>
											<h6>Hobbies</h6>
											<p>Indie music, skiing and hiking. I love the great outdoors.</p> */}
										</div>
										{/* <div className="col-md-6">
											<span className="badge badge-primary">
												<i className="fa fa-user" /> 900 Followers
											</span>
											<span className="badge badge-success">
												<i className="fa fa-cog" /> 43 Forks
											</span>
											<span className="badge badge-danger">
												<i className="fa fa-eye" /> 245 Views
											</span>
										</div> */}
										<div className="col-md-12">
											<h5 className="mt-2 mb-3">
												<span className="fa fa-clock-o ion-clock float-right" /> Current Friends
											</h5>

											{/* FRIEND LIST */}
											<div className="col-md-12">
												<div className="list-group">
													{userFriends.map((friend, index) => {
														return (
															<Card
																key={index}
																id={friend.id}
																firstname={friend.firstname}
																lastname={friend.lastname}
																city={friend.city}
																//onDelete={handleDelete(friend.id)}
															/>
														);
													})}
												</div>
											</div>
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
													<span className="float-right font-weight-bold">3 hrs ago</span> Here
													is your a link to the latest summary report from the..
												</td>
											</tr>
											<tr>
												<td>
													<span className="float-right font-weight-bold">Yesterday</span>{" "}
													There has been a request on your account since that was..
												</td>
											</tr>
											<tr>
												<td>
													<span className="float-right font-weight-bold">9/10</span> Porttitor
													vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia
													rhoncus.
												</td>
											</tr>
											<tr>
												<td>
													<span className="float-right font-weight-bold">9/4</span> Vestibulum
													tincidunt ullamcorper eros eget luctus.
												</td>
											</tr>
											<tr>
												<td>
													<span className="float-right font-weight-bold">9/4</span>{" "}
													Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="tab-pane" id="edit">
									{/* USER PROFILE EDIT */}

									<form>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">
												First name
											</label>
											<div className="col-lg-9">
												<input
													value={firstname}
													className="form-control"
													type="text"
													onChange={e => setFirstname(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">
												Last name
											</label>
											<div className="col-lg-9">
												<input
													value={lastname}
													className="form-control"
													type="text"
													onChange={e => setLastname(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">Email</label>
											<div className="col-lg-9">
												<input
													value={email}
													className="form-control"
													type="email"
													onChange={e => setEmail(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">
												Change profile
											</label>
											<div className="col-lg-9">
												<input className="form-control" type="file" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">
												Birthday
											</label>
											<div className="col-lg-9">
												<input
													className="form-control"
													type="text"
													value={username}
													onChange={e => setUsername(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">
												Address
											</label>
											<div className="col-lg-9">
												<input
													className="form-control"
													type="text"
													value={address}
													placeholder="Street"
													onChange={e => setAddress(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label" />
											<div className="col-lg-4">
												<input
													className="form-control"
													type="text"
													value={city}
													placeholder="City"
													onChange={e => setCity(e.target.value)}
												/>
											</div>
											<div className="col-lg-3">
												<input
													className="form-control"
													type="text"
													value={zipcode}
													placeholder="Zipcode"
													onChange={e => setZipcode(e.target.value)}
												/>
											</div>
											<div className="col-lg-2">
												<input
													className="form-control"
													type="text"
													value={state}
													placeholder="State"
													onChange={e => setState(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">
												Username
											</label>
											<div className="col-lg-9">
												<input
													className="form-control"
													type="text"
													value={username}
													ohchange={e => setState(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">
												Password
											</label>
											<div className="col-lg-9">
												<input className="form-control" type="password" value="11111122333" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">
												Confirm password
											</label>
											<div className="col-lg-9">
												<input className="form-control" type="password" value="11111122333" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label" />
											<div className="col-lg-9">
												<input type="reset" className="btn btn-secondary" value="Cancel" />
												<input
													type="button"
													className="btn btn-primary"
													value="Save Changes"
													// onClick={actions.editUserProfile(profiles.id)}
												/>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Userprofile.PropTypes = {
	firstname: PropTypes.string,
	lastname: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	username: PropTypes.string,
	address: PropTypes.string,
	city: PropTypes.string,
	state: PropTypes.string,
	zipcode: PropTypes.string
};
