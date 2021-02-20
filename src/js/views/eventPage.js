import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Event_card } from "../component/eventCard";

export const Event = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="d-flex justify-content-center">
			{store.event.map((event, index) => {
				return <Event_card key={index} eventname={event.eventname} eventdescription={event.eventdescription} />;
			})}
		</div>
	);
};
