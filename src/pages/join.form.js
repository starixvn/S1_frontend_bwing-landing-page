import React, { useContext, useState, useEffect, useRef } from "react";
import { languageContext, i18nContext } from "../components/context";
import {
	api_site_ExistsUserName,
	api_site_ExistsPhoneNo
} from "../service/api/site";
import TandC from "../service/t_and_c";
import Inputbox from "../components/inputbox";
import InputboxPsw from "../components/inputbox.password";
import Checkbox from "../components/checkbox";
import config from "../config";

const initValue = {
	username: "",
	password: "",
	phone: "",
	checkbox: false
};

const initTip = {
	username: "",
	password: "",
	phone: "",
	checkbox: ""
};

const CurrencyId = 51;
const _areaCode = "+84";

export default () => {
	const { language } = useContext(languageContext);
	const { i18n } = useContext(i18nContext);
	const [userValue, setUserValue] = useState(initValue);
	const [tip, setTip] = useState(initTip);
	const [showPsw, setShowPsw] = useState(false);
	const isMountedRef = useRef(null);
	const xxxRef = useRef(null);

	useEffect(() => {
		isMountedRef.current = true;
		return () => (isMountedRef.current = false);
	});

	const showPswHandler = () => {
		setShowPsw(!showPsw);
	};

	const EditField = (col, e) => {
		let val = e.target.value;
		setUserValue(prev => ({
			...prev,
			[col]: val
		}));
	};

	const checkValue = async (col, e) => {
		let val = e.target.value;
		let msg = "";

		if (col === "username") {
			let result = await usernameCheck(val);
			msg = result.msg;
		} else if (col === "password") {
			let result = passwordCheck(val);
			msg = result.msg;
		} else if (col === "phone") {
			let result = await phoneCheck(val);
			msg = result.msg;
		}

		if (tip[col] !== i18n[msg]) {
			setTip(prev => {
				return { ...prev, [col]: i18n[msg] };
			});
		}
	};

	const nameRepeatCheck = async val => {
		try {
			const res = await api_site_ExistsUserName({ UserName: val });
			if (isMountedRef.current) {
				if (res.data.errorCode === 0) {
					return !res.data.data;
				}
			}
		} catch (error) {
			if (isMountedRef.current && error.response) {
				alert(i18n["msg_ApiServerError"]);
			}
		}
	};

	const usernameCheck = async val => {
		let checked = false;
		let msg = "";

		if (val === "") {
			checked = false;
			msg = "msg_UsernameReq";
		} else if (val !== "") {
			if (val.length < 6 || val.length > 18) {
				checked = false;
				msg = "msg_UsernameLength";
			} else if ((await nameRepeatCheck(val)) === false) {
				checked = false;
				msg = "msg_UsernameNotAvailable";
			} else if ((await nameRepeatCheck(val)) === true) {
				checked = true;
				msg = "";
			}
		}
		return { checked, msg };
	};

	const passwordCheck = val => {
		let checked = false;
		let msg = "";

		const regx = /^(?=.{6,15}$)(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*]).*$/;
		if (val === "") {
			checked = false;
			msg = "msg_PasswordReq";
		} else if (val != null) {
			if (!regx.test(val)) {
				checked = false;
				msg = "msg_PasswordVaildate";
			} else {
				checked = true;
			}
		}
		return { checked, msg };
	};

	const phoneCheck = async val => {
		let checked = false;
		let msg = "";
		if (val === "") {
			checked = false;
			msg = "lbl_PhoneRequired";
		} else if (val.length > 0 && val.length < 9) {
			checked = false;
			msg = "lbl_CantChangePhone";
		} else {
			const res = await api_site_ExistsPhoneNo({
				AreaCode: _areaCode,
				Phone: val
			});
			if (res.data.errorCode === 0) {
				if (!res.data.data === false) {
					checked = false;
					msg = "msg_PhoneExisted";
				} else {
					checked = true;
					// msg = "lbl_CantChangePhone";
				}
			}
		}
		return { checked, msg };
	};

	const checkboxHandler = () => {
		let checked = !userValue.checkbox;
		setUserValue(prev => {
			return { ...prev, checkbox: checked };
		});
	};

	const clickSubmit = async e => {
		e.preventDefault();
		let _usernameCheck = await usernameCheck(userValue.username);
		let _passwordCheck = passwordCheck(userValue.password);
		let _phoneCheck = await phoneCheck(userValue.phone);
		let _checkboxCheck = userValue.checkbox;

		let checked =
			_usernameCheck.checked &&
			_passwordCheck.checked &&
			_phoneCheck.checked &&
			_checkboxCheck;

		if (!checked) {
			let checkboxMsg = "";
			if (!_checkboxCheck) {
				checkboxMsg = "lbl_Check18TCTooltip";
			}
			setTip({
				username: i18n[_usernameCheck.msg],
				password: i18n[_passwordCheck.msg],
				phone: i18n[_phoneCheck.msg],
				checkbox: i18n[checkboxMsg]
			});
		} else {
			xxxRef.current.submit();
		}
	};

	return (
		<>
			<form className="info" onSubmit={clickSubmit}>
				<Inputbox
					displayText={i18n["lbl_Username"]}
					placeholder="Johndoe"
					value={userValue.username}
					tip={tip.username}
					onChange={EditField.bind(null, "username")}
					onBlur={checkValue.bind(null, "username")}
				/>
				<InputboxPsw
					displayText={i18n["lbl_Password"]}
					placeholder={i18n["msg_PasswordLength"]}
					showPsw={showPsw}
					inputType={`${!showPsw ? "password" : "text"}`}
					value={userValue.password}
					tip={tip.password}
					onChange={EditField.bind(null, "password")}
					onBlur={checkValue.bind(null, "password")}
					showPswHandler={showPswHandler}
				/>
				<Inputbox
					displayText={i18n["lbl_Phone"]}
					placeholder={_areaCode}
					value={userValue.phone}
					tip={tip.phone}
					onChange={EditField.bind(null, "phone")}
					onBlur={checkValue.bind(null, "phone")}
				/>
				<Checkbox
					checked={userValue.checkbox}
					onChange={checkboxHandler}
					id="c1">
					{i18n["lbl_Check18TC1"]}{" "}
					<a
						target="_blank"
						href={TandC(language).terms}
						rel="noopener noreferrer">
						{i18n["lbl_TermsConditions"]}
					</a>{" "}
					{i18n["lbl_Check18TC2"]}{" "}
					<a
						target="_blank"
						href={TandC(language).rule}
						rel="noopener noreferrer">
						{i18n["lbl_RuleRegulations"]}
					</a>{" "}
					{i18n["lbl_Check18TC3"]} Bwing. {i18n["lbl_Check18TC4"]}
				</Checkbox>
				{tip.checkbox !== "" ? (
					<div className="tip active">{tip.checkbox}</div>
				) : null}
				<button type="submit" onClick={clickSubmit}>
					<span>{i18n["lbl_JoinNow"]}</span>
				</button>
			</form>
			<form
				ref={xxxRef}
				action={`${config.openURL}/${language}/Extra/Signup`}
				method="post">
				<input
					type="hidden"
					name="UserName"
					value={userValue.username}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="Userpwd"
					value={userValue.password}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="AreaCode"
					value={_areaCode}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="PhoneNo"
					value={userValue.phone}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="CurrencyId"
					value={CurrencyId}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="UserLang"
					value={language}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="SignupUrl"
					value={window.location.host}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="RealName"
					value={""}
					onChange={() => {}}
				/>
			</form>
		</>
	);
};
