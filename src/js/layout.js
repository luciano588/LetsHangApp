import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Dashboard } from "./views/dashboard";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import { Invite } from "./component/form";
import { Event } from "./component/event";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-coloumn justify-content-center">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					{/* <Invite />
					<Event /> */}

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/invite">
							<Invite />
						</Route>
						<Route exact path="/dash">
							<Dashboard />
						</Route>
						<Route exact path="/event">
							<Event />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
