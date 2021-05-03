import { siteRequest } from "./base";

export const api_site_ExistsUserName = ({ UserName }) =>
	siteRequest.post(`/ExistsUserName/vn`, { UserName: UserName });

export const api_site_ExistsEmail = ({ Email }) =>
	siteRequest.post(`/ExistsEmail`, { Email: Email });

export const api_site_ExistsPhoneNo = ({ AreaCode, Phone }) =>
	siteRequest.post(`/ExistsPhoneNo`, { AreaCode, PhoneNo: Phone });

// export const api_site_CheckSignIn = () => siteRequest.post(`/CheckSignIn/`);
