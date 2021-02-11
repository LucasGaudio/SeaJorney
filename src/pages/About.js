import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import sailingBoatAnimation from "../animations/sailing_boat2.json";
import lucas from "../assets/lucas.png";

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
			fontSize: "2.6em",
			marginTop: "0.5em",
		},
	},
	introTextExplanation: {
		maxWidth: "42em",
	},
	avatarImg: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	presentationCard: {
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: "2em",
		marginTop: "1em",

		[theme.breakpoints.down("sm")]: {
			borderRadius: 0,
		},
	},
	cardText: {
		maxWidth: "33em",
	},
	estimateButton: {
		borderRadius: "50px",
		fontSize: "1.2rem",
		textTransform: "none",
		height: "3em",
		width: "15em",
		border: "none",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
}));

export default function About(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuerry(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuerry(theme.breakpoints.down("xs"));

	const sailingBoat = {
		loop: true,
		autoplay: true,
		animationData: sailingBoatAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<Grid container direction="column" className={classes.mainContainer}>
			{/*----Intro Block----*/}
			<Grid item container direction="column" alignItems={matchesXS ? "undefined" : "center"}>
				<Grid item className={classes.marginContainer}>
					<Typography className={classes.introText} variant="h2">
						A fully distributed team of digital product designers
					</Typography>
					<Typography variant="h6" className={classes.introTextExplanation}>
						As part of the startup ecosystem we often come across companies and ideas
						that have the invite our customers to sail away with us on a jorney. We
						often joked they’re little boat on their journey to sea. That’s how the name
						Sea Jorney, was born.
					</Typography>
				</Grid>
			</Grid>

			{/*----About Block----*/}
			<Grid
				item
				container
				direction={matchesMD ? "column" : "row"}
				justify="center"
				alignItems="center"
				style={{ marginBottom: "10em", marginTop: matchesMD ? 0 : "5em" }}
			>
				<Grid item>
					<Lottie
						options={sailingBoat}
						height={matchesSM ? 300 : matchesMD ? 500 : 600}
						width={matchesSM ? 300 : matchesMD ? 500 : 600}
					/>
				</Grid>
				<Grid item>
					<Grid item container direction="column" alignItems="center">
						<Grid item container>
							<Avatar
								alt="Lucas Gaudio"
								src={lucas}
								className={classes.avatarImg}
								style={{ marginLeft: matchesXS ? "1em" : 0 }}
							/>
							<Grid item style={{ marginLeft: "1em" }}>
								<Grid item container direction="column">
									<Typography variant="h6" style={{ fontWeight: "bold" }}>
										Lucas Gaudio
									</Typography>
									<Typography variant="h6">Javascript Developer</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Card className={classes.presentationCard}>
							<CardContent>
								<Typography variant="h6" className={classes.cardText}>
									Hey there! My name is Lucas and I'm the founder of Sea Jorney. I
									am a freelance javascript developer, but as the industry
									matured, I decided to set up a small design studio to deliver
									the quality and speed the startup industry needs in 2020.
								</Typography>
								<br />

								<Typography variant="h6" className={classes.cardText}>
									We’re now a small but dedicated team of digital product
									designers and one product growth strategist, with our core team
									based in Rio de Janeiro. Given the size of the team and how
									we've organised our process, I still work on and oversee every
									design piece that reaches our clients.
								</Typography>
								<br />

								<Typography variant="h6" className={classes.cardText}>
									With every product we build, we’re looking to achieve the
									unconscious delight that a user gets from a “functional",
									"reliable", “usable” and “intuitive” product. Your users don’t
									care about your features, they care if you can solve their
									problems efficiently. Flawless product design and strong
									branding are your ticket to consistent growth.
								</Typography>
								<br />

								<Typography variant="h6" className={classes.cardText}>
									Shall we chat and see if we're a fit?
								</Typography>
							</CardContent>
						</Card>
						<Grid item>
							<Button
								className={classes.estimateButton}
								color="secondary"
								variant="contained"
								component={Link}
								to="/estimate"
								onClick={() => props.setValue(4)}
								style={{ marginTop: matchesXS ? "4em" : matchesMD ? "2em" : "1em" }}
							>
								Get a Free Estimate
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
