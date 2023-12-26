// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Records from "./pages/records";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route
					path="/records"
					element={<Records />}
				/>
				<Route
					path="/profile"
					element={<Profile />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
