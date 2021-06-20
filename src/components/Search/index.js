import React from "react";
import "./style.css";


function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input className="search form-control-sm" type="text" placeholder="Search" onChange={(e) => props.searchEmployees(e.target.value)} >
        </input>
      </div>
    </form>
  );
}

export default Search;
