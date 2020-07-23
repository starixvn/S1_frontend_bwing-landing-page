import React, { useContext } from "react";
import { languageContext } from "../components/context";

export default () => {
	const { language } = useContext(languageContext);
	return <h2>Home, {language}</h2>;
};
