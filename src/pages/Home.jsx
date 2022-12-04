import React, {useState} from "react";
import {
  FaSortAmountDown,
  FaSortAmountUpAlt
} from "react-icons/all.js";
import Select from "react-select";
import Products from "../components/Products.jsx";
import {useGetAllProductsQuery} from "../store/slices/productsSlice.js";
import {getBrands} from "../utils/getBrands.js";
import {getCategories} from "../utils/getCategories.js";

function Home(props) {
  const {
		  data,
		  isLoading
		} = useGetAllProductsQuery();
  
  const [sorterParameter, setSorterParameter] = useState();
  const [ascending, setAscending] = useState(true);
  
  const [filters, setFilters] = useState({
	categories: [],
	brands    : []
  });
  
  let productsCategory, productsBrands;
  
  if (!isLoading) {
	productsCategory = Object.keys(getCategories(data?.products));
	productsBrands = Object.keys(getBrands(data?.products));
  }
  
  const sortingOptions = [
	{
	  value: "discountPercentage",
	  label: "Discounts"
	},
	{
	  value: "rating",
	  label: "Ratings"
	},
	{
	  value: "price",
	  label: "Price"
	}
  ];
  
  const categoriesOptions = productsCategory?.map(c => {
	  const value = c;
	  const label = c.toUpperCase();
	  
	  return {
		value,
		label,
	  };
	}
  );
  
  const brandsOptions = productsBrands?.map(c => {
	  const value = c;
	  const label = c.toUpperCase();
	  
	  return {
		value,
		label,
	  };
	}
  );
  
  const handleSortData = (e) => {
	if (!e)
	  setSorterParameter(null);
	else
	  setSorterParameter(e.value);
  };
  
  const handleAscDsc = () => {
	if (!sorterParameter)
	  return;
	
	setAscending(prevState => !prevState);
  };
  
  const handleCategoryChange = (e) => {
	
	if (!e)
	  setFilters(prevState => (
		{
		  ...prevState,
		  categories: []
		}
	  ));
	else
	  setFilters(prevState => (
		{
		  ...prevState,
		  categories: e.map(c => c.value)
		}
	  ));
  };
  
  const handleBrandChange = (e) => {
	
	if (!e)
	  setFilters(prevState => (
		{
		  ...prevState,
		  brands: []
		}
	  ));
	else
	  setFilters(prevState => (
		{
		  ...prevState,
		  brands: e.map(c => c.value)
		}
	  ));
  };
  
  return (
	<div className = "home">
	  <div className = "slicer">
		<div className = "sorter">
		  <Select options = {sortingOptions}
				  isClearable
				  onChange = {handleSortData}
				  placeholder = "Sort by..."
		  />
		  <div onClick = {handleAscDsc}
			   className = "order"
		  >
			{ascending
			 ? <FaSortAmountUpAlt></FaSortAmountUpAlt>
			 : <FaSortAmountDown></FaSortAmountDown>}
		  </div>
		</div>
		
		<div className = "filter">
		  <Select options = {categoriesOptions}
				  placeholder = "Choose category(s)..."
				  isClearable
				  isMulti
				  onChange = {handleCategoryChange}
		  ></Select>
		  <Select options = {brandsOptions}
				  placeholder = "Choose brand(s)..."
				  isClearable
				  isMulti
				  onChange = {handleBrandChange}
		  ></Select>
		</div>
	  </div>
	  
	  <Products sortBy = {{
		sorterParameter,
		ascending
	  }}
				filters = {filters}
	  ></Products>
	</div>
  );
}

export default Home;