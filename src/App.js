import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopGamesPage from "./pages/TopGamesPage";
import GamePage from "./pages/GamePage";
import { GameListContextProvider } from "./context/GameListContext";
import { NotFound } from "./pages/NotFound";

export default function App() {
	return (
		<GameListContextProvider>
			<BrowserRouter>
				<Switch>
					<Route path="/game/:id">
						<GamePage />
					</Route>
					<Route path="/" exact>
						<TopGamesPage />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</BrowserRouter>
		</GameListContextProvider>
	);
}
