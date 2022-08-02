import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../Redux/actions";
import DetailItem from "../DetailItem/DetailItem";

const DetailContainer = () => {
	const { id } = useParams();
	const detailRedux = useSelector(state => state.gameDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getGameDetail(id));
	}, [dispatch, id]);

	return (
		<>
			<DetailItem data={detailRedux} />
		</>
	);
};

export default DetailContainer;
