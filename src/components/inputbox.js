import React from "react";

export default props => {
	return (
		<>
			<i className="txt-blue">{props.displayText}</i>
			<input
				onChange={props.onChange}
				onBlur={props.onBlur}
				placeholder={props.placeholder}
				value={
					props.value === null || props.value === undefined
						? ""
						: props.value
				}
			/>
		</>
	);
};
