import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <Card className="col-12 col-md-5 m-1">
        <CardImg width="100%" top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(array) {
    if (array.length != 0) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {array.map((comment) => (
            <ul className="list-unstyled">
              <li>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} , {comment.date}
                </p>
              </li>
            </ul>
          ))}
        </div>
      );
    } else return <div></div>;
  }

  render() {
    return (
      <div className="row">
        {this.renderDish(this.props.selectedDish)}
        {this.renderComments(this.props.selectedDish.comments)}
      </div>
    );
  }
}

export default DishDetail;
