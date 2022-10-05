import React, { useState } from "react";
import BackToMenu from "../BackToMenu/BackToMenu";
import "./DetailItem.css";

const DetailItem = ({
	data: {
		developer,
		genre,
		// id,
		minimum_system_requirements,
		platform,
		publisher,
		release_date,
		screenshots,
		short_description,
		status,
		thumbnail,
		title,
		game_url,
	},
}) => {
	const [activeImage, setActiveImage] = useState(null);
	return (
		<div className="detailContainer">
			<BackToMenu path={'/'} text='Back to menu'/>
			<div className="detailInfo">
				<p className="detailInfo--background">{title}</p>
				<aside className="asideInfo">
					<p>{genre}</p>
					<p>{platform}</p>
				</aside>
				<section className="detail__content">
					<h3 className="detail__content--title">{title}</h3>
					<p className="detail__content--description">{short_description}</p>
				</section>
				<section className="detail__middle detail__list">
					<h4>Game information:</h4>
					<ul>
						<li>
							<p>developer: </p>
							<span>{developer}</span>
						</li>
						<li>
							<p>genre: </p>
							<span>{genre}</span>
						</li>
						<li>
							<p>publisher: </p>
							<span>{publisher}</span>
						</li>
						<li>
							<p>Release date: </p>
							<span>{release_date}</span>
						</li>
						<li>
							<p>status: </p>
							<span>{status}</span>
						</li>
						<li>
							<p>game's page: </p>
							<a href={game_url} target='_blank'>{game_url}</a>
						</li>
					</ul>
				</section>
				<div className="detail__bottom">
					<section className="detail__minimum detail__list">
						<h4 className="detail__title">System Requirements</h4>
						<ul>
							{Object.entries(minimum_system_requirements).map((el, i) => (
								<li key={i}>
									<p>{el[0]}: </p>
									<span>{el[1]}</span>
								</li>
							))}
						</ul>
					</section>
					<section className="detail__gallery">
						<img
							src={activeImage ? activeImage : thumbnail}
							alt="img"
							className="gallery__main"
						/>
						<div className="gallery__secondary">
							{screenshots?.map(el => (
								<img
									key={el.id}
									src={el.image}
									alt={el.image}
									onClick={() => setActiveImage(el.image)}
								/>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default DetailItem;
