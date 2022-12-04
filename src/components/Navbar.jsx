import React from "react";
import {BsFillCartCheckFill} from "react-icons/all.js";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Navbar(props) {
  const cart = useSelector(state => state.cart);
  
  return (
	<nav className = "navbar">
	  <Link to = "/">
		<h1>
		  ProductCart
		</h1>
	  </Link>
	  <Link to = "/cart" className="cart-icon">
		<BsFillCartCheckFill
		></BsFillCartCheckFill>
	  <p>{cart.totalQty}</p>
	  </Link>
	</nav>
  );
}

export default Navbar;