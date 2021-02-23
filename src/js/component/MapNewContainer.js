import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Markers } from "./marker";

export const MapNewContainer = () => {
	const [selected, setSelected] = useState({});
	const [currentPosition, setCurrentPosition] = useState({});

	const success = position => {
		const currentPosition = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};
		setCurrentPosition(currentPosition);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success);
	});

	const onSelect = item => {
		setSelected(item);
	};
	const mapStyles = {
		height: "100vh",
		width: "100%"
	};

	const defaultCenter = {
		lat: 25.7617,
		lng: -80.1918
	};
	const locations = [
		{
			name: "Location 1",
			location: {
				lat: 25.7617,
				lng: -80.1918
			}
		}
		// },
		// {
		// 	name: "Location 2",
		// 	location: {
		// 		lat: 41.3917,
		// 		lng: 2.1649
		// 	}
		// },
		// {
		// 	name: "Location 3",
		// 	location: {
		// 		lat: 41.3773,
		// 		lng: 2.1585
		// 	}
		// },
		// {
		// 	name: "Location 4",
		// 	location: {
		// 		lat: 41.3797,
		// 		lng: 2.1682
		// 	}
		// },
		// {
		// 	name: "Location 5",
		// 	location: {
		// 		lat: 41.4055,
		// 		lng: 2.1915
		// 	}
		// }
	];
	return (
		<LoadScript googleMapsApiKey="AIzaSyBEAxk3n0Q0affZEve_2CqwFq-Q4xUS8hc">
			<GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
				{locations.map(item => {
					// return <Markers key={item.name} />;
					return (
						<Marker
							className="test"
							key={item.name}
							position={item.location}
							onClick={() => onSelect(item)}
						/>
					);
				})}

				{selected.location && (
					<InfoWindow position={selected.location} clickable={true} onCloseClick={() => setSelected({})}>
						<p>{selected.name}</p>
					</InfoWindow>
				)}
				{<Marker position={currentPosition} label="Paolo" />}
			</GoogleMap>
		</LoadScript>
	);
};
