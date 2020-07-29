import React from "react";
import logo from "../styles/img/logo.png";
import Promotion from "./join.promotion";
import Form from "./join.form";
import config from "../config";

export default () => {
	return (
		<div className="wallpaper">
			<div className="module">
				<a href={config.apiURL}>
					<img src={logo} alt="" />
				</a>
				<Promotion />
				<Form />
			</div>
		</div>
	);
};
