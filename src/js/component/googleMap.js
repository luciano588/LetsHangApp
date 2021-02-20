import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

const Marker = ({ url }) => (
	<div
		style={{
			width: "50px",
			height: "50px",
			border: "1px solid red",
			background: "blue",
			color: "white",
			borderRadius: "50%",
			backgroundImage: `url(${url})`,
			backgroundSize: "cover"
		}}
	/>
);

Marker.propTypes = {
	url: PropTypes.string
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
					{/* {
                            props.store.friends.map((friend,index)=>
                                <Marker
                                    key={index}
                                    lat={friend.lat}
                                    lng={friend.lng}
                                    url={friend.avatar}
                            );
                        } */}
					<Marker
						lat={25.78}
						lng={-80.18}
						url="https://cdn.iconscout.com/icon/premium/png-512-thumb/businesswoman-76-774606.png"
					/>
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
