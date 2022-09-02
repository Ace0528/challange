import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./LaunchDetails.css";

export default function LaunchDetails() {
  const [data, loading] = useData();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments") || "[]")
  );
  const params = useParams();
  const launch = data.find(
    (data) => data.flight_number == params.flight_number
  );

  const postComment = () => {
    if (comment.length === 0) return;
    setComments([
      ...comments,
      { id: new Date().getTime(), Id: launch.name, comment },
    ]);
  };

  useEffect(() => {
    if (comments.length > 0)
      localStorage.setItem("comments", JSON.stringify(comments));
    setTimeout(() => {
      setComment("");
    }, 1000);
  }, [comments]);

  return (
    <div>
      {loading ? (
        <>
          <div>
            <h1 className="title">SpaceX Launches</h1>
            <div className="page-layout">
              <div>
                <div className="detail-container">
                  <h5> Launch Details </h5>
                  <hr />
                  <h2> {launch.name} </h2>
                  <Card>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Flight Number: {launch.flight_number}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Launch Year: {launch.date_local.slice(0, 4)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Launch Date: {launch.date_local.slice(0, 10)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Launch Successful:
                        <div
                          style={{
                            display: "inline-block",
                            color: false ? "green" : "red",
                            marginLeft: "10px",
                          }}
                        >
                          {launch.success ? "Yes" : "No"}
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>Details: {launch.details}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                  <Link to={"/"}>
                    <Button className="btn-back" variant="secondary">
                      Back
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="title comment-area">
                  <h6>COMMENTS</h6>
                  {comments
                    .filter((comment) => comment.Id == launch.name)
                    .map((item) => (
                      <Card className="comment" key={item.id}>
                        {item.comment}
                        <br />
                        <small>
                          {new Date(item.id).toString().slice(0, 21)}
                        </small>
                      </Card>
                    ))}
                  <Form>
                    <FloatingLabel
                      controlId="floatingTextarea"
                      label="Comments"
                      className="mb-3"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        value={comment}
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                      />
                    </FloatingLabel>
                    <Button
                      className="btn-back"
                      variant="info"
                      onClick={() => postComment()}
                    >
                      Comment
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="spiner">
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
}
