import React, { useEffect, useState } from "react";
import logo from "../styles/img/logo.png";
import Promotion from "./join.promotion";
import Form from "./join.form";
import config from "../config";
import { api_site_CheckSignIn } from "../service/api/site";

export default () => {
	const [showPage, setShowPage] = useState(null);
	useEffect(() => {
		let mounted = true;
		api_site_CheckSignIn().then(res => {
			if (mounted) {
				if (res.data.errorCode === 0) {
					window.location.href = config.apiURL;
					setShowPage(false);
				} else {
					setShowPage(true);
				}
			}
		});

		return () => (mounted = false);
	}, [setShowPage]);

	return showPage === true ? (
		<div className="wallpaper">
			<div className="module">
				<a href={config.apiURL}>
					<img src={logo} alt="" />
				</a>
				<Promotion />
				<Form />
			</div>
		</div>
	) : (
		<></>
	);
};
