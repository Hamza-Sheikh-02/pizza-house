const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The name of the product.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "A short description of the product.",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the product.",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      description: "Product images.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "stockStatus",
      title: "Stock Status",
      type: "string",
      options: {
        list: [
          { title: "In Stock", value: "inStock" },
          { title: "Out of Stock", value: "outOfStock" },
        ],
        layout: "radio",
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Product category section.",
      options: {
        list: [
          { title: "Favourite Flavour", value: "favouriteFlavour" },
          { title: "Premium Flavour", value: "premiumFlavour" },
          { title: "Delicious Desserts", value: "deliciousDesserts" },
          { title: "Refreshing Drinks", value: "refreshingDrinks" },
        ],
      },
    },
  ],
};

export default product;
