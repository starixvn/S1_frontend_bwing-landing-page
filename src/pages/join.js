import React from "react";
import logo from "../styles/img/logo.png";
import Promotion from "./join.promotion";
import Form from "./join.form";

export default () => {
	return (
		<div className="wallpaper">
			<div className="module">
				<img src={logo} alt="" />
				<Promotion />
				<Form />
			</div>
		</div>
	);
};
