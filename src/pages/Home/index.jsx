import Popular from "../../components/Popular";
import Vegetarian from "../../components/Vegetarian";

import "./styles.scss";

const Home = () => {
  return (
    <div className="homePage">
      <div className="category">
        <Popular />
      </div>
      <div className="category">
        <Vegetarian />
      </div>
    </div>
  );
};

export default Home;
