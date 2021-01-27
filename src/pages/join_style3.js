import React, { useContext, useState, useEffect, useRef } from "react";
import { getUrlParameter } from "../components/common";
import img_top from "../styles/style3/img/img-top.png";
import { languageContext, i18nContext } from "../components/context";
import { api_site_ExistsUserName } from "../service/api/site";
import config from "../config";
import Inputbox from "../components/inputbox";
import InputboxPsw from "../components/inputbox.password";
import TandC from "../service/t_and_c";
import btnImg from "../styles/style3/img/CTA1.png";

const initValue = {
	username: "",
	password: ""
};

const initTip = {
	username: "",
	password: ""
};

export default () => {
	useEffect(() => {
		let errorCode = getUrlParameter("errorCode");
		let message = getUrlParameter("message");

		if (message) {
			alert(message);
		}
	}, []);

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

	const clickSubmit = async e => {
		e.preventDefault();
		let _usernameCheck = await usernameCheck(userValue.username);
		let _passwordCheck = passwordCheck(userValue.password);

		let checked = _usernameCheck.checked && _passwordCheck.checked;

		if (!checked) {
			setTip({
				username: i18n[_usernameCheck.msg],
				password: i18n[_passwordCheck.msg]
			});
		} else {
			xxxRef.current.submit();
		}
	};

	return (
		<div className="main">
			<div className="container">
				<div className="form-active">
					<div className="img-top text-center">
						<img src={img_top} alt="img_top" />
					</div>
					<form onSubmit={clickSubmit}>
						<div className="text-head-form">
							<h2>{i18n["lbl_Register"]}</h2>
						</div>
						<div className="input-list">
							<div className="form-input">
								<label>{i18n["lbl_Username"]}</label>
								<Inputbox
									placeholder="Johndoe"
									value={userValue.username}
									tip={tip.username}
									onChange={EditField.bind(null, "username")}
									onBlur={checkValue.bind(null, "username")}
								/>
							</div>
							<div className="form-input check-pass">
								<label>{i18n["lbl_Password"]}</label>
								<InputboxPsw
									placeholder={i18n["msg_PasswordLength"]}
									inputType={`${
										!showPsw ? "password" : "text"
									}`}
									value={userValue.password}
									tip={tip.password}
									onChange={EditField.bind(null, "password")}
									onBlur={checkValue.bind(null, "password")}
									showPsw={showPsw}
									showPswHandler={showPswHandler}
									customizedEye={true}
								/>
							</div>

							<button type="submit" onClick={clickSubmit}>
								<img src={btnImg} />
							</button>
						</div>
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
							name="CurrencyId"
							value={51}
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
							name="AreaCode"
							value={""}
							onChange={() => {}}
						/>
						<input
							type="hidden"
							name="RealName"
							value={""}
							onChange={() => {}}
						/>
						<input
							type="hidden"
							name="PhoneNo"
							value={""}
							onChange={() => {}}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
