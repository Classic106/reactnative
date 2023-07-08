import axios from "@/service/axios_config";
import type { IProduct } from "@/types";

const getProducts = async (): Promise<IProduct[] | null> => {
  try {
    const { data } = await axios.get(`/products`);
    return data as IProduct[];
  } catch {
    return null;
  }
};

const getProduct = async (id: Number): Promise<IProduct[] | null> => {
  try {
    const { data } = await axios.get(`/products/${id}`);
    return data as IProduct[];
  } catch {
    return null;
  }
};

const createProduct = async (product: IProduct): Promise<IProduct> => {
  try {
    const { data } = await axios.post(`/products`, product);
    return data as IProduct;
  } catch {
    return {} as IProduct;
  }
};

const updateProduct = async (product: IProduct): Promise<IProduct | null> => {
  try {
    const { id } = product;
    const { data } = await axios.put(`/products/${id}`, product);
    return data;
  } catch {
    return null;
  }
};

const deleteProduct = async (id: Number): Promise<Number | null> => {
  try {
    await axios.delete(`/products/${id}`);
    return id;
  } catch {
    return null;
  }
};

export { getProducts, getProduct, createProduct, deleteProduct, updateProduct };
