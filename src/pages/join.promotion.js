import React from "react";
import { SiteStyle, defStyle } from "../config";
import titleImg from "../styles/style1/img/title.png";

const _style = SiteStyle;

export const Promotion = () => {
	if (_style === defStyle.style1) {
		return (
			<div className="title">
				<img src={titleImg} alt="title_img" />
			</div>
		);
	} else {
		return (
			<div className="title">
				<div>
					<span className="blue">thưởng chào mừng</span>
					<span className="yellow">150%</span>
					<br />
					<span className="blue">lên đến</span>
					<span className="yellow">10 triệu vnd</span>
				</div>
			</div>
		);
	}
};
