import React from "react";
import {BsFillCartPlusFill} from "react-icons/all.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import {addToCart} from "../store/slices/cartSlice.js";
import Button from "./UI/Button.jsx";

function ItemCard({item}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleAddToCart = (item) => {
	dispatch(addToCart(item));
  };
  
  const handleBuyItem = item => {
	handleAddToCart(item);
	navigate("cart");
  };
  
  return (
	<div className = "item-card">
	  <img src = {item.thumbnail}
		   alt = {item.title}
	  />
	  <div className = "details">
		<div className = "name">
		  <h3>{item.title}</h3>
		  <p>{item.description}</p>
		  <StarRatings
			rating = {item.rating}
			starRatedColor = "#ffc45b"
			starDimension = "20px"
			starSpacing = "0"
		  />
		</div>
		<div className = "pricing">
		  {item?.discountPercentage
		   ?
		   (
			 <>
			   <p>${Math.round(item.price * (
				 1 - (
				   item.discountPercentage / 100
				 )
			   ))}</p>
			   <s>${item.price}</s>
			 </>
		   )
		   : (
			 <p>${item.price}</p>
		   )
		  }
		</div>
	  </div>
	  <div className = "item-buttons">
		<Button className = "secondary-btn"
				onClick = {() => handleAddToCart(item)}
		>
		  <BsFillCartPlusFill></BsFillCartPlusFill>
		</Button>
		<Button className = "primary-btn"
				onClick = {() => handleBuyItem(item)}
		>Buy now</Button>
	  </div>
	  {item.stock < 50
	   ? (
		 <p className = "hurry">Hurry! Only a few items left...</p>
	   )
	   : (
		 <></>
	   )}
	</div>
  );
}

export default ItemCard;