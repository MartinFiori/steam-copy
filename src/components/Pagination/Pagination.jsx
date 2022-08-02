import React from "react";
import "./Pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../Redux/actions";

const Pagination = ({ gamesPerPage, handleChangePage }) => {
	const gamesRedux = useSelector(state => state.allGames);
	const actualPageRedux = useSelector(state => state.actualPage);
	const dispatch = useDispatch();
	const pageNumber = [];
	for (let i = 1; i <= Math.ceil(gamesRedux.length / gamesPerPage); i++) {
		pageNumber.push(i);
	}
	return (
		<div>
			<ul className="pagination__list">
				{pageNumber.map(num => (
					<li
						key={num}
						className={`pagination__list--item ${
							actualPageRedux === num && "active"
						}`}
					>
						<p
							onClick={() => {
								handleChangePage(num);
								dispatch(changePage(num));
							}}
						>
							{num}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;
