export default process.env.NODE_ENV === "production"
	? {
			apiURL: "",
			openURL: "https://www.bwing.com",
			imgUrl: "",
			t_and_cURL: ""
	  }
	: {
			// apiURL: "http://localhost:60930",
			// openURL: "http://localhost:60930",
			// imgUrl: "http://localhost:60930",
			// t_and_cURL: "http://localhost:60930"
			apiURL: "http://www.n88dev.com",
			imgUrl: "http://www.n88dev.com",
			t_and_cURL: "http://www.n88dev.com",
			openURL: "http://www.n88dev.com"
	  };
