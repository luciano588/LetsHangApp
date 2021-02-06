import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import GoogleMap from "../component/googleMap";

export const Dashboard = props => {
	return (
		<div className="jumbotron">
			<GoogleMap />
		</div>
	);
};

Dashboard.propTypes = {
	match: PropTypes.object
};
