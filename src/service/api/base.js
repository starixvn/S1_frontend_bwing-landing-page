import axios from "axios";

const rootURL = "";

export const siteRequest = axios.create({
	withCredentials: true,
	baseURL: `${rootURL}/api/Site`
});
