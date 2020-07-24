import en from "./en";
import vn from "./vn";

export default language => {
	return language === "en" ? en : vn;
};
