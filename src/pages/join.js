import React, { useContext, useState, useEffect, useRef } from "react";
import { languageContext, i18nContext } from "../components/context";
import Inputbox from "../components/inputbox";
import InputboxPsw from "../components/inputbox.password";
import logo from "../styles/img/logo.png";
import enFlag from "../styles/img/en.png";
import vnFlag from "../styles/img/vn.png";

const initValue = {
	username: "",
	password: "",
	email: "",
	checkbox: false
};

const usernameCheck = (val, i18n) => {
	let checked = false;
	let msg = "";

	if (val === "") {
		checked = false;
		msg = `${i18n("msg_UsernameReq")}`;
	} else if (val !== "") {
		if (val.length < 6 || val.length > 18) {
			checked = false;
			msg = `${i18n("msg_UsernameLength")}`;
		} else {
			checked = true;
		}
	}

	return { checked, msg };
};

const passwordCheck = (val, i18n) => {
	let checked = false;
	let msg = "";

	const regx = /^[a-zA-Z0-9@$*!%#?&]*$/;
	if (val === "") {
		checked = false;
		msg = `${i18n("msg_PasswordReq")}`;
	} else if (val != null) {
		if (val.length < 6 || val.length > 18) {
			checked = false;
			msg = `${i18n("msg_PasswordLength")}`;
		} else if (!regx.test(val)) {
			checked = false;
			msg = `${i18n("msg_PasswordVaildate")}`;
		} else {
			checked = true;
		}
	}
	return { checked, msg };
};

const emailCheck = (val, i18n) => {
	let checked = false;
	let msg = "";
	const regx = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

	if (val === "") {
		checked = false;
		msg = `${i18n["msg_MailWrongFormat"]}`;
	} else if (val !== "") {
		if (!regx.test(val)) {
			checked = false;
			msg = `${i18n("msg_MailWrongFormat")}`;
		} else {
			checked = true;
		}
	}
	return { checked, msg };
};

export default () => {
	const { language } = useContext(languageContext);
	const { i18n } = useContext(i18nContext);
	const [userValue, setUserValue] = useState(initValue);
	const [showPsw, setShowPsw] = useState(false);
	const isMountedRef = useRef(null);

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

	const checkValue = (col, e) => {
		let val = e.target.value;
		let checked = false;
		let msg = "";

		if (col === "username") {
			let result = usernameCheck(val, i18n);
			checked = result.checked;
			msg = result.msg;
		} else if (col === "password") {
			let result = passwordCheck(val, i18n);
			checked = result.checked;
			msg = result.msg;
		} else if (col === "email") {
			let result = emailCheck(val, i18n);
			checked = result.checked;
			msg = result.msg;
		}

		if (!checked) {
			alert(msg);
		}
	};

	const changeLang = lan => {
		console.log(language);
	};

	return (
		<div className="wallpaper">
			<div className="module">
				<img src={logo} alt="" />
				<div className="title">
					<div>
						<span>{i18n["lbl_Deposit"]}</span>
						<span>XXX</span>
					</div>
					{/* <div>
						<span>{i18n("lbl_ToGet")}</span>
						<span>YYY</span>
					</div> */}
				</div>
				{/* <div className="info">
					<div className="smallTitle language">
						{i18n("lbl_Register")}
						<a onClick={changeLang.bind(this, "en")}>
							<img src={enFlag} alt="" />
						</a>
						<a onClick={changeLang.bind(this, "vn")}>
							<img src={vnFlag} alt="" />
						</a>
					</div>
					<Inputbox
						displayText={i18n"lbl_Username")}
						placeholder="Johndoe"
						value={userValue.username}
						onChange={EditField.bind(null, "username")}
						onBlur={checkValue.bind(null, "username")}
					/> */}
				{/* <InputboxPsw
						displayText={i18n("lbl_Password")}
						placeholder={i18n("msg_pswRemind")}
						showPsw={showPsw}
						inputType={`${!showPsw ? "password" : "text"}`}
						value={userValue.password}
						onChange={EditField.bind(null, "password")}
						onBlur={checkValue.bind(null, "password")}
						showPswHandler={showPswHandler}
					/>
					<Inputbox
						displayText="Email"
						placeholder="name@domain.com"
						value={userValue.email}
						onChange={EditField.bind(null, "email")}
						onBlur={checkValue.bind(null, "email")}
					/>
					<div className="agree">
						<input type="checkbox" />
						<span>
							{i18n("lbl_Check18TC1")}{" "}
							<a href="">{i18n("lbl_TermsConditions")}</a>{" "}
							{i18n("lbl_Check18TC2")}{" "}
							<a href="">{i18n("lbl_RuleRegulations")}</a>{" "}
							{i18n("lbl_Check18TC3")} Bwing.{" "}
							{i18n("lbl_Check18TC4")}
						</span>
					</div>
					<button>{i18n("lbl_JoinNow")} + YYY MILLIONS</button> */}
				{/* </div> */}
			</div>
		</div>
	);
};
