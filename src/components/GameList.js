import React from "react";
import { Alert } from "react-bootstrap";
import GameCard from "./GameCard";
import "./GameList.css";

export default ({ isLoading, data }) => {
	return (
		<div className="game-list">
			<Alert transition={false} className="alert" show={isLoading} variant="info">
				Loading...
			</Alert>
			{data.map((info) => (
				<GameCard key={info.id} info={info} />
			))}
		</div>
	);
};
