import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	reasonBlock: {
		marginBottom: "3em",
	},
	reasons: {
		fontSize: "2rem",
		boxShadow: "inset 0 -0.35em  #1CA7EC",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.7rem",
		},
	},
	reasonImg: {
		marginRight: "2em",
		width: "8em",
		[theme.breakpoints.down("xs")]: {
			width: "4em",
			marginRight: "0.5em",
		},
	},
	reasonExplanation: {
		fontSize: "1.2rem",
		marginTop: "0.8em",
		maxWidth: "30em",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "20em",
		},
		[theme.breakpoints.down("xs")]: {
			maxWidth: "12em",
		},
	},
}));

export default function ReasonComponent({ title, text, image }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));

	return (
		<Grid
			item
			container
			justify="center"
			alignItems={matchesSM ? undefined : "center"}
			className={classes.reasonBlock}
		>
			<Grid item>
				<img src={image} alt="icon" className={classes.reasonImg} />
			</Grid>
			<Grid item>
				<Grid item container direction="column" alignItems="flex-start">
					<Grid item>
						<Typography variant="h6" className={classes.reasons}>
							{title}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h6" className={classes.reasonExplanation}>
							{text}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
