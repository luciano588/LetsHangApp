import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

class GoogleMap extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: "100vh", width: "100%" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyBEAxk3n0Q0affZEve_2CqwFq-Q4xUS8hc" }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}>
					<h1>Find your friends!</h1>
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
