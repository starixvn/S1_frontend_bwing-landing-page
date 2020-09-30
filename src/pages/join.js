import React, { useEffect, useContext } from "react";
import logo from "../styles/style1/img/logo.png";
import { Promotion } from "./join.promotion";
import Form from "./join.form";
import config, { SiteStyle, defStyle } from "../config";
import { getUrlParameter } from "../components/common";
import { languageContext } from "../components/context";
import Style2_BottomIMG from "../styles/style2/img/bottom_img.png";
// import { api_site_CheckSignIn } from "../service/api/site";

const _style = SiteStyle;

export default () => {
	const { language } = useContext(languageContext);

	useEffect(() => {
		let errorCode = getUrlParameter("errorCode");
		let message = getUrlParameter("message");

		if (message) {
			alert(message);
		}
	}, []);

	return (
		<div className="wallpaper">
			<div className="module">
				<a href={config.openURL}>
					<img src={logo} alt="Bwing" />
				</a>
				<Promotion language={language} />
				<Form />
			</div>
			<BottomImg />
		</div>
	);
};

const BottomImg = () => {
	if (_style === defStyle.style2) {
		return (
			<img src={Style2_BottomIMG} className="bottomImg" alt="bottomImg" />
		);
	} else {
		return <></>;
	}
};
