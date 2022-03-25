import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={activeTab == icon.name ? icon.active : icon.inactive}
        style={[
          IconStyle.iconStyle,
          icon.name == "profile" ? IconStyle.profilePic : null,
          activeTab == "profile" && icon.name == "profile"
            ? IconStyle.profilePic(activeTab)
            : null,
        ]}
      ></Image>
    </TouchableOpacity>
  );

  return (
    <View>
      <Divider orientation="vertical" />
      <View style={IconStyle.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

// return (
//   <View style={{ flexDirection: "row" }}>
//     {icons.map((story, index) => (
//       <View key={index}>
//         <Text style={{ color: "white" }}>{story.name}</Text>
//         <Image source={story.inactive} />
//       </View>
//     ))}
//   </View>
// );

const IconStyle = StyleSheet.create({
  wrapper: {},
  iconStyle: {
    width: 30,
    height: 30,
  },
  container: {
    height: 40,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profilePic: (activeTab = " ") => ({
    borderRadius: 50,
    borderColor: "#FFF",
    borderWidth: activeTab == "profile" ? 2 : 0,
  }),
});

export default BottomTabs;
