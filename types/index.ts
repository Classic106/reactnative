interface IRate {
  rate: number;
  count: number;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRate;
}

export { IRate, IProduct };
