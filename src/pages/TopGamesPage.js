import React, { useContext, useEffect } from "react";
import "./TopGamesPage.css";
import { Hosts } from "../Consts";
import GameList from "../components/GameList";
import CustomDropDown from "../components/CustomDropDown";
import CustomPagination from "../components/CustomPagination";
import { Alert } from "react-bootstrap";
import { GameListContext } from "../context/GameListContext";

const CARD_PER_PAGE = 10;

export default function TopGamesPage() {
	const {
		games: { host, limit, page, isLoading, error, list: gameList },
		fetch,
		setPage,
	} = useContext(GameListContext);
	const pageCount = Math.ceil(limit / CARD_PER_PAGE);
	if (pageCount < page) {
		setPage(1);
	}

	useEffect(() => {
		fetch(host, limit);
	}, []);

	return (
		<div className="games">
			<h1>
				Топ{" "}
				<CustomDropDown
					value={limit}
					items={[10, 25, 50, 100]}
					onChange={(limit) => fetch(host, limit)}
				/>{" "}
				Настольных Игр по версии{" "}
				<CustomDropDown
					value={Hosts[host].title}
					items={Object.entries(Hosts).map((host) => ({
						value: host[0],
						text: host[1].title,
					}))}
					onChange={(host) => fetch(host, limit)}
				/>
			</h1>
			{isLoading ? (
				<Alert transition={false} className="alert" show={isLoading} variant="info">
					Loading...
				</Alert>
			) : (
				gameList && (
					<>
						<GameList
							data={gameList.slice((page - 1) * CARD_PER_PAGE, page * CARD_PER_PAGE)}
						/>
						{limit > CARD_PER_PAGE && (
							<CustomPagination
								pageCount={pageCount}
								onChangePage={setPage}
								activePage={page}
							/>
						)}
					</>
				)
			)}
			{error && <div>{error}</div>}
		</div>
	);
}
