import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { IProduct } from "@/types";
import { globalStyleVariables } from "@/style";
const { goldColor, whiteColor } = globalStyleVariables;

export const Item = ({ item }: { item: IProduct }) => {
  const { title, image, price, category } = item;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>category: {category}</Text>
        <Text style={styles.descriptionText}>price: {price} $</Text>
      </View>
    </View>
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
    zIndex: 1,

    fontSize: 25,
    textAlign: "center",
    marginBottom: 15,
    color: whiteColor,
  },
  image: {
    zIndex: 1,
    flex: 1,
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
    resizeMode: "contain",
    aspectRatio: 1,
  },
  description: {
    zIndex: 1,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 20,
    textAlign: "center",
    color: whiteColor,
  },
});
