import React, { useContext } from "react";
import { languageContext } from "../components/context";
import i18n from "../datas/i18n/i18n";

export default () => {
	const { language } = useContext(languageContext);
	return (
		<h2>
			{i18n("lbl_join")}, {language}
		</h2>
	);
};
