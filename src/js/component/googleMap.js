import React, { Component, useContext } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import logo from "/workspace/LetsHangApp/src/img/logo.png";

const AnyReactComponent = () => (
	<div
		className="zoom"
		style={{
			width: "30px",
			height: "30px",
			border: "1px solid white",
			background: "white",
			color: "white",
			borderRadius: "50%",
			backgroundImage: "url(https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png)",
			backgroundSize: "cover"
		}}
	/>
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
		zoom: 14
	};

	render() {
		return (
			<div style={{ height: "500px", width: "100%" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyBEAxk3n0Q0affZEve_2CqwFq-Q4xUS8hc" }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}>
					{this.props.location !== null && (
						<AnyReactComponent lat={this.props.location.lat} lng={this.props.location.lng} />
					)}
					{this.props.markers.map((marker, index) => {
						return <AnyReactComponent key={index} lat={marker.lat} lng={marker.lng} />;
					})}
				</GoogleMapReact>
			</div>
		);
	}
}

GoogleMap.propTypes = {
	center: PropTypes.string,
	zoom: PropTypes.string,
	markers: PropTypes.array,
	location: PropTypes.string
};

export default GoogleMap;
