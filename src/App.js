import React from "react";
import path from "./path";
import { Router, createHistory, LocationProvider } from "@reach/router";
// import Home from "./pages/home";
import Join from "./pages/join";
import Wrapper from "./components/wrapper";
import { SiteStyle } from "./config";
import JoinStyle3 from "./pages/join_style3";

const _style = SiteStyle;

const Index = () => {
	let history = createHistory(window);
	return (
		<Wrapper>
			<LocationProvider history={history}>
				<Router>
					{/* <Home path={path.home.root} default /> */}
					{_style === "style3" ? (
						<JoinStyle3 path={path.join.root} default />
					) : (
						<Join path={path.join.root} default />
					)}
				</Router>
			</LocationProvider>
		</Wrapper>
	);
};

export default Index;
