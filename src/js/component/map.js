// import "./styles.css";
import React, { useEffect, useState } from "react";
import { Map, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { Marker } from "./googleMap";
import PropTypes from "prop-types";

export const App = ({ google }) => {
	const [selectedPlace, setSelectedPlace] = useState({});
	const [userLocation, setUserLocation] = useState(null);

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				setUserLocation(position);
			});
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return (
		<div className="App">
			<Map
				google={google}
				zoom={14}
				center={{
					lat: userLocation ? userLocation.coords.latitude : 25.78,
					lng: userLocation ? userLocation.coords.logitude : -80.18
				}}>
				<Marker
					// onClick={this.onMarkerClick}
					name={"Current location"}
					position={{ lat: 37.778519, lng: -122.40564 }}
				/>
				<Marker
					// onClick={this.onMarkerClick}
					name={"Current location"}
				/>
				<Marker
					// onClick={this.onMarkerClick}
					name={"Current location"}
					position={{ lat: 34.778519, lng: -122.40564 }}
				/>

				<InfoWindow
				// onClose={this.onInfoWindowClose}
				>
					<div>
						<h1>{selectedPlace.name}</h1>
					</div>
				</InfoWindow>
			</Map>
		</div>
	);
};

App.propTypes = {
	google: PropTypes.any
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyBEAxk3n0Q0affZEve_2CqwFq-Q4xUS8hc"
})(App);
