import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

const AnyReactComponent = ({ text }) => (
	<div
		style={{
			width: "50px",
			height: "50px",
			border: "1px solid red",
			background: "red",
			color: "white",
			borderRadius: "50%"
		}}>
		{text}
	</div>
);

AnyReactComponent.propTypes = {
	text: PropTypes.string
};

class GoogleMap extends Component {
	static defaultProps = {
		center: {
			lat: 25.78,
			lng: -80.18
		},
		zoom: 13
	};

	render() {
		return (
			<div style={{ height: "500px", width: "100%" }}>
				<h1>Find your friends!</h1>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyBEAxk3n0Q0affZEve_2CqwFq-Q4xUS8hc" }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}>
					<AnyReactComponent lat={25.78} lng={-80.18} text="My Marker" />
				</GoogleMapReact>
			</div>
		);
	}
}

GoogleMap.propTypes = {
	center: PropTypes.string,
	zoom: PropTypes.string
};

export default GoogleMap;
