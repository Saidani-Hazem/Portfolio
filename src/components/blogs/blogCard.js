import React from "react";
import { Card, Button } from "react-bootstrap";

function BlogCard({ title, description, imgPath, readMoreLink }) {
  return (
    <Card className="blog-card">
      {imgPath && <Card.Img variant="top" src={imgPath} alt="blog-img" />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={readMoreLink} target="_blank">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
