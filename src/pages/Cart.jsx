import React from "react";
import {FaLongArrowAltLeft} from "react-icons/all.js";
import {
  useDispatch,
  useSelector
} from "react-redux";
import {Link} from "react-router-dom";
import Button from "../components/UI/Button.jsx";
import emptyCart from "../images/empty-cart.png";
import {
  addToCart,
  checkout,
  clearCart,
  decreaseItemInCart,
  removeFromCart
} from "../store/slices/cartSlice.js";

function Cart(props) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  const handleRemoveItem = (item) => {
	dispatch(removeFromCart(item));
  };
  
  const handleDecreaseItem = (item) => {
	dispatch(decreaseItemInCart(item));
  };
  
  const handleIncreaseItem = (item) => {
	dispatch(addToCart(item));
  };
  
  const handleCheckout = () => {
	dispatch(checkout());
  };
  
  return (
	<div className = "cart">
	  <h1>
		Shopping Cart
	  </h1>
	  {cart.items.length
	   ? (
		 <div>
		   <div className = "cart-titles">
			 <h3>Product</h3>
			 <h3>Price</h3>
			 <h3>Quantity</h3>
			 <h3>Total</h3>
		   </div>
		  
		   <div className = "cart-items">
			 {cart.items.map(item => {
				 const discountedPrice = Math.round(item.price * (
				   1 - (
					 item.discountPercentage / 100
				   )
				 ));
				
				 return (
				   <div className = "cart-item"
						key = {item.id}
				   >
					 <div className = "item-name">
					   <img src = {item.thumbnail}
							alt = ""
					   />
					   <p>
						 {item.title}
					   </p>
					   <Button onClick = {() => handleRemoveItem(item)}>Remove</Button>
					 </div>
					 <div>
					   <p>
						 ${discountedPrice}
					   </p>
					 </div>
					 <div className = "change-cart-qty">
					   <Button onClick = {() => handleDecreaseItem(item)}>-</Button>
					   {item.qty}
					   <Button onClick = {() => handleIncreaseItem(item)}>+</Button>
					 </div>
					 <div>
					   <p style = {{
						 fontWeight: "700",
					   }}
					   >
						 ${item.qty * discountedPrice}
					   </p>
					 </div>
				   </div>
				 );
			   }
			 )}
		   </div>
		  
		   <Button onClick = {() => dispatch(clearCart())}>Clear cart</Button>
		 </div>
	   )
	   : (
		 <div className = "empty-cart">
		   <p>No items in cart.</p>
		   <img src = {emptyCart}
				alt = "empty-cart"
		   />
		 </div>
	   )}
	  <div className = "cart-btns">
		{cart.items.length
		 ? (
		   <div className = "subtotal">
			 <h2>Subtotal</h2>
			 <h2>${cart.totalAmt}</h2>
		   </div>
		 )
		 : (
		   <></>
		 )
		}
		<Button disabled = {cart.items.length === 0}
				className = "secondary-btn checkout-btn"
				onClick = {handleCheckout}
		>
		  Checkout
		</Button>
		<Link to = "/"
		>
		  <Button className = "primary-btn continue-shopping"
		  >
			<FaLongArrowAltLeft></FaLongArrowAltLeft> Continue Shopping
		  </Button>
		</Link>
	  </div>
	</div>
  );
}

export default Cart;