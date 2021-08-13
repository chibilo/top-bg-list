import React from "react";
import { Card, Badge } from "react-bootstrap";

export default ({ info }) => (
  <Card key={info.id}>
    <Card.Img src={info.photo} alt="game image"></Card.Img>
    <Card.ImgOverlay>
      <div className="rating">{info.numRating}</div>
      <Badge className="pull-right" variant="success" title="rating">
        {info.gameRating}
      </Badge>
    </Card.ImgOverlay>
    <Card.Body style={{ zIndex: 1000 }}>
      <Card.Title>{info.title}</Card.Title>
      <Card.Text>{info.desc}</Card.Text>
      {info.links.map((link, idx) => (
        <Card.Link key={idx} as="a" href={link.link} target="_blank">
          {link.title}
        </Card.Link>
      ))}
    </Card.Body>
  </Card>
);
