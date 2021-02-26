import React, { Component, useContext } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import logo from "/workspace/LetsHangApp/src/img/logo.png";

const AnyReactComponent = () => (
	<div
		className="zoom"
		style={{
			width: "45px",
			height: "45px",
			border: "0px solid white",
			background: "white",
			color: "white",
			borderRadius: "10%",
			backgroundImage: "url(https://i.pinimg.com/originals/9a/ec/32/9aec32c02c8708de263ec58bfc0beede.png)",
			backgroundSize: "cover"
		}}
	/>
);

AnyReactComponent.propTypes = {
	text: PropTypes.string
};

class GoogleMapEvent extends Component {
	static defaultProps = {
		center: {
			lat: 25.78,
			lng: -80.18
		},
		zoom: 12
	};

	render() {
		return (
			<div style={{ height: "500px", width: "100%" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyAL41VEWiTONkr37_fCDtDGllDt_Kw0skg" }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}>
					{this.props.events.map((event, index) => {
						return <AnyReactComponent key={index} lat={event.lat} lng={event.lng} />;
					})}
				</GoogleMapReact>
			</div>
		);
	}
}

GoogleMapEvent.propTypes = {
	center: PropTypes.string,
	zoom: PropTypes.string,
	events: PropTypes.array,
	markers: PropTypes.array,
	location: PropTypes.string
};

export default GoogleMapEvent;
