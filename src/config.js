export const defStyle = {
	style1: "style1",
	style2: "style2",
	style3: "style3"
};

export const SiteStyle = defStyle.style1;

export default process.env.NODE_ENV === "production"
	? {
			apiURL: "",
			openURL: "https://www.bwing.com",
			imgUrl: "",
			t_and_cURL: ""
	  }
	: {
			apiURL: "http://www.n88dev.com",
			imgUrl: "http://www.n88dev.com",
			t_and_cURL: "http://www.n88dev.com",
			openURL: "http://www.n88dev.com"
	  };
