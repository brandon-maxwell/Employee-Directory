import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header jumbotron border">
      <h1>Employee Directory</h1>
      <h5>Click on the carrots to filter by heading or use the search box to narrow your results.</h5>
    </header>
  );
}

export default Header