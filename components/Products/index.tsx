import { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Ionicons from "react-native-vector-icons/FontAwesome";

import { ECategories, IProduct } from "@/types";
import { RootState } from "@/store";
import { globalStyleVariables } from "@/style";
const { goldColor, whiteColor } = globalStyleVariables;
import { useAppDispatch, useAppSelector } from "@/hook";
import { getProducts } from "@/store/products/actions";
import { sortDown, sortUp } from "@/utils";

import { Item } from "./Item";
import { Product } from "./Product";

export const Products = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { products, chosedProduct } = useAppSelector(
    ({ product }: RootState) => product
  );

  const [sortIndex, setSortIndex] = useState(0);
  const [category, setCategory] = useState("all");
  const [currentProducts, setCurrentProducts] = useState(products);

  const icons = ["sort", "sort-asc", "sort-desc"];
  const sort = ["", "asc", "desc"];

  const sortAs = (index: number) => {
    if (index === sort.length) {
      setSortIndex(0);
      return;
    }
    setSortIndex(index);
  };

  const sortByCategory = (data: IProduct[]) => {
    if (category !== "all") {
      const newProducts = [...data].filter(
        (item) => item.category === category
      );
      return newProducts;
    }
    return data;
  };

  const sortByIndex = (data: IProduct[]) => {
    if (sortIndex === 1) {
      return sortDown<IProduct>(data, "price");
    } else if (sortIndex === 2) {
      return sortUp<IProduct>(data, "price");
    }
    return data;
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const by_category = sortByCategory(products);
    const by_index = sortByIndex(by_category);
    setCurrentProducts(by_index);
  }, [sortIndex, products, category]);

  return chosedProduct ? (
    <Product />
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.sort}>
        <SelectDropdown
          data={["all", ...Object.values(ECategories)]}
          onSelect={(selectedItem) => setCategory(selectedItem)}
          defaultValue={"all"}
          buttonTextAfterSelection={(selectedItem) => selectedItem}
          buttonStyle={styles.dropdownBtnStyle}
          buttonTextStyle={styles.dropdownBtnTxtStyle}
          dropdownStyle={styles.dropdownDropdownStyle}
          rowStyle={styles.dropdownRowStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
        />
        <Text style={{ color: whiteColor }}>Sort</Text>
        <Ionicons
          onPress={() => sortAs(sortIndex + 1)}
          name={icons[sortIndex]}
          size={30}
          color={"#fff"}
          style={{ padding: 10 }}
        />
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={currentProducts}
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
  sort: {
    flex: 1,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 50,
  },
  dropdownBtnStyle: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    color: whiteColor,
    borderColor: whiteColor,
    backgroundColor: "transparent",
  },
  dropdownBtnTxtStyle: {
    color: whiteColor,
    margin: 0,
    padding: 0,
    textAlign: "left",
    fontSize: 15,
    backgroundColor: "transparent",
  },
  dropdownDropdownStyle: { backgroundColor: "transparent" },
  dropdownRowStyle: {
    backgroundColor: whiteColor,
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxtStyle: { color: goldColor, textAlign: "center" },
});
