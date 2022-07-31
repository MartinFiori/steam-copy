import * as actions from "../actions/action-types.js";

const initialState = {
	allGames: [],
	gameDetail: {},
	whishList: [],
	search: "",
	filters: {
		platform: "",
		category: "",
		sorted: "",
	},
	pagination: {
		currentPage: 1,
		gamesPerPage: 15,
		totalPages: 0,
		prev: "",
		next: "",
	},
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case actions.GET_GAMES:
			return {
				...state,
				allGames: payload,
				// POR FAVOR QUE ME SIRVA PARA ALGO EN EL FUTURO DIOSITO AYUDA PLS
				// const date = new Date();
				// allGames: payload.sort((a, b) => {
				// 	const aDate = a.release_date.split("-");
				// 	const bDate = b.release_date.split("-");
				// 	return (
				// 		date.setFullYear(aDate[0], aDate[1], aDate[2]) -
				// 		date.setFullYear(bDate[0], bDate[1], bDate[2])
				// 	);
				// }),
				// POR FAVOR QUE ME SIRVA PARA ALGO EN EL FUTURO DIOSITO AYUDA PLS
			};
		case actions.GET_GAME_DETAILS:
			return {
				...state,
				gameDetail: payload,
			};
		case actions.ADD_WHISHLIST:
			return {
				...state,
				favoriteGames: [...state.favoriteGames, payload],
			};
		case actions.SET_FILTERS:
			return {
				...state,
				filters: {
					...state.filters,
					[payload.filterType]: payload.filter,
				},
			};
		case actions.RESET_FILTERS:
			return {
				...state,
				filters: payload,
			};
		default:
			return state;
	}
}

export default rootReducer;
