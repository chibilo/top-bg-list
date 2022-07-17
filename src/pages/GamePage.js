import "./GamePage.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchGame } from "../utils/requests";
import { Spinner } from "react-bootstrap";
import BackToMainButton from "../components/BackToMainButton";

export default function GamePage() {
	const { id } = useParams();
	const [game, setGame] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetchGame(id)
			.then(setGame)
			.finally(() => setLoading(false));
	}, []);

	if (isLoading) {
		return (
			<div className="game-page">
				<Spinner animation="border" variant="secondary" />
			</div>
		);
	}

	return (
		<div className="game-page m-2 overflow-hidden">
			{game ? (
				<div className="game d-flex flex-column align-items-center justify-content-center px-4 py-2 m-3 shadow-sm ">
					<h1 className="text-center	">{game.title}</h1>
					{game.title2 && <h3 className="text-center mt-2">{game.title2}</h3>}
					<div className="params d-flex align-items-start align-self-start mt-3">
						<img src={game.photoUrl} alt="game image" width="300px" />
						<div className="details ml-3">
							<p>Рейтинг BGG: {game.bggRating}</p>
							<p>Рейтинг Tesera: {game.n10Rating}</p>
							<p>Год выхода: {game.year}</p>
							<p>
								Игроки: {game.playersMin} - {game.playersMax}
							</p>
							<p>Возраст: от {game.playersAgeMin} лет</p>
							<p>
								Время партии: {game.playtimeMin} - {game.playtimeMax} мин
							</p>
						</div>
					</div>
					<div className="desc pt-2 mt-3">{game.descriptionShort}</div>
					<div className="d-flex py-2">
						{game.links.map((link) => (
							<a key={link.title} className="p-2" href={link.href} target="_blank">
								{link.title}
							</a>
						))}
					</div>
				</div>
			) : (
				<div>Такой игры не найдено.</div>
			)}
			<BackToMainButton variant="outline-secondary">Back to Game List</BackToMainButton>
		</div>
	);
}
