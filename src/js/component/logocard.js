import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import logo from "/workspace/LetsHangApp/src/img/logo.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 8];
const trans1 = (x, y) => `translate3d(${x / 8}px,${y / 2 + 4}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

export const Card = () => {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 200, friction: 20 } }));
	return (
		<div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
			<animated.div style={{ transform: props.xy.interpolate(trans1) }}>
				<img className="logo" src={logo} alt="Logo" />
			</animated.div>
		</div>
	);
};

Card.propTypes = {
	xy: PropTypes.array
};
