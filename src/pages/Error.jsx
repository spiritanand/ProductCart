import React from "react";
import Navbar from "../components/Navbar.jsx";

function Error(props) {
  return (
	<>
	  <Navbar></Navbar>
	  <div className = "error-page">
		<h1>Some error occurred.</h1>
		<p>Could not fetch data.</p>
	  </div>
	</>
  );
}

export default Error;