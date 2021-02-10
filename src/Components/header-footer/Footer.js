import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

const useStyles = makeStyles(theme => ({
	textCard: {
		textDecoration: "none",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		height: "30em",
		width: "22em",
		[theme.breakpoints.down("md")]: {
			width: "19.5em",
		},
		[theme.breakpoints.down("sm")]: {
			paddingTop: "8em",
			paddingBottom: "8em",
			borderRadius: 0,
			padding: 0,
			height: "auto",
			width: "auto",
		},
	},
	icon: {
		height: "2em",
		width: "2em",
		marginTop: "4em",
		marginBottom: "2em",
		[theme.breakpoints.down("xs")]: {
			height: "2.5em",
			width: "2.5em",
		},
	},
	explanation: {
		fontSize: "1.2rem",
		color: "#fff",
		maxWidth: "10em",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "0.5em",
			marginRight: "0.5em",
			maxWidth: "80em",
		},
	},
	footer: {
		backgroundColor: theme.palette.common.blueJeans,
		width: "100%",
		height: "6em",
		[theme.breakpoints.down("xs")]: {
			height: "10em",
		},
	},
	footerText: {
		color: "#fff",
		fontSize: "1.2rem",
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.9rem",
		},
	},
}));

export default function LandingPage(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuerry(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuerry(theme.breakpoints.down("xs"));

	return (
		<Grid container direction="column" justify="center" alignItems="center" align="center">
			<Grid
				item
				container
				direction={matchesSM ? "column" : "row"}
				justify="center"
				alignItems="center"
				style={{ marginBottom: "10em" }}
			>
				<Card
					className={classes.textCard}
					style={{ backgroundColor: "#1CA7EC" }}
					component={"a"}
					href="https://www.facebook.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<CardContent>
						<Grid item>
							<Grid item>
								<img alt="facebook logo" src={facebook} className={classes.icon} />
							</Grid>

							<Typography variant="h6" className={classes.explanation}>
								Our favourite place. Follow us and my team for bite-size educational content, growth
								and design tips and behind the scene content.
							</Typography>
							<Typography
								variant="h5"
								className={classes.explanation}
								style={{ marginTop: "1.2em" }}
							>
								@SeaJorney
							</Typography>
						</Grid>
					</CardContent>
				</Card>

				<Card
					className={classes.textCard}
					style={{ backgroundColor: "#797FF7", marginBottom: matchesSM ? 0 : "7em" }}
					component={"a"}
					href="https://www.linkedin.com/in/lucas-gaudio-09698aa5/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<CardContent>
						<Grid item>
							<Grid item>
								<img alt="linkedin logo" src={linkedin} className={classes.icon} />
							</Grid>

							<Typography variant="h6" className={classes.explanation}>
								Our favourite place. Follow us and my team for bite-size educational content, growth
								and design tips and behind the scene content.
							</Typography>
							<Typography
								variant="h5"
								className={classes.explanation}
								style={{ marginTop: "1.2em" }}
							>
								@SeaJorney
							</Typography>
						</Grid>
					</CardContent>
				</Card>

				<Card
					className={classes.textCard}
					style={{ backgroundColor: "#4ADEDE" }}
					component={"a"}
					href="https://www.instagram.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<CardContent>
						<Grid item>
							<Grid item>
								<img alt="instagram logo" src={instagram} className={classes.icon} />
							</Grid>

							<Typography variant="h6" className={classes.explanation}>
								Our favourite place. Follow us and my team for bite-size educational content, growth
								and design tips and behind the scene content.
							</Typography>
							<Typography
								variant="h5"
								className={classes.explanation}
								style={{ marginTop: "1.2em" }}
							>
								@SeaJorney
							</Typography>
						</Grid>
					</CardContent>
				</Card>
			</Grid>

			<Grid
				item
				container
				justify="center"
				alignItems="center"
				style={{ padding: "2rem !important" }}
			>
				<Card
					style={{
						backgroundColor: "#00010F",
						height: matchesSM ? "10em" : "7em",
						width: matchesXS ? "96vw" : matchesSM ? "36em" : matchesMD ? "58em" : "78em",
						position: "absolute",
						borderRadius: 15,
					}}
				>
					<CardContent>
						<Typography variant="h6" className={classes.footerText}>
							© 2020 No rights reserved. Actually, share, steal (like a pro) and get inspiration as
							much as you want. We live in a free world. Lucas Gaudio - Freelance Javascript
							Developer based in Rio de Janeiro. Icons made by{" "}
							<a
								href="https://www.flaticon.com/authors/creaticca-creative-agency"
								title="Creaticca Creative Agency"
							>
								Creaticca Creative Agency
							</a>
							,{" "}
							<a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">
								smalllikeart
							</a>{" "}
							and{" "}
							<a href="https://www.flaticon.com/authors/freepik" title="Freepik">
								Freepik
							</a>
							.
						</Typography>
					</CardContent>
				</Card>
			</Grid>

			<footer className={classes.footer}></footer>
		</Grid>
	);
}
