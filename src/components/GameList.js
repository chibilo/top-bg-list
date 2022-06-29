import React from "react";
import { Alert } from "react-bootstrap";
import GameCard from "./GameCard";

export default ({ isLoading, data }) => {
	console.log(data);
	return (
		<div className="game-list">
			<Alert className="alert" show={isLoading} variant="info">
				Loading...
			</Alert>
			{data.map((info) => (
				<GameCard info={info} />
			))}
		</div>
	);
};
