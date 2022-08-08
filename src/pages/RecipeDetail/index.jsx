import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";

const RecipeDetail = () => {
  const [detail, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  const fetchDetail = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetail(detailData);
  };

  useEffect(() => {
    fetchDetail(params.id);
  }, [params.id]);

  const handleActiveTab = (name) => {
    setActiveTab(name);
  };

  return (
    <div className="recipeDetail">
      <div className="leftSide">
        <h1>{detail?.title}</h1>
        <img src={detail?.image} alt={detail.image} />
      </div>
      <div className="rightSide">
        <div className="buttonsWrapper">
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => handleActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => handleActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </div>
        <div className="content">
          {activeTab === "instructions" && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: detail?.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: detail?.instructions }}
              ></h3>
            </div>
          )}
          {activeTab === "ingredients" && (
            <div>
              <ul>
                {detail?.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
