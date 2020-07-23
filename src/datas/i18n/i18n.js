import { useContext } from "react";
import { languageContext } from "../../components/context";

import en from "./en";
import vn from "./vn";

export default langKey => {
	const { language } = useContext(languageContext);
	return language === "en" ? en[langKey] : vn[langKey];
};
