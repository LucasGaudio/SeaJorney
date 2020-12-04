import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import wave from "../assets/wave.svg";

const useStyles = makeStyles(theme => ({
	textCard: {
		backgroundImage: `url(${wave})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "bottom",
		position: "absolute",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: "9.5em",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "8em",
			paddingBottom: "8em",
			borderRadius: 0,
			padding: 0,
		},
	},
	consultationButton: {
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
	explanation: {
		fontSize: "1.2rem",
		maxWidth: "50em",
		[theme.breakpoints.down("xs")]: {
			maxWidth: "30em",
		},
	},
}));

export default function WaveCardComponent({ title, text, setValue }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuerry(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuerry(theme.breakpoints.down("xs"));

	return (
		<Grid item container>
			<Grid
				item
				container
				justify="center"
				alignItems="center"
				align="center"
				style={{
					height: "20em",
					marginTop: "12em",
					marginBottom: "10em",
				}}
			>
				<Card className={classes.textCard}>
					<CardContent>
						<Grid item>
							<Typography variant="h2" style={{ marginBottom: "0.8em" }}>
								{title}
							</Typography>
							<Typography variant="h6" className={classes.explanation}>
								{text}
							</Typography>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
			<Grid item container justify="center">
				<Button
					className={classes.consultationButton}
					color="secondary"
					variant="contained"
					component={Link}
					to="/estimate"
					onClick={() => setValue(4)}
					style={{ marginTop: matchesXS ? "5em" : matchesMD ? "2em" : "1em" }}
				>
					Get a Free Estimate
				</Button>
			</Grid>
		</Grid>
	);
}
