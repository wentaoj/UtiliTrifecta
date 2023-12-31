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
					<Route path="/utilitrifecta" element={<Layout />}>
						<Route index element={<Home />}/>
						<Route path="/utilitrifecta/forex" element={<Currency />} />
						<Route path="/utilitrifecta/determinant" element={<Determinant />} />
						<Route path="/utilitrifecta/chronometer" element={<ChronoMeter />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
