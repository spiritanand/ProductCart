export const getSortedProductsBy = (products, sortBy) => {
  const productsCopy = [...products];
  
  if (!sortBy)
	return {"All Products": productsCopy};
  
  if (sortBy.ascending)
	productsCopy.sort((a, b) => a[sortBy.sorterParameter] - b[sortBy.sorterParameter]);
  else
	productsCopy.sort((a, b) => b[sortBy.sorterParameter] - a[sortBy.sorterParameter]);
  
  return {"All Products": productsCopy};
};