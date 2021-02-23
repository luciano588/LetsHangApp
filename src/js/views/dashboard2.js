import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import GoogleMapWrapper from "../component/map";
import { MapNewContainer } from "../component/MapNewContainer";

export const Dashboard2 = props => {
	const locations = [
		{
			name: "Location 1",
			location: {
				lat: 25.7617,
				lng: 80.1918
			}
		}
	];
	return (
		<>
			<div className="d-flex justify-content-center">
				<MapNewContainer array={locations} />
			</div>
		</>
	);
};

Dashboard2.propTypes = {
	match: PropTypes.object
};
