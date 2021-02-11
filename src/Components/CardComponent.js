import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	caseCard: {
		display: "flex",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		height: "auto",
		width: "77em",
		[theme.breakpoints.down("lg")]: {
			height: "auto",
			width: "70em",
		},
		[theme.breakpoints.down("md")]: {
			// height: "35.6em",
			maxWidth: "57em",
		},
		[theme.breakpoints.down("sm")]: {
			// height: "51.6em",
			maxWidth: "35em",
			display: "grid",
		},
		[theme.breakpoints.down("xs")]: {
			// height: "36em",
			maxWidth: "96vw",
			borderRadius: 0,
		},
	},
	cardFirstText: {
		fontSize: "3.15rem",
		fontWeight: 700,

		[theme.breakpoints.down("xs")]: {
			fontSize: "2.7em",
		},
	},
	caseText: {
		fontSize: "1.2rem",
		maxWidth: "18em",
		marginRight: "1em",
	},
	caseButton: {
		...theme.typography.caseButton,
		backgroundColor: theme.palette.common.black,
		borderRadius: "50px",
		height: "45px",
		marginTop: "1.5em",
		"&:hover": {
			backgroundColor: theme.palette.info.light,
		},
	},
	image: {
		[theme.breakpoints.only("md")]: {
			height: "32.6em",
		},
	},
}));

export default function CardComponent({
	title,
	text,
	bgColor,
	textColor,
	image,
	setValue,
	button,
	marginBottom,
}) {
	const classes = useStyles();

	return (
		<Grid item style={{ marginBottom: marginBottom }}>
			<Card className={classes.caseCard}>
				<Grid
					item
					container
					alignItems="center"
					align="center"
					justify="center"
					style={{ backgroundColor: bgColor }}
				>
					<Grid item>
						<CardContent>
							<Grid item>
								<Typography
									variant="h2"
									className={classes.cardFirstText}
									style={{ color: textColor }}
								>
									{title}
								</Typography>
								<Typography
									variant="h6"
									className={classes.caseText}
									style={{ color: textColor }}
								>
									{text}
								</Typography>

								{button === true ? (
									<Button
										component={Link}
										to="/work"
										variant="outlined"
										className={classes.caseButton}
										onClick={() => setValue(1)}
									>
										See case study
									</Button>
								) : undefined}
							</Grid>
						</CardContent>
					</Grid>
				</Grid>
				<Grid item style={{ backgroundColor: bgColor }}>
					<CardMedia
						component="img"
						alt="case image"
						image={image}
						className={classes.image}
					/>
				</Grid>
			</Card>
		</Grid>
	);
}
