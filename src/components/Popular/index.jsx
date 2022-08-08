import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "../Card";

import "./styles.scss";

function Popular() {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const checkLocalStorage = localStorage.getItem("popular");
    if (checkLocalStorage) {
      setPopular(JSON.parse(checkLocalStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      if (data) {
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
      }
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="popularBlock">
      <h1>Popular</h1>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular?.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card recipe={recipe} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Popular;
