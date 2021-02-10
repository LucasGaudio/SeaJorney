import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuerry from "@material-ui/core/useMediaQuery";

import CardComponent from "../Components/CardComponent";

import case1 from "../assets/case1.png";
import case2 from "../assets/case2.jpg";
import case3 from "../assets/case3.png";
import case4 from "../assets/case4.png";
import case5 from "../assets/case5.png";
import case6 from "../assets/case6.png";

const useStyles = makeStyles(theme => ({
	marginContainer: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: "1.2em",
			marginRight: "1.2em",
		},
	},
	mainContainer: {
		marginTop: "5em",
		[theme.breakpoints.down("md")]: {
			marginTop: "3em",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "2em",
		},
	},
	introText: {
		color: theme.palette.common.blueJeans,
		fontSize: "4.56rem",
		maxWidth: "13em",
		marginBottom: "0.5em",
		[theme.breakpoints.down("xs")]: {
			fontSize: "2.7em",
			marginTop: "0.5em",
		},
	},
	introTextExplanation: {
		maxWidth: "42em",
	},
	caseBlock: {
		marginTop: "6em",
		marginBottom: "10em",
	},
}));

export default function Work(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuerry(theme.breakpoints.down("xs"));

	return (
		<Grid container direction="column" className={classes.mainContainer}>
			{/*----Intro Block----*/}
			<Grid item container direction="column" alignItems={matchesXS ? "undefined" : "center"}>
				<Grid item className={classes.marginContainer}>
					<Typography className={classes.introText} variant="h2">
						Designing for humans to help brands grow.
					</Typography>
					<Typography variant="h6" className={classes.introTextExplanation}>
						We spend time to understand your business model, analyse your data and make
						sure we can take informed design decisions that will impact your product
						growth. Our aim is to deliver the next version of your product as soon as
						possible, so you can rest assured speed and quality are equally important to
						us.
					</Typography>
				</Grid>
			</Grid>

			{/*----Case Block----*/}
			<Grid
				item
				container
				direction="column"
				className={classes.caseBlock}
				justify="center"
				alignItems="center"
			>
				<CardComponent
					title="Forward"
					text="Connecting healthcare via secure messaging for clinical teams."
					bgColor="#4ADEDE"
					textColor="black"
					image={case1}
					setValue={props.setValue}
					button={false}
					marginBottom="6em"
				/>

				<CardComponent
					title="Concordium"
					text="The world’s leading open-source, permissionless, and
						decentralized blockchain with built-in user identity at
						the protocol level."
					bgColor="#1CA7EC"
					textColor="white"
					image={case2}
					setValue={props.setValue}
					button={false}
					marginBottom="6em"
				/>

				<CardComponent
					title="Shepper"
					text="On-demand inspections on assets for businesses all over
						the world. We did user experience and UI design for the
						admin engine behind all operations."
					bgColor="#101418"
					textColor="white"
					image={case3}
					setValue={props.setValue}
					button={false}
					marginBottom="6em"
				/>

				<CardComponent
					title="Volahealth"
					text="Empowering healthcare using blockchain technology."
					bgColor="#1C2335"
					textColor="white"
					image={case4}
					setValue={props.setValue}
					button={false}
					marginBottom="6em"
				/>

				<CardComponent
					title="Herddle"
					text="UX, UI design and Branding for a proptech startup
						transforming property management with an innovative data
						rich technology solution."
					bgColor="#7ad6f4"
					textColor="black"
					image={case5}
					setValue={props.setValue}
					button={false}
					marginBottom="6em"
				/>

				<CardComponent
					title="Sort"
					text="User Experience and User Interface design for a
						recruitment startup helping young people find their
						career path and ideal job."
					bgColor="#797FF7"
					textColor="white"
					image={case6}
					setValue={props.setValue}
					button={false}
					marginBottom="2"
				/>
			</Grid>
		</Grid>
	);
}
