import React from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import "./styles.scss";

function Header(props) {
  return (
    <header>
      <Link className="logo" to={"/"}>
        <GiKnifeFork />
        <h2>RecipeApp</h2>
      </Link>
      <h1>Welcome to Recipes Application</h1>
    </header>
  );
}

export default Header;
