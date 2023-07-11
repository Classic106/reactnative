import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { actions } from "@/store/products/slice";
import { useAppDispatch } from "@/hook";
import { IProduct } from "@/types";
import { globalStyleVariables } from "@/style";
const { goldColor, whiteColor } = globalStyleVariables;

export const Item = ({ item }: { item: IProduct }) => {
  const dispatch = useAppDispatch();

  const { id, title, image, price } = item;

  const openPopup = (id: number) => {
    dispatch(actions.CHOSED_PRODUCT(id));
  };

  return (
    <TouchableOpacity onPress={() => openPopup(id)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.price}>price: {price} $</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderColor: goldColor,
    backgroundColor: `${goldColor}44`,
    shadowRadius: 15,
    shadowColor: goldColor,
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 15,
    color: whiteColor,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
    resizeMode: "contain",
    aspectRatio: 1,
  },
  price: {
    marginTop: 10,
    color: whiteColor,
  },
});
