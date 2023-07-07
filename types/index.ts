interface IRate {
  rate: Number;
  count: Number;
}

interface IProduct {
  id: Number;
  title: String;
  price: Number;
  description: String;
  category: String;
  image: String;
  rating: IRate;
}

export { IRate, IProduct };
