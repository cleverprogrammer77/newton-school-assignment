import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const ThankYou = () => {
  return (
    <div className="thankyou">
      <Card style={{ width: "38rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn-icons-png.flaticon.com/256/7215/7215127.png"
        />
        <Card.Body>
          <Card.Title>Thanks for Shopping</Card.Title>
          <Card.Text>
            Your order has been placed. Thank you for shopping with us.
          </Card.Text>
          <Link to="/">
            <Button variant="primary">Go to HomePage</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ThankYou;
