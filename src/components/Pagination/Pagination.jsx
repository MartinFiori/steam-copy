import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ gamesPerPage, handleChangePage }) => {
	const gamesRedux = useSelector(state => state.allGames);
	const pageNumber = [];
	for (let i = 1; i <= Math.ceil(gamesRedux.length / gamesPerPage); i++) {
		pageNumber.push(i);
	}
	return (
		<div>
			<ul>
				{pageNumber.map(num => (
					<li key={num}>
						<p onClick={() => handleChangePage(num)}>{num}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;
