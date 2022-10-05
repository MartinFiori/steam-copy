import * as actions from "./action-types.js";
// CON AXIOS
import axios from "axios";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "c6ef8901d4msh687f6dad2c6970cp17e86cjsn95509874d1a2",
		"X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
	},
};

const optionsFetch = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "c6ef8901d4msh687f6dad2c6970cp17e86cjsn95509874d1a2",
		"X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
	},
};

export const getAllGames = url => async dispatch => {
	// CON AXIOS
	return await axios(url, options)
		.then(function (response) {
			dispatch({
				type: actions.GET_GAMES,
				payload: response.data,
			});
		})
		.catch(function (error) {
			console.error(error);
		});
};

export const getGameDetail = game_id => async dispatch => {
	fetch("https://mmo-games.p.rapidapi.com/game?id=" + game_id, optionsFetch)
		.then(response => response.json())
		.then(res =>
			dispatch({
				type: actions.GET_GAME_DETAILS,
				payload: res,
			})
		);
};

export const addWhislist = game_id => async dispatch => {
	try {
		const request = await fetch(
			"https://www.mmobomb.com/api1/game?id=" + game_id
		);
		const gameDetail = await request.json();
		dispatch({
			type: actions.ADD_WHISHLIST,
			payload: gameDetail,
		});
	} catch (err) {
		console.log(err);
	}
};

export const setFilters = (filter, filterType) => async dispatch => {
	try {
		dispatch({
			type: actions.SET_FILTERS,
			payload: {
				filter,
				filterType,
			},
		});
	} catch (err) {
		console.log(err);
	}
};


export const changePage = page => dispatch => {
	dispatch({
		type: actions.CHANGE_PAGE,
		payload: page,
	});
};

export const resetFilters = filters => async dispatch => {
	try {
		dispatch({
			type: actions.RESET_FILTERS,
			payload: filters,
		});
	} catch (err) {
		console.log(err);
	}
};
