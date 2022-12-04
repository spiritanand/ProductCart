export const getBrands = (products) => {
  let brands = {};
  for (const item of products) {
	if (!(
	  item.brand in brands
	)) {
	  brands[item.brand] = [];
	}
  }
  return brands;
};