import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Card({ recipe }) {
  return (
    <Link className="recipeCard" to={"/recipeDetail/" + recipe.id}>
      <p>{recipe.title}</p>
      <img src={recipe.image} alt={recipe.image} />
    </Link>
  );
}

export default Card;
