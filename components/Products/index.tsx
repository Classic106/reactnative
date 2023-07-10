import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hook";
import { getProducts } from "@/store/products/actions";

export const Products = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(({ product }: RootState) => product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(products.length);
  }, [products]);

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>{products.length} Products</Text>
      <StatusBar style="auto" />
    </View>
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
