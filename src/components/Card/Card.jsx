import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";

const Card = ({ data: { id, title, thumbnail, short_description } }) => {
	return (
		<div className="card">
			<img src={thumbnail} alt={title} className="card--img" />
			<div className="card__content">
				<h3 className="card__content--title">{title}</h3>
				<p className="card__content--description">{short_description}</p>
				<Link to={`game/${id}`} className="card__content--button">
					<FaGamepad size={"24px"} fill={"var(--black)"} />
					<p>More info</p>
				</Link>
			</div>
		</div>
	);
};

export default Card;
