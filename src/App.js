import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import ScrollToTop from "./Components/ScrollToTop";
import theme from "./Components/ui/Theme";
import Header from "./Components/header-footer/Header";
import Footer from "./Components/header-footer/Footer";
import LandingPage from "./pages/LandingPage";
import Work from "./pages/Work";
import Deliver from "./pages/Deliver";
import About from "./pages/About";
import Estimate from "./pages/Estimate";

function App() {
	const [value, setValue] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<ScrollToTop />
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Switch>
					<Route
						exact
						path="/"
						render={props => (
							<LandingPage
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/work"
						render={props => (
							<Work
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/deliver"
						render={props => (
							<Deliver
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/about"
						render={props => (
							<About
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/estimate"
						render={props => (
							<Estimate
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
				</Switch>
				<Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
