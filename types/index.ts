enum ECategories {
  Electronics = "electronics",
  Jewelery = "jewelery",
  Mens_clothing = "men's clothing",
  Womens_clothing = "women's clothing",
}

interface IRate {
  rate: number;
  count: number;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ECategories;
  image: string;
  rating: IRate;
}

export { ECategories, IRate, IProduct };
