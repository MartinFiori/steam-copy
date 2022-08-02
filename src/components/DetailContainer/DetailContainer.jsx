import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../Redux/actions";

const DetailContainer = () => {
	const { id } = useParams();
	const detailRedux = useSelector(state => state.gameDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getGameDetail(id));
	}, [dispatch, id]);

	const {
		title,
		thumbnail,
		status,
		short_description,
		genre,
		platform,
		minimum_system_requirements,
	} = detailRedux;

	return (
		<div>
			<h1>{title}</h1>
			<img src={thumbnail} alt={title} />
			<h1>{status}</h1>
			<h1>{short_description}</h1>
			<h1>{genre}</h1>
			<h1>{platform}</h1>
			<h1>{JSON.stringify(minimum_system_requirements)}</h1>
		</div>
	);
};

export default DetailContainer;
