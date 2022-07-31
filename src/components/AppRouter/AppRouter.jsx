import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsContainer from "../CardsContainer/CardsContainer.jsx";
import DetailContainer from "../DetailContainer/DetailContainer.jsx";
import { Provider } from "react-redux";
import store from "../../Redux/store";

const AppRouter = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/game/:id" element={<DetailContainer />} />
					<Route path="/" element={<CardsContainer />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default AppRouter;
