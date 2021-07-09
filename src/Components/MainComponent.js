import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
        dishes: DISHES,
        selectedDish : null
        };
    }

    onDishSelect(dishID) {
    this.setState({ selectedDish: dishID });
    }

    render() {
        return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={this.state.dishes}
                  onClick={(dishID) => this.onDishSelect(dishID)}
            />
            <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        </div>
    );
  }
}

export default Main;
