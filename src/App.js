import React, { useEffect, useState } from "react";
import "./styles.css";
import { Hosts } from "./Consts";
import { fetchGameList } from "./requests";
import GameList from "./components/GameList";
import CustomDropDown from "./components/CustomDropDown";
import CustomPagination from "./components/CustomPagination";

export default function App() {
	const CARD_PER_PAGE = 10;
	const [source, setSource] = useState("BGG");
	const [count, setCount] = useState(10);
	const [activePage, setActivePage] = useState(1);
	const [pageCount, setPageCount] = useState(1);
	const [gameList, setGameList] = useState([]);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(false);
	}, [gameList]);

	useEffect(() => {
		setLoading(true);
		fetchGameList(source, count).then(setGameList).catch(console.error);
	}, [source, count]);

	useEffect(() => {
		setPageCount(Math.ceil(count / CARD_PER_PAGE));
		setActivePage(1);
	}, [count]);

	return (
		<div className="App">
			<h1>
				Топ <CustomDropDown value={count} items={[10, 25, 50, 100]} onChange={setCount} />{" "}
				Настольных Игр по версии{" "}
				<CustomDropDown
					value={Hosts[source].title}
					items={Object.entries(Hosts).map((host) => ({
						value: host[0],
						text: host[1].title,
					}))}
					onChange={setSource}
				/>
			</h1>
			<GameList
				isLoading={isLoading}
				data={gameList.slice((activePage - 1) * CARD_PER_PAGE, activePage * CARD_PER_PAGE)}
			/>
			{count > CARD_PER_PAGE && (
				<CustomPagination
					pageCount={pageCount}
					onChangePage={setActivePage}
					activePage={activePage}
				/>
			)}
		</div>
	);
}
