import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import SelectDropdown from "react-native-select-dropdown";

import { IProduct, ECategories } from "@/types";
import { productSchema } from "@/validation-schemas";

import { globalStyleVariables } from "@/style";
const { goldColor, whiteColor, errColor } = globalStyleVariables;

import { useAppDispatch } from "@/hook";
import { createProduct } from "@/store/products/actions";

export const AddProduct = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const values = {
    title: "",
    description: "",
    category: ECategories.Electronics,
    image: "",
    price: 0,
  } as IProduct;

  const handleSubmit = (product: IProduct) => {
    const rating = {
      rate: 0,
      count: 0,
    };
    dispatch(createProduct({ ...product, rating }));
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={(product: IProduct) => handleSubmit(product)}
      validationSchema={productSchema}
    >
      {({ handleChange, handleSubmit, values, errors }) => {
        const { title, description, image, price } = values;
        const {
          title: errTitle,
          description: errDescription,
          category: errCategory,
          image: errImage,
          price: errPrice,
        } = errors;
        const isDisabled =
          !!errTitle &&
          !!errDescription &&
          !!errCategory &&
          !!errImage &&
          !!errPrice;

        return (
          <SafeAreaView style={styles.area}>
            <View>
              <TextInput
                style={errTitle ? styles.inputErr : styles.input}
                placeholderTextColor={whiteColor}
                placeholder="Title"
                value={title}
                inputMode="text"
                onChangeText={handleChange("title")}
              />
              <TextInput
                style={errDescription ? styles.inputErr : styles.input}
                placeholderTextColor={whiteColor}
                placeholder="Description"
                value={description}
                inputMode="text"
                onChangeText={handleChange("description")}
              />
              <SelectDropdown
                data={Object.values(ECategories)}
                defaultValue={ECategories.Electronics}
                onSelect={handleChange("category")}
                defaultButtonText={"Category"}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                buttonStyle={{ ...styles.input, ...styles.dropdownBtnStyle }}
                buttonTextStyle={styles.dropdownBtnTxtStyle}
                dropdownStyle={styles.dropdownDropdownStyle}
                rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.dropdownRowTxtStyle}
              />
              <TextInput
                style={errImage ? styles.inputErr : styles.input}
                placeholderTextColor={whiteColor}
                value={image}
                placeholder="Image Url"
                keyboardType="url"
                inputMode="url"
                onChangeText={handleChange("image")}
              />
              <TextInput
                style={errPrice ? styles.inputErr : styles.input}
                placeholderTextColor={whiteColor}
                value={`${price}`}
                placeholder="Price"
                keyboardType="numeric"
                inputMode="numeric"
                onChangeText={handleChange("price")}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              disabled={isDisabled ? false : true}
              onPress={() => handleSubmit()}
            >
              <Text style={{ color: whiteColor }}>CREATE PRODUCT</Text>
            </TouchableOpacity>
          </SafeAreaView>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: "space-between",
  },
  input: {
    width: "95%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: whiteColor,
    borderColor: whiteColor,
  },
  inputErr: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: errColor,
    borderColor: errColor,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    maxHeight: 60,
    backgroundColor: goldColor,
  },

  dropdownBtnStyle: {
    backgroundColor: "transparent",
    padding: 0,
    borderWidth: 1,
    borderColor: whiteColor,
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
