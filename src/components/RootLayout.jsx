import React, {useEffect} from "react";
import {
  useDispatch,
  useSelector
} from "react-redux";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getTotals} from "../store/slices/cartSlice.js";
import Navbar from "./Navbar.jsx";

function RootLayout(props) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  useEffect(() => {
	dispatch(getTotals());
  }, [cart.items]);
  
  return (
	<>
	  <ToastContainer
		position = "bottom-left"
		autoClose = {2000}
		hideProgressBar = {false}
		newestOnTop
		closeOnClick
		pauseOnFocusLoss = {false}
		draggable
		pauseOnHover
	  />
	  <Navbar></Navbar>
	  <div className = "outlet">
		<Outlet></Outlet>
	  </div>
	</>
  );
}

export default RootLayout;