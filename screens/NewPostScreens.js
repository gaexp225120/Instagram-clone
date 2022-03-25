import { View, SafeAreaView } from "react-native";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreens = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <AddNewPost />
    </SafeAreaView>
  );
};

export default NewPostScreens;
