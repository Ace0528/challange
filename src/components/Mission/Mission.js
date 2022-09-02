import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Mission.css";

export default function Mission({ data }) {
  return (
    <div className="center">
      <Card className="mision-card" style={{ width: "50rem" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src={
            "https://p.kindpng.com/picc/s/474-4746262_spacex-crs-16-patch-space-x-crs-16.png"
          }
        />
        <Card.Body style={{ flex: "none" }}>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text> {data.date_local.slice(0, 10)} </Card.Text>
        </Card.Body>
        <Link to={`/details/${data.flight_number}`} key={data.flight_number}>
          <Button variant="secondary">Launch Details</Button>
        </Link>
      </Card>
    </div>
  );
}
