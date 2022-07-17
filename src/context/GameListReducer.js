import { GameListActions } from "./GameListAction";

export const initialState = {
	list: [],
	host: "BGG",
	limit: 10,
	page: 1,
	isLoading: false,
	error: null,
};

export const GameListReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case GameListActions.LOAD_GAME_LIST:
			return {
				...prevState,
				isLoading: true,
				host: action.payload.host,
				limit: action.payload.limit,
				list: [],
			};
		case GameListActions.LOAD_GAME_LIST_SUCCESS:
			return { ...prevState, isLoading: false, list: action.payload };
		case GameListActions.LOAD_GAME_LIST_ERROR:
			return { ...prevState, isLoading: false, list: [], error: action.payload };
		case GameListActions.SET_PAGE:
			return { ...prevState, page: action.payload };
		default:
			return prevState;
	}
};
