export const GameListActions = {
	LOAD_GAME_LIST: "LOAD_GAME_LIST",
	LOAD_GAME_LIST_SUCCESS: "LOAD_GAME_LIST_SUCCESS",
	LOAD_GAME_LIST_ERROR: "LOAD_GAME_LIST_ERROR",
	SET_PAGE: "SET_PAGE",
};

export const LoadGameListAction = (host, limit) => ({
	type: GameListActions.LOAD_GAME_LIST,
	payload: { host, limit },
});

export const LoadGameListSuccessAction = (games) => ({
	type: GameListActions.LOAD_GAME_LIST_SUCCESS,
	payload: games,
});

export const LoadGameListErrorAction = (error) => ({
	type: GameListActions.LOAD_GAME_LIST_SUCCESS,
	payload: error,
});

export const SetPageAction = (page) => ({
	type: GameListActions.SET_PAGE,
	payload: page,
});
