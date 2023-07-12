import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";

import { IProduct } from "@/types";
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
    category: "",
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
        const { title, description, category, image, price } = values;
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
        const { area, input, inputErr, button } = styles;

        return (
          <SafeAreaView style={area}>
            <View>
              <TextInput
                style={errTitle ? inputErr : input}
                placeholderTextColor={whiteColor}
                placeholder="Title"
                value={title}
                inputMode="text"
                onChangeText={handleChange("title")}
              />
              <TextInput
                style={errDescription ? inputErr : input}
                placeholderTextColor={whiteColor}
                placeholder="Description"
                value={description}
                inputMode="text"
                onChangeText={handleChange("description")}
              />
              <TextInput
                style={errCategory ? inputErr : input}
                placeholderTextColor={whiteColor}
                placeholder="Category"
                value={category}
                inputMode="text"
                onChangeText={handleChange("category")}
              />
              <TextInput
                style={errImage ? inputErr : input}
                placeholderTextColor={whiteColor}
                value={image}
                placeholder="Image Url"
                keyboardType="url"
                inputMode="url"
                onChangeText={handleChange("image")}
              />
              <TextInput
                style={errPrice ? inputErr : input}
                placeholderTextColor={whiteColor}
                value={`${price}`}
                placeholder="Price"
                keyboardType="numeric"
                inputMode="numeric"
                onChangeText={handleChange("price")}
              />
            </View>
            <TouchableOpacity
              style={button}
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
});
