import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={Headerstyles.container}>
      <TouchableOpacity>
        <Image
          style={Headerstyles.logo}
          source={require("../../assets/Icons/logo.png")}
        />
      </TouchableOpacity>
      <View style={Headerstyles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/Icons/love.png")}
            style={Headerstyles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Headerstyles.unreadBadge}>
            <Text style={Headerstyles.unreadBadgeText}>11</Text>
          </View>
          <Image
            source={require("../../assets/Icons/fb-messenger.png")}
            style={Headerstyles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Headerstyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
