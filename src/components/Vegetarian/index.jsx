import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "../Card";

import "./styles.scss";

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  const getVegetarian = async () => {
    const checkLocalStorage = localStorage.getItem("Vegetarian");
    if (checkLocalStorage) {
      setVegetarian(JSON.parse(checkLocalStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      if (data) {
        localStorage.setItem("Vegetarian", JSON.stringify(data.recipes));
        setVegetarian(data.recipes);
      }
    }
  };

  useEffect(() => {
    getVegetarian();
  }, []);

  return (
    <div className="vegeterianBlock">
      <h1>Vegetarian</h1>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "10rem",
        }}
      >
        {vegetarian.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card recipe={recipe} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Vegetarian;
