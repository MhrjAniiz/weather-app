import React from "react";
import { Button } from "@material-ui/core";

const SearchBar = ({ handleChange, city, handleSubmit }) => {
  return (
    <div className="inputBody">
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          placeholder="Enter City Name"
          value={city}
          type="text"
          onChange={handleChange}
        />
        <Button variant="contained" color="primary">
          search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
