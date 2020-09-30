import React from "react";
import { SiteStyle, defStyle } from "../config";

const _style = SiteStyle;

export const Promotion = ({ language }) => {
	if (_style === defStyle.style1) {
		return (
			<div class="title">
				<div class="yellow">
					<span class="blue">thưởng chào mừng</span>150%
				</div>
				<div class="yellow">
					<span class="blue">lên đến</span>10 triệu vnd
				</div>
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
