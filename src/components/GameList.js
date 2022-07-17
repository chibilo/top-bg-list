import React from "react";
import GameCard from "./GameCard";
import "./GameList.css";
import { useHistory } from "react-router-dom";

export default ({ data }) => {
	let history = useHistory();
	return (
		<div className="game-list">
			{data.map((info) => (
				<GameCard
					key={info.id}
					info={info}
					onClick={(info) => history.push(`/game/${info.alias}`)}
				/>
			))}
		</div>
	);
};
