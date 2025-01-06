import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  background: rgba(23, 12, 61, 0.9);
  border: 1px solid rgba(200, 137, 230, 0.637);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(200, 137, 230, 0.3);
  }

  .card-body {
    padding: 2rem;
  }

  .card-title {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .card-text {
    color: #c4c4c4;
    font-size: 1.2rem;
    line-height: 1.8;
    text-align: justify;
  }

  @media (max-width: 768px) {
    .card-body {
      padding: 1.5rem;
    }

    .card-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .card-text {
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 480px) {
    .card-body {
      padding: 1rem;
    }

    .card-title {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }

    .card-text {
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

function BlogCard({ title, description }) {
  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
}

export default BlogCard;

