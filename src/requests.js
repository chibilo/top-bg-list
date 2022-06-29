import { GAME_REQUEST_URL, Hosts } from "./Consts";
import axios from "axios";

const makeLinks = (info) => {
	return Object.values(Hosts).map(({ title, linkIdField, makeLink }) => {
		return {
			title: title,
			href: makeLink(info[linkIdField]),
		};
	});
};

const fetchGameList = (host, count) => {
	const sort = Hosts[host]?.sortField || "-ratingn10";
	return axios
		.get(`${GAME_REQUEST_URL}?offset=${0}&limit=${count}&WithAdditions=false&sort=${sort}`)
		.then((res) => {
			const ratingField = Hosts[host]?.ratingField || "ratingUser";
			return res.data.map((info, idx) => {
				return {
					id: info.teseraId,
					title: info.title,
					desc: info.descriptionShort,
					photo: info.photoUrl,
					numRating: idx + 1,
					gameRating: info[ratingField],
					links: makeLinks(info),
				};
			});
		});
};

export { fetchGameList };
