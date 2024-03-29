import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./GameCard.css";

export default ({ info, onClick }) => (
	<Card onClick={() => onClick(info)}>
		<Card.Img src={info.photoUrl} alt="game image" />
		<Card.ImgOverlay>
			<div className="rating">{info.numRating}</div>
			<Badge className="pull-right" variant="success" title="rating">
				{info.gameRating}
			</Badge>
		</Card.ImgOverlay>
		<Card.Body style={{ zIndex: 1000 }}>
			<Card.Title>{info.title}</Card.Title>
			<Card.Text>{info.descriptionShort}</Card.Text>
			{info.links.map((link, idx) => (
				<Card.Link key={idx} as="a" href={link.href} target="_blank">
					{link.title}
				</Card.Link>
			))}
		</Card.Body>
	</Card>
);
