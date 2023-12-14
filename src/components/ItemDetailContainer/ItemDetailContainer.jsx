import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = ({ product }) => {
  return (
    <div className="container mt-5">
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src={product.thumbnail} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <ItemCount />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ItemDetailContainer;
