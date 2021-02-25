import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Context } from "../store/appContext";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Loginbutton = props => {
	const { store, actions } = useContext(Context);

	// const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 200 } }));
	return (
		// <animated.div
		// onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
		// onMouseLeave={() => set({ xys: [0, 0, 1] })}
		// style={{ transform: props.xys.interpolate(trans) }}>
		<Button className="form-control" variant="primary" onClick={() => actions.login(props.email, props.password)}>
			Log In
		</Button>
		// </animated.div>
	);
};

Loginbutton.propTypes = {
	xys: PropTypes.array,
	email: PropTypes.string,
	password: PropTypes.string
};
