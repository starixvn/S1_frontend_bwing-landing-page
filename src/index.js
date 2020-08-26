import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SiteStyle } from "./config";
//import * as serviceWorker from "./serviceWorker";

const _style = SiteStyle;

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = { loaded: false };
	}
	componentDidMount = () => {
		this.importStyle().then(() => {
			this.setState({ loaded: true });
		});
	};
	importStyle = async () => {
		await import(`./styles/${_style}/css/reset.css`);
		await import(`./styles/${_style}/css/style.css`);
	};
	render() {
		return (
			<>
				{this.state.loaded === true ? (
					<React.StrictMode>
						<App />
					</React.StrictMode>
				) : null}
			</>
		);
	}
}

ReactDOM.render(<Content />, document.getElementById("root"));

//serviceWorker.unregister();
