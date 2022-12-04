export const getCategories = (products) => {
  let categories = {};
  for (const item of products) {
	if (!(
	  item.category in categories
	)) {
	  categories[item.category] = [];
	}
  }
  return categories;
};