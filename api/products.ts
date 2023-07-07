import type { IProduct } from "@/types";

const getProducts = async (): Promise<IProduct[] | null> => {
  try {
    return [] as IProduct[];
  } catch {
    return null;
  }
};

const createProduct = async (product: IProduct): Promise<IProduct> => {
  try {
    return {} as IProduct;
  } catch {
    return {} as IProduct;
  }
};

const deleteProduct = async (id: Number): Promise<unknown> => {
  try {
    return id;
  } catch {
    return null;
  }
};

const updateProduct = async (product: IProduct): Promise<IProduct | null> => {
  try {
    return product;
  } catch {
    return null;
  }
};

export { getProducts, createProduct, deleteProduct, updateProduct };
