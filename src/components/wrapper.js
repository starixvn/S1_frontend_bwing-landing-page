import React, { useState } from "react";
import * as ct from "./context";
import { GET_LANG_ID } from "../service/language";

export default ({ children }) => {
	const [language, setLanguage] = useState(GET_LANG_ID());

	return (
		<ct.languageContext.Provider value={{ language, setLanguage }}>
			{children}
		</ct.languageContext.Provider>
	);
};
