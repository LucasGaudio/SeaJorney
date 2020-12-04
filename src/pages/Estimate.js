import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme => ({
	marginContainer: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: "1.2em",
			marginRight: "1.2em",
		},
	},
	mainContainer: {
		marginTop: "10em",
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
		maxWidth: "25em",
	},
	label: {
		marginTop: "2em",
		width: "23em",
		[theme.breakpoints.down("xs")]: {
			width: "17em",
		},
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
	project: {
		border: `1px solid ${theme.palette.common.blueJeans}`,
		marginTop: "5em",
		borderRadius: 5,
	},
}));

export default function About(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuerry(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuerry(theme.breakpoints.down("xs"));

	const [name, setName] = useState("");

	const [email, setEmail] = useState("");
	const [emailHelper, setEmailHelper] = useState("");

	const [phone, setPhone] = useState("");
	const [phoneHelper, setPhoneHelper] = useState("");

	const [project, setProject] = useState("");

	const [where, setWhere] = useState("");

	const [open, setOpen] = useState(false);

	const [alert, setAlert] = useState({
		open: false,
		message: "",
		backgroundColor: "",
	});

	const onChange = event => {
		let valid;

		switch (event.target.id) {
			case "email":
				setEmail(event.target.value);
				valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

				if (!valid) {
					setEmailHelper("Invalid email");
				} else {
					setEmailHelper("");
				}

				break;

			case "phone":
				setPhone(event.target.value);
				valid = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
					event.target.value
				);

				if (!valid) {
					setPhoneHelper("Invalid phone");
				} else {
					setPhoneHelper("");
				}

				break;
			default:
				break;
		}
	};

	const onConfirm = () => {
		setOpen(false);
		setName("");
		setEmail("");
		setPhone("");
		setProject("");
		setWhere("");
		setAlert({
			open: true,
			message: "Message sent successfully!",
			backgroundColor: "#4BB543",
		});
	};

	return (
		<Grid
			container
			className={classes.mainContainer}
			direction={matchesSM ? "column" : "row"}
			justify="center"
			alignItems={matchesSM ? "center" : undefined}
			style={{ marginBottom: matchesSM ? "8em" : "15em" }}
		>
			<Grid item className={classes.marginContainer}>
				<Grid item container direction="column">
					<Typography variant="h2" className={classes.introText}>
						Say{" "}
						<span
							role="img"
							aria-label={props.label ? props.label : ""}
							aria-hidden={props.label ? "false" : "true"}
						>
							👋
						</span>{" "}
						Hi!
					</Typography>
					<Typography variant="h6" className={classes.introTextExplanation}>
						The more we know, the more we will be able to help. We’ll be back in touch.
						You can also email us at lucasgaudio96@gmail.com
					</Typography>
					<Grid
						item
						container
						justify="center"
						className="location_wrapper"
						style={{ marginTop: "2em" }}
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1621058535984!2d-43.17741228391177!3d-22.907390943654207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f6008b00001%3A0xd083bbae16787444!2sWeWork!5e0!3m2!1spt-BR!2sbr!4v1601409221276!5m2!1spt-BR!2sbr"
							height="320"
							width={matchesXS ? 320 : 468}
							frameBorder="0"
							allowFullScreen
							title="map"
						></iframe>
					</Grid>
				</Grid>
			</Grid>

			<Grid
				item
				style={{ marginBottom: matchesMD ? 0 : "9em", marginLeft: matchesSM ? 0 : "8em" }}
			>
				<Grid item container direction="column" alignItems="center">
					<TextField
						label="Name"
						id="name"
						variant="outlined"
						className={classes.label}
						value={name}
						onChange={event => setName(event.target.value)}
					/>
					<TextField
						label="Email"
						id="email"
						error={emailHelper.length !== 0}
						variant="outlined"
						className={classes.label}
						value={email}
						onChange={onChange}
					/>
					<TextField
						label="Phone"
						id="phone"
						error={phoneHelper.length !== 0}
						variant="outlined"
						className={classes.label}
						value={phone}
						onChange={onChange}
					/>

					<TextField
						label="About your project"
						id="project"
						variant="outlined"
						multiline
						rows={7}
						className={classes.label}
						value={project}
						onChange={event => setProject(event.target.value)}
					/>
					<TextField
						label="Where are you based?"
						id="where"
						variant="outlined"
						className={classes.label}
						value={where}
						onChange={event => setWhere(event.target.value)}
					/>
					<Button
						disabled={
							name.length === 0 ||
							project.length === 0 ||
							where.length === 0 ||
							phoneHelper.length !== 0 ||
							emailHelper.length !== 0
						}
						className={classes.estimateButton}
						color="secondary"
						variant="contained"
						onClick={() => setOpen(true)}
						style={{ marginTop: matchesXS ? "4em" : "2em" }}
					>
						Get a Free Estimate
					</Button>
				</Grid>
			</Grid>

			<Dialog
				open={open}
				fullScreen={matchesSM}
				onClose={() => setOpen(false)}
				style={{
					zIndex: 1302,
				}}
				PaperProps={{
					style: {
						paddingTop: matchesXS ? "1em" : "5em",
						paddingBottom: matchesXS ? "1em" : "5em",
						paddingLeft: matchesXS
							? 0
							: matchesSM
							? "5em"
							: matchesMD
							? "15em"
							: "25em",
						paddingRight: matchesXS
							? 0
							: matchesSM
							? "5em"
							: matchesMD
							? "15em"
							: "25em",
					},
				}}
			>
				<DialogContent>
					<Grid container direction="column">
						<Grid item>
							<Typography align="center" variant="h2" gutterBottom>
								Confirm Message
							</Typography>
						</Grid>
						<Grid item style={{ marginBottom: "0.5em" }}>
							<TextField
								label="Name"
								id="name"
								fullWidth
								value={name}
								onChange={event => setName(event.target.value)}
							/>
						</Grid>
						<Grid item style={{ marginBottom: "0.5em" }}>
							<TextField
								label="Email"
								error={emailHelper.length !== 0}
								helperText={emailHelper}
								id="email"
								fullWidth
								value={email}
								onChange={onChange}
							/>
						</Grid>
						<Grid item style={{ marginBottom: matchesSM ? "-1.5em" : "-0.5em" }}>
							<TextField
								label="Phone"
								error={phoneHelper.length !== 0}
								helperText={phoneHelper}
								id="phone"
								fullWidth
								value={phone}
								onChange={onChange}
							/>
						</Grid>
					</Grid>

					<Grid
						item
						style={{ width: matchesSM ? "100%" : "20em", marginBottom: "0.5em" }}
					>
						<TextField
							InputProps={{ disableUnderline: true }}
							fullWidth
							id="project"
							variant="outlined"
							multiline
							rows={7}
							className={classes.project}
							value={project}
							onChange={event => setProject(event.target.value)}
						/>
					</Grid>

					<Grid item style={{ marginBottom: "0.5em" }}>
						<TextField
							label="Where are you based?"
							id="where"
							fullWidth
							value={where}
							onChange={event => setWhere(event.target.value)}
						/>
					</Grid>

					<Grid
						item
						container
						alignItems="center"
						direction={matchesXS ? "column" : "row"}
						style={{ marginTop: "2em" }}
					>
						<Grid item>
							<Button
								color="primary"
								style={{ fontWeight: 300, marginBottom: matchesXS ? "0.5em" : 0 }}
								onClick={() => setOpen(false)}
							>
								Cancel
							</Button>
						</Grid>
						<Grid item>
							<Button
								disabled={
									name.length === 0 ||
									project.length === 0 ||
									where.length === 0 ||
									phoneHelper.length !== 0 ||
									emailHelper.length !== 0
								}
								className={classes.estimateButton}
								color="secondary"
								variant="contained"
								onClick={onConfirm}
							>
								Get a Free Estimate
							</Button>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
			<Snackbar
				open={alert.open}
				message={alert.message}
				ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				onClose={() => setAlert({ ...alert, open: false })}
				autoHideDuration={4000}
			/>
		</Grid>
	);
}
