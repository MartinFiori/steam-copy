import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../Redux/actions";

const DetailContainer = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGameDetail(id));
	}, [dispatch, id]);

	return (
		<div>
			<h1>{id}</h1>
		</div>
	);
};

export default DetailContainer;
