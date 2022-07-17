import { DEFAULT_RATING_FIELD, DEFAULT_SORT_FIELD, Hosts } from "../Consts";
import axios from "axios";

export const GAMES_API_URL = "https://api.tesera.ru/games";

const makeLinks = (info) => {
	return Object.values(Hosts).map(({ title, linkIdField, makeLink }) => {
		return {
			title: title,
			href: makeLink(info[linkIdField]),
		};
	});
};

export const fetchGameList = (host, limit) => {
	const sort = Hosts[host]?.sortField || DEFAULT_SORT_FIELD;
	return axios
		.get(`${GAMES_API_URL}?offset=${0}&limit=${limit}&WithAdditions=false&sort=${sort}`)
		.then((res) => {
			const ratingField = Hosts[host]?.ratingField || DEFAULT_RATING_FIELD;
			return res.data.map((info, idx) => {
				return {
					...info,
					numRating: idx + 1,
					gameRating: info[ratingField],
					links: makeLinks(info),
				};
			});
		});
};

export const fetchGame = (id) => {
	return axios.get(`${GAMES_API_URL}/${id}`).then((res) => {
		const info = res.data.game;
		return {
			...info,
			links: makeLinks(info),
		};
	});
};
