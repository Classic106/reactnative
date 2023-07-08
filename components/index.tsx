import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hook";
import { getProducts } from "@/store/products/actions";

export default function Main(): React.ReactElement {
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
      <Text>{products.length} Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
