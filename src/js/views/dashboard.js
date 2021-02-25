import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import GoogleMap from "../component/googleMap";
import "../../styles/zoom.scss";

export const Dashboard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron">
			<GoogleMap location={store.location} markers={store.markers} />
		</div>
	);
};

Dashboard.propTypes = {
	match: PropTypes.object
};
