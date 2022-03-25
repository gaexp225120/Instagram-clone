import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostLoader from "./FormikPostLoader";

const AddNewPost = () => {
  return (
    <View style={newPostStyle.container}>
      <Header />
      <FormikPostLoader />
    </View>
  );
};

const Header = () => {
  return (
    <View style={newPostStyle.headerContainer}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/Icons/backArrow.png")}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1.5 }}>
        <Text style={newPostStyle.headerText}>New Post</Text>
      </View>
      <Text></Text>
    </View>
  );
};

const newPostStyle = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 25,
  },
});

export default AddNewPost;
