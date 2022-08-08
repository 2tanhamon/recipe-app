import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiMussel } from "react-icons/gi";

import { NavLink } from "react-router-dom";

import "./styles.scss";

function Category() {
  return (
    <div className="categoryBlock">
      <NavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/cuisine/French"}>
        <GiMussel />
        <h4>French</h4>
      </NavLink>
    </div>
  );
}

export default Category;
