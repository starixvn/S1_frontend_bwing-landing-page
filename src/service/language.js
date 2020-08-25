export const GET_LANG_ID = userLangId => {
	let siteDefLangId = "vn";
	let siteLangList = ["vn"];

	let langId = userLangId ? userLangId : null;
	let browserDefLang =
		typeof window !== `undefined` ? navigator.language.toLowerCase() : null;

	if (!langId && browserDefLang) {
		if (browserDefLang.startsWith("vi")) {
			langId = "vn";
		} else {
			langId = "en";
		}
	}

	if (!langId || !siteLangList.includes(langId)) {
		langId = siteDefLangId;
	}

	return langId;
};
