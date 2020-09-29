import React from "react";
import './Sort.css';

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <select className="sort" onChange={handleChange}>
        <option className="label" label="Filters:">Filters:</option>
        <option value="price-ascending">
          &nbsp; Price, low to high &nbsp;
        </option>
        <option value="price-descending">
          &nbsp; Price, high to low &nbsp;
        </option>
        <option className="option" value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
      </select>
    </form>
  );
};

export default Sort;
