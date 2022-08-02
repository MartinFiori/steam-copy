import React, { useState } from "react";
import "./DetailItem.css";

const DetailItem = ({
	data: {
		developer,
		genre,
		id,
		minimum_system_requirements,
		platform,
		profile_url,
		publisher,
		release_date,
		screenshots,
		short_description,
		status,
		thumbnail,
		title,
	},
}) => {
	const [activeImage, setActiveImage] = useState(null);
	return (
		<div className="detailContainer">
			<div className="detailInfo">
				<p className="detailInfo--background">{title}</p>
				<aside className="asideInfo">
					<p>{genre}</p>
					<p>{platform}</p>
				</aside>
				<section className="detail__content">
					<h3 className="detail__content--title">{title}</h3>
					<p className="detail__content--description">{short_description}</p>
					<span>{release_date}</span>
				</section>
				{/* <p>{JSON.stringify(minimum_system_requirements)}</p>
				{screenshots?.map(el => (
					<img key={el.id} src={el.image} className="screenshots" />
				))} */}
			</div>
		</div>
	);
};

export default DetailItem;
