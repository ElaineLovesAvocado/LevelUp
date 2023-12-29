// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/home";
import Ranking from "./pages/ranking";
import Records from "./pages/records";
import SeasonRanking from "./pages/seasonRanking";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/LevelUp/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route
					path="/records"
					element={<Records />}
				/>
				<Route
					path="/ranking"
					element={<Ranking />}
				/>
				<Route
					path="/seasonRanking"
					element={<SeasonRanking />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
