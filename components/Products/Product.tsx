import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  BackHandler,
} from "react-native";
import { Rating } from "react-native-ratings";

import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hook";

import { globalStyleVariables } from "@/style";
const { goldColor, whiteColor } = globalStyleVariables;

import { actions } from "@/store/products/slice";

export const Product = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { products, chosedProduct } = useAppSelector(
    ({ product }: RootState) => product
  );

  const item = products.filter((item) => item.id === chosedProduct);
  const { title, image, price, category, description, rating } = item[0];

  function handleBackButtonClick() {
    dispatch(actions.CHOSED_PRODUCT(null));
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={{ ...styles.title, fontSize: 20 }}>{description}</Text>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>category: {category}</Text>
            <Text style={styles.descriptionText}>price: {price} $</Text>
          </View>
          <Rating
            type="heart"
            ratingCount={rating.rate}
            imageSize={60}
            showRating
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderColor: goldColor,
    backgroundColor: `${goldColor}44`,
    shadowRadius: 15,
    shadowColor: goldColor,
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
