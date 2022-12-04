import React from "react";
import {useGetAllProductsQuery} from "../store/slices/productsSlice.js";
import {filterByBrandAndCategory} from "../utils/filterByBrandAndCategory.js";
import {getProductByCategory} from "../utils/getProductByCategory.js";
import {getSortedProductsBy} from "../utils/getSortedProductsBy.js";
import ItemCard from "./ItemCard.jsx";
import Loader from "./UI/Loader.jsx";

function Products({
					sortBy,
					filters
				  }) {
  const {
		  data,
		  isLoading
		} = useGetAllProductsQuery();
  
  let displayedProducts;
  
  if (!isLoading)
	displayedProducts = getProductByCategory(data?.products);
  
  if (sortBy.sorterParameter || (
	  filters.categories.length || filters.brands.length
  )) {
	displayedProducts = getSortedProductsBy(data?.products, sortBy);
	
	displayedProducts = filterByBrandAndCategory(
	  displayedProducts["All Products"], filters);
	
  } else if (sortBy.sorterParameter && displayedProducts)
	displayedProducts = getSortedProductsBy(data?.products, sortBy);
  
  return (
	<>
	  {
		isLoading
		?
		(
		  <Loader classname = "all-products"></Loader>
		)
		:
		<div className = "all-products">
		  {Object.entries(displayedProducts)
				 .map(([category, items]) => (
					 <div className = "products"
						  key = {category}
					 >
					   <h2>{category}</h2>
					   <div className = "productsList">
						 {items.length
						  ?
						  items.map(item =>
							<ItemCard key = {item.id}
									  item = {item}
							/>
						  )
						  : (
							<h4>No such items.</h4>
						  )}
					   </div>
					 </div>
				   )
				 )}
		</div>
	  }
	</>
  );
}

export default Products;