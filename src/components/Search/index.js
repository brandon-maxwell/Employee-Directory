import React from "react";
import "./style.css";




// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input className="search" type="text" placeholder="Search" onChange={(e) => props.searchEmployees(e.target.value)} >
        </input>
      </div>
    </form>
  );
}

export default Search;
