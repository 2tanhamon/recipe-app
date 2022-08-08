import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <FaSearch />
      <input type="text" value={input} onChange={handleChange} />
    </form>
  );
};

export default Search;
