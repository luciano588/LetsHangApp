import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import GoogleMapEvent from "../component/googleMapEvent";
import "../../styles/zoom.scss";

export const DashboardEvent = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div>
				<GoogleMapEvent location={store.location} events={store.events} markers={store.markers} />
			</div>
		</div>
	);
};

DashboardEvent.propTypes = {
	match: PropTypes.object
};
