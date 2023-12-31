import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/home";
import Currency from "./components/forex/forex";
import Determinant from "./components/determinant/determinant";
import ChronoMeter from "./components/chronometer/chronometer";
import './App.css';

function App() {
	return(
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/UtiliTrifecta" element={<Layout />}>
						<Route index element={<Home />}/>
						<Route path="/UtiliTrifecta/forex" element={<Currency />} />
						<Route path="/UtiliTrifecta/determinant" element={<Determinant />} />
						<Route path="/UtiliTrifecta/chronometer" element={<ChronoMeter />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
