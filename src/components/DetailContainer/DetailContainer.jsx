import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../Redux/actions";
import DetailItem from "../DetailItem/DetailItem";
import Spinner from "../Spinner/Spinner.jsx";

const DetailContainer = () => {
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const detailRedux = useSelector(state => state.gameDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getGameDetail(id));
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [dispatch, id, loading]);

	return <>{loading ? <Spinner /> : <DetailItem data={detailRedux} />}</>;
};

export default DetailContainer;
