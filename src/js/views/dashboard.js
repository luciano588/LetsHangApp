import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import GoogleMap from "../component/googleMap";
import "../../styles/zoom.scss";
import { Navbar } from "../component/navbar";

export const Dashboard = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<Navbar />
			<div>
				{" "}
				<div>
					<GoogleMap location={store.location} markers={store.markers} />
				</div>
			</div>
		</>
	);
};

Dashboard.propTypes = {
	match: PropTypes.object
};
