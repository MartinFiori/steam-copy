import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../../Redux/actions";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner.jsx";
import Pagination from "../Pagination/Pagination";

const CardsContainer = () => {
	const dispatch = useDispatch();
	const gamesRedux = useSelector(state => state.allGames);
	const paginationRedux = useSelector(state => state.pagination);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [gamesPerPage] = useState(36);

	const handleChangePage = num => setCurrentPage(num);

	useEffect(() => {
		!gamesRedux.length &&
			dispatch(getAllGames("https://mmo-games.p.rapidapi.com/games"));
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, [dispatch, gamesRedux, paginationRedux]);

	const indexOfLastPost = currentPage * gamesPerPage;
	const indexOfFirstPost = indexOfLastPost - gamesPerPage;
	const currentGames = gamesRedux.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<div>
			<Pagination
				gamesPerPage={gamesPerPage}
				handleChangePage={handleChangePage}
			/>
			<div>
				{loading ? (
					<Spinner />
				) : (
					<div className="cardsContainer">
						{currentGames?.map(game => {
							return <Card data={game} key={game.id} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default CardsContainer;
