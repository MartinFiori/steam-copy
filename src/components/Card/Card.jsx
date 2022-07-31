import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data: { id, title, thumbnail, short_description } }) => {
	return (
		<div>
			<Link to={`game/${id}`}>
				<p>{title}</p>
			</Link>
			<p>{id}</p>
			<img src={thumbnail} alt="" />
		</div>
	);
};

export default Card;
