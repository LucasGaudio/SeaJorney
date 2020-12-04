import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import WeekComponent from "../Components/WeekComponent";
import WaveCardComponent from "../Components/WaveCardComponent";
import ReasonComponent from "../Components/ReasonComponent";

import ship from "../assets/ship.png";
import sailboat1 from "../assets/sailboat1.svg";
import sailboat2 from "../assets/sailboat2.svg";
import sailboat3 from "../assets/sailboat3.svg";
import sailboat4 from "../assets/sailboat4.svg";
import sailboat5 from "../assets/sailboat5.svg";

import lighthouse from "../assets/lighthouse2.svg";
import map from "../assets/map.svg";
import scope from "../assets/scope.svg";
import motorboat from "../assets/motorboat.svg";
import diving from "../assets/diving.svg";

const useStyles = makeStyles(theme => ({
	marginContainer: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: "1.2em",
			marginRight: "1.2em",
		},
	},
	designGrowthText: {
		fontSize: "6.2rem",
		lineHeight: 1.1,
		[theme.breakpoints.down("sm")]: {
			fontSize: "3.5rem",
		},
	},
	growthText: {
		fontSize: "1.44rem",
		maxWidth: "19em",
		marginTop: "1em",
	},
	explanation: {
		fontSize: "1.2rem",
		maxWidth: "50em",
		[theme.breakpoints.down("xs")]: {
			maxWidth: "30em",
		},
	},
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

export default function Deliver(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuerry(theme.breakpoints.down("xs"));
	const matchesMD = useMediaQuerry(theme.breakpoints.down("md"));

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{ marginTop: "5em", marginBottom: "10em" }}
		>
			{/*----Intro Block----*/}
			<Grid
				item
				container
				direction="column"
				justify="center"
				alignItems="center"
				style={{ marginBottom: matchesXS ? 0 : "3em" }}
			>
				<Grid item>
					<Grid
						item
						container
						direction={matchesMD ? "column" : "row"}
						justify="center"
						alignItems="center"
					>
						<Hidden only={["sm", "xs"]}>
							<Grid item>
								<img
									src={ship}
									alt="ship"
									style={{
										height: matchesXS
											? "20em"
											: matchesSM
											? "25em"
											: matchesMD
											? "40em"
											: "50em",
									}}
								/>
							</Grid>
						</Hidden>
						<Grid item className={classes.marginContainer}>
							<Grid item>
								<Typography variant="h2" className={classes.designGrowthText}>
									Design <br />
									for Growth <br />
									Process
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="h6" className={classes.growthText}>
									A highly effective system for building and optimising digital
									products at speed. Growth-driven{" "}
									<span style={{ color: "#797FF7" }}>UX and UI</span> design for
									startups.
								</Typography>
							</Grid>
						</Grid>
						<Hidden mdUp>
							<Grid item>
								<img
									src={ship}
									alt="ship"
									style={{
										height: matchesXS ? "20em" : matchesSM ? "25em" : "50em",
									}}
								/>
							</Grid>
						</Hidden>
					</Grid>
				</Grid>
				<Grid
					item
					style={{ marginTop: matchesXS ? "2em" : "4em" }}
					className={classes.marginContainer}
				>
					<Typography variant="h6" className={classes.explanation}>
						We’ve developed a unique design delivery framework that brings results in 5
						weeks. It uses the industry-proven methodologies Jobs to be Done, for
						identifying product flaws and opportunities, and Design Sprint for solving
						and testing product problems.
					</Typography>
					<br />
					<Typography variant="h6" className={classes.explanation}>
						This is an optimised and highly effective way of doing UX and UI design for
						early stage companies. It’s based on our experience with over 100 startups,
						some of them backed by YC, Techstars, Seedcamp, Founders Factory and other
						leading accelerators and investors.
					</Typography>
				</Grid>
			</Grid>

			{/*----Week Block----*/}
			<Grid
				item
				container
				direction="column"
				alignItems="center"
				style={{ marginTop: "3em" }}
			>
				<Grid item style={{ marginTop: "2em" }}>
					<WeekComponent
						weekNumber="1"
						action1="Jobs to be Done Session"
						action2="Mini Design Sprint Session"
						action3="Stakeholders & user interviews"
						action4="Data analysis & market research"
						deliverable1="The most important jobs for your users"
						deliverable2="Identified, data-backed solutions"
						deliverable3="Low-fidelity wireframes"
						image={sailboat1}
					/>

					<WeekComponent
						weekNumber="2"
						action1="Business Design Strategy"
						action2="Wireframing"
						deliverable1="Customer journey map"
						deliverable2="User Personas"
						deliverable3="High-fidelity wireframes of key user flows"
						image={sailboat2}
					/>

					<WeekComponent
						weekNumber="3"
						action1="Testing with real users"
						action2="Performance analysis"
						action3="Wireframing"
						deliverable1="User testing results and findings"
						deliverable2="High-fidelity wireframes of the whole product"
						image={sailboat3}
					/>

					<WeekComponent
						weekNumber="4"
						action1="Brand identity exploration"
						action2="User interface (UI) design"
						deliverable1="Brand identity"
						deliverable2="UI of key user flows"
						image={sailboat4}
					/>

					<WeekComponent
						weekNumber="5"
						action1="User interface design"
						action2="Building your design system"
						deliverable1="Design system"
						deliverable2="Final UI of the whole product"
						image={sailboat5}
					/>
				</Grid>
			</Grid>

			{/*----Who is it for Block----*/}
			<WaveCardComponent
				title="Who is it for?"
				text="The framework is suitable for companies at pre-launch, launch or
					product-market fit stage. Our cross-functional team of UX, UI,
					Product and Growth experts acts as the extension of your product
					team, bringing in-depth product and design expertise to help you
					discover and fix complex product challenges and ship the best
					 of your product as soon as possible."
				setValue={props.setValue}
			/>

			{/*----Reasons Block----*/}
			<Grid
				item
				container
				direction="column"
				alignItems="center"
				style={{ marginTop: matchesXS ? "5em" : "8em" }}
			>
				<Grid item style={{ marginBottom: "2em" }}>
					<Typography variant="h2">Why work with us?</Typography>
				</Grid>

				<ReasonComponent
					title="Product Expertise"
					text="Using Jobs to be Done, Design Sprints and other proven UX and
						product methodologies, we’ll help you define and execute the
						best version of your product."
					image={lighthouse}
				/>

				<ReasonComponent
					title="Value"
					text="We’ve tested dozens of product delivery and design frameworks
						and created a highly effective process, leaving out the trendy
						UX fillers most startups don’t need."
					image={map}
				/>

				<ReasonComponent
					title="Startups Focused"
					text="13+ design and product experience with over 100 startups. We
						launch and optimises new products daily. Some of us have been
						founders. We know the drill."
					image={scope}
				/>

				<ReasonComponent
					title="Speed"
					text="Thanks to our optimised framework, we deliver most projects
						within 5 weeks. Depending on the project complexity, it could
						take more or less, but always by the agreed deadline."
					image={motorboat}
				/>

				<Grid
					item
					container
					justify="center"
					alignItems={matchesSM ? undefined : "center"}
					className={classes.reasonBlock}
				>
					<Grid item>
						<img src={diving} alt="diving" className={classes.reasonImg} />
					</Grid>
					<Grid item>
						<Grid item container direction="column" alignItems="flex-start">
							<Grid item>
								<Hidden only={["xs"]}>
									<Typography variant="h6" className={classes.reasons}>
										Cross-Functional Team
									</Typography>
								</Hidden>

								<Hidden smUp>
									<Typography variant="h6" className={classes.reasons}>
										Cross-Functional
									</Typography>
									<Grid item container>
										<Typography variant="h6" className={classes.reasons}>
											Team
										</Typography>
									</Grid>
								</Hidden>
							</Grid>
							<Grid item>
								<Typography variant="h6" className={classes.reasonExplanation}>
									Our UX, UI, product and growth experts will act as the extension
									of your founding or product team. Thanks to our
									multidisciplinary skills we “design for growth”.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/*----What’s next Block----*/}

			<WaveCardComponent
				title="What’s next?"
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
