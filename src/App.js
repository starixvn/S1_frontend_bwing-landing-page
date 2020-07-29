import React from "react";
import path from "./path";
import { Router, createHistory, LocationProvider } from "@reach/router";
// import Home from "./pages/home";
import Join from "./pages/join";
import Wrapper from "./components/wrapper";

const Index = () => {
	let history = createHistory(window);
	return (
		<Wrapper>
			<LocationProvider history={history}>
				<Router>
					{/* <Home path={path.home.root} default /> */}
					<Join path={path.join.root} default />
				</Router>
			</LocationProvider>
		</Wrapper>
	);
};

export default Index;
