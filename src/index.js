import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SiteStyle, defStyle } from "./config";
import { Helmet } from "react-helmet";
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
						<GATag />
						<App />
					</React.StrictMode>
				) : null}
			</>
		);
	}
}

const GATag = () => {
	return _style === defStyle.style1 ? (
		<Helmet>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=UA-177194402-1"></script>
			<script>
				{`window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'UA-177194402-1');`}
			</script>
		</Helmet>
	) : _style === defStyle.style2 ? (
		<Helmet>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=UA-177194402-2"></script>
			<script>
				{`window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'UA-177194402-2');`}
			</script>

			<script>
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-MXLMCWX');
				`}
			</script>
			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-MXLMCWX"
					height="0"
					width="0"
					style="display:none;visibility:hidden"></iframe>
			</noscript>
		</Helmet>
	) : (
		<></>
	);
};

ReactDOM.render(<Content />, document.getElementById("root"));

//serviceWorker.unregister();
