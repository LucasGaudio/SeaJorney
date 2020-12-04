import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import windRose from "../assets/wind-rose.svg";
import compass from "../assets/compass2.svg";

const useStyles = makeStyles(theme => ({
	week: {
		borderRadius: "2.4rem",
		fontSize: "2.44rem",
		textAlign: "center",
	},
	action: {
		fontSize: "1.44rem",
		fontWeight: 1.6,
		width: "14em",
		marginBottom: "0.5em",
		[theme.breakpoints.down("sm")]: {
			width: 0,
			fontWeight: 400,
			marginBottom: 0,
		},
	},
	actionSteps: {
		fontSize: "1.2rem",
		align: "center",
		maxWidth: "20em",

		[theme.breakpoints.down("md")]: {
			maxWidth: "11em",
		},
	},
	deliverables: {
		fontSize: "1.44rem",
		width: "19em",
		fontWeight: 1.6,
		marginBottom: "0.5em",
		[theme.breakpoints.down("md")]: {
			width: 0,
			fontWeight: 400,
		},
	},
	weekIcon: {
		height: "2em",
		marginBottom: "0.2em",
		marginRight: "0.5em",
	},
	weekImg: {
		marginLeft: "7em",
		marginTop: "2em",
		width: "9em",
		[theme.breakpoints.down("md")]: {
			marginLeft: "1em",
		},
		[theme.breakpoints.down("sm")]: {
			width: "12em",
			marginLeft: 0,
			marginTop: 0,
			marginBottom: "1em",
		},
	},
	weekTextGrid: {
		marginBottom: "1em",
	},
}));

const firstBox = {
	bgcolor: "background.paper",
	m: 1,
	style: {
		width: "10rem",
		border: "4px solid #00010f",
		borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
	},
	borderColor: "text.primary",
};

const secondBox = {
	bgcolor: "background.paper",
	m: 1,
	style: { borderLeftStyle: "dotted" },
	borderColor: "text.primary",
};

export default function WeekComponent(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuerry(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));

	return (
		<Grid item>
			<Grid item>
				<Box border={1} {...firstBox}>
					<Typography variant="h2" className={classes.week}>
						Week {props.weekNumber}
					</Typography>
				</Box>
			</Grid>
			<Box borderLeft={3} {...secondBox}>
				<Grid
					item
					container
					direction={matchesSM ? "column" : "row"}
					style={{ marginLeft: "2em" }}
				>
					<Grid item style={{ marginTop: "1em", width: "20,5em" }}>
						<Typography variant="h2" className={classes.action}>
							Actions:
						</Typography>

						<Grid item container alignItems="center" className={classes.weekTextGrid}>
							<img src={windRose} alt="wind rose" className={classes.weekIcon} />

							<Typography
								variant="h6"
								className={classes.actionSteps}
								style={{ marginTop: "0.5em" }}
							>
								{props.action1}
							</Typography>
						</Grid>
						<Grid item container alignItems="center" className={classes.weekTextGrid}>
							<img src={windRose} alt="wind rose" className={classes.weekIcon} />
							<Typography variant="h6" className={classes.actionSteps}>
								{props.action2}
							</Typography>
						</Grid>

						{props.action4 ? (
							<>
								<Grid
									item
									container
									alignItems="center"
									className={classes.weekTextGrid}
								>
									<img
										src={windRose}
										alt="wind rose"
										className={classes.weekIcon}
									/>
									<Typography variant="h6" className={classes.actionSteps}>
										{props.action3}
									</Typography>
								</Grid>
								<Grid
									item
									container
									alignItems="center"
									className={classes.weekTextGrid}
									style={{ marginBottom: "1.5em" }}
								>
									<img
										src={windRose}
										alt="wind rose"
										className={classes.weekIcon}
									/>
									<Typography variant="h6" className={classes.actionSteps}>
										{props.action4}
									</Typography>
								</Grid>
							</>
						) : props.action3 ? (
							<Grid
								item
								container
								alignItems="center"
								className={classes.weekTextGrid}
								style={{ marginBottom: "1.5em" }}
							>
								<img src={windRose} alt="wind rose" className={classes.weekIcon} />
								<Typography variant="h6" className={classes.actionSteps}>
									{props.action3}
								</Typography>
							</Grid>
						) : undefined}
					</Grid>

					<Grid
						item
						style={{
							marginLeft: matchesSM ? 0 : matchesMD ? "5em" : "10em",
							marginTop: "1em",
						}}
					>
						<Typography variant="h2" className={classes.deliverables}>
							Deliverables:
						</Typography>
						<Grid item container alignItems="center" className={classes.weekTextGrid}>
							<img src={compass} alt="compass" className={classes.weekIcon} />
							<Typography variant="h6" className={classes.actionSteps}>
								{props.deliverable1}
							</Typography>
						</Grid>
						<Grid item container alignItems="center" className={classes.weekTextGrid}>
							<img src={compass} alt="compass" className={classes.weekIcon} />
							<Typography variant="h6" className={classes.actionSteps}>
								{props.deliverable2}
							</Typography>
						</Grid>

						{props.deliverable3 ? (
							<Grid
								item
								container
								alignItems="center"
								className={classes.weekTextGrid}
							>
								<img src={compass} alt="compass" className={classes.weekIcon} />
								<Typography variant="h6" className={classes.actionSteps}>
									{props.deliverable3}
								</Typography>
							</Grid>
						) : undefined}
					</Grid>

					<Grid item>
						<img src={props.image} alt="sailing boat" className={classes.weekImg} />
					</Grid>
				</Grid>
			</Box>
		</Grid>
	);
}
