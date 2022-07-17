import { createContext, useReducer } from "react";
import { fetchGameList } from "../utils/requests";
import { GameListReducer, initialState } from "./GameListReducer";
import {
	LoadGameListAction,
	LoadGameListSuccessAction,
	LoadGameListErrorAction,
	SetPageAction,
} from "./GameListAction";

export const GameListContext = createContext();

export const GameListContextProvider = ({ children }) => {
	const [games, dispatch] = useReducer(GameListReducer, initialState);

	const fetch = (host, limit) => {
		dispatch(LoadGameListAction(host, limit));
		fetchGameList(host, limit)
			.then((data) => {
				dispatch(LoadGameListSuccessAction(data));
			})
			.catch((e) => {
				dispatch(LoadGameListErrorAction(e.message));
			});
	};

	const setPage = (page) => {
		dispatch(SetPageAction(page));
	};

	return (
		<GameListContext.Provider value={{ games, dispatch, fetch, setPage }}>
			{children}
		</GameListContext.Provider>
	);
};
