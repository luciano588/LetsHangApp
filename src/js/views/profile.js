import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/profile.scss";

export const Profile = props => {
	const { store, actions } = useContext(Context);
	const [modal, setModal] = useState(false);
	const [selectedContact, setSelectedContact] = useState(null);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [phone, setPhone] = useState(null);
	const [address, setAddress] = useState(null);
	const [city, setCity] = useState(null);
	const [zipcode, setZipcode] = useState(null);
	const [state, setState] = useState(null);

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
								<h5 className="mb-1 text-white">
									{/* {profile.firstname} */}
									{/* {profile.lastname} */}
								</h5>
							</div>
							<div className="card-body">
								<ul className="list-group shadow-none">
									<li className="list-group-item">
										<div className="list-icon">
											<i className="fa fa-phone-square" />
										</div>
										<div className="list-details">
											{/* <span>{profile.phone}</span> */}
											<small>Mobile Number</small>
										</div>
									</li>
									<li className="list-group-item">
										<div className="list-icon">
											<i className="fa fa-envelope" />
										</div>
										<div className="list-details">
											{/* <span>{profile.email}</span> */}
											<small>Email Address</small>
										</div>
									</li>
									<li className="list-group-item">
										<div className="list-icon">
											<i className="fa fa-globe" />
										</div>
										<div className="list-details">
											<span>www.example.com</span>
											<small>Website Address</small>
										</div>
									</li>
								</ul>
								<div className="row text-center mt-4">
									<div className="col p-2">
										<h4 className="mb-1 line-height-5">154</h4>
										<small className="mb-0 font-weight-bold">Projects</small>
									</div>
									<div className="col p-2">
										<h4 className="mb-1 line-height-5">2.2k</h4>
										<small className="mb-0 font-weight-bold">Followers</small>
									</div>
									<div className="col p-2">
										<h4 className="mb-1 line-height-5">9.1k</h4>
										<small className="mb-0 font-weight-bold">Views</small>
									</div>
								</div>
							</div>
							<div className="card-footer text-center">
								<a
									href="javascript:void()"
									className="btn-social btn-facebook waves-effect waves-light m-1">
									<i className="fa fa-facebook" />
								</a>
								<a
									href="javascript:void()"
									className="btn-social btn-google-plus waves-effect waves-light m-1">
									<i className="fa fa-google-plus" />
								</a>
								<a
									href="javascript:void()"
									className="list-inline-item btn-social btn-behance waves-effect waves-light">
									<i className="fa fa-behance" />
								</a>
								<a
									href="javascript:void()"
									className="list-inline-item btn-social btn-dribbble waves-effect waves-light">
									<i className="fa fa-dribbble" />
								</a>
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
									<h5 className="mb-3">User Profile</h5>
									<div className="row">
										<div className="col-md-6">
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
												<span className="fa fa-clock-o ion-clock float-right" /> Recent Activity
											</h5>
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
															<strong>Skell</strong> deleted his post Look at Why this
															is.. in <strong>`Discussions`</strong>
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
												Website
											</label>
											<div className="col-lg-9">
												<input className="form-control" type="url" value="" />
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
											<div className="col-lg-6">
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
													value={state}
													placeholder="State"
													onChange={e => setState(e.target.value)}
												/>
											</div>
											<div className="col-lg-6">
												<input
													className="form-control"
													type="text"
													value={zipcode}
													placeholder="Zip Code"
													onChange={e => setZipcode(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-lg-3 col-form-label form-control-label">
												Username
											</label>
											<div className="col-lg-9">
												<input className="form-control" type="text" value="jhonsanmark" />
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
												<input type="button" className="btn btn-primary" value="Save Changes" />
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

Profile.PropTypes = {
	onDelete: PropTypes.func,
	contact: PropTypes.object
};
