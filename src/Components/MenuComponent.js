import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card className="card">
      <Link to={`/menu/${dish.id}`}>
        <CardImg
          className="card-img"
          style={{ width: "100%", height: "400px" }}
          src={dish.image}
          alt={dish.name}
        />
        <CardImgOverlay className="card-img">
          <CardTitle className="card-title">
            <h4>{dish.name}</h4>
          </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb className="breadcrumb">
          <BreadcrumbItem>
            <Link className="breadcrumb-link" to="/home">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
      <div className="row"></div>
    </div>
  );
};

export default Menu;
