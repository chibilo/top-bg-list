export const Hosts = {
	Tesera: {
		title: "Tesera",
		linkIdField: "alias",
		makeLink: (linkId) => `https://tesera.ru/game/${linkId}`,
		ratingField: "ratingUser",
		sortField: "-ratingn10",
	},
	BGG: {
		title: "BoardGameGeek",
		linkIdField: "bggId",
		makeLink: (linkId) => `https://www.boardgamegeek.com/boardgame/${linkId}`,
		ratingField: "bggGeekRating",
		sortField: "-ratinggeekbgg",
	},
};

export const GAME_REQUEST_URL = "https://api.tesera.ru/games";
