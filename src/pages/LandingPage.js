import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import ButtonArrow from "../Components/ui/ButtonArrow";

import CardComponent from "../Components/CardComponent";
import WaveCardComponent from "../Components/WaveCardComponent";

import case1 from "../assets/case1.png";
import case2 from "../assets/case2.jpg";
import case3 from "../assets/case3.png";
import case4 from "../assets/case4.png";
import wave from "../assets/wave.svg";
import weekImg from "../assets/weekImg.png";
import weekImgXS from "../assets/weekImg-xs.png";

import sailingBoatAnimation from "../animations/sailing_boat.json";

const useStyles = makeStyles(theme => ({
	marginContainer: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: "1.2em",
			marginRight: "1.2em",
		},
	},
	mainContainer: {
		marginTop: "5em",
		marginBottom: "10em",

		[theme.breakpoints.down("md")]: {
			marginTop: "3em",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "2em",
		},
	},
	introContainer: {
		height: "90vh",
		[theme.breakpoints.down("lg")]: {
			height: "auto",
			marginBottom: "2em",
		},
	},
	firstText: {
		fontSize: "3.15rem",
		[theme.breakpoints.down("xs")]: {
			fontSize: "2.7em",
		},
	},
	cardFirstText: {
		fontSize: "3.15rem",
		fontWeight: 700,

		[theme.breakpoints.down("xs")]: {
			fontSize: "2.7em",
		},
	},
	introText: {
		fontSize: "2.15rem",
		maxWidth: "17em",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.6rem",
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
	aboutUsButton: {
		...theme.typography.aboutUsButton,
		fontSize: "0.9rem",
		height: 45,
		width: 145,
	},
	businessBlock: {
		backgroundColor: theme.palette.common.staleBlue,
		height: "40em",
		[theme.breakpoints.down("md")]: {
			height: "50em",
			marginBottom: "1em",
		},
		[theme.breakpoints.down("sm")]: {
			height: "70em",
			marginBottom: "1em",
		},
		[theme.breakpoints.up("xl")]: {
			height: "50em",
		},
	},
	firstBusinessText: {
		fontSize: "3.85rem",
		lineHeight: 1.1,
		marginBottom: "0.5em",
		maxWidth: "6em",
		[theme.breakpoints.down("xs")]: {
			fontSize: "2.7em",
			marginTop: "1em",
		},
	},
	businessText: {
		fontSize: "1.2rem",
		maxWidth: "31em",
		marginRight: "1em",
		[theme.breakpoints.down("md")]: {
			marginRight: 0,
			maxWidth: "21em",
		},
	},
	processBlock: {
		marginBottom: "15em",
		marginTop: "15em",
	},
	deliversText: {
		fontSize: "1.2rem",
		maxWidth: "42em",
		marginRight: "1em",
	},
	deliverImg: {
		marginTop: "5em",
		maxHeight: "35em",
		[theme.breakpoints.down("sm")]: {
			maxHeight: "65em",
			marginTop: "2em",
		},
	},
	caseBlock: {
		marginTop: "10em",
		marginBottom: "10em",
		[theme.breakpoints.down("xs")]: {
			marginBottom: "5em",
		},
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
	textCard: {
		backgroundImage: `url(${wave})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "bottom",
		position: "absolute",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: "9.5em",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "6em",
			paddingBottom: "8em",
			borderRadius: 0,
			padding: 0,
		},
	},
}));

export default function LandingPage(props) {
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
			<Grid
				item
				container
				direction={matchesSM ? "column" : "row"}
				justify="center"
				alignItems="center"
				className={classes.introContainer}
			>
				<Grid item>
					<Lottie
						options={sailingBoat}
						height={matchesSM ? 300 : matchesMD ? 500 : 600}
						width={matchesSM ? 300 : matchesMD ? 500 : 600}
					/>
				</Grid>
				<Grid item>
					<Grid
						item
						container
						justify="center"
						alignItems="center"
						align={matchesSM ? "center" : undefined}
					>
						<Grid item className={classes.marginContainer}>
							<Typography
								variant="h6"
								className={classes.firstText}
								style={{ color: "#1CA7EC", marginBottom: matchesXS ? "0.2em" : 0 }}
							>
								Come Sail Away With Us!
							</Typography>
							<Typography variant="h6" className={classes.introText}>
								We're <span style={{ color: "#797FF7" }}>Sea Jorney</span>, a
								Startup based in Rio de Janeiro who's team is going to use the
								newest <span style={{ color: "#797FF7" }}>UX and UI</span>{" "}
								tecnologys to developer your brand new site.
							</Typography>
							<Grid item container justify="center" style={{ marginTop: "1em" }}>
								<Grid item>
									<Button
										onClick={() => props.setValue(4)}
										className={classes.estimateButton}
										color="secondary"
										variant="contained"
										component={Link}
										to="/estimate"
										style={{
											height: 45,
											width: 160,
										}}
									>
										Free Estimate
									</Button>
								</Grid>

								<Grid item>
									<Button
										onClick={() => props.setValue(3)}
										component={Link}
										to="/customsoftware"
										variant="outlined"
										className={classes.aboutUsButton}
										style={{ marginLeft: matchesXS ? "1em" : "2em" }}
									>
										<span style={{ marginRight: 10 }}>About Us</span>
										<ButtonArrow
											width={10}
											height={10}
											fill={theme.palette.common.blue}
										/>
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/*----Business Block----*/}

			<Grid
				item
				container
				direction={matchesSM ? "column" : "row"}
				justify="center"
				alignItems="center"
				align={matchesMD ? "center" : "undefined"}
				className={classes.businessBlock}
			>
				<Grid item className={classes.marginContainer}>
					<Typography variant="h6" className={classes.firstBusinessText}>
						Design for Growth Process
					</Typography>
					<Typography
						variant="h6"
						className={classes.businessText}
						style={{ marginBottom: "1em" }}
					>
						UX, UI Design & Branding for early-stage companies, with focus on product
						expertise and growth. We launch and optimise digital products at a highly
						optimised process for delivering design projects.
					</Typography>
				</Grid>

				<Grid item className={classes.marginContainer}>
					<Typography
						variant="h6"
						className={classes.businessText}
						style={{ marginBottom: "1em" }}
					>
						We've been exposed to hundreds of projects over the years acting as a lead
						designer, UX lead, UX consultant and product advisor, which have helped me
						to optimise the quality and speed of my design work. I always work with a
						clear timeframe towards specific deliverables and outcomes, so even though
						design is a creative process, it’s always aligned with the business
						objectives.
					</Typography>
					<Typography
						variant="h6"
						className={classes.businessText}
						style={{ marginBottom: "1em" }}
					>
						We approach all my projects, regardless of the project size, with a kick-off
						discovery session to understand my client’s vision, the business objectives
						and what the user data is indicating. I’ve trained myself to make a quick
						usability test the moment I open a new website or an app, so this comes
						almost for free during our first meeting.
					</Typography>
					<Typography
						variant="h6"
						className={classes.businessText}
						style={{ marginBottom: "1em" }}
					>
						We help companies to build and launch their products, improve their UX and
						product performance or completely re-brand their identity.
					</Typography>
				</Grid>
			</Grid>

			{/*----Deliver Block----*/}
			<Grid
				item
				container
				direction="column"
				align="center"
				alignItems="center"
				className={classes.deliverBlock}
			>
				<Grid item style={{ marginTop: "2em", marginBottom: "2em" }}>
					<Typography variant="h2" className={classes.firstText}>
						How We Deliver
					</Typography>
				</Grid>
				<Grid item className={classes.marginContainer}>
					<Typography variant="h6" className={classes.deliversText}>
						We’ve developed a highly optimised process for delivering design projects in
						5 weeks. It uses the industry-proven methodologies Jobs to be Done and
						Design Sprints, leaving out the trendy UX fillers most startups don’t need.
					</Typography>
					<Typography
						variant="h6"
						className={classes.deliversText}
						style={{ marginTop: "1em" }}
					>
						We’re a small cross-functional team of UX, UI and Product experts that will
						act as the extension of your team.{" "}
						<span style={{ boxShadow: "inset 0 -0.35em  #1CA7EC" }}>
							Think of us as your design co-founder
						</span>
						, who will help you identify, fix and test your product challenges. We
						design for launch and redesign for growth. Suitable for companies at launch
						or product-market fit stage.
					</Typography>
				</Grid>

				<Hidden only={["xs", "sm"]}>
					<Grid item>
						<img src={weekImg} alt="deliver steps" className={classes.deliverImg} />
					</Grid>
				</Hidden>
				<Hidden mdUp>
					<Grid item>
						<img src={weekImgXS} alt="deliver steps" className={classes.deliverImg} />
					</Grid>
				</Hidden>
				<Button
					onClick={() => props.setValue(3)}
					className={classes.caseButton}
					component={Link}
					to="/deliver"
					variant="contained"
					style={{
						marginTop: matchesSM ? "0.5em" : "1.5em",
					}}
				>
					See Full Process
				</Button>
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
					button={true}
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
					button={true}
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
					button={true}
					marginBottom="6em"
				/>

				<CardComponent
					title="Volahealth"
					text="Empowering healthcare using blockchain technology."
					bgColor="#1C2335"
					textColor="white"
					image={case4}
					setValue={props.setValue}
					button={true}
					marginBottom="0"
				/>
			</Grid>

			{/*----Who is it for Block----*/}
			<WaveCardComponent
				title="Who is it for?"
				text="You’ll be fully equipped to continue on your own and keep
					optimising and growing your product. If you need our help
					though, we can dive in even deeper and improve your performance
					and conversions continuously. We’ve got the right skillset and
					efficient processes in-house."
				setValue={props.setValue}
			/>
		</Grid>
	);
}
