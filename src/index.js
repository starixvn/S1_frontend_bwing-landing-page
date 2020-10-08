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
		if (_style !== defStyle.style3) {
			await import(`./styles/${_style}/css/reset.css`);
		}
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
	if (_style === defStyle.style1) {
		return (
			<Helmet>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-163766925-3"></script>
				<script>
					{`window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
	
						gtag('config', 'UA-163766925-3');`}
				</script>
			</Helmet>
		);
	} else if (_style === defStyle.style2) {
		return (
			<Helmet>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-163766925-4"></script>
				<script>
					{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'UA-163766925-4');`}
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
					{`<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-MXLMCWX"
					height="0"
					width="0"
					style="display:none;visibility:hidden"></iframe>`}
				</noscript>
			</Helmet>
		);
	} else if (_style === defStyle.style3) {
		return (
			<Helmet>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
				/>
				<link rel="stylesheet" href="style.css" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-163766925-5"></script>
				<script>
					{`window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'UA-163766925-5');`}
				</script>
			</Helmet>
		);
	}
};

ReactDOM.render(<Content />, document.getElementById("root"));

//serviceWorker.unregister();
