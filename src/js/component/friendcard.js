import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";

export const Card = props => {
	const handleDelete = friend => {
		setSelectedContact(friend);
		setModal(true);
	};

	return (
		<div className="list-group-item d-flex align-items-center">
			<img
				src="https://bootdey.com/img/Content/avatar/avatar1.png"
				alt=""
				width="50px"
				className="rounded-sm ml-n2"
			/>
			<div className="flex-fill pl-3 pr-3">
				<div>
					<a href="#" className="text-dark font-weight-600">
						{(props.firstname, props.lastname)}
					</a>
				</div>
				<div className="text-muted fs-13px">{props.city}</div>
			</div>
			<a className="btn btn-outline-primary" onClick={() => props.onDelete()}>
				Remove Friend
			</a>
		</div>
	);
};

Card.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	firstname: PropTypes.string,
	lastname: PropTypes.string,
	city: PropTypes.string
};

Card.defaultProps = {
	onDelete: null
};
