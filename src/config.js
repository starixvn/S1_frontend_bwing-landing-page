export const defStyle = {
	style1: "style1",
	style2: "style2",
	style3: "style3"
};

export const SiteStyle =
	process.env.NODE_ENV === "production"
		? defStyle[`style${process.env.REACT_APP_STYLE}`]
		: defStyle.style3;

export default process.env.NODE_ENV === "production"
	? {
			apiURL: "",
			openURL: "https://www.bwing.com",
			imgUrl: "",
			t_and_cURL: ""
	  }
	: {
			apiURL: "http://stag.Bwing.com",
			imgUrl: "http://stag.Bwing.com",
			t_and_cURL: "http://stag.Bwing.com",
			openURL: "http://stag.Bwing.com"
	  };
