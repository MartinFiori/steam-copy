import React, { useEffect, useState } from "react";
import "./CardsContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../../Redux/actions";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import Filters from "../Filters/Filters.jsx";

const CardsContainer = () => {
	const dispatch = useDispatch();
	const gamesRedux = useSelector(state => state.allGames);
	const paginationRedux = useSelector(state => state.pagination);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [gamesPerPage] = useState(20);
	const [filter, setFilter] = useState({
		sort: "",
		genre: "",
		platform: "",
		release_date: "",
	});

	const handleChangePage = num => setCurrentPage(num);

	const handleChangeFilter = e => {
		setFilter({
			...filter,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		!gamesRedux.length &&
			dispatch(getAllGames("https://mmo-games.p.rapidapi.com/games"));
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, [dispatch, gamesRedux, paginationRedux]);

	const indexOfLastPost = currentPage * gamesPerPage; // 20
	const indexOfFirstPost = indexOfLastPost - gamesPerPage; // 0
	const currentGames = gamesRedux.slice(indexOfFirstPost, indexOfLastPost);
	return (
		<>
			<Filters />
			<Pagination
				gamesPerPage={gamesPerPage}
				handleChangePage={handleChangePage}
			/>
			<>
				{loading ? (
					<Spinner />
				) : (
					<div className="cardsContainer">
						{currentGames.map(game => {
							return <Card data={game} key={game.id} />;
						})}
					</div>
				)}
			</>
			<Pagination
				gamesPerPage={gamesPerPage}
				handleChangePage={handleChangePage}
			/>
		</>
	);
};

export default CardsContainer;
