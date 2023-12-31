import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/home";
import Currency from "./components/forex/forex";
import Determinant from "./components/determinant/determinant";
import ChronoMeter from "./components/chronometer/chronometer";
import './App.css';

function App() {
	return(
		<div className="container">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />}/>
						<Route path="/forex" element={<Currency />} />
						<Route path="/determinant" element={<Determinant />} />
						<Route path="/chronometer" element={<ChronoMeter />} />
					</Route>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
