import config from "../config";

export default langId => {
	return {
		terms: `${config.t_and_cURL}/SiteSkin/bwing/Static/${langId}/TermsConditions.html`,
		rule: `${config.t_and_cURL}/SiteSkin/bwing/Static/${langId}/RulesandRegulations.html`
	};
};
