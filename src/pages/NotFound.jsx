import React from "react";
import {FaLongArrowAltLeft} from "react-icons/all.js";
import {Link} from "react-router-dom";
import Button from "../components/UI/Button.jsx";
import img404 from "../images/404.jpeg";

function NotFound(props) {
  return (
	<>
	  <div className = "not-found-page">
		<h1>
		  <span>Oops!</span> This is awkward... You are looking for something that does
							 not actually exist.
		</h1>
		<img src = {img404}
			 alt = "404 error image"
		/>
		<Button className = "primary-btn">
		  <Link to = "/">
		  <FaLongArrowAltLeft></FaLongArrowAltLeft>
			Take me home
		  </Link>
		</Button>
	  </div>
	</>
  );
}

export default NotFound;