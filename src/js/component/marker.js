import React from "react";
import "../../styles/marker.scss";

export const Markers = props => {
	// const { color, name, id, mapCenter, ...rest } = props;
	return (
		// <div
		//   className="marker"
		//   style={{ backgroundColor: color, cursor: "pointer" }}
		//   title={name}
		// >
		// </div>
		<div
			style={{
				width: "50px",
				height: "50px",
				border: "1px solid red",
				background: "blue",
				color: "white",
				borderRadius: "50%",
				backgroundImage: "https://cdn.iconscout.com/icon/premium/png-512-thumb/businesswoman-76-774606.png",
				backgroundSize: "cover"
			}}
		/>
	);
};

//  👩‍💼
