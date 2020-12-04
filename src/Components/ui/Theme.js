import { createMuiTheme } from "@material-ui/core/styles";
//import { Typography } from '@material-ui/core';

const blueJeans = "#1CA7EC";
const staleBlue = "#797FF7";
const turquoise = "#4ADEDE";
const skyBlue = "#7ad6f4";
const black = "#00010F";
const white = "#ffffff";

export default createMuiTheme({
	palette: {
		common: {
			blueJeans: `${blueJeans}`,
			staleBlue: `${staleBlue}`,
			turquoise: `${turquoise}`,
		},
		primary: {
			main: `${blueJeans}`,
		},
		secondary: {
			main: `${staleBlue}`,
		},
		info: {
			main: `${black}`,
		},
	},

	typography: {
		tab: {
			fontFamily: "sofia-pro, sans-serif",
			textTransform: "none",
			fontWeight: 700,
			color: "white",
			fontSize: "0.9rem",
		},
		estimate: {
			fontFamily: "sofia-pro, sans-serif",
			fontSize: "1rem",
			textTransform: "none",
			color: "white",
		},
		h2: {
			fontFamily: "sofia-pro, sans-serif",
			fontWeight: 500,
			fontSize: "2.5rem",
			color: `${blueJeans}`,
			lineHeight: 1.5,
		},
		h3: {
			fontFamily: "Pacifico",
			fontSize: "2.5rem",
			color: blueJeans,
		},
		h4: {
			fontFamily: "Cutive Mono",
			fontSize: "2.5rem",
			fontWeight: 700,
			lineHeight: 1.5,
			color: black,
		},
		h5: {
			fontFamily: "sofia-pro, sans-serif",
			fontSize: "2.5rem",
			fontWeight: 700,
			lineHeight: 1.5,
			color: white,
		},
		h6: {
			fontFamily: "sofia-pro, sans-serif",
			fontSize: "1.2rem",
			lineHeight: 1.5,
			color: black,
		},
		subtitle1: {
			fontSize: "1.25rem",
			fontWeight: 300,
			color: skyBlue,
		},
		subtitle2: {
			fontSize: "1.25rem",
			fontWeight: 300,
			color: "white",
		},
		body1: {
			fontSize: "1.25rem",
			color: staleBlue,
			fontWeight: 300,
		},
		caption: {
			fontSize: "1rem",
			fontWeight: 300,
			color: skyBlue,
		},
		aboutUsButton: {
			borderColor: blueJeans,
			color: blueJeans,
			borderWidth: 2,
			textTransform: "none",
			borderRadius: 50,
			fontFamily: "Roboto",
			fontWeight: "bold",
		},
		caseButton: {
			fontSize: "1rem",
			textTransform: "none",
			color: "white",
		},
	},

	overrides: {
		MuiInputLabel: {
			root: {
				color: blueJeans,
				fontSize: "1rem",
			},
		},
		MuiInput: {
			root: {
				color: skyBlue,
				fontWeight: 300,
			},
			underline: {
				"&:before": {
					borderBottom: `2px solid ${blueJeans}`,
				},
				"&:hover:not($disabled):not($focused):not($error):before": {
					borderBottom: `2px solid ${blueJeans}`,
				},
			},
		},
	},
});
