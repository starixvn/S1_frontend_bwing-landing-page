import React, { useContext } from "react";
import { i18nContext } from "../components/context";

export default () => {
	const { i18n } = useContext(i18nContext);
	return (
		<div className="title">
			<div>
				<span>{i18n["lbl_Deposit"]}</span>
				<span>XXX</span>
			</div>
			<div>
				<span>{i18n["lbl_ToGet"]}</span>
				<span>YYY</span>
			</div>{" "}
		</div>
	);
};
