import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View
            key={index}
            style={{ alignItems: "center", marginHorizontal: 3 }}
          >
            <Image source={story.image} style={StoryStyle.story} />
            <Text style={{ color: "white" }}>
              {story.user.length > 8
                ? story.user.slice(0, 8).toLocaleLowerCase() + "..."
                : story.user.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// #ff0066
// #ff006a
// #ff8c00
// #ffcc00
const StoryStyle = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 7,
    borderWidth: 3,
    borderColor: "#ff0066",
  },
});
export default Stories;
