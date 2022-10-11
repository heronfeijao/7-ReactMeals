import React from "react";
import Card from "../UI/Card.jsx";
import classes from "./AvailableMeals.module.css";

import { DUMMY_MEALS } from "./dummy-meals";
import MealItem from "./MealItem/MealItem.jsx";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
