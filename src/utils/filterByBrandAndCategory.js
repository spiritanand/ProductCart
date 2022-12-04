export const filterByBrandAndCategory = (products, filters) => {
  let filteredData = [];
  
  for (const item of products) {
	if ((
		  !filters.categories.length || filters.categories.includes(item.category)
		) && (
		  !filters.brands.length || filters.brands.includes(item.brand)
		))
	  filteredData.push(item);
  }
  
  return {products: filteredData};
};