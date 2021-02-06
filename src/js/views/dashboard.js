import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = props => {
	return (
		<span>
			<h1>{"You are at Dashboard!"}</h1>
		</span>
	);
};
Dashboard.propTypes = {
	match: PropTypes.object
};
