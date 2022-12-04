export const getProductByCategory = (products) => {
  let categoriesData = {};
  for (const item of products) {
	if (!(
	  item.category in categoriesData
	)) {
	  categoriesData[item.category] = [];
	}
	categoriesData[item.category].push(item);
  }
  return categoriesData;
};
