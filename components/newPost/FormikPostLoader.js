import { View, Text } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const uploadPostSchema = Yup.object().shape({
  imgurl: Yup.string().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption is too long"),
});

const FormikPostLoader = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>231312</Text>
    </View>
  );
};

export default FormikPostLoader;
