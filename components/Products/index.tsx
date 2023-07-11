import { useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hook";
import { getProducts } from "@/store/products/actions";

import { Item } from "./Item";
import { Product } from "./Product";

export const Products = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { products, chosedProduct } = useAppSelector(
    ({ product }: RootState) => product
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return chosedProduct ? (
    <Product />
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={products}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={({ id }) => `${id}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
