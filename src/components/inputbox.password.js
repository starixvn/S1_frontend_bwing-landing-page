import React from "react";

export default props => {
	return (
		<>
			<i
				className={`txt-blue${props.showPsw ? " eye" : " eye-off"}`}
				onClick={props.showPswHandler}>
				{props.displayText}
			</i>
			<input
				placeholder={props.placeholder}
				type={props.inputType}
				value={
					props.value === null || props.value === undefined
						? ""
						: props.value
				}
				onBlur={props.onBlur}
				onChange={props.onChange}
			/>
		</>
	);
};
