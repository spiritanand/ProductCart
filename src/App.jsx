import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import Cart from "./pages/Cart.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/"
		 element = {<RootLayout/>}
		 errorElement = {<Error></Error>}
  >
	<Route index
		   element = {<Home/>}
	></Route>
	
	<Route path = "/cart"
		   element = {<Cart></Cart>}
	></Route>
	
	<Route path = "*"
		   element = {<NotFound></NotFound>}
	></Route>
  </Route>
));

function App(props) {
  return (
	<RouterProvider router = {router}>
	</RouterProvider>
  );
}

export default App;