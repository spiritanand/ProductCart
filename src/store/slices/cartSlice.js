import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {
  items   : [],
  totalQty: 0,
  totalAmt: 0,
};

const cartSlice = createSlice({
  name    : "cart",
  initialState,
  reducers: {
	addToCart         : (state, action) => {
	  const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
	  
	  if (itemIndex >= 0) {
		if (state.items[itemIndex].stock <= state.items[itemIndex].qty) {
		  toast.error("No stock left.", {
			position: "bottom-left",
		  });
		  return;
		}
		
		state.items[itemIndex].qty++;
		toast.info("Increased quantity 👍", {
		  position: "bottom-left",
		});
	  } else {
		state.items.push({
		  ...action.payload,
		  qty: 1
		});
		toast.success("Added to cart ✅", {
		  position: "bottom-left"
		});
	  }
	},
	removeFromCart    : (state, action) => {
	  state.items = state.items.filter(item => item.id !== action.payload.id);
	  toast.error("Removed from cart 😔", {
		position: "bottom-left"
	  });
	},
	decreaseItemInCart: (state, action) => {
	  const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
	  
	  if (state.items[itemIndex].qty > 1) {
		state.items[itemIndex].qty--;
		toast.info("Decreased quantity 😔", {
		  position: "bottom-left"
		});
	  } else {
		state.items = state.items.filter(item => item.id !== action.payload.id);
		toast.error("Removed from cart 😔", {
		  position: "bottom-left"
		});
	  }
	},
	clearCart         : (state) => {
	  state.items = [];
	  toast.error("Cleared cart 😔", {
		position: "bottom-left"
	  });
	},
	getTotals         : (state, action) => {
	  const totals = state.items.reduce((totals, item) => {
		const {
				price,
				discountPercentage,
				qty
			  } = item;
		const discountedPrice = Math.round(price * (
		  1 - (
			discountPercentage / 100
		  )
		));
		const itemTotal = discountedPrice * qty;
		
		totals.total += itemTotal;
		totals.qty += qty;
		
		return totals;
	  }, {
		total: 0,
		qty  : 0,
	  });
	  
	  state.totalAmt = totals.total;
	  state.totalQty = totals.qty;
	},
	checkout          : state => {
	  toast("Ordered successfully 👍", {
		position: "bottom-left"
	  });
	  
	  return initialState;
	}
  }
});

export const cartReducer = cartSlice.reducer;
export const {
			   addToCart,
			   removeFromCart,
			   decreaseItemInCart,
			   clearCart,
			   getTotals,
			   checkout
			 } = cartSlice.actions;