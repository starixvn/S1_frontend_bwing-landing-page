import React from "react";
import { SiteStyle, defStyle } from "../config";
import titleImg from "../styles/style1/img/title.png";

const _style = SiteStyle;

export const Promotion = () => {
	if (_style === defStyle.style1) {
		return (
			<div class="title">
				<img src={titleImg} />
			</div>
		);
	} else {
		return (
			<div className="title">
				<div>
					<span class="blue">thưởng chào mừng</span>
					<span class="yellow">150%</span>
					<br />
					<span class="blue">lên đến</span>
					<span class="yellow">10 triệu vnd</span>
				</div>
			</div>
		);
	}
};
