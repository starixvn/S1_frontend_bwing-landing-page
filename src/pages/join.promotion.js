import React from "react";
import { SiteStyle, defStyle } from "../config";

const _style = SiteStyle;

export const Promotion = ({ language }) => {
	if (_style === defStyle.style1) {
		return (
			<div className="title">
				<div className="yellow">
					<div>BWING CASINO</div>
					<span className="blue">N.Ạ.P</span>300K
					<span className="blue">TẶNG NGAY</span>100K
				</div>
			</div>
		);
	} else {
		return (
			<div className="title">
				<div>
					<span className="blue">CÙNG BẠN</span>
					<br />
					<span className="yellow">CẤT CÁNH GIÀU SANG</span>
				</div>
			</div>
		);
	}
};

export const PromotionDesc = ({ language }) => {
	if (_style === defStyle.style1) {
		return (
			<div className="smallTitle sp">
				<div className="yellow">
					<span className="blue">N.Ạ.P</span> 8{" "}
					<span className="blue">CỦ</span>
					<br />
					<span className="blue">ĐƯỢC</span> 10{" "}
					<span className="blue">CỦ</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="smallTitle sp">
				<div>
					<span className="blue">T.H.Ư.Ở.NG NGAY</span>
					<span className="yellow">125%</span>
					<br />
					<span className="blue">CHO LẦN N.Ạ.P ĐẦU</span>
				</div>
			</div>
		);
	}
};
