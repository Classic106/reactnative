import * as Yup from "yup";

const productSchema = Yup.object().shape({
  title: Yup.string().trim().required("please! title")
  .min(5, "pretty sure this will be hacked")
  .max(50, "pretty sure this will be hacked"),
  description: Yup.string()
    .trim()
    .required("please! description")
    .min(5, "pretty sure this will be hacked")
    .max(50, "pretty sure this will be hacked"),
  category: Yup.string()
    .trim()
    .required("please! category")
    .min(2, "pretty sure this will be hacked"),
  image: Yup.string()
    .trim()
    .required("please! image")
    .url()
    .min(2, "pretty sure this will be hacked"),
  price: Yup.number()
    .required("please! price")
    .min(0, "pretty sure this will be hacked"),
});

export { productSchema };
